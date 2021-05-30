from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render 
from datetime import datetime, timezone, timedelta
from django.utils import timezone as utils_timezone
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate, login, logout 
from django.contrib.sessions.backends.db import SessionStore 
from django.shortcuts import redirect
from .forms import AddCategoryForm, AddThreadForm, SignUpForm, AddPostForm, ProfilePicForm, UpdateProfileForm, ChangePasswordForm, PostSignatureForm, ContactUsForm
from .models import Category, Thread, Post, ForumUser, PostVote, PostSignature, Tag, UserFollowing, Like
from django.core.files.uploadedfile import SimpleUploadedFile
from django.core.exceptions import ObjectDoesNotExist
import logging 
import humanize
from itertools import chain
from django.db.models import Q, Sum, Count
from django.core import serializers
from .serializers import PostSerializer, ForumUserSerializer
from django.core.paginator import Paginator
from .class_views import ViewPaginatorMixin
from django.views.generic import ListView 
from django.core.mail import send_mail
from django.conf import settings
import environ

env = environ.Env()
logger = logging.getLogger(__name__)
def signup_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            email = form.cleaned_data["email"]
            password1 = form.cleaned_data["password1"]
            password2 = form.cleaned_data["password2"]
            user = ForumUser.objects.create_user(username, email, password1)
            user.save()
            # redirect to /login
            request.session['status_msg'] = "You have registered successfully! Please login with your new credentials..."
            return redirect("/login")
    else:
        form = SignUpForm()
    # return render(request, "signup_view.html", {'signupForm': form})
    return render(request, "page-signup.html", {"signup_form": form})

def login_view(request):
    s = SessionStore()
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            request.session["username"] = username
            request.session["logged_in"] = True
            categories = Category.objects.all().values()
            return redirect("/")
        else:
            errors = []
            if username == "":
                errors.append("Username: This field is required")
            if password == "":
                errors.append("Password: This field is required")
            errors.append("Invalid Username/Password combination")
            return render(request, "page-login.html", {"errors": errors})
    else:
        request.session["logged_in"] = False 
        return render(request, "page-login.html", {})

def logout_view(request):
    logout(request)
    categories = Category.objects.all().values()
    return redirect("/test")

def profile_view(request):
    try:
        forum_user = ForumUser.objects.get(id=request.user.id)
        user = User.objects.get(id=request.user.id)
    except ObjectDoesNotExist as e:
        logger.error(e)
        request.session["status_msg"] = "Password reset successfully! Please login using your new password..."
        return redirect("/login")
    profile_pic_form = ProfilePicForm(request.POST, request.FILES)
    post_signature_form = PostSignatureForm(request.POST)
    if request.method == "POST":
        if "update_profile" in request.POST:
            update_profile_form = UpdateProfileForm(data=request.POST, instance=forum_user)
            if update_profile_form.is_valid():
                update_profile_form.save()
                return redirect("/profile") 
            return render(request, "profile_view.html", {"user": forum_user, "profile_pic_form": profile_pic_form, "update_profile_form": update_profile_form, "change_password_form": ChangePasswordForm(user=user), "post_signature_form": post_signature_form})
        elif "upload_profile_pic" in request.POST:
            if profile_pic_form.is_valid():
                avatar = profile_pic_form.cleaned_data.get('profile_pic')
                forum_user.profile_pic = avatar 
                forum_user.save()
            return render(request, "profile_view.html", {"user": forum_user, "profile_pic_form": profile_pic_form, "update_profile_form": UpdateProfileForm(instance=forum_user), "change_password_form": ChangePasswordForm(user=user), "post_signature_form": post_signature_form})
        elif "update_password" in request.POST:
            change_password_form = ChangePasswordForm(data=request.POST, user=user)
            if change_password_form.is_valid():
                change_password_form.save() 
                return redirect("/profile")
            return render(request, "profile_view.html", {"user": forum_user, "profile_pic_form": profile_pic_form, "update_profile_form": UpdateProfileForm(instance=forum_user), "change_password_form": change_password_form, "post_signature_form": post_signature_form})
        elif "upload_post_signature" in request.POST:
            if post_signature_form.is_valid():
                user = User.objects.get(id=request.user.id)
                post_signature = PostSignature()
                post_signature.signature_for_id = user 
                post_signature.message = post_signature_form.cleaned_data["content"]
                post_signature.save()
            return render(request, "profile_view.html", {"user": forum_user, "profile_pic_form": profile_pic_form, "update_profile_form": UpdateProfileForm(instance=forum_user), "change_password_form": ChangePasswordForm(user=user), "post_signature_form": post_signature_form})

    else:
        return render(request, "profile_view.html", {"user": forum_user, "profile_pic_form": profile_pic_form, "update_profile_form": UpdateProfileForm(instance=forum_user), "change_password_form": ChangePasswordForm(user=user), "post_signature_form": post_signature_form})

def show_profile_view(request):
    # try:
    forum_user = ForumUser.objects.get(id=request.user.id)
    user = User.objects.get(id=request.user.id)
    forum_user.profile_pic_path = str(forum_user.profile_pic)
    threads = Thread.objects.all()

    comment_posts = None 
    original_post = None 
    all_posted_posts = []
    all_activity = Post.objects.none()
    for thread in threads:
        try:
            all_posted_posts = Post.objects.filter(thread_id=thread.thread_id, posted_by_id=user).order_by('created_on')
            all_activity |= all_posted_posts
        except ObjectDoesNotExist as e:
            logger.error(e)
        except TypeError as e:
            logger.error(e)
        except IndexError as e:
            logger.error("thread: " + str(thread.thread_id) + " is out of range")
            logger.error(e)
        except AttributeError as e:
            logger.error("thread: " + str(thread.thread_id))
            logger.error(e)
    all_activity = all_activity.order_by('-created_on')
    all_activity_paginator = Paginator(all_activity, 10)

    all_activity_page_number = request.GET.get("page")
    activity_page_obj = all_activity_paginator.get_page(all_activity_page_number)
    profile_pic_form = ProfilePicForm(request.POST, request.FILES)

    reply_posts = Post.objects.filter(posted_by_id=user.id, first_reply_to_id__isnull=False)
    reply_posts_data = PostSerializer(reply_posts, many=True)
    reply_posts_paginator = Paginator(reply_posts_data.data, 10)
    reply_posts_page_number = request.GET.get("replies_page")
    reply_posts_obj = reply_posts_paginator.get_page(reply_posts_page_number)

    return render(request, "show_profile.html", {"user": forum_user, "all_activity": all_activity, "activity_page_obj": activity_page_obj, "reply_posts_obj": reply_posts_obj})

def show_profile_following_view(request):
    user = ForumUser.objects.get(id=request.user.id)
    if request.method == "POST":
        following_user = ForumUser.objects.get(id=request.POST.get("follow_id", ""))
        user_following = UserFollowing.objects.create(user_id=user, following_user_id=following_user)
        user_following.save()
        return JsonResponse({"following_status": "success"})
    else:
        all_users = ForumUser.objects.all().exclude(is_superuser=True)
        # need to exclude current following user=any record found in UserFollowing 
        following_users = UserFollowing.objects.filter(user_id=user.id)
        all_following_list = []
        for following in following_users:
            # all_following_users |= following.following_user_id 
            all_following_list.append(following.following_user_id.id)
        all_following_users = ForumUser.objects.filter(id__in=all_following_list)
        all_following_users_data = ForumUserSerializer(all_following_users, many=True)
        all_users = all_users.exclude(id__in=all_following_list)
        all_users_data = ForumUserSerializer(all_users, many=True)
        return JsonResponse({"all_users_data": all_users_data.data, "all_following_users_data": all_following_users_data.data, "current_user_id": request.user.id}, safe=False)

def show_profile_unfollow_view(request):
    user = ForumUser.objects.get(id=request.user.id)
    if request.method == "POST":
        unfollow_user = ForumUser.objects.get(id=request.POST.get("unfollow_id", ""))
        user_following = UserFollowing.objects.get(user_id=request.user.id, following_user_id=unfollow_user.id)
        user_following.delete() 
        return JsonResponse({"unfollow_status": "success"})
    else:
        return JsonResponse({"unfollow_status": "Invalid Request Type"})

def show_profile_followers_view(request):
    user = ForumUser.objects.get(id=request.user.id)
    followers = UserFollowing.objects.filter(following_user_id=user.id)
    followers_ids = []
    for follower in followers:
        followers_ids.append(follower.user_id.id)
    all_followers = ForumUser.objects.filter(id__in=followers_ids)
    all_followers_data = ForumUserSerializer(all_followers, many=True)
    return JsonResponse({"all_followers_data": all_followers_data.data}, safe=False)

def update_profile_view(request):
    forum_user = ForumUser.objects.get(id=request.user.id)
    if request.method == "POST":
        update_profile_form = UpdateProfileForm(request.POST, request.FILES, instance=forum_user)
        update_profile_form.fields['profile_pic'].required = False
        update_profile_form.fields['location'].required = False 
        update_profile_form.fields['about'].required = False 
        if update_profile_form.is_valid():
            if request.FILES:
                forum_user.profile_pic = request.FILES["profile_pic"]
                forum_user.save()
            update_profile_form.save() 
            return redirect("/profile/update_profile")
        else: 
            return render(request, "update_profile.html", {"user": forum_user, "update_profile_form": update_profile_form})
    else: 
        update_profile_form = UpdateProfileForm()
        if forum_user.profile_pic:
            forum_user.profile_pic_path = str(forum_user.profile_pic)
        return render(request, "update_profile.html", {"user": forum_user, "update_profile_form": update_profile_form})

def change_password_view(request):
    return render(request, "change_password.html", {})

def forum_list_view(request):
    categories = Category.objects.all().values()
    for c in categories:
        threadCount = Thread.objects.filter(category_id=c['category_id']).count()
        threads = Thread.objects.filter(category_id=c['category_id'])
        postCounter = 0
        for i in threads:
            postCount = Post.objects.filter(thread_id=i.thread_id).count()
            postCounter += postCount
        c["threadNum"] = threadCount
        c["postNum"] = postCounter 
    return render(request, 'page-categories.html', {'categories': categories})

def index_view(request):
    categories = Category.objects.all().values()
    forum_user = None 
    try: 
        if request.user.is_authenticated:
            forum_user = ForumUser.objects.get(id=request.user.id)
            forum_user.profile_pic_path = str(forum_user.profile_pic)
        for c in categories: 
            threadCount = Thread.objects.filter(category_id=c['category_id']).count()
            threads = Thread.objects.filter(category_id=c['category_id'])
            postCounter = 0
            for i in threads:
                postCount = Post.objects.filter(thread_id=i.thread_id).count()
                postCounter += postCount
            c["threadNum"] = threadCount
            c["postNum"] = postCounter 
            tags = Category.objects.get(category_id=c['category_id']).tags.all()
            c["tags"] = tags  
        return render(request, 'page-categories.html', {'categories': categories, "forum_user": forum_user})
    except KeyError as e:
        logger.error(e)
        return render(request, "error404.html", {})

def add_category_view(request):
    forum_user = None 
    if request.user.is_authenticated:
        forum_user = ForumUser.objects.get(id=request.user.id)
        forum_user.profile_pic_path = str(forum_user.profile_pic)
    if request.method == "POST":
        form = AddCategoryForm(request.POST)
        if form.is_valid():
            category_name = form.cleaned_data['category_name']
            category_description = form.cleaned_data['category_description']
            category = Category(name=category_name, description=category_description)
            category.save()
            tags_input = form.cleaned_data['category_tags']
            tags = tags_input.split(',')
            for tag in tags:
                new_tag = Tag.objects.create(name=tag)
                new_tag.save
                category.tags.add(new_tag)
            return HttpResponseRedirect('/')
        else:
            return render(request, 'page-create-category.html', {"forum_user": forum_user})
    else:
        return render(request, 'page-create-category.html', {"forum_user": forum_user})

def category_detail_view(request, category_id):
    category = Category.objects.get(category_id=category_id)
    threads = Thread.objects.filter(category_id=category_id).values()
    forum_user = None 
    tags = category.tags.all()  
    if request.user.is_authenticated:
        forum_user = ForumUser.objects.get(id=request.user.id)
        forum_user.profile_pic_path = str(forum_user.profile_pic)
    try:
        for thread in threads:
            posts = Post.objects.filter(thread_id=thread["thread_id"]).order_by("created_on")
            posted_user_id = posts.first().posted_by_id.id
            username = User.objects.get(id=posted_user_id).get_username()
            thread["started_by"] = username 
            # gets profile pic of original poster in each thread
            posted_by_user = ForumUser.objects.get(id=posted_user_id)
            start_user_pic = posted_by_user.profile_pic.url
            thread["start_user_pic"] = str(start_user_pic)
            thread["tags"] = Thread.objects.get(thread_id=thread["thread_id"]).tags.all()
            timedelta = (datetime.now(timezone.utc) - thread["latest_post_on"])
            # converts time elapsed since latest post to human readable format
            timedelta = humanize.naturaldelta(timedelta)
            thread["latest_activity"] = timedelta
    except AttributeError as e:
        logger.error("ERROR: " + str(e))
    return render(request, "page-categories-single.html", {"category": category, "threads": threads, "forum_user": forum_user, "tags": tags})

def add_thread_view(request, category_id):
    category = Category.objects.get(category_id=category_id)
    if request.method == "POST":
        add_thread_form = AddThreadForm(request.POST)
        if add_thread_form.is_valid():
            thread_subject = add_thread_form.cleaned_data['subject']
            thread_message = add_thread_form.cleaned_data['message']
            thread_tags = add_thread_form.cleaned_data['tags']
            user = User.objects.get(id=request.user.id)
            new_thread = Thread(subject=thread_subject, category_id=category, views=0, replies=0, started_by_id=user)
            new_thread.save()
            posted_by = User.objects.get(id=request.user.id)
            new_post = Post(message=thread_message, posted_by_id=posted_by, thread_id=new_thread)
            new_post.original_post = True 
            new_post.save()
            tags = thread_tags.split(',')
            add_tag = None 
            for tag in tags:
                if Tag.objects.filter(name=tag).exists():
                    add_tag = Tag.objects.get(name=tag)
                else:
                    add_tag = Tag.objects.create(name=tag)
                    add_tag.save
                new_thread.tags.add(add_tag)
                new_post.tags.add(add_tag)
        redirect_url = "/category/" + str(category_id)
        return redirect(redirect_url)
    else:
        add_thread_form = AddThreadForm()
        return render(request, "page-create-thread.html", {"category": category, "add_thread_form": add_thread_form })

def thread_detail_view(request, category_id, thread_id):
    posts = Post.objects.filter(thread_id=thread_id).order_by("created_on")
    category = Category.objects.get(category_id=category_id)
    category_name = category.name
    forum_user = None 
    thread = Thread.objects.get(thread_id=thread_id)
    thread_name = thread.subject
    thread.views = thread.views + 1
    thread.save()
    if request.user.is_authenticated:
        forum_user = ForumUser.objects.get(id=request.user.id)
        forum_user.profile_pic_path = str(forum_user.profile_pic)
    post_votes = []
    for post in posts:
        if post.first_reply_to_id != None and post.first_reply_to_id.post_id > 0:
            first_reply_post = post.set_first_reply_message()
            post.set_second_reply_message(first_reply_post)
        post_votes = PostVote.objects.filter(post_id=post.post_id, user_id=request.user.id)
        if  len(post_votes) > 0:
            # vote found, user is not allowed to vote on this post 
            latest_vote = post_votes.latest('vote_id')
            post.vote_value = latest_vote.vote_value
            post_votes = post_votes.exclude(vote_id=latest_vote.vote_id)
            try:
                second_latest_vote = post_votes.latest('vote_id')
                if second_latest_vote is not None:
                    if ((latest_vote.vote_value + second_latest_vote.vote_value) == 0) and post.voted_previous == False:
                        post.vote_value = ""
            except ObjectDoesNotExist as e:
                logger.error(e)
        else:
            # vote not found, user is allowed to vote on this post 
            post.vote_value = "" 
        # get post signature is user uploaded it 
        try:
            post_signature = PostSignature.objects.filter(signature_for_id=post.posted_by_id.id).latest('created_on')
            post.signature = post_signature 
        except ObjectDoesNotExist: 
            post.signature = None 
    add_post_form = AddPostForm()

    post_paginator = Paginator(posts, 4)
    post_page_number = request.GET.get("page")
    # post_paginator_page_number = post_paginator.get_page(post_page_number)
    post_paginator_obj = post_paginator.get_page(post_page_number)

    return render(request, "page-single-thread.html", {"posts":  posts, "post_paginator_obj": post_paginator_obj, "category": category, "thread": thread, "forum_user": forum_user, "add_post_form": add_post_form})

def add_post_view(request, category_id, thread_id):
    category_name = Category.objects.filter(category_id=category_id).values()[0]["name"]
    thread = Thread.objects.get(thread_id=thread_id)
    thread_subject = thread.subject
    user = User.objects.get(id=request.user.id)
    if request.method == "POST":
        form = AddPostForm(request.POST)
        if form.is_valid():
            post_message = form.cleaned_data["message"]
            new_post = Post(message=post_message, posted_by_id=user, thread_id=thread, created_on=datetime.now())
            new_post.save()
        redirect_url = "/category/" + str(category_id) + "/thread/" + str(thread_id)
        return redirect(redirect_url)
    else:
        form = AddPostForm()
        return render(request, "add_post_view.html", {"category_name": category_name, "thread_name": thread_subject, "form": form })

def add_reply_post_view(request, category_id, thread_id, post_id):
    category= Category.objects.get(category_id=category_id)
    thread = Thread.objects.get(thread_id=thread_id)
    thread_subject = thread.subject
    user = User.objects.get(id=request.user.id)
    original_post = Post.objects.get(post_id=post_id)
    add_reply_form = AddPostForm(request.POST)
    if request.method == "POST":
        # form = AddPostForm(request.POST)
        if add_reply_form.is_valid():
            thread = Thread.objects.get(thread_id=thread_id)
            thread.replies = thread.replies + 1
            thread.save()
            post_message = add_reply_form.cleaned_data["message"]
            new_post = Post(message=post_message, posted_by_id=user, thread_id=thread, created_on=datetime.now(), first_reply_to_id=original_post, second_reply_to_id=original_post.first_reply_to_id)
            new_post.save()
        redirect_url = "/category/" + str(category_id) + "/thread/" + str(thread_id)
        return redirect(redirect_url)
    else:
        return render(request, "page-single-thread-reply.html", {"category": category, "thread": thread, "original_post": original_post, "add_reply_form": add_reply_form})

def edit_post_view(request, category_id, thread_id, post_id):
    category = Category.objects.get(category_id=category_id)
    thread = Thread.objects.get(thread_id=thread_id)
    post = Post.objects.get(post_id=post_id)
    if request.method == "POST":
        edit_form = AddPostForm(request.POST)
        if edit_form.is_valid():
            post = Post.objects.get(post_id=post_id)
            post.message = edit_form.cleaned_data["message"]
            post.editted_on = datetime.now()
            post.save()
        redirect_url = "/category/" + str(category_id) + "/thread/" + str(thread_id)
        return redirect(redirect_url)
    else:
        original_message = Post.objects.get(post_id=post_id).message 
        edit_form = AddPostForm({"message": original_message})
        return render(request, "page-single-thread-edit.html", {"edit_post_form": edit_form, "category": category, "thread": thread, "post": post})

def trending_view(request):
    forum_user = ForumUser.objects.get(id=request.user.id)
    data = {}
    data["all_time_categories"] = len(Category.objects.all())
    data["all_time_posts"] = len(Post.objects.all())
    data["all_time_threads"] = len(Thread.objects.all())
    data["all_time_users"] = len(ForumUser.objects.all())
    data["all_time_active_users"] = len(ForumUser.objects.filter(is_active=True))
    data["all_time_likes"] =len(Like.objects.all())

    data["month_1_categories"] = len(Category.objects.filter(created_on__gte=(utils_timezone.now().date() - timedelta(days=30))))
    data["month_1_threads"] = len(Thread.objects.filter(created_on__gte=(utils_timezone.now().date() - timedelta(days=30))))
    data["month_1_posts"] = len(Post.objects.filter(created_on__gte=(utils_timezone.now().date() - timedelta(days=30))))
    data["month_1_users"] = len(ForumUser.objects.filter(member_since__gte=(utils_timezone.now().date() - timedelta(days=30))))
    data["month_1_active_users"] = len(ForumUser.objects.filter(is_active=True, member_since__gte=(utils_timezone.now().date() - timedelta(days=30))))
    data["month_1_likes"] = len(Like.objects.filter(created_on__gte=(utils_timezone.now().date() - timedelta(days=30))))

    data["day_7_categories"] = len(Category.objects.filter(created_on__gte=(utils_timezone.now().date() - timedelta(days=7))))
    data["day_7_threads"] = len(Thread.objects.filter(created_on__gte=(utils_timezone.now().date() - timedelta(days=7))))
    data["day_7_posts"] = len(Post.objects.filter(created_on__gte=(utils_timezone.now().date() - timedelta(days=7))))
    data["day_7_users"] = len(ForumUser.objects.filter(member_since__gte=(utils_timezone.now().date() - timedelta(days=7))))
    data["day_7_active_users"] = len(ForumUser.objects.filter(is_active=True, member_since__gte=(utils_timezone.now().date() - timedelta(days=7))))
    data["day_7_likes"] = len(Like.objects.filter(created_on__gte=(utils_timezone.now().date() - timedelta(days=7))))

    data["most_viewed_threads_top_5"] = Thread.objects.annotate(Count('views')).order_by('views__count')[:5]
    data["most_replied_threads_top_5"] = Thread.objects.annotate(Count('replies')).order_by('replies__count')[:5]
    data["new_posts_top_5"] = Post.objects.all().order_by('created_on')[:5]


    return render(request, "page-trending.html", { "user": forum_user, "data": data })

def about_view(request):
    contact_us_form = ContactUsForm(request.POST or None)
    if request.user.is_authenticated:
        forum_user = ForumUser.objects.get(id=request.user.id)
        if request.method == "POST":
            if contact_us_form.is_valid():
                # send message through SMTP server 
                name = contact_us_form.cleaned_data["name"]
                from_email = contact_us_form.cleaned_data["email"]
                subject = contact_us_form.cleaned_data["subject"]
                message = contact_us_form.cleaned_data["message"]
                send_mail(subject, message, from_email, [env('RECIPIENT_EMAIL')])
                return render(request, "page-about.html", {"forum_user": forum_user, "contact_us_form": contact_us_form, "contact_us_form_status": "Thanks for contacting us! We will get back to you shortly..." })   
        return render(request, "page-about.html", {"forum_user": forum_user, "contact_us_form": contact_us_form })
    return render(request, "page-about.html", { "contact_us_form": contact_us_form })

def contact_us_view(request):
    contact_us_form = ContactUsForm(request.POST)
    if request.method == "POST":
        if contact_us_form.is_valid():
            # send message through SMTP server
            return JsonResponse({"status": "success"})

def vote(request):
    if request.method == "POST":
        user = ForumUser.objects.get(id=request.user.id)
        # second param in request.GET.get is the default value if required param is not found
        category_id = request.POST.get('category_id', '')
        thread_id = request.POST.get('thread_id', '')
        vote_value = int(request.POST.get('vote_value', ''))
        post = Post.objects.get(post_id=request.POST.get('post_id', ''))
        undo_vote = request.POST.get("undo_vote", "")
        response_data = {}
        post.rep_count += vote_value
        if undo_vote == "true":
            post.vote_value = ""
            post.voted_previous = False 
        else:
            post.vote_value = str(vote_value) 
            post.voted_previous = True
        new_vote = PostVote.objects.create(post_id=post, user_id=user, vote_value=vote_value)
        posted_by_user = ForumUser.objects.get(id=post.posted_by_id.id)
        if posted_by_user.id != user.id:
            # current user is not the original poster of current post so increment/decrement their rep_points by 1 
            posted_by_user.rep_points += vote_value 
        post.save() 
        new_vote.save()
        posted_by_user.save()
        response_data['post_rep_count'] = post.rep_count
        return JsonResponse(response_data)
    else:
        return redirect("/category/" + category_id + "/thread/" + thread_id)

def test_view(request):
    request.session["login_status"] = "Thanks for registering! Please login using your new credentials..."
    return render(request, "index.html", {})

def test_login(request):
    return render(request, "page-login.html", {})
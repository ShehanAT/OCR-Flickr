# Generated by Django 3.1.7 on 2021-04-16 19:48

import ckeditor.fields
import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0034_auto_20210414_0936'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.AlterField(
            model_name='forumuser',
            name='member_since',
            field=models.DateField(default=datetime.datetime(2021, 4, 16, 19, 48, 58, 453790, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='post',
            name='created_on',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 16, 15, 48, 58, 454788)),
        ),
        migrations.AlterField(
            model_name='post',
            name='editted_on',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 16, 15, 48, 58, 454788)),
        ),
        migrations.AlterField(
            model_name='post',
            name='message',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='thread',
            name='created_on',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 16, 15, 48, 58, 454788)),
        ),
    ]

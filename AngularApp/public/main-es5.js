(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/@angular/core/fesm5 lazy recursive":
/*!*****************************************************************!*\
  !*** ../node_modules/@angular/core/fesm5 lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<main role=\"main\" class=\"container\">\r\n    <div id=\"main\">\r\n    <app-header></app-header>\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n </main>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"changePasswordForm\" *ngIf=\"changePasswordForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"\">\n    <div class=\"card-header bg-primary text-white\">\n      <h3>Update User</h3>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-group row d-flex justify-content-center align-items-center\">\n          <label for=\"password\" class=\"col-form-label col-sm-2 text-right\">Current Password:</label>\n          <div class=\"col-sm-5\">\n              <input type=\"password\" class=\"form-control\" name=\"currentPassword\" formControlName=\"currentPassword\"/>\n              <!-- <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\n                {{ formErrors.username }}\n             \n              </div> -->\n              <!-- <div class=\"alert alert-danger\" *ngIf=\"username.invalid && (username.dirty || username.touched) && username.errors?.uniqueUsernameUpdate\">\n                Username is already taken! Please pick a different one...\n              </div> -->\n   \n          </div>\n      </div>\n      <div class=\"form-group row d-flex justify-content-center align-items-center\">\n          <label for=\"email\" class=\"col-form-label col-sm-2 text-right\">New Password:</label>\n          <div class=\"col-sm-5\">\n              <input type=\"password\" class=\"form-control\" name=\"newPassword\" formControlName=\"newPassword\" />\n              <div class=\"text-danger\" *ngIf=\"newPassword?.invalid && (newPassword.dirty || newPassword.touched)\">\n                <div *ngIf=\"newPassword?.errors['required']\">Password is required</div>\n              </div>\n          </div>\n      </div>\n      <div class=\"form-group row d-flex justify-content-center align-items-center\">\n        <label for=\"fullName\" class=\"col-form-label col-sm-2 text-right\">Confirm Password:</label>\n        <div class=\"col-sm-5\">\n            <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" formControlName=\"confirmPassword\"  compare=\"newPassword\"/>\n            <div class=\"text-danger\" *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\">\n              <div *ngIf=\"confirmPassword.errors['required']\">Confirm password is required</div>\n              <div *ngIf=\"confirmPassword.errors['compare']\">Passwords do not match</div>\n            </div>\n            \n            <!-- <div class=\"alert alert-danger\" *ngIf=\"changePasswordForm.controls.confirmPassword?.invalid && (confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors?.compare\">\n              Passwords do not match!\n            </div> -->\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer\">\n      <button [disabled]=\"!changePasswordForm.valid\" class=\"btn btn-primary mr-2\" type=\"submit\">Update</button>\n      <button [disabled]=\"isLoading\" class=\"btn btn-danger mr-2\" id=\"update-user-modal-close\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <p  class=\"text-xs-center\">© Copyright 2019 Shehan Atuk</p>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top\">\r\n  <a class=\"navbar-brand\" href=\"#\">Capstone Project</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"auth.isLoggedIn()\">\r\n        <a class=\"nav-link mr-sm-2\" routerLink=\"/result\">Use OCR</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!auth.isLoggedIn()\">\r\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!auth.isLoggedIn()\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"auth.isLoggedIn()\">\r\n        <a class=\"nav-link\" routerLink=\"/profile\">{{ auth.getUserDetails()?.username }}'s Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"auth.isLoggedIn()\">\r\n        <a class=\"nav-link\" (click)=\"auth.logout()\">Logout</a>\r\n      </li>\r\n  \r\n\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n       <br>\r\n       <br>\r\n       <br>\r\n       <br>\r\n    \r\n       <br>\r\n    <header class=\"masthead\">\r\n    <div class=\"container\">\r\n      <div class=\"intro-text\">\r\n        <div class=\"intro-lead-in h1 text-center\">Welcome to my Capstone Project</div>\r\n     \r\n        <p class=\"lead text-muted text-center\">This app brings together everything I have learned from TeamTreehouse Full Stack Javascript Techdegree. Made using the MEAN stack(MongoDB, Express.js, AngularJS and Node.js) the app intergrates the Flickr API and the Microsoft Azure Cognitive Services Computer Vision API to deliver a great optical character recognition experience. To get started please register an account or login if you are an existing user. </p>\r\n    </div>\r\n    </div>\r\n  </header>\r\n  \r\n\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n\r\n<br>\r\n\r\n<br>\r\n<br>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n   <div class=\"col-md-6\">\r\n     <h1 class=\"form-signin-heading\">Sign In</h1> \r\n     <p class=\"lead\">Not a member yet? Please <a routerLink=\"/register\">register here</a></p>\r\n     <form (submit)=\"login()\"> \r\n       <div class=\"form-group row\">\r\n         <label for=\"username\">Username:</label>\r\n         <input type=\"username\" \r\n                class=\"form-control\" \r\n                name=\"username\" \r\n                placeholder=\"Enter username\"\r\n                [(ngModel)]=\"credentials.username\">\r\n       </div>\r\n        <div class=\"form-group row\">\r\n         <label for=\"password\">Password:</label>\r\n         <input type=\"password\" \r\n                class=\"form-control\" \r\n                name=\"password\" \r\n                placeholder=\"Enter password\"\r\n                [(ngModel)]=\"credentials.password\">\r\n        </div>\r\n         <div class=\"text-danger\">{{ errorMessage }}</div>\r\n        <button type=\"submit\" class=\"btn btn-default\">Sign In!</button>\r\n       </form>  \r\n   </div>  \r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n<br>\r\n<div class=\"container\">\r\n \r\n <div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n   <h1 class=\"form-signin-heading\">Your Profile</h1>\r\n   <div class=\"form-horizontal\">\r\n    \r\n    <div class=\"form-group\">\r\n      <p class=\" control-label text-left\"><strong>Username:  </strong><br>\r\n        {{ user?.username }}</p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <p class=\"control-label text-left\"><strong>Full Name:  </strong><br>\r\n        {{ user?.fullName }}</p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <p class=\" control-label\"><strong>Email:  </strong><br>\r\n        {{ user?.emailAddress }}</p>\r\n    </div>\r\n     <div class=\"form-group\">\r\n      <p class=\" control-label\"><strong>Age:  </strong><br>\r\n          {{ user?.age}}</p>\r\n     </div>\r\n    <button class=\"btn btn-lg btn-outline-primary\" (click)=\"updateUser(user)\">Update Profile</button>\r\n    <button class=\"btn btn-lg btn-outline-primary\" (click)=\"changePassword(user)\">Change Password</button>\r\n    <hr>\r\n    </div>\r\n   </div> \r\n </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container\">\r\n <div class=\"row\">  \r\n  <div class=\"col-md-6\">\r\n    <h1>Register</h1> \r\n    <p class=\"lead\">If you are already a member please <a routerLink=\"/login\">log in</a></p>\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    \r\n        <label for=\"username\" class=\"control-label\">Username:</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter username\" >\r\n       \r\n     \r\n        <div class=\"text-danger\" *ngIf=\"username.invalid && (username.dirty || username.touched)\">\r\n        Username already exists</div>\r\n      \r\n     \r\n      \r\n        \r\n        <br>\r\n        <label for=\"fullName\" class=\"control-label\">FullName:  </label>\r\n        <input type=\"text\" \r\n               class=\"form-control\" \r\n               name=\"fullName\" \r\n               placeholder=\"Enter fullName\"\r\n               required \r\n               formControlName=\"fullName\"\r\n               required>\r\n        <div class=\"text-danger\" *ngIf=\"fullName?.invalid && (fullName.dirty || fullName.touched)\">\r\n              <div *ngIf=\"fullName?.errors['required']\">Fullname is required</div>\r\n            \r\n        </div>\r\n        \r\n        <label for=\"emailAddress\" class=\"control-label\">Email Address: </label>\r\n        <input type=\"text\" \r\n               class=\"form-control\" \r\n               name=\"emailAddress\" \r\n               placeholder=\"Enter Email\"\r\n               required \r\n               formControlName=\"emailAddress\"\r\n               >\r\n        \r\n         <div class=\"text-danger\" *ngIf=\"email?.invalid && (email.dirty || email.touched)\">\r\n              <div *ngIf=\"email?.errors['required']\">Email is required</div>\r\n             <div *ngIf=\"email?.errors['email']\">Enter valid email</div>\r\n            \r\n        </div>\r\n        <label for=\"age\" class=\"control-label\">Age:</label>\r\n        <input type=\"number\" \r\n               class=\"form-control\" \r\n               name=\"age\" \r\n               placeholder=\"Enter Age\"\r\n               required\r\n               formControlName=\"age\">\r\n        <div class=\"text-danger\" *ngIf=\"age?.invalid && (age.dirty || age.touched)\">\r\n              <div *ngIf=\"age?.errors['required']\">Age is required</div>\r\n            \r\n        </div>\r\n        <label for=\"password\" class=\"control-label\">Password:</label>\r\n        <input type=\"password\"\r\n                class=\"form-control\"\r\n               placeholder=\"Enter new password\"\r\n                formControlName=\"password\">\r\n             <div class=\"text-danger\" *ngIf=\"password?.invalid && (password.dirty || password.touched)\">\r\n              <div *ngIf=\"password?.errors['required']\">Password is required</div>\r\n             </div>\r\n            <label for=\"confirmPassword\" class=\"control-label\">Confirm Password:</label>\r\n            <input type=\"password\"\r\n                   placeholder=\"confirm Password\"\r\n                   class=\"form-control\"\r\n                  \r\n                formControlName=\"confirmPassword\" compare=\"password\"> \r\n            <div class=\"text-danger\" *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\">\r\n                <div *ngIf=\"confirmPassword.errors['required']\">Confirm password is required</div>\r\n                <div *ngIf=\"confirmPassword.errors['compare']\">Passwords do not match</div>\r\n            </div>\r\n      \r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registerForm.valid\">Register!</button>\r\n      </form>   \r\n     </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/result/result.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/result/result.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-pics (sendDataEvent)=\"recieveMessage($event)\"></app-search-pics>\r\n<div class=\"container center-block\" > \r\n\r\n    <div class=\"ocrWords row\"  >\r\n        <h3>{{ wordList }}</h3>\r\n    </div>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\"></div>\r\n                <div class=\"col ml-5\" *ngIf=\"isLoading\"><mat-spinner class=\"ml-5\" layout=\"row\" layout-align=\"center center\"></mat-spinner></div>\r\n                <div class=\"col\"></div>\r\n                 <div class=\"col\"></div>\r\n            </div>\r\n        </div>\r\n   \r\n        <div class=\"imageResults\" #galleryRef>\r\n        {{ searchStatus }}\r\n         <div class=\"row ml-4 \" layout=\"column\" layout-align=\"center end\">\r\n       \r\n        <div class=\"col-md-4\" >\r\n           \r\n           <input type=\"image\" class=\"rounded float-center mt-1\" (click)=\"onClick($event)\" [hidden]=\"!image1show\" #galleryRef1 />\r\n            <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image2show\" #galleryRef2 />\r\n           <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image3show\" #galleryRef3 />\r\n             \r\n        </div>\r\n        <br>\r\n         <br>\r\n        <div class=\"col-md-4\" >\r\n          \r\n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image4show\" #galleryRef4 />\r\n          <input type=\"image\" class=\"rounded float-center mt-1\" (click)=\"onClick($event)\" [hidden]=\"!image5show\" #galleryRef5 />\r\n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image6show\" #galleryRef6 />\r\n     \r\n        </div>\r\n        <br>\r\n         <br>\r\n        <div class=\"col-md-4\">\r\n        \r\n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image7show\" #galleryRef7 />\r\n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image8show\" #galleryRef8 />\r\n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image9show\" #galleryRef9 />\r\n    \r\n        </div>\r\n        <br>\r\n       </div>\r\n      </div>\r\n    </div>\r\n    \r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search-pics/search-pics.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-pics/search-pics.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n<br>\r\n<div class=\"container search-container\">\r\n  <div class=\"row\">\r\n      <form (submit)=\"sendAndGetImages()\">\r\n        <h1><img src=\"assets/icons/1st_icon.png\" class=\"step-icon\"/>Search for images with text in them:</h1>       \r\n        <div class=\"form-group\">\r\n           <label for=\"tag\">Enter image tag:</label>\r\n             <input type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"tag\"\r\n             placeholder=\"Enter image tag\"\r\n             [(ngModel)]=\"potentialTags.tag\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\" >Submit</button>\r\n      </form> \r\n      <p ng-bind-html=\"demo.body|lineBreak\"></p>\r\n      <h1><img src=\"assets/icons/2nd_icon.png\" class=\"step-icon\"/>Then click on any image to show extracted text!</h1>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\"></div>\r\n                <div class=\"col ml-5\" *ngIf=\"isLoading\"><mat-spinner class=\"ml-5\" layout=\"row\" layout-align=\"center center\"></mat-spinner></div>\r\n                <div class=\"col\"></div>\r\n                 <div class=\"col\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/update-user/update-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/update-user/update-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"updateUserForm\" *ngIf=\"updateUserForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"\">\r\n    <div class=\"card-header bg-primary text-white\">\r\n      <h3>Update User</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group row d-flex justify-content-center align-items-center\">\r\n          <label for=\"username\" class=\"col-form-label col-sm-2 text-right\">Username:</label>\r\n          <div class=\"col-sm-5\">\r\n              <input type=\"text\" class=\"form-control\" name=\"username\" formControlName=\"username\"/>\r\n              <div *ngIf=\"formErrors.username\" class=\"alert alert-danger\">\r\n                {{ formErrors.username }}\r\n             \r\n              </div>\r\n              <div class=\"alert alert-danger\" *ngIf=\"username.invalid && (username.dirty || username.touched) && username.errors?.uniqueUsernameUpdate\">\r\n                Username is already taken! Please pick a different one...\r\n              </div>\r\n   \r\n          </div>\r\n      </div>\r\n      <div class=\"form-group row d-flex justify-content-center align-items-center\">\r\n          <label for=\"email\" class=\"col-form-label col-sm-2 text-right\">Email:</label>\r\n          <div class=\"col-sm-5\">\r\n              <input type=\"text\" class=\"form-control\" name=\"emailAddress\" formControlName=\"emailAddress\" />\r\n              <div *ngIf=\"formErrors.emailAddress\" class=\"alert alert-danger\">\r\n                {{ formErrors.emailAddress }}\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group row d-flex justify-content-center align-items-center\">\r\n        <label for=\"fullName\" class=\"col-form-label col-sm-2 text-right\">Fullname:</label>\r\n        <div class=\"col-sm-5\">\r\n            <input type=\"text\" class=\"form-control\" name=\"fullName\" formControlName=\"fullName\" />\r\n            <div *ngIf=\"formErrors.fullName\" class=\"alert alert-danger\">\r\n              {{ formErrors.fullName }}\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row d-flex justify-content-center align-items-center\">\r\n          <label for=\"age\" class=\"col-form-label col-sm-2 text-right\">Age:</label>\r\n          <div class=\"col-sm-5\">\r\n              <input type=\"number\" class=\"form-control\" name=\"age\" formControlName=\"age\" />\r\n              <div *ngIf=\"formErrors.age\" class=\"alert alert-danger\">\r\n                {{ formErrors.age }}\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <button [disabled]=\"!updateUserForm.valid\" class=\"btn btn-primary mr-2\" type=\"submit\">Update</button>\r\n      <button [disabled]=\"isLoading\" class=\"btn btn-danger mr-2\" id=\"update-user-modal-close\" type=\"button\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col s12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-content white-text\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col s5\">\r\n\t\t\t\t\t\t<form #userForm=\"ngForm\" \r\n\t\t\t\t\t\t(ngSubmit)=\"onSubmit(userForm)\">\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"_id\" #_id=\"ngModel\"\r\n\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser._id\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"username\" \r\n\t\t\t\t\t\t\t\t#name=\"ngModel\" \r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.username\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Enter a username\"\r\n\t\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t\t\t<label>Username: \r\n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"fullName\" \r\n\t\t\t\t\t\t\t\t#name=\"ngModel\" \r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.fullName\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Enter your fullName\"\r\n\t\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t\t\t<label>fullName: \r\n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"age\" \r\n\t\t\t\t\t\t\t\t#name=\"ngModel\" \r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.age\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Enter your age\"\r\n\t\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t\t\t<label>Age: \r\n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"emailAddress\" \r\n\t\t\t\t\t\t\t\t#name=\"ngModel\" \r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.emailAddress\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Enter your email\"\r\n\t\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t\t\t<label>Email: \r\n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"password\" \r\n\t\t\t\t\t\t\t\t#name=\"ngModel\" \r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.password\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Enter a strong password\"\r\n\t\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t\t\t<label>Password: \r\n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"input-field col s12\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-custom right\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button>\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-custom right\" type=\"submit\" [disabled]=\"!userForm.valid\">Submit</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/api-call.service.ts":
/*!*************************************!*\
  !*** ./src/app/api-call.service.ts ***!
  \*************************************/
/*! exports provided: ApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallService", function() { return ApiCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ApiCallService = /** @class */ (function () {
    function ApiCallService(http, router) {
        this.http = http;
        this.router = router;
    }
    ApiCallService.prototype.saveImages = function (images) {
        localStorage.setItem('mean-image', images);
        this.images = images;
    };
    ApiCallService.prototype.saveOCRData = function (apiData) {
        localStorage.setItem('mean-ocrData', apiData);
        this.ocrData = apiData;
    };
    ApiCallService.prototype.request = function (method, type, tag) {
        var _this = this;
        var base;
        if (method === 'post' && type === 'sendOCRData') {
            base = this.http.post('/api/sendOCRData', tag);
            var request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (data.apiData) {
                    _this.saveOCRData(data.apiData);
                }
                return data;
            }));
            return request;
        }
        else {
            try {
                base = this.http.post('/api/sendImageTag', tag);
                var request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                    if (data.images) {
                        _this.saveImages(data.images);
                    }
                    return data;
                }));
                return request;
            }
            catch (err) {
                console.log(err);
            }
        }
    };
    ApiCallService.prototype.sendImageTag = function (tag) {
        return this.request('post', 'sendImageTag', tag);
    };
    ApiCallService.prototype.showResults = function () {
        return this.request('get', 'showResult');
    };
    ApiCallService.prototype.sendOCRData = function (imageUrl) {
        return this.request('post', 'sendOCRData', imageUrl);
    };
    ApiCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ApiCallService);
    return ApiCallService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\nhtml, body{\r\n    height: 100%;\r\n}\r\n#main{\r\n    overflow: auto;\r\n    padding-bottom: 100px;\r\n}\r\n#footer{\r\n    background-color: #000;\r\n    position: relative;\r\n    height: 100px;\r\n    margin-top: -100px;\r\n    clear: both;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7O0FBRWQ7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG59XHJcbmh0bWwsIGJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI21haW57XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG4jZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.clientHeight = window.innerHeight;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-user/update-user.component */ "./src/app/update-user/update-user.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_pics_search_pics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-pics/search-pics.component */ "./src/app/search-pics/search-pics.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/confirm-equal-validator.directive */ "./src/app/shared/confirm-equal-validator.directive.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/compare-validator.directive */ "./src/app/shared/compare-validator.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");

























// import { HotToastModule } from '@ngneat/hot-toast';


var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_18__["ResultComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'searchPics', component: _search_pics_search_pics_component__WEBPACK_IMPORTED_MODULE_17__["SearchPicsComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [
                _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_13__["UpdateUserComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_26__["ChangePasswordComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _search_pics_search_pics_component__WEBPACK_IMPORTED_MODULE_17__["SearchPicsComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_18__["ResultComponent"],
                _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_19__["ConfirmEqualValidatorDirective"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_23__["CompareValidatorDirective"],
                _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_13__["UpdateUserComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_26__["ChangePasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrModule"].forRoot()
            ],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"],
                _shared_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router, toast) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) { //checking if user is logged in using the authentication service
            this.toast.error('You must login to view that page!');
            // this.toast.
            this.router.navigateByUrl('/login'); //if not logged in redirect to home page(home component)
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1]; //split the string token and store the second parameter in payload(guessing its the password)
            payload = window.atob(payload); //decoding the password 
            return JSON.parse(payload); //returning the decoded password in json format
        }
        else {
            return null; //if token not found return null
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000; //return true if session has not expired, meaning user is still logged in
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base; //
        if (method === 'post') {
            base = this.http.post("/api/" + type, user); //posting request to login, register or profile depending on the $type
        }
        else { //if not post, it is a get request
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } }); //sending encrypted password as value
        }
        var request = base.pipe(//sending the result of the post/get request to TokenResponse interface and saving the result in it's token prop
        Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request; //return json response in request variable
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user); //sending register post request to request()
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user); //sending login post request to request()
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/confirm-equal-validator.directive */ "./src/app/shared/confirm-equal-validator.directive.ts");





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.setupForm();
    };
    ChangePasswordComponent.prototype.setupForm = function () {
        console.log('passing');
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                Object(_shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_4__["compareValidator"])('newPassword')
            ]),
        });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "newPassword", {
        get: function () { return this.changePasswordForm.get('newPassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "confirmPassword", {
        get: function () { return this.changePasswordForm.get('confirmPassword'); },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.onSubmit = function () {
        this.userService.changePassword(this.selectedUser, this.newPassword.value).subscribe(function (user) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            window.location.reload();
        }, function (error) {
            console.log(error);
        });
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nfooter {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item{\r\n    padding:2px;\r\n    margin-left: 7px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbXtcclxuICAgIHBhZGRpbmc6MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!sessionStorage.length) {
            this.auth.logout();
        }
        else {
            console.log('user logged in');
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput {\r\n  width: 100% !important;\r\n  height: 0% !important;\r\n  padding: 12px 20px !important;\r\n  margin: 8px 0 !important;\r\n  display: inline-block !important;\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px !important;\r\n  box-sizing: border-box !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            username: '',
            password: ''
        };
        this.errorMessage = '';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function (user) {
            sessionStorage.setItem('currentUser', JSON.stringify(user["user"]));
            console.log(JSON.stringify(user));
            console.log(_this.currentUserSubject.value);
            _this.currentUserSubject.next(user);
            _this.router.navigateByUrl('/profile'); //redirect to profile
            //once user authenticated 
        }, function (err) {
            console.error(err); //else print err message
            _this.errorMessage = 'Invalid Credentials, Try again!';
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../update-user/update-user.component */ "./src/app/update-user/update-user.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");



//can import both classes and interfaces in the same import statement



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, modalService) {
        this.auth = auth;
        this.modalService = modalService;
    }
    ProfileComponent.prototype.closeModal = function () {
        this.modalService.dismissAll();
        this.ngOnInit();
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.onclick = function (args) {
            if (args.target.tagName == "NGB-MODAL-BACKDROP") {
                _this.closeModal();
            }
            if (args.target.id == "update-user-modal-close") {
                _this.closeModal();
            }
        };
    };
    ProfileComponent.prototype.updateUser = function (user) {
        var ref = this.modalService.open(_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_4__["UpdateUserComponent"], { centered: true, windowClass: "update-user-modal" });
        ref.componentInstance.selectedUser = user;
    };
    ProfileComponent.prototype.changePassword = function (user) {
        var ref = this.modalService.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"], { centered: true, windowClass: "change-password-modal" });
        ref.componentInstance.selectedUser = user;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        // this.authGuard.canActivate();
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.user = user;
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput {\r\n  width: 100% !important;\r\n  height: 0% !important;\r\n  padding: 12px 20px !important;\r\n  margin: 8px 0 !important;\r\n  display: inline-block !important;\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px !important;\r\n  box-sizing: border-box !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_unique_username_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/unique-username-validator.directive */ "./src/app/shared/unique-username-validator.directive.ts");
/* harmony import */ var _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/confirm-equal-validator.directive */ "./src/app/shared/confirm-equal-validator.directive.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router, fb, userService) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.userService = userService;
        this.credentials = {
            username: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            emailAddress: '',
            age: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            username: ['',
                null,
                Object(_shared_unique_username_validator_directive__WEBPACK_IMPORTED_MODULE_6__["uniqueUsernameValidator"])(this.userService)
            ],
            fullName: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ],
            emailAddress: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]
            ],
            age: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ],
            confirmPassword: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    Object(_shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_7__["compareValidator"])('password')
                ]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('emailAddress');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.registerForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "age", {
        get: function () {
            return this.registerForm.get('age');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () {
            return this.registerForm.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "fullName", {
        get: function () {
            return this.registerForm.get('fullName');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.credentials = {
            username: this.registerForm.value.username,
            password: this.registerForm.value.password,
            confirmPassword: this.registerForm.value.confirmPassword,
            fullName: this.registerForm.value.fullName,
            emailAddress: this.registerForm.value.emailAddress,
            age: this.registerForm.value.age
        };
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile'); //redirect to profile page once 
            //registered
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.no-focus-outline {\r\n  outline: none;\r\n  color: aqua;\r\n}\r\ninput {\r\n    width: 350px; /* You can set the dimensions to whatever you want */\r\n    height: 330px;\r\n     margin: auto;    \r\n    display: block;\r\n    border-style: solid;\r\n    \r\n}\r\n.center-block {\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtJQUNJLFlBQVksRUFBRSxvREFBb0Q7SUFDbEUsYUFBYTtLQUNaLFlBQVk7SUFDYixjQUFjO0lBQ2QsbUJBQW1COztBQUV2QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uby1mb2N1cy1vdXRsaW5lIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiBhcXVhO1xyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAzNTBweDsgLyogWW91IGNhbiBzZXQgdGhlIGRpbWVuc2lvbnMgdG8gd2hhdGV2ZXIgeW91IHdhbnQgKi9cclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICAgbWFyZ2luOiBhdXRvOyAgICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIFxyXG59XHJcblxyXG4uY2VudGVyLWJsb2NrIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_pics_search_pics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-pics/search-pics.component */ "./src/app/search-pics/search-pics.component.ts");
/* harmony import */ var _api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-call.service */ "./src/app/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-guard.service */ "./src/app/auth-guard.service.ts");






var ResultComponent = /** @class */ (function () {
    function ResultComponent(renderer, elementRef, apiCall, router, authGuard) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.apiCall = apiCall;
        this.router = router;
        this.authGuard = authGuard;
        this.counter = 0;
        this.searchStart = false;
        this.image1show = false;
        this.image2show = false;
        this.image3show = false;
        this.image4show = false;
        this.image5show = false;
        this.image6show = false;
        this.image7show = false;
        this.image8show = false;
        this.image9show = false;
        this.isLoading = false;
        this.imageUrl = {
            tag: ''
        };
        this.wordList = '';
        this.searchStatus = '';
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.authGuard.canActivate();
    };
    ResultComponent.prototype.onClick = function (event) {
        var _this = this;
        this.isLoading = true;
        this.wordList = 'Extracted Words: ';
        var target = event.target || event.srcElement || event.currentTarget;
        try {
            this.imageUrl.tag = target.attributes.id.value; //saving image url in a string var
        }
        catch (err) {
            this.wordList += 'Image url not found! Please try a different picture...';
            this.isLoading = false;
            return;
        }
        this.apiCall.sendOCRData(this.imageUrl).subscribe(function (data) {
            var obj = JSON.parse(data.data);
            try {
                for (var c = 0; c < obj.regions.length; c++) {
                    for (var i = 0; i < obj.regions[c].lines.length; i++) {
                        for (var j = 0; j < obj.regions[c].lines[i].words.length; j++) {
                            _this.wordList += (obj.regions[c].lines[i].words[j].text) + ", ";
                        }
                    }
                }
                _this.isLoading = false;
                if (_this.wordList === 'Extracted Words: ') {
                    _this.wordList += 'No words were found!';
                }
            }
            catch (err) {
                _this.wordList += 'No words were found!';
                _this.isLoading = false;
            }
        }, function (err) {
            console.error(err);
        });
    };
    ResultComponent.prototype.recieveMessage = function ($event) {
        try {
            this.urls = $event.split(" ", 10);
            if (this.urls.length === 1) {
                this.searchStatus = "No images found!";
                this.image1show = false;
                this.image2show = false;
                this.image3show = false;
                this.image4show = false;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', '');
                this.galleryElementRef2.nativeElement.setAttribute('src', '');
                this.galleryElementRef3.nativeElement.setAttribute('src', '');
                this.galleryElementRef4.nativeElement.setAttribute('src', '');
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', '');
            }
            else if (this.urls.length === 2) {
                this.searchStatus = "1 image found!";
                this.image1show = true;
                this.image2show = false;
                this.image3show = false;
                this.image4show = false;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', '');
                this.galleryElementRef3.nativeElement.setAttribute('src', '');
                this.galleryElementRef4.nativeElement.setAttribute('src', '');
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', '');
            }
            else if (this.urls.length === 3) {
                this.searchStatus = "2 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = false;
                this.image4show = false;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', '');
                this.galleryElementRef4.nativeElement.setAttribute('src', '');
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', '');
            }
            else if (this.urls.length === 4) {
                this.searchStatus = "3 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = false;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', '');
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', '');
            }
            else if (this.urls.length === 5) {
                this.searchStatus = "4 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = false;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', '');
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', '');
            }
            else if (this.urls.length === 6) {
                this.searchStatus = "5 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = true;
                this.image6show = false;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[4]);
                this.galleryElementRef6.nativeElement.setAttribute('src', '');
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', '');
            }
            else if (this.urls.length === 7) {
                this.searchStatus = "6 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = true;
                this.image6show = true;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[4]);
                this.galleryElementRef6.nativeElement.setAttribute('src', this.urls[5]);
                this.galleryElementRef7.nativeElement.setAttribute('src', '');
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', '');
            }
            else if (this.urls.length === 8) {
                this.searchStatus = "7 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = true;
                this.image6show = true;
                this.image7show = false;
                this.image8show = false;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[4]);
                this.galleryElementRef6.nativeElement.setAttribute('src', this.urls[5]);
                this.galleryElementRef7.nativeElement.setAttribute('src', this.urls[6]);
                this.galleryElementRef8.nativeElement.setAttribute('src', '');
                this.galleryElementRef9.nativeElement.setAttribute('src', '');
            }
            else if (this.urls.length === 9) {
                this.searchStatus = "8 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = true;
                this.image6show = true;
                this.image7show = true;
                this.image8show = true;
                this.image9show = false;
                this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[0]);
                this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[1]);
                this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[2]);
                this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[3]);
                this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[4]);
                this.galleryElementRef6.nativeElement.setAttribute('src', this.urls[5]);
                this.galleryElementRef7.nativeElement.setAttribute('src', this.urls[6]);
                this.galleryElementRef8.nativeElement.setAttribute('src', this.urls[7]);
                this.galleryElementRef9.nativeElement.setAttribute('src', '');
            }
            else {
                this.searchStatus = "9 images found!";
                this.image1show = true;
                this.image2show = true;
                this.image3show = true;
                this.image4show = true;
                this.image5show = true;
                this.image6show = true;
                this.image7show = true;
                this.image8show = true;
                this.image9show = true;
                for (var i = 0; i < this.urls.length; i++) {
                    this.searchStatus = '';
                    this.counter++;
                    this.searchStart = true;
                    switch (this.counter) {
                        case 1:
                            this.galleryElementRef1.nativeElement.setAttribute('src', this.urls[i]);
                            this.galleryElementRef1.nativeElement.setAttribute('id', this.urls[i]);
                            break;
                        case 2:
                            this.galleryElementRef2.nativeElement.setAttribute('src', this.urls[i]);
                            this.galleryElementRef2.nativeElement.setAttribute('id', this.urls[i]);
                            break;
                        case 3:
                            this.galleryElementRef3.nativeElement.setAttribute('src', this.urls[i]);
                            this.galleryElementRef3.nativeElement.setAttribute('id', this.urls[i]);
                            break;
                        case 4:
                            this.galleryElementRef4.nativeElement.setAttribute('src', this.urls[i]);
                            this.galleryElementRef4.nativeElement.setAttribute('id', this.urls[i]);
                            break;
                        case 5:
                            this.galleryElementRef5.nativeElement.setAttribute('src', this.urls[i]);
                            this.galleryElementRef5.nativeElement.setAttribute('id', this.urls[i]);
                            break;
                        case 6:
                            this.galleryElementRef6.nativeElement.setAttribute('src', this.urls[i]);
                            this.galleryElementRef6.nativeElement.setAttribute('id', this.urls[i]);
                            break;
                        case 7:
                            this.galleryElementRef7.nativeElement.setAttribute('src', this.urls[i]);
                            this.galleryElementRef7.nativeElement.setAttribute('id', this.urls[i]);
                            break;
                        case 8:
                            this.galleryElementRef8.nativeElement.setAttribute('src', this.urls[i]);
                            this.galleryElementRef8.nativeElement.setAttribute('id', this.urls[i]);
                            break;
                        case 9:
                            this.galleryElementRef9.nativeElement.setAttribute('src', this.urls[i]);
                            this.galleryElementRef9.nativeElement.setAttribute('id', this.urls[i]);
                            break;
                        default:
                            this.counter = 0;
                            break;
                    }
                }
            }
        }
        catch (err) {
            console.log(err);
        }
        /**
        if($event === "No Images Found!"){
            
             
        }else{
        
            }
        } **/
    };
    ResultComponent.prototype.ngAfterViewInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_search_pics_search_pics_component__WEBPACK_IMPORTED_MODULE_2__["SearchPicsComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultComponent.prototype, "child", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef1', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef2', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef3', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef4', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef5', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef5", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef6', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef6", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef7', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef7", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef8', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef8", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleryRef9', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "galleryElementRef9", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ocrWordsRef', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ResultComponent.prototype, "ocrWordsElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ResultComponent.prototype, "imageData", void 0);
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/index.js!./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/search-pics/search-pics.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-pics/search-pics.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step-icon{\r\n    width: 3%;\r\n}\r\n\r\n.search-container{\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXBpY3Mvc2VhcmNoLXBpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1waWNzL3NlYXJjaC1waWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcC1pY29ue1xyXG4gICAgd2lkdGg6IDMlO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/search-pics/search-pics.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-pics/search-pics.component.ts ***!
  \******************************************************/
/*! exports provided: SearchPicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPicsComponent", function() { return SearchPicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-call.service */ "./src/app/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SearchPicsComponent = /** @class */ (function () {
    function SearchPicsComponent(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
        this.isLoading = false;
        this.potentialTags = {
            tag: ''
        };
        this.validImageCounter = 0;
        this.sendDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchPicsComponent.prototype.ngOnInit = function () {
    };
    SearchPicsComponent.prototype.ngAfterViewInit = function () {
    };
    SearchPicsComponent.prototype.sendAndGetImages = function () {
        var _this = this;
        this.isLoading = true;
        this.apiCall.sendImageTag(this.potentialTags).subscribe(function (data) {
            for (var i = 0; i < 10; i++) {
                if (!data.data[i]) {
                    break;
                }
                _this.validImageCounter++;
            }
            _this.imageData = '';
            for (var i = 0; i < _this.validImageCounter; i++) {
                _this.imageData += data.data[i] + " ";
            }
            _this.sendDataEvent.emit(_this.imageData);
            _this.validImageCounter = 0;
            _this.isLoading = false;
        }, function (err) {
            console.error(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchPicsComponent.prototype, "sendDataEvent", void 0);
    SearchPicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-pics',
            template: __webpack_require__(/*! raw-loader!./search-pics.component.html */ "./node_modules/raw-loader/index.js!./src/app/search-pics/search-pics.component.html"),
            styles: [__webpack_require__(/*! ./search-pics.component.css */ "./src/app/search-pics/search-pics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchPicsComponent);
    return SearchPicsComponent;
}());



/***/ }),

/***/ "./src/app/shared/compare-validator.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/compare-validator.directive.ts ***!
  \*******************************************************/
/*! exports provided: CompareValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareValidatorDirective", function() { return CompareValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CompareValidatorDirective = /** @class */ (function () {
    function CompareValidatorDirective() {
    }
    CompareValidatorDirective_1 = CompareValidatorDirective;
    CompareValidatorDirective.prototype.validate = function (c) {
        if (c.value === null || c.value.length === 0) {
            return null;
        }
        var controlToCompare = c.root.get(this.controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    };
    var CompareValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('compare'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CompareValidatorDirective.prototype, "controlNameToCompare", void 0);
    CompareValidatorDirective = CompareValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[compare]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: CompareValidatorDirective_1, multi: true }]
        })
    ], CompareValidatorDirective);
    return CompareValidatorDirective;
}());



/***/ }),

/***/ "./src/app/shared/confirm-equal-validator.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/confirm-equal-validator.directive.ts ***!
  \*************************************************************/
/*! exports provided: compareValidator, ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareValidator", function() { return compareValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



function compareValidator(controlNameToCompare) {
    return function (c) {
        if (c.value == null || c.value.length === 0) {
            return null;
        }
        var controlToCompare = c.root.get(controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    };
}
var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator); //getting password field text
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null; //confirm and password are equal 
    };
    var ConfirmEqualValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());



/***/ }),

/***/ "./src/app/shared/unique-username-update-validator.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/unique-username-update-validator.directive.ts ***!
  \**********************************************************************/
/*! exports provided: uniqueUsernameUpdateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueUsernameUpdateValidator", function() { return uniqueUsernameUpdateValidator; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function uniqueUsernameUpdateValidator(userService) {
    return function (c) {
        try {
            var currentUsername = JSON.parse(sessionStorage.getItem("currentUser"))["username"];
        }
        catch (err) {
            console.log(err);
        }
        return userService.getUserByUsername(c.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (user) {
            if (user.length > 0) {
                var username = user[0]["username"];
                if (username != currentUsername) {
                    return { 'uniqueUsernameUpdate': true };
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }));
    };
}


/***/ }),

/***/ "./src/app/shared/unique-username-validator.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/unique-username-validator.directive.ts ***!
  \***************************************************************/
/*! exports provided: uniqueUsernameValidator, UniqueUsernameValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueUsernameValidator", function() { return uniqueUsernameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueUsernameValidatorDirective", function() { return UniqueUsernameValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





function uniqueUsernameValidator(userService) {
    return function (c) {
        return userService.getUserByUsername(c.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) {
            if (users.length === 0) {
                return null;
            }
            else {
                return { 'uniqueUsername': true };
            }
        }));
    };
}
var UniqueUsernameValidatorDirective = /** @class */ (function () {
    function UniqueUsernameValidatorDirective(userService) {
        this.userService = userService;
    } //create the http.post in user.service
    UniqueUsernameValidatorDirective_1 = UniqueUsernameValidatorDirective;
    UniqueUsernameValidatorDirective.prototype.validate = function (control) {
        return this.userService.getUserByUsername(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) {
            console.log(users);
            return users && users.length > 0 ? { 'uniqueUsername': true } : null;
        }));
    };
    var UniqueUsernameValidatorDirective_1;
    UniqueUsernameValidatorDirective = UniqueUsernameValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[uniqueUsername]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"], useExisting: UniqueUsernameValidatorDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UniqueUsernameValidatorDirective);
    return UniqueUsernameValidatorDirective;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);






var UserService = /** @class */ (function () {
    function UserService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.baseURL = 'http://localhost:3000';
        this.usersURL = 'http://localhost:3000/api/getUsers';
        this.apiURL = 'http://localhost:3000/api/users';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' })
        };
    }
    UserService.prototype.postUser = function (user) {
        return this.http.post(this.usersURL, user);
    };
    UserService.prototype.getUsers = function (username) {
        return this.http.get(this.usersURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
            var newUsers = [];
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                var uName = user.username;
                newUsers.push({ username: uName });
            }
            return newUsers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (users) { return console.log(users); }));
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.apiURL + "/" + user._id, user);
    };
    UserService.prototype.changePassword = function (user, password) {
        return this.http.put(this.apiURL + "/" + user._id + "/changePassword", { "user": user, "newPassword": password });
    };
    UserService.prototype.getUserByUsername = function (uName) {
        return this.http.get(this.usersURL + "/" + uName);
    };
    UserService.prototype.getUserById = function (uId) {
        return this.http.get(this.apiURL + "/getUserById/" + uId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/update-user/update-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-user/update-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS11c2VyL3VwZGF0ZS11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/update-user/update-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-user/update-user.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_unique_username_update_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/unique-username-update-validator.directive */ "./src/app/shared/unique-username-update-validator.directive.ts");





var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.formReady = false;
        this.component = this;
        this.formErrors = {
            'username': '',
            'emailAddress': '',
            'fullName': '',
            'age': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Username is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.',
                'forbiddenName': 'Someone named "Bob" cannot be a hero.',
                'uniqueUsernameUpdate': 'That username is already taken! Please pick a different username'
            },
            'emailAddress': {
                'required': 'Email is required!',
                'email': 'Email is not valid!',
            },
            'fullName': {
                'required': 'fullName is required!'
            },
            'age': {
                'required': 'age is required!'
            }
        };
    }
    UpdateUserComponent.prototype.setupForm = function () {
        var _this = this;
        this.updateUserForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedUser._id),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedUser.username, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ], [Object(_shared_unique_username_update_validator_directive__WEBPACK_IMPORTED_MODULE_4__["uniqueUsernameUpdateValidator"])(this.userService)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedUser.emailAddress, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ]),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedUser.fullName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedUser.age, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        this.updateUserForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    Object.defineProperty(UpdateUserComponent.prototype, "username", {
        get: function () { return this.updateUserForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateUserComponent.prototype, "emailAddress", {
        get: function () { return this.updateUserForm.get('emailAddress'); },
        enumerable: true,
        configurable: true
    });
    UpdateUserComponent.prototype.ngOnInit = function () {
        try {
            console.log(this.selectedUser);
            this.setupForm();
            this.formReady = true;
        }
        catch (err) {
            console.log(err);
        }
    };
    UpdateUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.updateUser(this.updateUserForm.value).subscribe(function (user) {
            _this.isLoading = false;
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            window.location.reload();
        }, function (error) {
            _this.isLoading = false;
        });
    };
    UpdateUserComponent.prototype.onValueChanged = function (data) {
        if (!this.updateUserForm) {
            return;
        }
        var form = this.updateUserForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // console.log(control)
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    if (field == "username") {
                        console.log(control);
                    }
                    if (this.username.invalid && key != 'required') {
                        this.formErrors[field] += messages['uniqueUsernameUpdate'];
                    }
                    else {
                        this.formErrors[field] += messages[key] + ' ';
                    }
                }
            }
        }
    };
    UpdateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__(/*! raw-loader!./update-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/update-user/update-user.component.html"),
            styles: [__webpack_require__(/*! ./update-user.component.css */ "./src/app/update-user/update-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    UserComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
        this.userService.selectedUser = {
            _id: "",
            username: "",
            fullName: "",
            age: 0,
            emailAddress: "",
            password: ""
        };
    };
    UserComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.value).subscribe(function (res) {
            _this.resetForm(form);
            M.toast({ html: 'Saved successfully', classes: 'rounded' });
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sheha\OneDrive\Documents\GitHub\OCR-Flickr-master\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
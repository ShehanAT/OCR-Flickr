(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!***************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/app.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<html>\n<head>\n</head>\n<body>\n<main role=\"main\" class=\"container\">\n    <div id=\"main\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    </div>\n </main>\n</body>\n</html>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!*************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <p  class=\"text-xs-center\">© Copyright 2019 Shehan Atuk</p>\n</footer>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!*************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/header/header.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Capstone Project</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.isLoggedIn()\">\n        <a class=\"nav-link mr-sm-2\" routerLink=\"/result\">Use OCR</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!auth.isLoggedIn()\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!auth.isLoggedIn()\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.isLoggedIn()\">\n        <a class=\"nav-link\" routerLink=\"/profile\">{{ auth.getUserDetails()?.username }}'s Profile</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.isLoggedIn()\">\n        <a class=\"nav-link\" (click)=\"auth.logout()\">Logout</a>\n      </li>\n  \n\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!*********************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/home/home.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n       <br>\n       <br>\n       <br>\n       <br>\n    \n       <br>\n    <header class=\"masthead\">\n    <div class=\"container\">\n      <div class=\"intro-text\">\n        <div class=\"intro-lead-in h1 text-center\">Welcome to my Capstone Project</div>\n     \n        <p class=\"lead text-muted text-center\">This app brings together everything I have learned from TeamTreehouse Full Stack Javascript Techdegree. Made using the MEAN stack(MongoDB, Express.js, AngularJS and Node.js) the app intergrates the Flickr API and the Microsoft Azure Cognitive Services Computer Vision API to deliver a great optical character recognition experience. To get started please register an account or login if you are an existing user. </p>\n    </div>\n    </div>\n  </header>\n  \n\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!***********************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/login/login.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<br>\n\n<br>\n<br>\n\n<div class=\"container\">\n  <div class=\"row\">\n   <div class=\"col-md-6\">\n     <h1 class=\"form-signin-heading\">Sign In</h1> \n     <p class=\"lead\">Not a member yet? Please <a routerLink=\"/register\">register here</a></p>\n     <form (submit)=\"login()\"> \n       <div class=\"form-group row\">\n         <label for=\"username\">Username:</label>\n         <input type=\"username\" \n                class=\"form-control\" \n                name=\"username\" \n                placeholder=\"Enter username\"\n                [(ngModel)]=\"credentials.username\">\n       </div>\n        <div class=\"form-group row\">\n         <label for=\"password\">Password:</label>\n         <input type=\"password\" \n                class=\"form-control\" \n                name=\"password\" \n                placeholder=\"Enter password\"\n                [(ngModel)]=\"credentials.password\">\n        </div>\n         <div class=\"text-danger\">{{ errorMessage }}</div>\n        <button type=\"submit\" class=\"btn btn-default\">Sign In!</button>\n       </form>  \n   </div>  \n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<div class=\"container\">\n <div class=\"row\">\n  <div class=\"col-md-6\">\n   <h1 class=\"form-signin-heading\">Your Profile</h1>\n   <div class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <p class=\" control-label text-left\"><strong>Username:  </strong><br>\n        {{ details?.username }}</p>\n    </div>\n    <div class=\"form-group\">\n      <p class=\"control-label text-left\"><strong>Full Name:  </strong><br>\n        {{ details?.fullName }}</p>\n    </div>\n    <div class=\"form-group\">\n      <p class=\" control-label\"><strong>Email:  </strong><br>\n        {{ details?.emailAddress }}</p>\n    </div>\n     <div class=\"form-group\">\n      <p class=\" control-label\"><strong>Age:  </strong><br>\n          {{ details?.age}}</p>\n     </div>\n    </div>\n   </div> \n </div>\n\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!*****************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/register/register.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n<div class=\"container\">\n <div class=\"row\">  \n  <div class=\"col-md-6\">\n    <h1>Register</h1> \n    <p class=\"lead\">If you are already a member please <a routerLink=\"/login\">log in</a></p>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    \n        <label for=\"username\" class=\"control-label\">Username:</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter username\" >\n       \n     \n        <div class=\"text-danger\" *ngIf=\"username.invalid && (username.dirty || username.touched)\">\n        Username already exists</div>\n      \n     \n      \n        \n        <br>\n        <label for=\"fullName\" class=\"control-label\">FullName:  </label>\n        <input type=\"text\" \n               class=\"form-control\" \n               name=\"fullName\" \n               placeholder=\"Enter fullName\"\n               required \n               formControlName=\"fullName\"\n               required>\n        <div class=\"text-danger\" *ngIf=\"fullName?.invalid && (fullName.dirty || fullName.touched)\">\n              <div *ngIf=\"fullName?.errors['required']\">Fullname is required</div>\n            \n        </div>\n        \n        <label for=\"emailAddress\" class=\"control-label\">Email Address: </label>\n        <input type=\"text\" \n               class=\"form-control\" \n               name=\"emailAddress\" \n               placeholder=\"Enter Email\"\n               required \n               formControlName=\"emailAddress\"\n               >\n        \n         <div class=\"text-danger\" *ngIf=\"email?.invalid && (email.dirty || email.touched)\">\n              <div *ngIf=\"email?.errors['required']\">Email is required</div>\n             <div *ngIf=\"email?.errors['email']\">Enter valid email</div>\n            \n        </div>\n        <label for=\"age\" class=\"control-label\">Age:</label>\n        <input type=\"number\" \n               class=\"form-control\" \n               name=\"age\" \n               placeholder=\"Enter Age\"\n               required\n               formControlName=\"age\">\n        <div class=\"text-danger\" *ngIf=\"age?.invalid && (age.dirty || age.touched)\">\n              <div *ngIf=\"age?.errors['required']\">Age is required</div>\n            \n        </div>\n        <label for=\"password\" class=\"control-label\">Password:</label>\n        <input type=\"password\"\n                class=\"form-control\"\n               placeholder=\"Enter new password\"\n                formControlName=\"password\">\n             <div class=\"text-danger\" *ngIf=\"password?.invalid && (password.dirty || password.touched)\">\n              <div *ngIf=\"password?.errors['required']\">Password is required</div>\n            \n        </div>\n            <label for=\"confirmPassword\" class=\"control-label\">Confirm Password:</label>\n            <input type=\"password\"\n                   placeholder=\"confirm Password\"\n                   class=\"form-control\"\n                  \n                formControlName=\"confirmPassword\" compare=\"password\"> \n            <div class=\"text-danger\" *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\">\n                <div *ngIf=\"confirmPassword.errors['required']\">Confirm password is required</div>\n                <div *ngIf=\"confirmPassword.errors['compare']\">Passwords do not match</div>\n                </div>\n      \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registerForm.valid\">Register!</button>\n      </form>   \n     </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/result/result.component.html":
/*!*************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/result/result.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-pics (sendDataEvent)=\"recieveMessage($event)\"></app-search-pics>\n<div class=\"container center-block\" > \n\n    <div class=\"ocrWords row\"  >\n        <h3>{{ wordList }}</h3>\n    </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\"></div>\n                <div class=\"col\"></div>\n                <div class=\"col ml-5\" *ngIf=\"isLoading\"><mat-spinner class=\"ml-5\" layout=\"row\" layout-align=\"center center\"></mat-spinner></div>\n                <div class=\"col\"></div>\n                 <div class=\"col\"></div>\n            </div>\n        </div>\n   \n        <div class=\"imageResults\" #galleryRef>\n        {{ searchStatus }}\n         <div class=\"row ml-4 \" layout=\"column\" layout-align=\"center end\">\n       \n        <div class=\"col-md-4\" >\n           \n           <input type=\"image\" class=\"rounded float-center mt-1\" (click)=\"onClick($event)\" [hidden]=\"!image1show\" #galleryRef1 />\n            <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image2show\" #galleryRef2 />\n           <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image3show\" #galleryRef3 />\n             \n        </div>\n        <br>\n         <br>\n        <div class=\"col-md-4\" >\n          \n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image4show\" #galleryRef4 />\n          <input type=\"image\" class=\"rounded float-center mt-1\" (click)=\"onClick($event)\" [hidden]=\"!image5show\" #galleryRef5 />\n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image6show\" #galleryRef6 />\n     \n        </div>\n        <br>\n         <br>\n        <div class=\"col-md-4\">\n        \n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image7show\" #galleryRef7 />\n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image8show\" #galleryRef8 />\n          <input type=\"image\" class=\"rounded float-center mt-1\"  (click)=\"onClick($event)\" [hidden]=\"!image9show\" #galleryRef9 />\n    \n        </div>\n        <br>\n       </div>\n      </div>\n    </div>\n    \n\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/search-pics/search-pics.component.html":
/*!***********************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/search-pics/search-pics.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<br>\n<br>\n<br>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n      <h1>Search for images with text in them:</h1>\n      <form (submit)=\"sendAndGetImages()\">\n        <div class=\"form-group\">\n           <label for=\"tag\">Enter image tag:</label>\n             <input type=\"text\"\n             class=\"form-control\"\n             name=\"tag\"\n             placeholder=\"Enter image tag\"\n             [(ngModel)]=\"potentialTags.tag\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" >Submit</button>\n      </form> \n       <h3>Then click on any image to show extracted text!</h3>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\"></div>\n                <div class=\"col\"></div>\n                <div class=\"col ml-5\" *ngIf=\"isLoading\"><mat-spinner class=\"ml-5\" layout=\"row\" layout-align=\"center center\"></mat-spinner></div>\n                <div class=\"col\"></div>\n                 <div class=\"col\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n"
=======
module.exports = "<br>\n<br>\n<br>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n      <h1>Search for images with text in them:</h1>\n      <form (submit)=\"sendAndGetImages()\">\n        <div class=\"form-group\">\n           <label for=\"tag\">Enter image tag:</label>\n             <input type=\"text\"\n             class=\"form-control\"\n             name=\"tag\"\n             placeholder=\"Enter image tag\"\n             [(ngModel)]=\"potentialTags.tag\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" >Submit</button>\n      </form> \n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\"></div>\n                <div class=\"col\"></div>\n                <div class=\"col ml-5\" *ngIf=\"isLoading\"><mat-spinner class=\"ml-5\" layout=\"row\" layout-align=\"center center\"></mat-spinner></div>\n                <div class=\"col\"></div>\n                 <div class=\"col\"></div>\n            </div>\n        </div>\n    </div>\n</div>"
>>>>>>> debf18814a17961536aa23140ebf4a8baa4648ec

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!*********************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/user/user.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col s12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-content white-text\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s5\">\n\t\t\t\t\t\t<form #userForm=\"ngForm\" \n\t\t\t\t\t\t(ngSubmit)=\"onSubmit(userForm)\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"_id\" #_id=\"ngModel\"\n\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser._id\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"username\" \n\t\t\t\t\t\t\t\t#name=\"ngModel\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.username\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter a username\"\n\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t<label>Username: \n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"fullName\" \n\t\t\t\t\t\t\t\t#name=\"ngModel\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.fullName\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter your fullName\"\n\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t<label>fullName: \n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"age\" \n\t\t\t\t\t\t\t\t#name=\"ngModel\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.age\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter your age\"\n\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t<label>Age: \n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"emailAddress\" \n\t\t\t\t\t\t\t\t#name=\"ngModel\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.emailAddress\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter your email\"\n\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t<label>Email: \n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"password\" \n\t\t\t\t\t\t\t\t#name=\"ngModel\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"userService.selectedUser.password\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter a strong password\"\n\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t<label>Password: \n\t\t\t\t\t\t\t\t\t<label class=\"red text\">*</label>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-custom right\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-custom right\" type=\"submit\" [disabled]=\"!userForm.valid\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

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

/***/ "./src/app/api-call.service.ts":
/*!*************************************!*\
  !*** ./src/app/api-call.service.ts ***!
  \*************************************/
/*! exports provided: ApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallService", function() { return ApiCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/map */ "../node_modules/rxjs-compat/_esm2015/operators/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");





let ApiCallService = class ApiCallService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveImages(images) {
        localStorage.setItem('mean-image', images);
        this.images = images;
    }
    saveOCRData(apiData) {
        localStorage.setItem('mean-ocrData', apiData);
        this.ocrData = apiData;
    }
    request(method, type, tag) {
        let base;
        if (method === 'post' && type === 'sendOCRData') {
            base = this.http.post('/api/sendOCRData', tag);
            const request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
                if (data.apiData) {
                    this.saveOCRData(data.apiData);
                }
                return data;
            }));
            return request;
        }
        else {
            try {
                base = this.http.post('/api/sendImageTag', tag);
                const request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
                    if (data.images) {
                        this.saveImages(data.images);
                    }
                    return data;
                }));
                return request;
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    sendImageTag(tag) {
        return this.request('post', 'sendImageTag', tag);
    }
    showResults() {
        return this.request('get', 'showResult');
    }
    sendOCRData(imageUrl) {
        return this.request('post', 'sendOCRData', imageUrl);
    }
};
ApiCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ApiCallService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n*{\n    margin: 0;\n    padding: 0;\n    \n}\nhtml, body{\n    height: 100%;\n}\n#main{\n    overflow: auto;\n    padding-bottom: 100px;\n}\n#footer{\n    background-color: #000;\n    position: relative;\n    height: 100px;\n    margin-top: -100px;\n    clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7O0FBRWQ7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBcbn1cbmh0bWwsIGJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuI21haW57XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuI2Zvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICBjbGVhcjogYm90aDtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");



let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.clientHeight = window.innerHeight;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_pics_search_pics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search-pics/search-pics.component */ "./src/app/search-pics/search-pics.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/confirm-equal-validator.directive */ "./src/app/shared/confirm-equal-validator.directive.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/compare-validator.directive */ "./src/app/shared/compare-validator.directive.ts");























const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] },
    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_17__["ResultComponent"] },
    { path: 'searchPics', component: _search_pics_search_pics_component__WEBPACK_IMPORTED_MODULE_16__["SearchPicsComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _search_pics_search_pics_component__WEBPACK_IMPORTED_MODULE_16__["SearchPicsComponent"],
            _result_result_component__WEBPACK_IMPORTED_MODULE_17__["ResultComponent"],
            _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_18__["ConfirmEqualValidatorDirective"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
            _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_22__["CompareValidatorDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"]
        ],
        providers: [
            _authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isLoggedIn()) { //checking if user is logged in using the authentication service
            M.toast({ html: 'You must login to view this page!', classes: 'rounded' });
            this.router.navigateByUrl('/'); //if not logged in redirect to home page(home component)
            return false;
        }
        return true;
    }
};
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuardService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/map */ "../node_modules/rxjs-compat/_esm2015/operators/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");





let AuthenticationService = class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveToken(token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    }
    getUserDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1]; //split the string token and store the second parameter in payload(guessing its the password)
            payload = window.atob(payload); //decoding the password 
            return JSON.parse(payload); //returning the decoded password in json format
        }
        else {
            return null; //if token not found return null
        }
    }
    isLoggedIn() {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000; //return true if session has not expired, meaning user is still logged in
        }
        else {
            return false;
        }
    }
    request(method, type, user) {
        let base; //
        if (method === 'post') {
            base = this.http.post(`/api/${type}`, user); //posting request to login, register or profile depending on the $type
        }
        else { //if not post, it is a get request
            base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } }); //sending encrypted password as value
        }
        const request = base.pipe(//sending the result of the post/get request to TokenResponse interface and saving the result in it's token prop
        Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
        return request; //return json response in request variable
    }
    register(user) {
        return this.request('post', 'register', user); //sending register post request to request()
    }
    login(user) {
        return this.request('post', 'login', user); //sending login post request to request()
    }
    profile() {
        return this.request('get', 'profile');
    }
    logout() {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nfooter {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 1rem;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "../node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item{\n    padding:2px;\n    margin-left: 7px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbXtcbiAgICBwYWRkaW5nOjJweDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "../node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], HeaderComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



let HomeComponent = class HomeComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "../node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ninput {\n  width: 100% !important;\n  height: 0% !important;\n  padding: 12px 20px !important;\n  margin: 8px 0 !important;\n  display: inline-block !important;\n  border: 1px solid #ccc !important;\n  border-radius: 4px !important;\n  box-sizing: border-box !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDhweCAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(auth, router, renderer) {
        this.auth = auth;
        this.router = router;
        this.renderer = renderer;
        this.credentials = {
            username: '',
            password: ''
        };
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    login() {
        this.auth.login(this.credentials).subscribe(() => {
            this.router.navigateByUrl('/profile'); //redirect to profile
            //once user authenticated 
        }, (err) => {
            console.error(err); //else print err message
            this.errorMessage = 'Invalid Credentials, Try again!';
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "../node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], LoginComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-guard.service */ "./src/app/auth-guard.service.ts");



//can import both classes and interfaces in the same import statement

let ProfileComponent = class ProfileComponent {
    constructor(auth, authGuard) {
        this.auth = auth;
        this.authGuard = authGuard;
    }
    ngOnInit() {
        this.authGuard.canActivate();
        this.auth.profile().subscribe(user => {
            this.details = user;
        }, (err) => {
            console.error(err);
        });
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "../node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ninput {\n  width: 100% !important;\n  height: 0% !important;\n  padding: 12px 20px !important;\n  margin: 8px 0 !important;\n  display: inline-block !important;\n  border: 1px solid #ccc !important;\n  border-radius: 4px !important;\n  box-sizing: border-box !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDhweCAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_unique_username_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/unique-username-validator.directive */ "./src/app/shared/unique-username-validator.directive.ts");
/* harmony import */ var _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/confirm-equal-validator.directive */ "./src/app/shared/confirm-equal-validator.directive.ts");








let RegisterComponent = class RegisterComponent {
    constructor(auth, router, fb, userService) {
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
    ngOnInit() {
        this.createForm();
    }
    createForm() {
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
    }
    get email() {
        return this.registerForm.get('emailAddress');
    }
    get username() {
        return this.registerForm.get('username');
    }
    get password() {
        return this.registerForm.get('password');
    }
    get age() {
        return this.registerForm.get('age');
    }
    get confirmPassword() {
        return this.registerForm.get('confirmPassword');
    }
    get fullName() {
        return this.registerForm.get('fullName');
    }
    onSubmit() {
        this.credentials = {
            username: this.registerForm.value.username,
            password: this.registerForm.value.password,
            confirmPassword: this.registerForm.value.confirmPassword,
            fullName: this.registerForm.value.fullName,
            emailAddress: this.registerForm.value.emailAddress,
            age: this.registerForm.value.age
        };
        this.auth.register(this.credentials).subscribe(() => {
            this.router.navigateByUrl('/profile'); //redirect to profile page once 
            //registered
        }, (err) => {
            console.error(err);
        });
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "../node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.no-focus-outline {\n  outline: none;\n  color: aqua;\n}\ninput {\n    width: 350px; /* You can set the dimensions to whatever you want */\n    height: 330px;\n     margin: auto;    \n    display: block;\n    border-style: solid;\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtJQUNJLFlBQVksRUFBRSxvREFBb0Q7SUFDbEUsYUFBYTtLQUNaLFlBQVk7SUFDYixjQUFjO0lBQ2QsbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5vLWZvY3VzLW91dGxpbmUge1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogYXF1YTtcbn1cbmlucHV0IHtcbiAgICB3aWR0aDogMzUwcHg7IC8qIFlvdSBjYW4gc2V0IHRoZSBkaW1lbnNpb25zIHRvIHdoYXRldmVyIHlvdSB3YW50ICovXG4gICAgaGVpZ2h0OiAzMzBweDtcbiAgICAgbWFyZ2luOiBhdXRvOyAgICBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIFxufVxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _search_pics_search_pics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-pics/search-pics.component */ "./src/app/search-pics/search-pics.component.ts");
/* harmony import */ var _api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-call.service */ "./src/app/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-guard.service */ "./src/app/auth-guard.service.ts");






let ResultComponent = class ResultComponent {
    constructor(renderer, elementRef, apiCall, router, authGuard) {
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
    ngOnInit() {
        this.authGuard.canActivate();
    }
    onClick(event) {
        this.isLoading = true;
        this.wordList = 'Extracted Words: ';
        var target = event.target || event.srcElement || event.currentTarget;
        this.imageUrl.tag = target.attributes.id.value; //saving image url in a string var
        this.apiCall.sendOCRData(this.imageUrl).subscribe((data) => {
            var obj = JSON.parse(data.data);
            try {
                for (var c = 0; c < obj.regions.length; c++) {
                    for (var i = 0; i < obj.regions[c].lines.length; i++) {
                        for (var j = 0; j < obj.regions[c].lines[i].words.length; j++) {
                            this.wordList += (obj.regions[c].lines[i].words[j].text) + ", ";
                        }
                    }
                }
                this.isLoading = false;
                console.log(this.wordList);
                if (this.wordList === 'Extracted Words: ') {
                    this.wordList += 'No words were found!';
                }
            }
            catch (err) {
                this.wordList += 'No words were found!';
                this.isLoading = false;
            }
        }, (err) => {
            console.error(err);
        });
    }
    recieveMessage($event) {
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
    }
    ngAfterViewInit() {
    }
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
        template: __webpack_require__(/*! raw-loader!./result.component.html */ "../node_modules/raw-loader/index.js!./src/app/result/result.component.html"),
        styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]])
], ResultComponent);



/***/ }),

/***/ "./src/app/search-pics/search-pics.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-pics/search-pics.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1waWNzL3NlYXJjaC1waWNzLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-call.service */ "./src/app/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");




let SearchPicsComponent = class SearchPicsComponent {
    constructor(apiCall, router) {
        this.apiCall = apiCall;
        this.router = router;
        this.isLoading = false;
        this.potentialTags = {
            tag: ''
        };
        this.validImageCounter = 0;
        this.sendDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    sendAndGetImages() {
        this.isLoading = true;
        this.apiCall.sendImageTag(this.potentialTags).subscribe((data) => {
            for (var i = 0; i < 10; i++) {
                if (!data.data[i]) {
                    break;
                }
                this.validImageCounter++;
            }
            this.imageData = '';
            for (var i = 0; i < this.validImageCounter; i++) {
                this.imageData += data.data[i] + " ";
            }
            this.sendDataEvent.emit(this.imageData);
            this.validImageCounter = 0;
            this.isLoading = false;
        }, (err) => {
            console.error(err);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchPicsComponent.prototype, "sendDataEvent", void 0);
SearchPicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-pics',
        template: __webpack_require__(/*! raw-loader!./search-pics.component.html */ "../node_modules/raw-loader/index.js!./src/app/search-pics/search-pics.component.html"),
        styles: [__webpack_require__(/*! ./search-pics.component.css */ "./src/app/search-pics/search-pics.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SearchPicsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");

var CompareValidatorDirective_1;


let CompareValidatorDirective = CompareValidatorDirective_1 = class CompareValidatorDirective {
    validate(c) {
        if (c.value === null || c.value.length === 0) {
            return null;
        }
        const controlToCompare = c.root.get(this.controlNameToCompare);
        if (controlToCompare) {
            const subscription = controlToCompare.valueChanges.subscribe(() => {
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    }
};
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");

var ConfirmEqualValidatorDirective_1;


function compareValidator(controlNameToCompare) {
    return (c) => {
        if (c.value == null || c.value.length === 0) {
            return null;
        }
        const controlToCompare = c.root.get(controlNameToCompare);
        if (controlToCompare) {
            const subscription = controlToCompare.valueChanges.subscribe(() => {
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    };
}
let ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = class ConfirmEqualValidatorDirective {
    validate(control) {
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator); //getting password field text
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null; //confirm and password are equal 
    }
};
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");

var UniqueUsernameValidatorDirective_1;




function uniqueUsernameValidator(userService) {
    return (c) => {
        return userService.getUserByUsername(c.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(users => {
            if (users.length === 0) {
                return null;
            }
            else {
                return { 'uniqueUsername': true };
            }
        }));
    };
}
let UniqueUsernameValidatorDirective = UniqueUsernameValidatorDirective_1 = class UniqueUsernameValidatorDirective {
    constructor(userService) {
        this.userService = userService;
    } //create the http.post in user.service
    validate(control) {
        return this.userService.getUserByUsername(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(users => {
            return users && users.length > 0 ? { 'uniqueUsername': true } : null;
        }));
    }
};
UniqueUsernameValidatorDirective = UniqueUsernameValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: '[uniqueUsername]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"], useExisting: UniqueUsernameValidatorDirective_1, multi: true }]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], UniqueUsernameValidatorDirective);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "../node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:3000/api/getUsers';
    }
    postUser(user) {
        return this.http.post(this.baseURL, user);
    }
    getUsers(username) {
        return this.http.get(this.baseURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(users => {
            const newUsers = [];
            for (let user of users) {
                const uName = user.username;
                newUsers.push({ username: uName });
            }
            return newUsers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(users => console.log(users)));
    }
    getUserByUsername(uName) {
        return this.http.get(`${this.baseURL}/${uName}`);
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");



let UserComponent = class UserComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
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
    }
    onSubmit(form) {
        this.userService.postUser(form.value).subscribe((res) => {
            this.resetForm(form);
            M.toast({ html: 'Saved successfully', classes: 'rounded' });
        });
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "../node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
        providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], UserComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = __webpack_require__(/*! C:\Users\sheha\OneDrive\Documents\GitHub\OCR-Flickr-master\AngularApp\src\main.ts */"./src/main.ts");
=======
module.exports = __webpack_require__(/*! /Users/shehanatukorala/Downloads/capstoneProject-master/AngularApp/src/main.ts */"./src/main.ts");
>>>>>>> debf18814a17961536aa23140ebf4a8baa4648ec


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
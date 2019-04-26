(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ]),
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-container\">\r\n\r\n  \r\n\r\n  <div class=\"waveWrapper waveAnimation\">\r\n\r\n<div id=\"Clouds\">\r\n    <div class=\"Cloud Foreground\"></div>\r\n    <div class=\"Cloud Background\"></div>\r\n    <div class=\"Cloud Foreground\"></div>\r\n    <div class=\"Cloud Background\"></div>\r\n    <div class=\"Cloud Foreground\"></div>\r\n    <div class=\"Cloud Background\"></div>\r\n    <div class=\"Cloud Background\"></div>\r\n    <div class=\"Cloud Foreground\"></div>\r\n    <div class=\"Cloud Background\"></div>\r\n    <div class=\"Cloud Background\"></div>\r\n  \r\n  </div>\r\n  \r\n  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n     width=\"40px\" height=\"24px\" viewBox=\"0 0 40 24\" enable- xml:space=\"preserve\">\r\n    <defs>\r\n      <path id=\"Cloud\" d=\"M33.85,14.388c-0.176,0-0.343,0.034-0.513,0.054c0.184-0.587,0.279-1.208,0.279-1.853c0-3.463-2.809-6.271-6.272-6.271\r\n    c-0.38,0-0.752,0.039-1.113,0.104C24.874,2.677,21.293,0,17.083,0c-5.379,0-9.739,4.361-9.739,9.738\r\n    c0,0.418,0.035,0.826,0.084,1.229c-0.375-0.069-0.761-0.11-1.155-0.11C2.811,10.856,0,13.665,0,17.126\r\n    c0,3.467,2.811,6.275,6.272,6.275c0.214,0,27.156,0.109,27.577,0.109c2.519,0,4.56-2.043,4.56-4.562\r\n    C38.409,16.43,36.368,14.388,33.85,14.388z\"/>\r\n    </defs>\r\n  </svg>\r\n\r\n  <div class=\"container-fluid\" >\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-12 col-sm-12\" style=\"z-index: 99 !important;margin-top: -70px;\">\r\n          <ion-grid>\r\n            <ion-row>\r\n          <ion-col size=\"12\" class=\"text-center\" size-lg>\r\n            <h3>Application</h3>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg>\r\n          <form class=\"example-form\">\r\n              <mat-form-field class=\"full-width\">\r\n              <input matInput placeholder=\"Username\">\r\n              <mat-icon id=\"passwordvisibility\" matSuffix></mat-icon>\r\n              </mat-form-field>\r\n      \r\n              <mat-form-field class=\"full-width mt-3\">\r\n                <input type=\"password\" matInput placeholder=\"Password\">\r\n                <mat-icon id=\"passwordvisibility\" class=\"showhidepassword\" matSuffix>visibility</mat-icon>\r\n              </mat-form-field>\r\n      \r\n              <div class=\"row p-2\">\r\n                <button mat-raised-button class=\"full-width p-1 signin-btn\" routerLink=\"tabs\" routerLinkActive=\"active\" color=\"primary\">Sign In</button>\r\n              </div>\r\n              <ion-grid class=\"p-1\">\r\n                  <ion-row>\r\n                    <ion-col size=\"6\" class=\"text-center\">\r\n                          <ion-button fill=\"outline\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>&nbsp;Facebook</ion-button>\r\n                      </ion-col>\r\n                      <ion-col size=\"6\" class=\"text-center\">\r\n                        <ion-button fill=\"outline\"  color=\"danger\" (click)=\"doGoogleLogin()\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>&nbsp;Google</ion-button>\r\n                      </ion-col>\r\n              </ion-row>\r\n          </ion-grid>  \r\n                          \r\n              <ion-grid class=\"p-1\">\r\n                  <ion-row>\r\n                    <ion-col  size=\"6\" size-lg class=\"text-nowrap text-left\" (click)='forgotpassword()'>\r\n                        <label class=\"anchoreffect\">Forgot password?</label>\r\n                    </ion-col>\r\n                    <ion-col  size=\"6\" size-lg size-lg class=\"text-nowrap text-left\" (click)='signup()'>\r\n                        <label class=\"anchoreffect\">New User? Sign up</label>\r\n                    </ion-col>\r\n              </ion-row>\r\n          </ion-grid>                \r\n            </form>\r\n          </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n      <div class=\"waveWrapperInner bgTop\">\r\n        <div class=\"wave waveTop\" style=\"background-image: url('../../assets/images/home/wave-top.png')\"></div>\r\n      </div>\r\n      <div class=\"waveWrapperInner bgMiddle\">\r\n        <div class=\"wave waveMiddle\" style=\"background-image: url('../../assets/images/home/wave-mid.png')\"></div>\r\n      </div>\r\n      <div class=\"waveWrapperInner bgBottom\">\r\n        <div class=\"wave waveBottom\" style=\"background-image: url('../../assets/images/home/wave-bot.png')\"></div>\r\n      </div>\r\n    </div> \r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\n.anchoreffect {\n  cursor: pointer;\n  color: grey;\n  font-size: 14px; }\n\n.showhidepassword {\n  cursor: pointer;\n  color: grey;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTWF5dXIgMjMtNy0xOFxcMjAxOVxcSU9OSUNcXGFwcGxpY2F0aW9uL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUyxFQUFBOztBQUVYO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcclxuICBtYXJnaW46IDA7IFxyXG59XHJcbi5hbmNob3JlZmZlY3Rcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnNob3doaWRlcGFzc3dvcmRcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");




var HomePage = /** @class */ (function () {
    function HomePage(router, googlePlus) {
        this.router = router;
        this.googlePlus = googlePlus;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.forgotpassword = function () {
        this.router.navigate(['/forgetpassword']);
    };
    HomePage.prototype.signup = function () {
        this.router.navigate(['/signup']);
    };
    HomePage.prototype.doGoogleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.googlePlus.login({
                    'scopes': '',
                    'webClientId': '845071957408-r972ktpie7b67krv50r8a7s7sqofb52p.apps.googleusercontent.com',
                    'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
                })
                    .then(function (user) {
                    alert(JSON.stringify(user));
                    // this.nativeStorage.setItem('google_user', {
                    //   name: user.displayName,
                    //   email: user.email,
                    //   picture: user.imageUrl
                    // })
                    // .then(() =>{
                    //   this.router.navigate(["/user"]);
                    // }, error =>{
                    //   console.log(error);
                    // })
                    // loading.dismiss();
                }, function (err) {
                    alert(JSON.stringify({ err: err }));
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss"), __webpack_require__(/*! ./home.style.less */ "./src/app/home/home.style.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__["GooglePlus"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
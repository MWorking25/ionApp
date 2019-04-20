(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgetpassword-forgetpassword-module"],{

/***/ "./src/app/forgetpassword/forgetpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgetpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordPageModule", function() { return ForgetpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-otp/verify-otp.component */ "./src/app/forgetpassword/verify-otp/verify-otp.component.ts");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/forgetpassword/resetpassword/resetpassword.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _forgetpassword_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgetpassword.page */ "./src/app/forgetpassword/forgetpassword.page.ts");










var routes = [
    {
        path: '',
        component: _forgetpassword_page__WEBPACK_IMPORTED_MODULE_9__["ForgetpasswordPage"]
    },
    {
        path: 'verifyOtp',
        component: _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_5__["VerifyOtpComponent"]
    },
    {
        path: 'verifyOtp/resetPassword',
        component: _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordComponent"]
    }
];
var ForgetpasswordPageModule = /** @class */ (function () {
    function ForgetpasswordPageModule() {
    }
    ForgetpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"]
            ],
            declarations: [_forgetpassword_page__WEBPACK_IMPORTED_MODULE_9__["ForgetpasswordPage"], _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_5__["VerifyOtpComponent"], _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordComponent"]]
        })
    ], ForgetpasswordPageModule);
    return ForgetpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgetpassword/forgetpassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  <ion-header >\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Forgot Password</ion-title>\r\n     \r\n           <ion-avatar slot=\"end\" style=\"height:40px;width:40px;\">\r\n            <img src=\"https://www.w3schools.com/w3images/avatar2.png\">\r\n          </ion-avatar> \r\n        \r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n\r\n  <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"home\"\r\n          [icon]=\"buttonIcon\"></ion-back-button>\r\n        </ion-buttons>\r\n        \r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n  <ion-content class=\"ion-container\">\r\n  <div class=\"container-fluid\" >\r\n      <div class=\"row mt-4\">\r\n        <div class=\"col-12 col-md-12 col-sm-12\" style=\"z-index: 99 !important;\">\r\n          <ion-grid>\r\n            <ion-row>\r\n          <ion-col size=\"12\" size-lg> \r\n            <ion-row>\r\n              <ion-col class=\"ml-auto mr-auto\" size=\"6\">\r\n                 <ion-img  src=\"../../assets/images/forgotpass/key.png\" class=\"img-size\"></ion-img>\r\n                  </ion-col>\r\n            </ion-row>  \r\n            <div class=\"col-12 mt-3\">\r\n                <span class=\"text\">\r\n                  We just need your register Email ID to send your password reset Instruction\r\n                </span>\r\n                \r\n              </div>\r\n          <form class=\"example-form mt-4\">\r\n              <mat-form-field class=\"full-width\">\r\n              <input matInput placeholder=\"Type Your Email\">\r\n              <mat-icon id=\"passwordvisibility\" matSuffix></mat-icon>\r\n              </mat-form-field>\r\n              <div class=\"row p-2\">\r\n                <button mat-raised-button class=\"full-width p-1 signin-btn\" routerLink=\"verifyOtp\" routerLinkActive=\"active\" color=\"primary\">SUBMIT</button>\r\n              </div>\r\n                          \r\n            </form>\r\n          </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n   \r\n</ion-content>"

/***/ }),

/***/ "./src/app/forgetpassword/forgetpassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\n.anchoreffect {\n  cursor: pointer;\n  color: grey;\n  font-size: 14px; }\n\n.showhidepassword {\n  cursor: pointer;\n  color: grey;\n  font-size: 20px; }\n\n.text {\n  color: #616161;\n  font-size: 15px;\n  line-height: 1.7;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzc3dvcmQvRDpcXE1heXVyIDIzLTctMThcXDIwMTlcXElPTklDXFxhcHBsaWNhdGlvbi9zcmNcXGFwcFxcZm9yZ2V0cGFzc3dvcmRcXGZvcmdldHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUyxFQUFBOztBQUVYO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBT25CO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0cGFzc3dvcmQvZm9yZ2V0cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcclxuICBtYXJnaW46IDA7IFxyXG59XHJcbi5hbmNob3JlZmZlY3Rcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnNob3doaWRlcGFzc3dvcmRcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLy8gLmltZy1zaXplXHJcbi8vIHtcclxuLy8gICAgIHdpZHRoOjEwMHB4O1xyXG4vLyB9XHJcblxyXG4udGV4dCB7XHJcbiAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/forgetpassword/forgetpassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgetpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordPage", function() { return ForgetpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgetpasswordPage = /** @class */ (function () {
    function ForgetpasswordPage() {
    }
    ForgetpasswordPage.prototype.ngOnInit = function () {
    };
    ForgetpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgetpassword',
            template: __webpack_require__(/*! ./forgetpassword.page.html */ "./src/app/forgetpassword/forgetpassword.page.html"),
            styles: [__webpack_require__(/*! ./forgetpassword.page.scss */ "./src/app/forgetpassword/forgetpassword.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgetpasswordPage);
    return ForgetpasswordPage;
}());



/***/ }),

/***/ "./src/app/forgetpassword/resetpassword/resetpassword.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/forgetpassword/resetpassword/resetpassword.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"home\"\r\n        [icon]=\"buttonIcon\"></ion-back-button>\r\n      </ion-buttons>\r\n      \r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-content>\r\n  <ion-grid class=\"mt-4\"> \r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n          <ion-text><h4>Set New Password</h4></ion-text>\r\n          <ion-text><p>Be sure your password is safe and strong</p></ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n          <mat-form-field class=\"full-width\">\r\n              <input type=\"password\" matInput placeholder=\"New Password\">\r\n              <mat-icon id=\"passwordvisibility\" class=\"showhidepassword\" matSuffix>visibility</mat-icon>\r\n              </mat-form-field>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n          <mat-form-field class=\"full-width\">\r\n              <input type=\"password\" matInput placeholder=\"Confirm Password\">\r\n              <mat-icon id=\"confirmpasswordvisibility\" class=\"showhidepassword\" matSuffix>visibility</mat-icon>\r\n              </mat-form-field>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n          <button mat-raised-button class=\"full-width p-1\" routerLink=\"resetPassword\" routerLinkActive=\"active\" color=\"primary\">SUBMIT</button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/forgetpassword/resetpassword/resetpassword.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/forgetpassword/resetpassword/resetpassword.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\n.anchoreffect {\n  cursor: pointer;\n  color: grey;\n  font-size: 14px; }\n\n.showhidepassword, .confirmpasswordvisibility {\n  cursor: pointer;\n  color: grey;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC9EOlxcTWF5dXIgMjMtNy0xOFxcMjAxOVxcSU9OSUNcXGFwcGxpY2F0aW9uL3NyY1xcYXBwXFxmb3JnZXRwYXNzd29yZFxccmVzZXRwYXNzd29yZFxccmVzZXRwYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUyxFQUFBOztBQUVYO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4gIG1hcmdpbjogMDsgXHJcbn1cclxuLmFuY2hvcmVmZmVjdFxyXG57XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uc2hvd2hpZGVwYXNzd29yZCAsIC5jb25maXJtcGFzc3dvcmR2aXNpYmlsaXR5XHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/forgetpassword/resetpassword/resetpassword.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/forgetpassword/resetpassword/resetpassword.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent() {
    }
    ResetpasswordComponent.prototype.ngOnInit = function () { };
    ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetpassword.component.html */ "./src/app/forgetpassword/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__(/*! ./resetpassword.component.scss */ "./src/app/forgetpassword/resetpassword/resetpassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/forgetpassword/verify-otp/verify-otp.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/forgetpassword/verify-otp/verify-otp.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"home\"\r\n        [icon]=\"buttonIcon\"></ion-back-button>\r\n      </ion-buttons>\r\n      \r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-content>\r\n  <ion-grid class=\"mt-4\"> \r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n          <ion-text><h4>Verify your account</h4></ion-text>\r\n          <ion-text><p>Enter OTP sent to your registered email id and proceed to reset password</p></ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n          <mat-form-field class=\"full-width\">\r\n              <input matInput placeholder=\"Enter OTP\">\r\n              <mat-icon id=\"passwordvisibility\" matSuffix></mat-icon>\r\n              </mat-form-field>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n          <button mat-raised-button class=\"full-width p-1\" routerLink=\"resetPassword\" routerLinkActive=\"active\" color=\"primary\">SUBMIT</button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/forgetpassword/verify-otp/verify-otp.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/forgetpassword/verify-otp/verify-otp.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldHBhc3N3b3JkL3ZlcmlmeS1vdHAvdmVyaWZ5LW90cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/forgetpassword/verify-otp/verify-otp.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forgetpassword/verify-otp/verify-otp.component.ts ***!
  \*******************************************************************/
/*! exports provided: VerifyOtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOtpComponent", function() { return VerifyOtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VerifyOtpComponent = /** @class */ (function () {
    function VerifyOtpComponent() {
    }
    VerifyOtpComponent.prototype.ngOnInit = function () { };
    VerifyOtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-otp',
            template: __webpack_require__(/*! ./verify-otp.component.html */ "./src/app/forgetpassword/verify-otp/verify-otp.component.html"),
            styles: [__webpack_require__(/*! ./verify-otp.component.scss */ "./src/app/forgetpassword/verify-otp/verify-otp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VerifyOtpComponent);
    return VerifyOtpComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forgetpassword-forgetpassword-module.js.map
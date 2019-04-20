(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-card class=\"fullCard\">\r\n        <img class=\"userImg\" src=\"../../assets/images/home/user.svg\" />\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col col-12 class=\"name\">Mansi Ajgaonkar<span *ngIf=\"data?.middleName\">&nbsp;</span>{{data?.middleName}}<span *ngIf=\"data?.lastName\">&nbsp;</span>{{data?.lastName}}</ion-col>\r\n          </ion-row>\r\n        \r\n    \r\n          <ion-row class=\"rowPadd\" style=\"margin-top: 20px;\">\r\n            <ion-col col-4 class=\"textLeft\">\r\n              <p>Email Id: </p>\r\n            </ion-col>\r\n            <ion-col col-8 class=\"textRight\">\r\n              <p>aj.mansi2025@gmail.com</p>\r\n            </ion-col>\r\n          </ion-row>\r\n    \r\n          <ion-row class=\"rowPadd\">\r\n            <ion-col col-4 class=\"textLeft\">\r\n              <p>Mobile No.: </p>\r\n            </ion-col>\r\n            <ion-col col-8 class=\"textRight\">\r\n              <p>+91-9757348045</p>\r\n            </ion-col>\r\n          </ion-row>\r\n    \r\n          <ion-row *ngIf=\"gmailOrFBLogin == 'false'\" class=\"signout\" (click)=\"gotoChangePassword()\">\r\n            <p>Change Password</p>\r\n            <p class=\"logo\">\r\n              <img src=\"assets/icon/arrow.png\">\r\n            </p>\r\n          </ion-row>\r\n    \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name {\n  font-family: \"OpenSans-Bold\";\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px; }\n\n.changepassword,\n.signout {\n  display: flex;\n  align-items: center;\n  padding: 20px 0;\n  justify-content: center; }\n\n.signout p {\n  font-family: \"OpenSans-Regular\";\n  color: orangered; }\n\n[col-4] {\n  color: #616161; }\n\n[col-8] {\n  color: #303030;\n  font-family: \"OpenSans-Semibold\"; }\n\n.logo img {\n  padding-top: 1px; }\n\n.fullCard {\n  box-shadow: 0px 0px 1px #b1b1b1;\n  border-radius: 5px;\n  width: 95% !important;\n  height: 75% !important; }\n\nion-card-content {\n  text-align: center; }\n\n.userImg {\n  width: 165px;\n  margin: auto;\n  margin-top: 50px; }\n\n.textRight {\n  text-align: right; }\n\n.textLeft {\n  text-align: left; }\n\n.rowPadd {\n  padding: 7px 0;\n  font-family: \"OpenSans-Regular\"; }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 360px) {\n  .rowPadd p {\n    font-size: 14px; }\n  .userImg {\n    width: 95px; }\n  .signout p {\n    font-size: 14px; }\n  .logo img {\n    width: 6px;\n    margin-left: 11px; } }\n\n@media only screen and (min-device-width: 360px) and (max-device-width: 410px) {\n  .rowPadd p {\n    font-size: 16px; }\n  .userImg {\n    width: 105px; }\n  .signout p {\n    font-size: 15px; }\n  .logo img {\n    width: 7px;\n    margin-left: 14px; } }\n\n@media only screen and (min-device-width: 410px) {\n  .rowPadd p {\n    font-size: 16px; }\n  .userImg {\n    width: 125px; }\n  .signout p {\n    font-size: 17px; }\n  .logo img {\n    width: 8px;\n    margin-left: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcTWF5dXIgMjMtNy0xOFxcMjAxOVxcSU9OSUNcXGFwcGxpY2F0aW9uL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUV2Qjs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCLEVBQUE7O0FDQ3BCO0VERUksY0FBYyxFQUFBOztBQ0NsQjtFREVJLGNBQWE7RUFDYixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRTtJQUNFLGVBQWUsRUFBQTtFQUVqQjtJQUNFLFdBQVcsRUFBQTtFQUViO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQixFQUFBLEVBQ2xCOztBQUdIO0VBQ0U7SUFDRSxlQUFlLEVBQUE7RUFFakI7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLGVBQWUsRUFBQTtFQUVqQjtJQUNFLFVBQVU7SUFDVixpQkFBaUIsRUFBQSxFQUNsQjs7QUFHSDtFQUNFO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxlQUFlLEVBQUE7RUFFakI7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWV7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1Cb2xkXCI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIH1cclxuICAuY2hhbmdlcGFzc3dvcmQsXHJcbiAgLnNpZ25vdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNpZ25vdXQgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zLVJlZ3VsYXJcIjtcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gIH1cclxuICBbY29sLTRde1xyXG4gICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgfVxyXG4gIFtjb2wtOF17XHJcbiAgICBjb2xvcjojMzAzMDMwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaWJvbGRcIjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ28gaW1nIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgfVxyXG4gIC5mdWxsQ2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAjYjFiMWIxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA3NSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC51c2VySW1nIHtcclxuICAgIHdpZHRoOiAxNjVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC50ZXh0UmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC50ZXh0TGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAucm93UGFkZHtcclxuICAgIHBhZGRpbmc6IDdweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtUmVndWxhclwiO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDozMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOjM2MHB4KSB7XHJcbiAgICAucm93UGFkZCBwe1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAudXNlckltZ3tcclxuICAgICAgd2lkdGg6IDk1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lnbm91dCBwe1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubG9nbyBpbWcge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTFweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6MzYwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDo0MTBweCkge1xyXG4gICAgLnJvd1BhZGQgcHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXJJbWd7XHJcbiAgICAgIHdpZHRoOiAxMDVweDtcclxuICAgIH1cclxuICAgIC5zaWdub3V0IHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5sb2dvIGltZyB7XHJcbiAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDo0MTBweCkge1xyXG4gICAgLnJvd1BhZGQgcHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXJJbWd7XHJcbiAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgIH1cclxuICAgIC5zaWdub3V0IHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuICAgIC5sb2dvIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH0iLCIubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zLUJvbGRcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7IH1cblxuLmNoYW5nZXBhc3N3b3JkLFxuLnNpZ25vdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5zaWdub3V0IHAge1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiBvcmFuZ2VyZWQ7IH1cblxuW2NvbC00XSB7XG4gIGNvbG9yOiAjNjE2MTYxOyB9XG5cbltjb2wtOF0ge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaWJvbGRcIjsgfVxuXG4ubG9nbyBpbWcge1xuICBwYWRkaW5nLXRvcDogMXB4OyB9XG5cbi5mdWxsQ2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICNiMWIxYjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDc1JSAhaW1wb3J0YW50OyB9XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnVzZXJJbWcge1xuICB3aWR0aDogMTY1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDsgfVxuXG4udGV4dFJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnRleHRMZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4ucm93UGFkZCB7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1SZWd1bGFyXCI7IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMzYwcHgpIHtcbiAgLnJvd1BhZGQgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4OyB9XG4gIC51c2VySW1nIHtcbiAgICB3aWR0aDogOTVweDsgfVxuICAuc2lnbm91dCBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMXB4OyB9IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzYwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDEwcHgpIHtcbiAgLnJvd1BhZGQgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4OyB9XG4gIC51c2VySW1nIHtcbiAgICB3aWR0aDogMTA1cHg7IH1cbiAgLnNpZ25vdXQgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4OyB9XG4gIC5sb2dvIGltZyB7XG4gICAgd2lkdGg6IDdweDtcbiAgICBtYXJnaW4tbGVmdDogMTRweDsgfSB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxMHB4KSB7XG4gIC5yb3dQYWRkIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDsgfVxuICAudXNlckltZyB7XG4gICAgd2lkdGg6IDEyNXB4OyB9XG4gIC5zaWdub3V0IHAge1xuICAgIGZvbnQtc2l6ZTogMTdweDsgfVxuICAubG9nbyBpbWcge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map
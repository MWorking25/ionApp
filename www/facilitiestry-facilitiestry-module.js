(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facilitiestry-facilitiestry-module"],{

/***/ "./src/app/facilitiestry/facilitiestry.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/facilitiestry/facilitiestry.module.ts ***!
  \*******************************************************/
/*! exports provided: FacilitiestryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiestryPageModule", function() { return FacilitiestryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _facilitiestry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facilitiestry.page */ "./src/app/facilitiestry/facilitiestry.page.ts");







var routes = [
    {
        path: '',
        component: _facilitiestry_page__WEBPACK_IMPORTED_MODULE_6__["FacilitiestryPage"]
    },
];
var FacilitiestryPageModule = /** @class */ (function () {
    function FacilitiestryPageModule() {
    }
    FacilitiestryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_facilitiestry_page__WEBPACK_IMPORTED_MODULE_6__["FacilitiestryPage"]]
        })
    ], FacilitiestryPageModule);
    return FacilitiestryPageModule;
}());



/***/ }),

/***/ "./src/app/facilitiestry/facilitiestry.page.html":
/*!*******************************************************!*\
  !*** ./src/app/facilitiestry/facilitiestry.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-icon name=\"close\" (click)=\"backClicked()\" slot=\"start\" class=\"ml-3 mediumicon\" ></ion-icon>\r\n      <ion-title>AMENITIES</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n      <ion-item *ngFor='let _amenities of amenities'>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"3\" style=\"white-space: nowrap;\">\r\n                  <!-- <ion-icon  name=\"{{_amenities.icon}}\" class=\"mr-auto mediumicon\"></ion-icon> -->\r\n                  <img src=\"../../assets/images/icons/{{_amenities.icon}}.png\">\r\n              </ion-col>\r\n              <ion-col size=\"9\" style=\"white-space: nowrap;\">\r\n                <ion-label class=\"ml-2 mediumtext text-left\"><b>{{_amenities.header}}</b></ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n              <ion-row>\r\n              <ion-col size=\"12\">\r\n                  <ul>\r\n                      <li *ngFor=\"let _subheader of _amenities.subheader\" class=\" col-6 mr-auto\">\r\n                      {{_subheader}}\r\n                    </li>\r\n                  </ul>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/facilitiestry/facilitiestry.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/facilitiestry/facilitiestry.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mediumtext {\n  font-size: 18px; }\n\n.mediumicon {\n  font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjaWxpdGllc3RyeS9EOlxcTWF5dXIgMjMtNy0xOFxcMjAxOVxcSU9OSUNcXGFwcGxpY2F0aW9uL3NyY1xcYXBwXFxmYWNpbGl0aWVzdHJ5XFxmYWNpbGl0aWVzdHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQWUsRUFBQTs7QUFFbkI7RUFFSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mYWNpbGl0aWVzdHJ5L2ZhY2lsaXRpZXN0cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZGl1bXRleHRcclxue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5tZWRpdW1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/facilitiestry/facilitiestry.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/facilitiestry/facilitiestry.page.ts ***!
  \*****************************************************/
/*! exports provided: FacilitiestryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiestryPage", function() { return FacilitiestryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var FacilitiestryPage = /** @class */ (function () {
    function FacilitiestryPage(route, router, _location) {
        this.route = route;
        this.router = router;
        this._location = _location;
        this.amenities = [{ icon: 'chair', header: 'Dining', subheader: ['Restaurant', 'Bar'] },
            { icon: 'wifi', header: 'Internet', subheader: ['Free Wifi'] },
            { icon: 'happiness', header: 'Fun', subheader: ['Swimming Pool', 'DJ Night', 'Amusement Park'] },
            { icon: 'cleaning', header: 'Housekeeping', subheader: ['Laundry'] },
            { icon: 'weightlifting', header: 'Fitness', subheader: ['Gym'] },
            { icon: 'reception', header: 'General', subheader: ['Elevator', 'Air Conditing', 'Power Backup', 'Wake-up Call', '40 LED TV', 'Free Parking'] },
        ];
    }
    FacilitiestryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.fieldid = params.get("item");
            console.log(" this.fieldid ", _this.fieldid);
        });
    };
    FacilitiestryPage.prototype.backClicked = function () {
        this._location.back();
    };
    FacilitiestryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facilitiestry',
            template: __webpack_require__(/*! ./facilitiestry.page.html */ "./src/app/facilitiestry/facilitiestry.page.html"),
            styles: [__webpack_require__(/*! ./facilitiestry.page.scss */ "./src/app/facilitiestry/facilitiestry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], FacilitiestryPage);
    return FacilitiestryPage;
}());



/***/ })

}]);
//# sourceMappingURL=facilitiestry-facilitiestry-module.js.map
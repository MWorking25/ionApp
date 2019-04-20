(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journey-journey-module"],{

/***/ "./src/app/journey/journey.module.ts":
/*!*******************************************!*\
  !*** ./src/app/journey/journey.module.ts ***!
  \*******************************************/
/*! exports provided: JourneyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyPageModule", function() { return JourneyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _journey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./journey.page */ "./src/app/journey/journey.page.ts");







var routes = [
    {
        path: '',
        component: _journey_page__WEBPACK_IMPORTED_MODULE_6__["JourneyPage"]
    }
];
var JourneyPageModule = /** @class */ (function () {
    function JourneyPageModule() {
    }
    JourneyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_journey_page__WEBPACK_IMPORTED_MODULE_6__["JourneyPage"]]
        })
    ], JourneyPageModule);
    return JourneyPageModule;
}());



/***/ }),

/***/ "./src/app/journey/journey.page.html":
/*!*******************************************!*\
  !*** ./src/app/journey/journey.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>journey</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/journey/journey.page.scss":
/*!*******************************************!*\
  !*** ./src/app/journey/journey.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuZXkvam91cm5leS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/journey/journey.page.ts":
/*!*****************************************!*\
  !*** ./src/app/journey/journey.page.ts ***!
  \*****************************************/
/*! exports provided: JourneyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyPage", function() { return JourneyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JourneyPage = /** @class */ (function () {
    function JourneyPage() {
    }
    JourneyPage.prototype.ngOnInit = function () {
    };
    JourneyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-journey',
            template: __webpack_require__(/*! ./journey.page.html */ "./src/app/journey/journey.page.html"),
            styles: [__webpack_require__(/*! ./journey.page.scss */ "./src/app/journey/journey.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JourneyPage);
    return JourneyPage;
}());



/***/ })

}]);
//# sourceMappingURL=journey-journey-module.js.map
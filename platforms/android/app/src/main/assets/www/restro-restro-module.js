(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restro-restro-module"],{

/***/ "./src/app/restro/restro.module.ts":
/*!*****************************************!*\
  !*** ./src/app/restro/restro.module.ts ***!
  \*****************************************/
/*! exports provided: RestroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestroPageModule", function() { return RestroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restro.page */ "./src/app/restro/restro.page.ts");







var routes = [
    {
        path: '',
        component: _restro_page__WEBPACK_IMPORTED_MODULE_6__["RestroPage"]
    }
];
var RestroPageModule = /** @class */ (function () {
    function RestroPageModule() {
    }
    RestroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_restro_page__WEBPACK_IMPORTED_MODULE_6__["RestroPage"]]
        })
    ], RestroPageModule);
    return RestroPageModule;
}());



/***/ }),

/***/ "./src/app/restro/restro.page.html":
/*!*****************************************!*\
  !*** ./src/app/restro/restro.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>restro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/restro/restro.page.scss":
/*!*****************************************!*\
  !*** ./src/app/restro/restro.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3Ryby9yZXN0cm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/restro/restro.page.ts":
/*!***************************************!*\
  !*** ./src/app/restro/restro.page.ts ***!
  \***************************************/
/*! exports provided: RestroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestroPage", function() { return RestroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestroPage = /** @class */ (function () {
    function RestroPage() {
    }
    RestroPage.prototype.ngOnInit = function () {
    };
    RestroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restro',
            template: __webpack_require__(/*! ./restro.page.html */ "./src/app/restro/restro.page.html"),
            styles: [__webpack_require__(/*! ./restro.page.scss */ "./src/app/restro/restro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestroPage);
    return RestroPage;
}());



/***/ })

}]);
//# sourceMappingURL=restro-restro-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hotels-hotels-module"],{

/***/ "./src/app/hotels/facilities/facilities.component.html":
/*!*************************************************************!*\
  !*** ./src/app/hotels/facilities/facilities.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home/tabs/hotels/description/{{fieldid}}\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n \r\n\r\n\r\n<ion-content padding>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col text-center>\r\n        ID : {{modelId}}\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col text-center>\r\n        <ion-button (click)=\"closeModal()\">Close Modal</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/hotels/facilities/facilities.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/hotels/facilities/facilities.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVscy9mYWNpbGl0aWVzL2ZhY2lsaXRpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/hotels/facilities/facilities.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/hotels/facilities/facilities.component.ts ***!
  \***********************************************************/
/*! exports provided: FacilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesComponent", function() { return FacilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FacilitiesComponent = /** @class */ (function () {
    function FacilitiesComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    FacilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.fieldid = params.get("id");
        });
    };
    FacilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facilities',
            template: __webpack_require__(/*! ./facilities.component.html */ "./src/app/hotels/facilities/facilities.component.html"),
            styles: [__webpack_require__(/*! ./facilities.component.scss */ "./src/app/hotels/facilities/facilities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacilitiesComponent);
    return FacilitiesComponent;
}());



/***/ }),

/***/ "./src/app/hotels/hotels.module.ts":
/*!*****************************************!*\
  !*** ./src/app/hotels/hotels.module.ts ***!
  \*****************************************/
/*! exports provided: HotelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsPageModule", function() { return HotelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facilities/facilities.component */ "./src/app/hotels/facilities/facilities.component.ts");
/* harmony import */ var _hotels_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hotels.page */ "./src/app/hotels/hotels.page.ts");









var routes = [
    {
        path: '',
        component: _hotels_page__WEBPACK_IMPORTED_MODULE_8__["HotelsPage"]
    },
    {
        path: 'description/:id',
        loadChildren: './full-details/full-details.module#FullDetailsPageModule'
    },
    {
        path: 'description/:id/facilities',
        component: _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_7__["FacilitiesComponent"]
    }
];
var HotelsPageModule = /** @class */ (function () {
    function HotelsPageModule() {
    }
    HotelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hotels_page__WEBPACK_IMPORTED_MODULE_8__["HotelsPage"], _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_7__["FacilitiesComponent"]]
        })
    ], HotelsPageModule);
    return HotelsPageModule;
}());



/***/ }),

/***/ "./src/app/hotels/hotels.page.html":
/*!*****************************************!*\
  !*** ./src/app/hotels/hotels.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Application</ion-title>\r\n   \r\n        <ion-avatar slot=\"end\" style=\"height:40px;width:40px;\">\r\n          <img src=\"https://www.w3schools.com/w3images/avatar2.png\">\r\n        </ion-avatar>\r\n      \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-toolbar>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n          <ion-searchbar></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n          <ion-button fill=\"outline\" class=\"mt-2\"  color=\"medium\">\r\n              <ion-icon name=\"options\"></ion-icon>\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-toolbar>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content\r\n          pullingIcon=\"arrow-dropdown\"\r\n          pullingText=\"Pull to refresh\"\r\n          refreshingSpinner=\"circles\"\r\n          refreshingText=\"Refreshing...\">\r\n        </ion-refresher-content>\r\n      </ion-refresher>\r\n\r\n   \r\n      <ion-slides #mySlider (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\" pager=\"true\" [options]=\"slideOpts\">\r\n          <ion-slide>\r\n          <img class=\"slider-image\" src=\"../../assets/images/misc/3.jpg\">\r\n          </ion-slide>\r\n          <ion-slide>\r\n          <img class=\"slider-image\"  src=\"../../assets/images/misc/3.jpg\">\r\n          </ion-slide>\r\n          <ion-slide>\r\n          <img class=\"slider-image\"  src=\"../../assets/images/misc/3.jpg\">\r\n          </ion-slide>\r\n          </ion-slides>\r\n\r\n              \r\n\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                  <ion-card *ngFor=\"let obj of items;let i = index;\"(click)=\"redirectionToUrl('/description', i)\">\r\n                        <div class=\"row\">\r\n                            <img src=\"../../assets/images/misc/3.jpg\" class=\"img-fluid img-thumbnail\" style=\"min-height:150px;max-height:150px;width: 100%;max-width: 100%;min-width: 100%;\">\r\n                        </div>\r\n                        \r\n                      <ion-item>\r\n                        <ion-label>{{obj.name}}</ion-label>\r\n                        <ion-label slot=\"end\" class=\"text-right\"><span *ngFor=\"let stars of [1,2,3,4,5]\"><i class=\"fa fa-star\" *ngIf=\"stars <= 3\" style=\"color:goldenrod\" aria-hidden=\"true\"></i><i class=\"fa fa-star-o\" *ngIf=\"stars > 3\" aria-hidden=\"true\"></i></span></ion-label>\r\n                      </ion-item>\r\n                     \r\n                      <ion-card-content>\r\n                          <ion-fab horizontal=\"end\" slot=\"fixed\" style=\"margin-top: -97px\">\r\n                              <ion-fab-button color=\"light\" size=\"small\" >\r\n                                  <ion-icon *ngIf=\"i % 2 == 1\" name=\"heart\" style=\"color:rgb(250, 48, 48)\"></ion-icon>\r\n                                  <ion-icon *ngIf=\"i % 2 == 0\" name=\"heart-empty\"></ion-icon>\r\n                              </ion-fab-button>\r\n                            </ion-fab>\r\n                       {{obj.address}}, {{obj.state}}\r\n                      </ion-card-content>\r\n                      <ion-card-content>\r\n                        <ion-grid>\r\n                          <ion-row>\r\n                            <ion-col size=\"6\">\r\n                                <ion-text color=\"dark\">\r\n                                    <h5>Included in this price</h5>\r\n                                    <ul>\r\n                                      <li>Breackfast</li>\r\n                                      <li>WIFI</li>\r\n                                      <li>Swimming</li>\r\n                                    </ul>\r\n                                  </ion-text>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" style=\"text-align: right\">\r\n                                <ion-button fill=\"outline\">{{2500 * (i+10) | currency:\"₹\" }}</ion-button>\r\n                                <ion-button fill=\"outline\" color=\"danger\" style=\"text-decoration: line-through;\">{{2500 * (i+13) | currency:\"₹\" }}</ion-button>\r\n                            \r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                         \r\n                      </ion-card-content>\r\n                        <ion-card-header>\r\n                          {{ 30 * (i +12.5)}} reviews for this.\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          \r\n\r\n\r\n          \r\n\r\n              <!-- <ion-card *ngFor=\"let obj of items\">\r\n\r\n                  <ion-item>\r\n                    <ion-avatar item-start>\r\n                      <img src=\"../../assets/images/misc/3.jpg\">\r\n                    </ion-avatar>\r\n                    <h2 text-capitalize>\r\n                      {{obj.name}}\r\n                      <ion-badge>\r\n                        <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                      </ion-badge>\r\n                    </h2>\r\n                    <p text-capitalize>\r\n                      {{obj.phone}}\r\n                    </p>\r\n                \r\n                    <button ion-button item-end clear>\r\n                      <ion-icon name=\"add-circle\"></ion-icon>\r\n                    </button>\r\n                \r\n                    <button ion-button item-end clear>\r\n                      <ion-icon name=\"trash\"></ion-icon>\r\n                    </button>\r\n                \r\n                    <button ion-button item-end clear>\r\n                      <ion-icon name=\"create\"></ion-icon>\r\n                    </button>\r\n                \r\n                  </ion-item>\r\n                \r\n                  <ion-card-content>\r\n                    <p>{{obj.address}} {{obj.address2}}</p>\r\n                  </ion-card-content>\r\n                \r\n                  <ion-row>\r\n                    <ion-col text-left>\r\n                      <button ion-button icon-start clear small (click)=\"like(obj, $event)\">\r\n                        <ion-icon name=\"happy\"></ion-icon>\r\n                        <div>{{obj.like}}</div>\r\n                      </button>\r\n                    </ion-col>\r\n                \r\n                    <ion-col text-center>\r\n                      <button ion-button icon-start clear small>\r\n                        <ion-icon name=\"add\"></ion-icon>\r\n                        <div>Ver más.</div>\r\n                      </button>\r\n                    </ion-col>\r\n                \r\n                    <ion-col text-right>\r\n                      <button ion-button clear small>\r\n                        <ion-icon name=\"paper-plane\"></ion-icon>\r\n                      </button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                \r\n                </ion-card> -->\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/hotels/hotels.page.ts":
/*!***************************************!*\
  !*** ./src/app/hotels/hotels.page.ts ***!
  \***************************************/
/*! exports provided: HotelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsPage", function() { return HotelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hotels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotels.service */ "./src/app/hotels/hotels.service.ts");




var HotelsPage = /** @class */ (function () {
    function HotelsPage(router, _hotelService) {
        this.router = router;
        this._hotelService = _hotelService;
        this.cardSettings = {
            theme: 'ios'
        };
        this.slideOpts = {
            loop: true,
        };
    }
    HotelsPage.prototype.ngOnInit = function () {
        this.getItemsList();
    };
    HotelsPage.prototype.getItemsList = function () {
        var _this = this;
        this._hotelService.getItemsList().subscribe(function (res) {
            _this.items = res;
        });
    };
    HotelsPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    HotelsPage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 600);
    };
    HotelsPage.prototype.redirectionToUrl = function (path, fieldid) {
        this.router.navigate([path, fieldid]);
    };
    HotelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotels',
            template: __webpack_require__(/*! ./hotels.page.html */ "./src/app/hotels/hotels.page.html"),
            styles: [__webpack_require__(/*! ./hotels.page.scss */ "./src/app/hotels/hotels.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _hotels_service__WEBPACK_IMPORTED_MODULE_3__["HotelsService"]])
    ], HotelsPage);
    return HotelsPage;
}());



/***/ })

}]);
//# sourceMappingURL=hotels-hotels-module.js.map
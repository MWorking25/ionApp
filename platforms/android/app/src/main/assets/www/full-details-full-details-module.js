(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["full-details-full-details-module"],{

/***/ "./src/app/hotels/full-details/full-details.module.ts":
/*!************************************************************!*\
  !*** ./src/app/hotels/full-details/full-details.module.ts ***!
  \************************************************************/
/*! exports provided: FullDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullDetailsPageModule", function() { return FullDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _full_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./full-details.page */ "./src/app/hotels/full-details/full-details.page.ts");







var routes = [
    {
        path: '',
        component: _full_details_page__WEBPACK_IMPORTED_MODULE_6__["FullDetailsPage"]
    },
    { path: 'facilitiestry/:id', loadChildren: '../../facilitiestry/facilitiestry.module#FacilitiestryPageModule', pathMatch: 'full' },
];
var FullDetailsPageModule = /** @class */ (function () {
    function FullDetailsPageModule() {
    }
    FullDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_full_details_page__WEBPACK_IMPORTED_MODULE_6__["FullDetailsPage"]],
            entryComponents: []
        })
    ], FullDetailsPageModule);
    return FullDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/hotels/full-details/full-details.page.html":
/*!************************************************************!*\
  !*** ./src/app/hotels/full-details/full-details.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home/tabs/hotels\"\r\n      [icon]=\"buttonIcon\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{fielddetails.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"row\">\r\n      <ion-slides #mySlider (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\" pager=\"true\" [options]=\"slideOpts\">\r\n          <ion-slide>\r\n          <img class=\"slider-image details-slider\" src=\"../../assets/images/misc/3.jpg\">\r\n          </ion-slide>\r\n          <ion-slide>\r\n          <img class=\"slider-image details-slider\"  src=\"../../assets/images/misc/3.jpg\">\r\n          </ion-slide>\r\n          <ion-slide>\r\n          <img class=\"slider-image details-slider\"  src=\"../../assets/images/misc/3.jpg\">\r\n          </ion-slide>\r\n          </ion-slides>\r\n          <ion-fab horizontal=\"end\" slot=\"fixed\" style=\"margin-top: 167px\">\r\n              <ion-fab-button color=\"light\" size=\"small\" >\r\n                  <ion-icon *ngIf=\"fieldid % 2 == 1\" name=\"heart\" style=\"color:rgb(250, 48, 48)\"></ion-icon>\r\n                  <ion-icon *ngIf=\"fieldid % 2 == 0\" name=\"heart-empty\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab>\r\n  </div>\r\n  <ion-grid>\r\n      <ion-row>\r\n          <ion-col size=\"12\">\r\n              <ion-item>\r\n                  \r\n                  <ion-text><h5>{{fielddetails.name}}</h5></ion-text>\r\n                  <ion-label slot=\"end\" class=\"text-right\"><span *ngFor=\"let stars of [1,2,3,4,5]\"><i class=\"fa fa-star\" *ngIf=\"stars <= 3\" style=\"color:goldenrod\" aria-hidden=\"true\"></i><i class=\"fa fa-star-o\" *ngIf=\"stars > 3\" aria-hidden=\"true\"></i></span></ion-label>\r\n                </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-grid>\r\n            <ion-row class=\"pb-4\">\r\n                <ion-col size=\"3\">\r\n                    \r\n                    <ion-fab>\r\n                        <ion-fab-button color=\"light\" size=\"large\" >\r\n                            <ion-icon name=\"pin\"></ion-icon>\r\n                        </ion-fab-button>\r\n                        <ion-label class=\"mt-2\">Location</ion-label>\r\n                      </ion-fab>\r\n                    \r\n                    </ion-col>\r\n                <ion-col size=\"3\">\r\n                    <ion-fab>\r\n                        <ion-fab-button color=\"light\" (click)=\"openNewScreen('/hotelphotos')\" size=\"large\" >\r\n                            <ion-icon name=\"images\"></ion-icon>\r\n                        </ion-fab-button>\r\n                        <ion-label class=\"mt-2\">Photos</ion-label><br>\r\n                        <!-- <ion-label class=\"mt-2\">49</ion-label> -->\r\n                      </ion-fab>\r\n                    </ion-col>\r\n                <ion-col size=\"3\">\r\n                    <ion-fab>\r\n                        <ion-fab-button color=\"light\" (click)=\"openNewScreen('/hotelreview')\" size=\"large\" >\r\n                            <ion-icon name=\"thumbs-up\"></ion-icon>\r\n                        </ion-fab-button>\r\n                        <ion-label class=\"mt-2\">Reviews</ion-label><br>\r\n                        <!-- <ion-label class=\"mt-2\">178</ion-label> -->\r\n                      </ion-fab>\r\n                    </ion-col>\r\n                <ion-col size=\"3\">\r\n                    <ion-fab>\r\n                        <ion-fab-button color=\"light\"  (click)=\"openNewScreen('/facilitiestry')\" size=\"large\" >\r\n                            <ion-icon name=\"bed\"></ion-icon>\r\n                        </ion-fab-button>\r\n                        <ion-label class=\"mt-2\">Facilities</ion-label><br>\r\n                        <!-- <ion-label class=\"mt-2\">16</ion-label> -->\r\n                      </ion-fab>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  </ion-grid>\r\n          </ion-col>\r\n      </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\" color=\"dark\">\r\n      \r\n      <ion-tab-button>\r\n        <ion-label class=\"mr-auto\" color=\"light\"><p  style=\"text-decoration: line-through;\">{{2500 * (fieldid+13) | currency:\"₹\" }}</p></ion-label>\r\n        <ion-label class=\"mr-auto\" color=\"light\"><h1>{{2500 * (fieldid+10) | currency:\"₹\" }}</h1></ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button>\r\n        <ion-button expand=\"full\" fill=\"outline\">Book Now</ion-button>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n\r\n  </ion-tabs>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/hotels/full-details/full-details.page.scss":
/*!************************************************************!*\
  !*** ./src/app/hotels/full-details/full-details.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-slider {\n  min-height: 200px;\n  max-height: 200px;\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxzL2Z1bGwtZGV0YWlscy9EOlxcTWF5dXIgMjMtNy0xOFxcMjAxOVxcSU9OSUNcXGFwcGxpY2F0aW9uL3NyY1xcYXBwXFxob3RlbHNcXGZ1bGwtZGV0YWlsc1xcZnVsbC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob3RlbHMvZnVsbC1kZXRhaWxzL2Z1bGwtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy1zbGlkZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/hotels/full-details/full-details.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/hotels/full-details/full-details.page.ts ***!
  \**********************************************************/
/*! exports provided: FullDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullDetailsPage", function() { return FullDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hotels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hotels.service */ "./src/app/hotels/hotels.service.ts");




var FullDetailsPage = /** @class */ (function () {
    function FullDetailsPage(route, router, _hotelService) {
        this.route = route;
        this.router = router;
        this._hotelService = _hotelService;
        this.fielddetails = [];
        this.slideOpts = {
            loop: true,
        };
    }
    FullDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.fieldid = params.get("id");
            _this.getFulldescription(_this.fieldid);
        });
    };
    FullDetailsPage.prototype.getFulldescription = function (fieldid) {
        var _this = this;
        this._hotelService.getFieldDetails(fieldid).subscribe(function (res) {
            _this.fielddetails = res;
        });
    };
    FullDetailsPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    FullDetailsPage.prototype.openNewScreen = function (path) {
        this.router.navigate([path, this.fieldid]);
    };
    FullDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-details',
            template: __webpack_require__(/*! ./full-details.page.html */ "./src/app/hotels/full-details/full-details.page.html"),
            styles: [__webpack_require__(/*! ./full-details.page.scss */ "./src/app/hotels/full-details/full-details.page.scss"), __webpack_require__(/*! ../hotels.page.scss */ "./src/app/hotels/hotels.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _hotels_service__WEBPACK_IMPORTED_MODULE_3__["HotelsService"]])
    ], FullDetailsPage);
    return FullDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=full-details-full-details-module.js.map
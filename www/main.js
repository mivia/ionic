(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-table></app-table>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'table';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/band.service.ts":
/*!*********************************!*\
  !*** ./src/app/band.service.ts ***!
  \*********************************/
/*! exports provided: BandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandService", function() { return BandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mocks_mock_bands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mocks/mock-bands */ "./src/app/mocks/mock-bands.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/constants */ "./src/app/common/constants.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var initialBands = _mocks_mock_bands__WEBPACK_IMPORTED_MODULE_2__["BANDS"].slice();
var BandService = /** @class */ (function () {
    function BandService() {
        this.bands$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_mocks_mock_bands__WEBPACK_IMPORTED_MODULE_2__["BANDS"]);
    }
    BandService.prototype.getBands = function () {
        return this.bands$;
    };
    BandService.prototype.deleteById = function (bandId) {
        var bandsData = this.bands$.value;
        var newBandsData = bandsData.filter(function (band) {
            return band.id !== bandId;
        });
        this.bands$.next(newBandsData);
    };
    BandService.prototype.rateBand = function (bandId, direction) {
        var bandsDataCopy = this.bands$.value.slice();
        var bandToUpdate = bandsDataCopy.find(function (band) {
            return band.id === bandId;
        });
        var bandIndex = bandsDataCopy.indexOf(bandToUpdate);
        if (bandToUpdate.rating > _common_constants__WEBPACK_IMPORTED_MODULE_3__["RATING_INTERVALL"].BOTTOM && direction === _common_constants__WEBPACK_IMPORTED_MODULE_3__["DIRECTIONS"].DOWN) {
            bandToUpdate.rating--;
        }
        if (bandToUpdate.rating < _common_constants__WEBPACK_IMPORTED_MODULE_3__["RATING_INTERVALL"].TOP && direction === _common_constants__WEBPACK_IMPORTED_MODULE_3__["DIRECTIONS"].UP) {
            bandToUpdate.rating++;
        }
        bandsDataCopy[bandIndex] = bandToUpdate;
        this.bands$.next(bandsDataCopy);
    };
    BandService.prototype.reset = function () {
        this.bands$.next(_mocks_mock_bands__WEBPACK_IMPORTED_MODULE_2__["BANDS"]);
    };
    BandService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BandService);
    return BandService;
}());



/***/ }),

/***/ "./src/app/common/constants.js":
/*!*************************************!*\
  !*** ./src/app/common/constants.js ***!
  \*************************************/
/*! exports provided: DIRECTIONS, RATING_INTERVALL, RATING_STARS_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTIONS", function() { return DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_INTERVALL", function() { return RATING_INTERVALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_STARS_COUNT", function() { return RATING_STARS_COUNT; });
const DIRECTIONS = {
    UP: 'UP',
    DOWN: 'DOWN'
}

const RATING_INTERVALL = {
    TOP: 10,
    BOTTOM: 0
}

const RATING_STARS_COUNT = 10;

/***/ }),

/***/ "./src/app/mocks/mock-bands.ts":
/*!*************************************!*\
  !*** ./src/app/mocks/mock-bands.ts ***!
  \*************************************/
/*! exports provided: BANDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANDS", function() { return BANDS; });
var BANDS = [
    {
        id: 1,
        name: 'RHCP',
        rating: 0
    },
    {
        id: 2,
        name: 'Audioslave',
        rating: 0
    },
    {
        id: 3,
        name: 'Rage against the machine',
        rating: 0
    }
];


/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#rating {\n    position: relative;\n    bottom: 5px;    \n}\n\n.rate-icon {\n    cursor: pointer;\n}\n\n.table {\n    margin: 50px auto;\n}\n\n.icon--gold {\n    color: #FFD700;\n}"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" cdk-table [dataSource]=\"tableDataSource$\">\n  <ng-container cdkColumnDef=\"id\">\n    <th cdk-header-cell *cdkHeaderCellDef> Band ID </th>\n    <td cdk-cell *cdkCellDef=\"let band\"> {{band.id}} </td>\n  </ng-container>\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Band name </th>\n    <td cdk-cell *cdkCellDef=\"let band\"> {{band.name}} </td>\n  </ng-container>\n  <ng-container cdkColumnDef=\"actions\">\n    <th cdk-header-cell *cdkHeaderCellDef> Actions </th>\n    <td cdk-cell *cdkCellDef=\"let band\">\n      <i class=\"material-icons\" (click)=\"deleteBand(band.id)\">\n        delete_forever\n      </i>\n    </td>\n  </ng-container>\n  <ng-container cdkColumnDef=\"rating\">\n    <th cdk-header-cell *cdkHeaderCellDef> Rating </th>\n    <td cdk-cell *cdkCellDef=\"let band\" class=\"rate-cell\">\n      <i class=\"material-icons rate-icon\" (click)=\"rateUp(band.id)\">\n        add\n      </i>\n      <span id=\"rating\">{{band.rating}}</span>\n      <i class=\"material-icons rate-icon\" (click)=\"rateDown(band.id)\">\n        remove\n      </i>\n    </td> \n  </ng-container>\n  <ng-container cdkColumnDef=\"stars\">\n    <th cdk-header-cell *cdkHeaderCellDef> Stars </th>\n    <td cdk-cell *cdkCellDef=\"let band\">\n      <ng-container *ngFor=\"let star of ratingStars[band.id].full\">\n        <i class=\"material-icons icon--gold\">\n          grade\n        </i>\n      </ng-container>\n      <ng-container *ngFor=\"let star of ratingStars[band.id].empty\">\n        <i class=\"material-icons\">\n          star_border\n        </i>\n      </ng-container>\n    </td>\n  </ng-container>\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns$.value\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns$.value\"></tr>\n</table>\n<button (click)=\"resetTable()\">Reset table</button>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _band_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../band.service */ "./src/app/band.service.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants */ "./src/app/common/constants.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = /** @class */ (function () {
    function TableComponent(bandService) {
        this.bandService = bandService;
        this.tableDataSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.starsCount = _common_constants__WEBPACK_IMPORTED_MODULE_3__["RATING_STARS_COUNT"];
        this.displayedColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([
            'id',
            'name',
            'actions',
            'rating',
            'stars'
        ]);
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bands$ = this.bandService.getBands();
        this.bands$.subscribe(function (changedBandData) {
            _this.tableDataSource$.next(Object.values(changedBandData));
            _this.ratingStars = changedBandData.reduce(function (acc, band) {
                acc[band.id] = {
                    full: Array(band.rating),
                    empty: Array(_this.starsCount - band.rating)
                };
                return acc;
            }, Object.create(null));
        });
    };
    TableComponent.prototype.deleteBand = function (bandId) {
        this.bandService.deleteById(bandId);
    };
    TableComponent.prototype.rateUp = function (bandId) {
        this.bandService.rateBand(bandId, _common_constants__WEBPACK_IMPORTED_MODULE_3__["DIRECTIONS"].UP);
    };
    TableComponent.prototype.rateDown = function (bandId) {
        this.bandService.rateBand(bandId, _common_constants__WEBPACK_IMPORTED_MODULE_3__["DIRECTIONS"].DOWN);
    };
    TableComponent.prototype.resetTable = function () {
        this.bandService.reset();
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_band_service__WEBPACK_IMPORTED_MODULE_2__["BandService"]])
    ], TableComponent);
    return TableComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michal.wiaderek/Desktop/projects/ng6/table/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
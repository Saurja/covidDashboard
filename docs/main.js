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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_cases_cases_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/cases/cases.component */ "./src/app/content/cases/cases.component.ts");
/* harmony import */ var _content_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/notifications/notifications.component */ "./src/app/content/notifications/notifications.component.ts");
/* harmony import */ var _content_helplines_helplines_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/helplines/helplines.component */ "./src/app/content/helplines/helplines.component.ts");






var routes = [
    { path: "", redirectTo: "/cases", pathMatch: "full" },
    { path: "cases", component: _content_cases_cases_component__WEBPACK_IMPORTED_MODULE_3__["CasesComponent"] },
    { path: "notifications", component: _content_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"] },
    { path: "helpline-numbers", component: _content_helplines_helplines_component__WEBPACK_IMPORTED_MODULE_5__["HelplinesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'covidDashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _content_cases_cases_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/cases/cases.component */ "./src/app/content/cases/cases.component.ts");
/* harmony import */ var _content_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/notifications/notifications.component */ "./src/app/content/notifications/notifications.component.ts");
/* harmony import */ var _content_helplines_helplines_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/helplines/helplines.component */ "./src/app/content/helplines/helplines.component.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _content_cases_cases_component__WEBPACK_IMPORTED_MODULE_8__["CasesComponent"],
                _content_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"],
                _content_helplines_helplines_component__WEBPACK_IMPORTED_MODULE_10__["HelplinesComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/cases/cases.component.css":
/*!***************************************************!*\
  !*** ./src/app/content/cases/cases.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY2FzZXMvY2FzZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/content/cases/cases.component.html":
/*!****************************************************!*\
  !*** ./src/app/content/cases/cases.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <div class=\"alert alert-info\" role=\"alert\">\n    Last Refresh: {{ covidCases.lastRefreshed | date: \"short\" }}\n  </div>\n</div>\n\n<div class=\"container text-center\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"alert alert-primary\" role=\"alert\">\n        Confirmed:\n        {{ summaryCases.confirmedCasesIndian | number: \"1.0\":\"en-IN\" }}\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"alert alert-danger\" role=\"alert\">\n        Deaths: {{ summaryCases.deaths | number: \"1.0\":\"en-IN\" }}\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"alert alert-success\" role=\"alert\">\n        Recovered: {{ summaryCases.discharged | number: \"1.0\":\"en-IN\" }}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">State</th>\n          <th scope=\"col\">Confirmed</th>\n          <th scope=\"col\">Deaths</th>\n          <th scope=\"col\">Recovered</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"\n            let statecase of stateWiseCases\n              | paginate: { itemsPerPage: 10, currentPage: p }\n          \"\n        >\n          <th scope=\"row\">{{ statecase.loc }}</th>\n          <td>{{ statecase.confirmedCasesIndian | number: \"1.0\":\"en-IN\" }}</td>\n          <td>{{ statecase.deaths | number: \"1.0\":\"en-IN\" }}</td>\n          <td>{{ statecase.discharged | number: \"1.0\":\"en-IN\" }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/cases/cases.component.ts":
/*!**************************************************!*\
  !*** ./src/app/content/cases/cases.component.ts ***!
  \**************************************************/
/*! exports provided: CasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesComponent", function() { return CasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data.service */ "./src/app/service/data.service.ts");



var CasesComponent = /** @class */ (function () {
    function CasesComponent(dataService) {
        this.dataService = dataService;
        this.p = 1;
    }
    CasesComponent.prototype.ngOnInit = function () {
        this.showLatestCaseCount();
    };
    CasesComponent.prototype.showLatestCaseCount = function () {
        var _this = this;
        this.dataService.getLatestCaseCount().subscribe(function (data) {
            _this.covidCases = data;
            _this.summaryCases = _this.covidCases.data.summary;
            _this.stateWiseCases = _this.covidCases.data.regional;
        });
    };
    CasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cases",
            template: __webpack_require__(/*! ./cases.component.html */ "./src/app/content/cases/cases.component.html"),
            styles: [__webpack_require__(/*! ./cases.component.css */ "./src/app/content/cases/cases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CasesComponent);
    return CasesComponent;
}());



/***/ }),

/***/ "./src/app/content/helplines/helplines.component.css":
/*!***********************************************************!*\
  !*** ./src/app/content/helplines/helplines.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvaGVscGxpbmVzL2hlbHBsaW5lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/helplines/helplines.component.html":
/*!************************************************************!*\
  !*** ./src/app/content/helplines/helplines.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let regionalHelpline of regionalHelplines\">\n      <div class=\"card m-3\">\n        <div class=\"card-body\">\n          <p class=\"card-title\">\n            {{ regionalHelpline.loc }}: {{ regionalHelpline.number }}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/helplines/helplines.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/content/helplines/helplines.component.ts ***!
  \**********************************************************/
/*! exports provided: HelplinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelplinesComponent", function() { return HelplinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data.service */ "./src/app/service/data.service.ts");



var HelplinesComponent = /** @class */ (function () {
    function HelplinesComponent(dataService) {
        this.dataService = dataService;
    }
    HelplinesComponent.prototype.ngOnInit = function () {
        this.getHelplines();
    };
    HelplinesComponent.prototype.getHelplines = function () {
        var _this = this;
        this.dataService.getHelplineNumber().subscribe(function (data) {
            _this.allhelplines = data;
            _this.regionalHelplines = _this.allhelplines.data.contacts.regional;
        });
    };
    HelplinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-helplines",
            template: __webpack_require__(/*! ./helplines.component.html */ "./src/app/content/helplines/helplines.component.html"),
            styles: [__webpack_require__(/*! ./helplines.component.css */ "./src/app/content/helplines/helplines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HelplinesComponent);
    return HelplinesComponent;
}());



/***/ }),

/***/ "./src/app/content/notifications/notifications.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/content/notifications/notifications.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/content/notifications/notifications.component.html":
/*!********************************************************************!*\
  !*** ./src/app/content/notifications/notifications.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <div class=\"alert alert-info\" role=\"alert\">\n    Last Refresh: {{ allnotifications.lastRefreshed | date: \"short\" }}\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    <div\n      class=\"col-md-4\"\n      *ngFor=\"\n        let notification of notifications\n          | paginate: { itemsPerPage: 9, currentPage: p }\n      \"\n    >\n      <div class=\"card m-3\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ notification.title }}</h5>\n          <p class=\"card-text\">\n            <a [href]=\"notification.link\" class=\"card-link\">Click here</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/notifications/notifications.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content/notifications/notifications.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data.service */ "./src/app/service/data.service.ts");



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(dataService) {
        this.dataService = dataService;
        this.p = 1;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        this.getNotifications();
    };
    NotificationsComponent.prototype.getNotifications = function () {
        var _this = this;
        this.dataService.getLatestNotifications().subscribe(function (data) {
            _this.allnotifications = data;
            _this.notifications = _this.allnotifications.data.notifications;
        });
    };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notifications",
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/content/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/content/notifications/notifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <!-- Navbar content -->\n  <div class=\"container\">\n    <a class=\"navbar-brand\"> SARS-CoV-2 Dashboard India </a>\n    <span class=\"navbar-text\">\n      Made by\n      <a class=\"text-decoration-none\" href=\"https://github.com/Saurja\"\n        >@Saurja Ghosh</a\n      >\n    </span>\n  </div>\n</nav>\n\n<div class=\"container p-5\">\n  <div class=\"row\">\n    <ul class=\"nav nav-pills nav-fill\">\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          routerLinkActive=\"active\"\n          aria-current=\"page\"\n          routerLink=\"cases\"\n          >Covid Cases</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"notifications\"\n          >Latest Updates</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          routerLinkActive=\"active\"\n          routerLink=\"helpline-numbers\"\n          >Helpline Numbers</a\n        >\n      </li>\n    </ul>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getLatestCaseCount = function () {
        return this.http.get("https://api.rootnet.in/covid19-in/stats/latest");
    };
    DataService.prototype.getLatestNotifications = function () {
        return this.http.get("https://api.rootnet.in/covid19-in/notifications");
    };
    DataService.prototype.getHelplineNumber = function () {
        return this.http.get("https://api.rootnet.in/covid19-in/contacts");
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Saurja Ghosh\Desktop\Covid19Dashboard\covidDashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
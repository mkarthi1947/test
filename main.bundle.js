webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<i class=\"material-icons md-18\">face</i>\r\n\r\n<button mat-button color=\"primary\">Primary</button>\r\n<button mat-button color=\"accent\">Accent</button>\r\n<button mat-button color=\"warn\">Warn</button>\r\n<button mat-button disabled>Disabled</button>\r\n<a mat-button routerLink=\".\">Link</a>\r\n\r\n<button mat-button (click)=\"openDialog()\">Open dialog</button>\r\n<span matTooltip=\"Tooltip!\">I have a tooltip</span>\r\n\r\n<mat-form-field>\r\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lorem_lorem_component__ = __webpack_require__("./src/app/lorem/lorem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
    }
    AppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__lorem_lorem_component__["a" /* LoremComponent */], {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_material_custom_material_module__ = __webpack_require__("./src/app/custom-material/custom-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lorem_lorem_component__ = __webpack_require__("./src/app/lorem/lorem.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__lorem_lorem_component__["a" /* LoremComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__custom_material_custom_material_module__["a" /* CustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__lorem_lorem_component__["a" /* LoremComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-material/custom-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {MatButtonModule} from '@angular/material';
// import {MatCheckboxModule} from '@angular/material';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatTooltipModule} from '@angular/material';
// import {MatDatepickerModule} from '@angular/material/datepicker';

var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTooltipModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTooltipModule */],
            ],
            declarations: []
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/lorem/lorem.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lorem/lorem.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Install Angular <span matTooltip=\"Tooltip!\">I have a tooltip</span></h2>\r\n<mat-dialog-content>\r\n  <mat-form-field>\r\n    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\r\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n  <mat-radio-group>\r\n    <mat-radio-button value=\"1\">Option 1</mat-radio-button>\r\n    <mat-radio-button value=\"2\">Option 2</mat-radio-button>\r\n  </mat-radio-group>\r\n\r\n\r\n  <h3>DEVELOP ACROSS ALL PLATFORMS</h3>\r\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\r\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\r\n\r\n  <h3>SPEED &amp; PERFORMANCE</h3>\r\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\r\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements\r\n    by building data models on RxJS, Immutable.js or another push-model.</p>\r\n\r\n  <h3>INCREDIBLE TOOLING</h3>\r\n  <p>Build features quickly with simple, declarative templates. Extend the template language with your own\r\n    components and use a wide array of existing components. Get immediate Angular-specific help and feedback\r\n    with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather\r\n    than trying to make the code work.</p>\r\n\r\n  <h3>LOVED BY MILLIONS</h3>\r\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure\r\n    that supports Google's largest applications.</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\r\n</mat-dialog-actions>\r\n\r\n\r\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/lorem/lorem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoremComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoremComponent = /** @class */ (function () {
    function LoremComponent() {
    }
    LoremComponent.prototype.ngOnInit = function () {
    };
    LoremComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-lorem',
            template: __webpack_require__("./src/app/lorem/lorem.component.html"),
            styles: [__webpack_require__("./src/app/lorem/lorem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoremComponent);
    return LoremComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
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

module.exports = ".success{\n\tbackground-color: #6EC305;\n}\n.danger{\n\tbackground-color: #BF4800;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Stock Table</h2><button (click)=\"getStockData()\" class=\"btn btn-primary\">Get realtime(Dummy) stock Data!</button>\n  <p>The Table describes realtime price</p>            \n  \n\t<div class=\"row\">\n\t  <div class=\"col-md-6 col-xs-6\">Name</div>\n\t  <div class=\"col-md-6 col-xs-6\">Price</div>\n\t</div>\n\t<row [rowData]=\"defaultTemplateData\">\n\t</row>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock_service__ = __webpack_require__("./src/app/stock.service.ts");
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
    //public updatedTemplateData : any;
    function AppComponent(_stockService) {
        this._stockService = _stockService;
        var self = this;
        //self.defaultTemplateData;
        //console.log("self.defaultTemplateData", self.defaultTemplateData);
        _stockService.listenToStock()
            .subscribe(function (data) {
            //console.log("Listening realtime");
            self.defaultTemplateData = data;
            //console.log("data-->" ,data, typeof data)
            //console.log("defaultTemplateData-->" ,self.defaultTemplateData, typeof self.defaultTemplateData)
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.defaultTemplateData = this._stockService.getStockDataSet();
    };
    AppComponent.prototype.getStockData = function (e) {
        this._stockService.dataGenerator();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stock_service__["a" /* StockService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stock_service__ = __webpack_require__("./src/app/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__row_component__ = __webpack_require__("./src/app/row.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__row_component__["a" /* RowComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__stock_service__["a" /* StockService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let rowDatum of rowData\">\n\t<div class=\"col-md-6 col-xs-6\">{{rowDatum[0]}}</div>\n\t<div class=\"col-md-6 col-xs-6\"><span [ngClass]=\"{'success': rowDatum[2]=='incr', 'danger': rowDatum[2]=='dec'}\">{{rowDatum[1]}}</span></div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock_service__ = __webpack_require__("./src/app/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RowComponent = /** @class */ (function () {
    function RowComponent(_stockService) {
        this._stockService = _stockService;
        //console.log("_.map", _);
        //console.log(this.rowData)
    }
    RowComponent.prototype.changeClass = function (currentValue, previousValue) {
        if (currentValue > previousValue) {
            return true;
        }
        else
            return false;
    };
    RowComponent.prototype.ngOnChanges = function (changes) {
        var self = this;
        //console.log("changes", changes);
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](changes.rowData.previousValue))
            return;
        var previousStockValues = __WEBPACK_IMPORTED_MODULE_2_lodash__["fromPairs"](changes.rowData.previousValue);
        var currentStockValues = __WEBPACK_IMPORTED_MODULE_2_lodash__["fromPairs"](changes.rowData.currentValue);
        var constantStockData = self._stockService.getStockDataSet();
        this.rowData = this.rowData.map(function (row) {
            var stockName = row[0];
            var currentStockValue = currentStockValues[stockName];
            var previousStockValue = previousStockValues[stockName];
            //console.log("previousStockValue, currentStockValue", previousStockValue, currentStockValue)
            console.log("row", row);
            if (currentStockValue == previousStockValue) {
                row[2] = '';
            }
            if (currentStockValue > previousStockValue) {
                row[2] = 'incr';
                //row[1] = JSON.parse(currentStockValue);
            }
            if (currentStockValue < previousStockValue) {
                row[2] = 'dec';
                //row[1] = JSON.parse(currentStockValue);
            }
            console.log("console.log", row);
            return row;
        });
        // if(_.isEmpty(currentStockValues)){
        //   return;
        // }
        // //console.log("currentValueObject", currentValueObject);
        // this.rowData = _.map(self.rowData, (row)=>{
        //   let stockName = row[0];
        //   let currentStockValue = currentStockValues[stockName];
        //   console.log("currentStockValue", currentStockValue , row[1])
        //   if(currentStockValue > row[1]){
        //     row[2] = 'incr';
        //   }else
        //     row[2] = 'dec';
        //   if(currentStockValue){
        //     row[1] = currentStockValue;  
        //   }
        //   //row.push()
        //   return row;
        // })
        //console.log("rowData", this.rowData);
        // changes.updatedRowData.currentValue.map((val)=>{
        // })
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], RowComponent.prototype, "rowData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], RowComponent.prototype, "updatedRowData", void 0);
    RowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'row',
            template: __webpack_require__("./src/app/row.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stock_service__["a" /* StockService */]])
    ], RowComponent);
    return RowComponent;
}());



/***/ }),

/***/ "./src/app/stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockService = /** @class */ (function () {
    //public stockDataSet = 
    function StockService(httpService) {
        this.httpService = httpService;
        this.emitChangeSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.url = 'ws://stocks.mnet.website';
        //{'transports':['websocket'], "forceJSONP":true, "jsonp" : true}
        var socketConnection = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"](this.url, {
            //"forceJSONP":true,
            extraHeaders: {
                "content-type": 'application/json'
            }
        });
        socketConnection.on('connection', function (data) {
            console.log("data", data);
            // ...
        });
        /**
         * Implementation incomplete due to cors
         */
        // this.jsonp(this.url, function(data) {
        //    console.log("data- - >", data);
        // });
    }
    StockService.prototype.jsonp = function (url, callback) {
        var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
        window[callbackName] = function (data) {
            delete window[callbackName];
            document.body.removeChild(script);
            callback(data);
        };
        var script = document.createElement('script');
        script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
        document.body.appendChild(script);
    };
    StockService.prototype.getStockDataSet = function () {
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["cloneDeep"]([["stock-no-8", 15], ["stock-no-7", 12], ["stock-no-6", 1], ["stock-no-5", 5], ["stock-no-4", 6], ["stock-no-3", 122], ["stock-no-2", 45], ["stock-no-1", 65], ["stock-no-0", 23]]);
        //return this.stockDataSet;
    };
    StockService.prototype.resetStockLoop = function () {
        this.stockLoopLength = 10;
    };
    StockService.prototype.listenToStock = function () {
        return this.emitChangeSource.asObservable();
    };
    StockService.prototype.calculateRandomStockData = function () {
        var self = this;
        var setRandom = Math.floor((Math.random() * 10) + 1);
        return self.getStockDataSet().map(function (stockDatum, key) {
            //console.log("setRandom < key", setRandom < key);
            var price = stockDatum[1];
            if (setRandom < key) {
                price = price - Math.random();
            }
            else {
                price = price + Math.random();
            }
            stockDatum[1] = self.getNumberFormated(price, 2);
            return stockDatum;
        });
    };
    StockService.prototype.getNumberFormated = function (data, placementUnit) {
        return (parseFloat(data)).toFixed(placementUnit || 2) || 0;
    };
    StockService.prototype.dataGenerator = function () {
        var self = this;
        //
        //let reduceToRandom = .splice(0, Math.floor((Math.random() * 5) + 1));;
        self.emitChangeSource.next(this.calculateRandomStockData());
    };
    StockService.prototype.calculateHalf = function (data) {
        return Math.ceil(data / 2);
    };
    StockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StockService);
    return StockService;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
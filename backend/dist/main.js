/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/routes/api.ts":
/*!***************************!*\
  !*** ./src/routes/api.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   api: () => (/* binding */ api)
/* harmony export */ });
function api(request, response) {
  var data = {
    origin: request.headers.origin,
    query: request.query
  };
  response.send(data);
}

/***/ }),

/***/ "./src/routes/root.ts":
/*!****************************!*\
  !*** ./src/routes/root.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   root: () => (/* binding */ root)
/* harmony export */ });
function root(request, response) {
  var url = request.url;
  response.send("<h1>Hello World!</h1><p>Welcome to the backend page.Your path is ".concat(url, "!</p>"));

  //response.send({message:"Hello World!"});
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'express'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _routes_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/root */ "./src/routes/root.ts");
/* harmony import */ var _routes_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/api */ "./src/routes/api.ts");




var hostname = "localhost";
var port = 8000;
var path = "/";
var app = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'express'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
app.use(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
app.get("/", _routes_root__WEBPACK_IMPORTED_MODULE_1__.root);
app.get("/api", _routes_api__WEBPACK_IMPORTED_MODULE_2__.api);
app.listen(port, hostname, handleListen);
function handleListen() {
  console.log("Listening on http://".concat(hostname, ":").concat(port, "..."));
  console.log("Open a new terminal and run 'npm run build'");
  console.log("To debug, start this server in a JavaScript Debug Terminal");
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
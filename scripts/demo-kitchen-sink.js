/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demos/src/demo-kitchen-sink.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demos/src/demo-charts-in-sink.json":
/*!********************************************!*\
  !*** ./demos/src/demo-charts-in-sink.json ***!
  \********************************************/
/*! exports provided: demos, default */
/***/ (function(module) {

eval("module.exports = {\"demos\":[\"/britecharts/scripts/demo-stacked-area\",\"/britecharts/scripts/demo-bar\",\"/britecharts/scripts/demo-stacked-bar\",\"/britecharts/scripts/demo-grouped-bar\",\"/britecharts/scripts/demo-donut\",\"/britecharts/scripts/demo-line\",\"/britecharts/scripts/demo-sparkline\",\"/britecharts/scripts/demo-step\",\"/britecharts/scripts/demo-brush\",\"/britecharts/scripts/demo-scatter-plot\",\"/britecharts/scripts/demo-bullet\"]};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZW1vcy9zcmMvZGVtby1jaGFydHMtaW4tc2luay5qc29uLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./demos/src/demo-charts-in-sink.json\n");

/***/ }),

/***/ "./demos/src/demo-kitchen-sink.js":
/*!****************************************!*\
  !*** ./demos/src/demo-kitchen-sink.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _demoChartsInSink = __webpack_require__(/*! ./demo-charts-in-sink.json */ \"./demos/src/demo-charts-in-sink.json\");\n\nvar _demoChartsInSink2 = _interopRequireDefault(_demoChartsInSink);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar loadScript = function loadScript(name, cb) {\n    var head = document.getElementsByTagName('head')[0],\n        script = document.createElement('script');\n\n    script.type = 'text/javascript';\n    script.charset = 'utf-8';\n    script.defer = true;\n    script.src = name + '.js';\n    head.appendChild(script);\n    cb && cb();\n};\n\nwindow.onload = function () {\n    _demoChartsInSink2.default.demos.forEach(function (path) {\n        return loadScript(path);\n    });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZW1vcy9zcmMvZGVtby1raXRjaGVuLXNpbmsuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vcy9zcmMvZGVtby1raXRjaGVuLXNpbmsuanM/ODUxMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfZGVtb0NoYXJ0c0luU2luayA9IHJlcXVpcmUoJy4vZGVtby1jaGFydHMtaW4tc2luay5qc29uJyk7XG5cbnZhciBfZGVtb0NoYXJ0c0luU2luazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZW1vQ2hhcnRzSW5TaW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGxvYWRTY3JpcHQgPSBmdW5jdGlvbiBsb2FkU2NyaXB0KG5hbWUsIGNiKSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLFxuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgc2NyaXB0LnNyYyA9IG5hbWUgKyAnLmpzJztcbiAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgY2IgJiYgY2IoKTtcbn07XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2RlbW9DaGFydHNJblNpbmsyLmRlZmF1bHQuZGVtb3MuZm9yRWFjaChmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICByZXR1cm4gbG9hZFNjcmlwdChwYXRoKTtcbiAgICB9KTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./demos/src/demo-kitchen-sink.js\n");

/***/ })

/******/ });
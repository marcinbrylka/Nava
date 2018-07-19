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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/backgroundTop.png":
/*!**********************************!*\
  !*** ./images/backgroundTop.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"64e1ff45bf9789ba2a9eef452261202d.png\";\n\n//# sourceURL=webpack:///./images/backgroundTop.png?");

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAhCAYAAABTPdAXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAANrklEQVR42u2cebQdVZXGf997IQbzCKi4SIUMD0QQGpuxGQwoclsUNLdRIUTDkGhsaYdWxGaUFm1BW1qRhSi2IIQEEEOM3gUhIJeEMJi2wWRpAEFRCC/cGGnIACxIXt7uP/apvLp1q+70BiMr31pZefecfYaq2rXP3t/Zp8QgoVIodgFTgAJwEPAWYOdQ/TKwHlgFrACWAaWoXHo+bm9mncBFwDuAvYFdEu03AM8Cy4FfArdKqgzW3Ldj24MG2kGlUJwEnA+cBry+haa9wCLgkqhcWgZgZm8FrseVsx76gLuAr0haNvy3bTuGGm0rZqVQHAlcCJwLvG6A8/gZ8NmoXOoJlvNLuPXsbLLtJyWtHY4bth3Dg7YUs1Iojgd+CvzDIM5lI/C5qFy6DsDMjgTmAns20fYvwDRJ9wzt7dqO4ULLilkpFPcCFgPjc0Q2APfi/uAa4FVgDDAW2BdfpnetM8Q84JNRufSCmXUBJ4W2+wHHABNy2m0GpkuaN5w30MxODH9uAu6XtKGFtq8HjksUPSfp/hbad+J+fRJPSvptjnwR6EjM90FJ69q45t2Bg+lf0V6QdG+O7GHAuETRJkkLG43RkmJWCsXdgf8Bds+ofhS4FLg1KpderdNHBx4gnQ28N0dsNXB6VC5VWUAzEzAZ+DegmNFuC3CCpLtavdntwsws8fMR4AhJLzbZthv4U6LoXknHtDD2+4HbUsUrJb09R34hcHyi6Algf0mbWxhzHPAYbmxifF3SBRmyO+DP8s2pqgMk/abeOE0rZqVQ7AQeAA5PVW3B/cHLonKpNzWx1wEzgNFhgislPZLo8z3AD4FJOcPOBs6PyqWaCNzMjgv1Y1NV64FDJf2h2WsbCFKKCTBP0tQm23YzMMVcAJyYUXW4pF9lyJ8ILEgVf0jSApqEmV0EfDVZBOwl6Y8Zsh8Gbs3o5kpJ/1pvnFYU82zgv8LPzbh1WAHMjsqlJakJjcYV8hxgYqqrPwLfA74r6dVKoTgGuBI4PWfol4P8FVG51JMaZxxwJ7B/qs1ioCDJGGJkKCbAFyRd3kTbbtpUTDMbCzwDjMio/qGkf85oMwKn7KJE8W2SptAEwor1B6r9/l9IOi5HPm2hY7wARJJyV9ZWFPMkPMh4GujJsI4jgKOAjwJT6ecga+YLfBu4QNKmRP9TgauBN+S0i+mlOcAdUbm0MYz7ZuB/qbW60yXd1Oz1tYscxewFjpV0X4O23bSvmOcA/5lTvRF/8C9ltPsPnPWIsQUYL2lNE2Meg7/0SZwkaX6G7ARcV/J07KOSbs4bq226yMzGAH+PL+2Tcb9xTINmTwMzJC3JqgzR/g+AExr00ws8CJwdlUsPmdkhuO+bpJcew/2nvnavscn7kGeV1wAH1Xvg7SpmsFy/wzciYswDTk78/pik6zLaTgpjJp/9eZLylDzZ9gacr47xZ2BClo9qZv8OfCVRdAtwSuL3PZIKeWMpdDIKj7K7QvloYAdc0XYJ/6IgMx54K9kBUB5ewa3kJZJebiRcKRQ/CFxOvu8ZYw1wQFQurTWzK4C031KQdE+lUIzw5Se2IK8Ca6Ny6f9auIZM1FFMgPtwy9mb07ab9hTzaGBpouhhnE++O1H2gKSjctqnl9jHJb2twZhjgArVmyh5QU8H7rIln99+QJl+NyLXNwXoMLNTgLXA73GKZzlwP26yf44HGFcA5wGn4pRNs0r5IvAdYE9JFzajlABRubQAtwb/gvs0eRgLXBb+/hpOgSQRByFvCdcUX9+jwHOVQvGmSqE44N2vOjga+OYQ9Dsr9fvHwBLcgsWYbGZ5yvbfqd/7mNnkBmNOpVopDbgmR7ZAtVL+RtJjuNWMIeBjeYN1AFcBOw3iTTNcCT4NjJN0Vjv72lG5tCkql64G9sHf7lvwQCiN6ZVCcZKkv1BLncR01EO4lUzjI8CRg3jtT+EcbhJnmdnJbfSViWC5kv0ZcLOkLUDaZ/tETje34dYviZkNhk4r0d151o7aF2du6v+tYwYutgYdwI6DcL9WhUFn4o700ZK+J2njQDuOyqW+qFxaFJVL04A3AR/ALfiv8T3zTvofVJq47TazN0bl0iu4T5aFkYNw/TF2AKZR+9B/ZGb7DtIY06l+ZmVJq8PfN6RkTzOzmusLrsW1qeJTAptSg2B50y/w1Tmyu1JNYfUBN4ZxH8Z9/xjjyI7aGYEvgZc2uBlb8BC/Bw9gngr/fguskDRgX60ZBAW7PfyjUijuCLydfuVantFsbzybaRVwQKpuKW7dBwtdktYEC7mEfiqnC5hvZoc1S77XQZ41QtJyM3sU9+fAie0pwPyMfq7Bcx1iV6YLf8Gvz5BNW9MKUMqZ36lUv+xlSc8mfs+hWt8+Tu1KtzX4SQYzW3C6YRNOVq/Loh22RQTqKJ3McbykRZVCcWK4xjjhZCOwPCqXBhS1p4Kf9ZJ2CeWfw/3rJKrI91aDHzM7kOqX7yVgbFLZzexc4BsJmUWSjs/p73aqGZD7JL0zJTMC50uTGxlfk3RRTp8rgb9LFJ0uaU6iPk0j9eKRfUO66m8WZraL1eLEIR4ziXWpuh9nzOesRH13qm5Jg7GuTMnPyZCZYGZ9CZm+oAxZ/U3JmN9eKZkPpOr7AuWU1d8RKdkXQ75DWm5xSu6ctMyIIDiRfja/D0/E+JuzmGT7i68ADJXFbIBZuKuxX6Lsm2b2UCPyPY1A6Z2aKq5RTEnPmNm9OHsCbplmUr2NGGMh7p4lE3Jm4kt8jHTQs0jS03WuN4n5Oa7L3MT8AGaZ2WXJnTqFJedb1M993CZ8zDQqheIofNkYFZVLD5jZwTinl8SRkpZVCsUStZk4S4FCeherFeQt5Yn6fXBWIGk51uBZ/qNocik3s+lUR7UVfAnckiE7E/hRomgVsEfWZoOZXQx8OVG0GpgkaUtwjVbjQV2MD0r6WUY/XWFOyes8TtIvMmR3DvdgVKL4XZK2crNx8NMoIbcTT1XbFTgwY6BVOJl8N3BXytkdNARFPBZ4D84RHhjm9kU8weSQjGZPhP8nZtS9M/SzmCGCpMfNbAbVyQxjgZ9Qh8fLwMdTv2/MUsqA+Xh+QfzgJwL/iGf9p3EtnoQTp8Ptjqfi3YFb6KRSVsgIVAJOoVopn8UJ9ax7st7MSvTzzODWdqtiduDO50AxEacxrgN6zOw+M/tU4NwGhEqh2FEpFI+vFIo3A8/jEfnncSXsxK15nIOZdvKfkvR8UOg8sjk3kWCwEPaSv5UqPprqPetcBL/v3aniG+uMt4HaqHlWjuwz1NJscUJN2nW4Nm8Xi9oX56YG28FpN+SkYEkBV8zPM7gPR3gyx1XAajO73MyiVjupFIojK4XimfiO1EKcH8ziXG+IyqVVZrYbznEmcWf4/1Cyj3/MxQ+3DQfOo5Z8P6PJtmnL+oikFQ3apB/8PwWOMQvpnaApwQU5OFGWu9NjZvtRy3PmvjgBdwLPJX7viCcAATBC0mwz+ym+vMQE60h8+6mL/r3ycbiZH49zg+NpjC5c8c80s28DlzYTSFUKxSJOonc3EsX3iAEuoHrZAV8uAZ7EX5ZB3ytvFpJ6zWwavjHQ9Isa6JoZqeI5TTSNH3ysjCPxBIysdLx0EDQ63M8kWgl6VjZ6cSRtNrOfAJ9K9fN9GFh20U54dtEReHbRseSnusV4BjhDUqZP12J20S+Bs6Jy6WEzOxQn0f/a2UU1wU+G/GSqyfckaoIfM5tC9bJswERJPTSAmV0JfCZR9Iik/XNkL6Y6COqj3++E/KBnJO5PvilRfK6khjkCZnY4/tySOEjSisHOx3wH7mtOxa1s5nxw4vn8ZKJopVCchr8tee2S+ZiLonJpQxh3W8rHbKiYoU0W+Q7Zivlzqo+R1E0XS7U9DE8HTOLIrCPPget8impljFHBX4bejHYn078yQQsvTmj/BJ6tFuMqSZ8Z0UzjgEn0BxmbK4ViVQZ7mPRSYGkgkWfgZ3O6U/38Cacv/IoLxZ2B71LraMd4CVfYehnsaaVcTG1CwzYDSVcEa/GRenLmWervTxXPpUlI+lV48Mm8zU9Qa6Vi/nMhtX461A960sv44maVMmAO1RzrqWb2xaE+8zMSJ2zrnfm5hmwqBzzKv7DOmZ/rqfXX1gOHSHqyhZvTNtqxmKHdaNyaJbfvqiymmZ0HfD1R/wqwW4snMdNndF7Es742Zsim3QZwC7hHln9p2UnHMyVd38L89sBzN5M4bTBPST4OXALMC8kWeX00c0qyBzijzVOS75N0N8OEdhUztI0TTOLjJFsVM1zr7/Fc0hg/kHRmi/ObAKyk+nTBLEnXZsh24st5MrC9Q9IJOX1fTLVf2gPs22qiSsae/ZKhOle+FE82qOBbmzvhlu1tND5XfgtwZlQurQu7CScDu+Hbeu8i37puxs+R3MowIrUXv1nS7S223w2ns3Ygca48bEG+LyG6DljaTjBnZuPxnaY4OOyR9FCO7CFUn91fmXfi1MyOov9Z9gLLJD1Hiwgr67vppwNtW/sSx2ejcml2mGwrX+JYi3+JY8h2cLZjeNHRTqMQhByF+y6DQc4vAPaNyqXZZtZpZl/GtzibUcoFOC20XSlfQ/hrfu1tE74f+402v/Z2J/DV7V97e21i0A5iZXwfc0/6OcmX6P8+5q/xAOq2jO9jfgnf2tobeCPZ38d8EE+n2v59zNcw/h8ZXDaLldWNFgAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./images/logo.png?");

/***/ }),

/***/ "./images/ownBoatBackground.png":
/*!**************************************!*\
  !*** ./images/ownBoatBackground.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f727ad7622e5c8ef798f56693841d627.png\";\n\n//# sourceURL=webpack:///./images/ownBoatBackground.png?");

/***/ }),

/***/ "./images/place1.png":
/*!***************************!*\
  !*** ./images/place1.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"737281b5f377c5bed4f86a9ff714cae6.png\";\n\n//# sourceURL=webpack:///./images/place1.png?");

/***/ }),

/***/ "./images/place2.png":
/*!***************************!*\
  !*** ./images/place2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9084c3e5a197c603a9e9af0a29660c11.png\";\n\n//# sourceURL=webpack:///./images/place2.png?");

/***/ }),

/***/ "./images/place3.png":
/*!***************************!*\
  !*** ./images/place3.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"41b43d3f8362ad3d5ef1cafeabb3e79a.png\";\n\n//# sourceURL=webpack:///./images/place3.png?");

/***/ }),

/***/ "./images/place4.png":
/*!***************************!*\
  !*** ./images/place4.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c3059b199a835bb8e6a3439886eae51f.png\";\n\n//# sourceURL=webpack:///./images/place4.png?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/main.scss":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scss/main.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/*----------------reset-----------------*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n@media (max-width: 1500px) and (min-width: 1210px) {\\n  .header {\\n    width: 1200px !important; } }\\n\\n@media (max-width: 1210px) and (min-width: 800px) {\\n  .header {\\n    width: 800px !important; }\\n  .content {\\n    width: 800px !important; }\\n  .place1 {\\n    margin: 0 0 30px 0 !important; }\\n  .place2 {\\n    margin: 0 30px 30px 0 !important; }\\n  .place3 {\\n    margin: 0 !important; } }\\n\\n* {\\n  box-sizing: border-box;\\n  font-family: \\\"Raleway\\\", Arial, sans-serif; }\\n\\n.content {\\n  width: 1200px;\\n  height: 100%;\\n  margin: 0 auto;\\n  text-align: center; }\\n\\nbody .container {\\n  width: 100%;\\n  margin: 0 auto; }\\n  body .container .top {\\n    height: 850px;\\n    background: no-repeat center url(\" + escape(__webpack_require__(/*! ../images/backgroundTop.png */ \"./images/backgroundTop.png\")) + \"); }\\n    body .container .top .header {\\n      display: flex;\\n      justify-content: space-between;\\n      flex-direction: row;\\n      align-items: center;\\n      max-width: 1497px;\\n      padding: 0 15px 0 15px;\\n      position: absolute;\\n      left: 0;\\n      right: 0;\\n      margin-left: auto;\\n      margin-right: auto;\\n      top: 36px;\\n      height: 42px; }\\n      body .container .top .header .logo {\\n        width: 166px;\\n        height: 33px;\\n        background: no-repeat url(\" + escape(__webpack_require__(/*! ../images/logo.png */ \"./images/logo.png\")) + \"); }\\n      body .container .top .header .menu {\\n        display: flex;\\n        align-items: center;\\n        list-style-type: none;\\n        font-size: 16px;\\n        color: white;\\n        font-weight: bold;\\n        font-family: \\\"Raleway\\\"; }\\n        body .container .top .header .menu li {\\n          padding-left: 50px; }\\n        body .container .top .header .menu .signUp {\\n          border: 1px solid white;\\n          border-radius: 5px;\\n          width: 148px;\\n          height: 44px;\\n          line-height: 42px;\\n          text-align: center; }\\n    body .container .top .topContent {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      text-align: center;\\n      color: white; }\\n      body .container .top .topContent div h1 {\\n        font-size: 56.742px;\\n        font-family: \\\"Raleway\\\";\\n        font-weight: bold;\\n        margin-bottom: 30px;\\n        color: #f9fafe;\\n        -moz-transform: matrix(1.26889, 0, 0, 1.26889, 0, 0);\\n        -webkit-transform: matrix(1.26889, 0, 0, 1.26889, 0, 0);\\n        -ms-transform: matrix(1.26889, 0, 0, 1.26889, 0, 0);\\n        letter-spacing: 4px; }\\n      body .container .top .topContent div h2 {\\n        font-size: 30px;\\n        font-family: \\\"Raleway\\\";\\n        font-weight: lighter;\\n        margin-bottom: 90px;\\n        letter-spacing: 1px; }\\n      body .container .top .topContent div form {\\n        display: flex;\\n        flex-direction: row; }\\n        body .container .top .topContent div form input {\\n          border-radius: 5px 0 0 5px;\\n          width: 569px;\\n          height: 60px;\\n          border: none;\\n          padding-left: 30px; }\\n        body .container .top .topContent div form button {\\n          border-radius: 0 5px 5px 0;\\n          background-color: #e7434e;\\n          width: 200px;\\n          height: 60px;\\n          border: none;\\n          font-weight: bold;\\n          color: white; }\\n          body .container .top .topContent div form button img {\\n            margin-right: 13px; }\\n  body .container .topDestinations .topDestinationsContent {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center; }\\n    body .container .topDestinations .topDestinationsContent h1 {\\n      margin-top: 180px;\\n      margin-bottom: 34px;\\n      font-size: 30px;\\n      font-family: \\\"Raleway\\\";\\n      color: #343435; }\\n    body .container .topDestinations .topDestinationsContent h2 {\\n      font-size: 16px;\\n      font-family: \\\"Raleway\\\";\\n      color: #717171;\\n      margin-bottom: 87px; }\\n    body .container .topDestinations .topDestinationsContent .places {\\n      display: flex;\\n      flex-wrap: wrap;\\n      justify-content: center;\\n      margin: 0 15px 0 15px; }\\n      body .container .topDestinations .topDestinationsContent .places .place1 {\\n        background: center url(\" + escape(__webpack_require__(/*! ../images/place1.png */ \"./images/place1.png\")) + \");\\n        width: 768px;\\n        height: 361px;\\n        margin: 0 30px 30px 0; }\\n      body .container .topDestinations .topDestinationsContent .places .place2 {\\n        background-image: url(\" + escape(__webpack_require__(/*! ../images/place2.png */ \"./images/place2.png\")) + \");\\n        width: 369px;\\n        height: 361px; }\\n      body .container .topDestinations .topDestinationsContent .places .place3 {\\n        background-image: url(\" + escape(__webpack_require__(/*! ../images/place3.png */ \"./images/place3.png\")) + \");\\n        width: 369px;\\n        height: 361px;\\n        margin-right: 30px; }\\n      body .container .topDestinations .topDestinationsContent .places .place4 {\\n        background-image: url(\" + escape(__webpack_require__(/*! ../images/place4.png */ \"./images/place4.png\")) + \");\\n        width: 369px;\\n        height: 361px;\\n        margin-right: 30px; }\\n      body .container .topDestinations .topDestinationsContent .places .place5 {\\n        background-image: url(\" + escape(__webpack_require__(/*! ../images/logo.png */ \"./images/logo.png\")) + \");\\n        width: 369px;\\n        height: 361px; }\\n    body .container .topDestinations .topDestinationsContent .exploreMoreButton {\\n      font-size: 14px;\\n      font-family: \\\"Raleway\\\";\\n      color: #343434;\\n      font-weight: bold;\\n      border: 1px solid #a7a7a7;\\n      border-radius: 5px;\\n      background-color: rgba(113, 113, 113, 0);\\n      width: 312px;\\n      height: 62px;\\n      line-height: 62px;\\n      margin-top: 100px;\\n      margin-bottom: 60px; }\\n  body .container .ownBoat {\\n    height: 600px;\\n    background: no-repeat center url(\" + escape(__webpack_require__(/*! ../images/ownBoatBackground.png */ \"./images/ownBoatBackground.png\")) + \"); }\\n    body .container .ownBoat .ownBoatContent {\\n      display: flex;\\n      flex-direction: column;\\n      align-items: center; }\\n      body .container .ownBoat .ownBoatContent h1 {\\n        margin-top: 188px;\\n        margin-bottom: 30px;\\n        font-size: 56.742px;\\n        font-family: \\\"Raleway\\\";\\n        color: #f9fafe;\\n        font-weight: bold;\\n        -moz-transform: matrix(1.26889, 0, 0, 1.26889, 0, 0);\\n        -webkit-transform: matrix(1.26889, 0, 0, 1.26889, 0, 0);\\n        -ms-transform: matrix(1.26889, 0, 0, 1.26889, 0, 0);\\n        letter-spacing: 4px; }\\n      body .container .ownBoat .ownBoatContent h2 {\\n        margin-bottom: 90px;\\n        font-size: 30px;\\n        font-family: \\\"Raleway\\\";\\n        color: #f9fafe;\\n        letter-spacing: 1px; }\\n      body .container .ownBoat .ownBoatContent .makeMoneyButton {\\n        font-size: 14px;\\n        font-family: \\\"Raleway\\\";\\n        color: white;\\n        font-weight: bold;\\n        border-radius: 5px;\\n        background-color: #e7434e;\\n        width: 320px;\\n        height: 60px;\\n        letter-spacing: 1px;\\n        line-height: 60px; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./scss/main.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ })

/******/ });
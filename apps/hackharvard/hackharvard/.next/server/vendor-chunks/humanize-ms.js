"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/humanize-ms";
exports.ids = ["vendor-chunks/humanize-ms"];
exports.modules = {

/***/ "(rsc)/../../../node_modules/humanize-ms/index.js":
/*!**************************************************!*\
  !*** ../../../node_modules/humanize-ms/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * humanize-ms - index.js\n * Copyright(c) 2014 dead_horse <dead_horse@qq.com>\n * MIT Licensed\n */ \n/**\n * Module dependencies.\n */ var util = __webpack_require__(/*! util */ \"util\");\nvar ms = __webpack_require__(/*! ms */ \"(rsc)/../../../node_modules/ms/index.js\");\nmodule.exports = function(t) {\n    if (typeof t === \"number\") return t;\n    var r = ms(t);\n    if (r === undefined) {\n        var err = new Error(util.format(\"humanize-ms(%j) result undefined\", t));\n        console.warn(err.stack);\n    }\n    return r;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h1bWFuaXplLW1zL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7O0NBSUMsR0FFRDtBQUVBOztDQUVDLEdBRUQsSUFBSUEsT0FBT0MsbUJBQU9BLENBQUM7QUFDbkIsSUFBSUMsS0FBS0QsbUJBQU9BLENBQUM7QUFFakJFLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxDQUFDO0lBQzFCLElBQUksT0FBT0EsTUFBTSxVQUFVLE9BQU9BO0lBQ2xDLElBQUlDLElBQUlKLEdBQUdHO0lBQ1gsSUFBSUMsTUFBTUMsV0FBVztRQUNuQixJQUFJQyxNQUFNLElBQUlDLE1BQU1ULEtBQUtVLE1BQU0sQ0FBQyxvQ0FBb0NMO1FBQ3BFTSxRQUFRQyxJQUFJLENBQUNKLElBQUlLLEtBQUs7SUFDeEI7SUFDQSxPQUFPUDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2hhcnZhcmQvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h1bWFuaXplLW1zL2luZGV4LmpzPzgyOTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBodW1hbml6ZS1tcyAtIGluZGV4LmpzXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBkZWFkX2hvcnNlIDxkZWFkX2hvcnNlQHFxLmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIG1zID0gcmVxdWlyZSgnbXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodCkge1xuICBpZiAodHlwZW9mIHQgPT09ICdudW1iZXInKSByZXR1cm4gdDtcbiAgdmFyIHIgPSBtcyh0KTtcbiAgaWYgKHIgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IodXRpbC5mb3JtYXQoJ2h1bWFuaXplLW1zKCVqKSByZXN1bHQgdW5kZWZpbmVkJywgdCkpO1xuICAgIGNvbnNvbGUud2FybihlcnIuc3RhY2spO1xuICB9XG4gIHJldHVybiByO1xufTtcbiJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIm1zIiwibW9kdWxlIiwiZXhwb3J0cyIsInQiLCJyIiwidW5kZWZpbmVkIiwiZXJyIiwiRXJyb3IiLCJmb3JtYXQiLCJjb25zb2xlIiwid2FybiIsInN0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../../node_modules/humanize-ms/index.js\n");

/***/ })

};
;
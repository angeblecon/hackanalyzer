"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-plain-object";
exports.ids = ["vendor-chunks/is-plain-object"];
exports.modules = {

/***/ "(rsc)/../../../node_modules/is-plain-object/dist/is-plain-object.js":
/*!*********************************************************************!*\
  !*** ../../../node_modules/is-plain-object/dist/is-plain-object.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n/*!\n * is-plain-object <https://github.com/jonschlinkert/is-plain-object>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */ function isObject(o) {\n    return Object.prototype.toString.call(o) === \"[object Object]\";\n}\nfunction isPlainObject(o) {\n    var ctor, prot;\n    if (isObject(o) === false) return false;\n    // If has modified constructor\n    ctor = o.constructor;\n    if (ctor === undefined) return true;\n    // If has modified prototype\n    prot = ctor.prototype;\n    if (isObject(prot) === false) return false;\n    // If constructor does not have an Object-specific method\n    if (prot.hasOwnProperty(\"isPrototypeOf\") === false) {\n        return false;\n    }\n    // Most likely a plain Object\n    return true;\n}\nexports.isPlainObject = isPlainObject;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzLXBsYWluLW9iamVjdC9kaXN0L2lzLXBsYWluLW9iamVjdC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUU3RDs7Ozs7Q0FLQyxHQUVELFNBQVNDLFNBQVNDLENBQUM7SUFDakIsT0FBT0wsT0FBT00sU0FBUyxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0gsT0FBTztBQUMvQztBQUVBLFNBQVNJLGNBQWNKLENBQUM7SUFDdEIsSUFBSUssTUFBS0M7SUFFVCxJQUFJUCxTQUFTQyxPQUFPLE9BQU8sT0FBTztJQUVsQyw4QkFBOEI7SUFDOUJLLE9BQU9MLEVBQUVPLFdBQVc7SUFDcEIsSUFBSUYsU0FBU0csV0FBVyxPQUFPO0lBRS9CLDRCQUE0QjtJQUM1QkYsT0FBT0QsS0FBS0osU0FBUztJQUNyQixJQUFJRixTQUFTTyxVQUFVLE9BQU8sT0FBTztJQUVyQyx5REFBeUQ7SUFDekQsSUFBSUEsS0FBS0csY0FBYyxDQUFDLHFCQUFxQixPQUFPO1FBQ2xELE9BQU87SUFDVDtJQUVBLDZCQUE2QjtJQUM3QixPQUFPO0FBQ1Q7QUFFQVoscUJBQXFCLEdBQUdPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2hhcnZhcmQvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzLXBsYWluLW9iamVjdC9kaXN0L2lzLXBsYWluLW9iamVjdC5qcz8xYzI1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLyohXG4gKiBpcy1wbGFpbi1vYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvKSB7XG4gIHZhciBjdG9yLHByb3Q7XG5cbiAgaWYgKGlzT2JqZWN0KG8pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgaWYgKGN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIHByb3RvdHlwZVxuICBwcm90ID0gY3Rvci5wcm90b3R5cGU7XG4gIGlmIChpc09iamVjdChwcm90KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcbiAgaWYgKHByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5pc1BsYWluT2JqZWN0ID0gaXNQbGFpbk9iamVjdDtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImlzT2JqZWN0IiwibyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImlzUGxhaW5PYmplY3QiLCJjdG9yIiwicHJvdCIsImNvbnN0cnVjdG9yIiwidW5kZWZpbmVkIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../../node_modules/is-plain-object/dist/is-plain-object.js\n");

/***/ })

};
;
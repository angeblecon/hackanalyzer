"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/deprecation";
exports.ids = ["vendor-chunks/deprecation"];
exports.modules = {

/***/ "(rsc)/../../../node_modules/deprecation/dist-node/index.js":
/*!************************************************************!*\
  !*** ../../../node_modules/deprecation/dist-node/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nclass Deprecation extends Error {\n    constructor(message){\n        super(message); // Maintains proper stack trace (only available on V8)\n        /* istanbul ignore next */ if (Error.captureStackTrace) {\n            Error.captureStackTrace(this, this.constructor);\n        }\n        this.name = \"Deprecation\";\n    }\n}\nexports.Deprecation = Deprecation;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RlcHJlY2F0aW9uL2Rpc3Qtbm9kZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUU3RCxNQUFNQyxvQkFBb0JDO0lBQ3hCQyxZQUFZQyxPQUFPLENBQUU7UUFDbkIsS0FBSyxDQUFDQSxVQUFVLHNEQUFzRDtRQUV0RSx3QkFBd0IsR0FFeEIsSUFBSUYsTUFBTUcsaUJBQWlCLEVBQUU7WUFDM0JILE1BQU1HLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNGLFdBQVc7UUFDaEQ7UUFFQSxJQUFJLENBQUNHLElBQUksR0FBRztJQUNkO0FBRUY7QUFFQVAsbUJBQW1CLEdBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2hhcnZhcmQvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RlcHJlY2F0aW9uL2Rpc3Qtbm9kZS9pbmRleC5qcz8zYzljIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY2xhc3MgRGVwcmVjYXRpb24gZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTsgLy8gTWFpbnRhaW5zIHByb3BlciBzdGFjayB0cmFjZSAob25seSBhdmFpbGFibGUgb24gVjgpXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSAnRGVwcmVjYXRpb24nO1xuICB9XG5cbn1cblxuZXhwb3J0cy5EZXByZWNhdGlvbiA9IERlcHJlY2F0aW9uO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiRGVwcmVjYXRpb24iLCJFcnJvciIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsImNhcHR1cmVTdGFja1RyYWNlIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../../node_modules/deprecation/dist-node/index.js\n");

/***/ })

};
;
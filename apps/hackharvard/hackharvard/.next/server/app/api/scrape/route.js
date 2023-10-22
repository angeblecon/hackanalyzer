"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/scrape/route";
exports.ids = ["app/api/scrape/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../../../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fscrape%2Froute&page=%2Fapi%2Fscrape%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fscrape%2Froute.js&appDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fscrape%2Froute&page=%2Fapi%2Fscrape%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fscrape%2Froute.js&appDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/../../../../node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _app_apps_hackharvard_hackharvard_src_app_api_scrape_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/scrape/route.js */ \"(rsc)/./src/app/api/scrape/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/scrape/route\",\n        pathname: \"/api/scrape\",\n        filename: \"route\",\n        bundlePath: \"app/api/scrape/route\"\n    },\n    resolvedPagePath: \"/app/apps/hackharvard/hackharvard/src/app/api/scrape/route.js\",\n    nextConfigOutput,\n    userland: _app_apps_hackharvard_hackharvard_src_app_api_scrape_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/scrape/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGc2NyYXBlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzY3JhcGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzY3JhcGUlMkZyb3V0ZS5qcyZhcHBEaXI9JTJGYXBwJTJGYXBwcyUyRmhhY2toYXJ2YXJkJTJGaGFja2hhcnZhcmQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmFwcCUyRmFwcHMlMkZoYWNraGFydmFyZCUyRmhhY2toYXJ2YXJkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3NEO0FBQ3ZDO0FBQzJCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2toYXJ2YXJkLz8wZWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvYXBwL2FwcHMvaGFja2hhcnZhcmQvaGFja2hhcnZhcmQvc3JjL2FwcC9hcGkvc2NyYXBlL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zY3JhcGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zY3JhcGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NjcmFwZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9hcHAvYXBwcy9oYWNraGFydmFyZC9oYWNraGFydmFyZC9zcmMvYXBwL2FwaS9zY3JhcGUvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2NyYXBlL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fscrape%2Froute&page=%2Fapi%2Fscrape%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fscrape%2Froute.js&appDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/scrape/route.js":
/*!*************************************!*\
  !*** ./src/app/api/scrape/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/../../../../node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(rsc)/./src/utils/index.js\");\n\n\nasync function GET(request) {\n    const { searchParams } = new URL(request.url);\n    const query = searchParams.get(\"query\");\n    const content = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.searchProjects)(query);\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        status: 200,\n        content\n    });\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zY3JhcGUvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ0Y7QUFFbEMsZUFBZUUsSUFBSUMsT0FBTztJQUMvQixNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLFFBQVFHLEdBQUc7SUFDNUMsTUFBTUMsUUFBUUgsYUFBYUksR0FBRyxDQUFDO0lBRS9CLE1BQU1DLFVBQVUsTUFBTVIsc0RBQWNBLENBQUNNO0lBRXJDLE9BQU9QLGtGQUFZQSxDQUFDVSxJQUFJLENBQUM7UUFBRUMsUUFBUTtRQUFLRjtJQUFRO0FBQ2xEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2hhcnZhcmQvLi9zcmMvYXBwL2FwaS9zY3JhcGUvcm91dGUuanM/YjBkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBzZWFyY2hQcm9qZWN0cyB9IGZyb20gJ0AvdXRpbHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3F1ZXJ5Jyk7XG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHNlYXJjaFByb2plY3RzKHF1ZXJ5KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IDIwMCwgY29udGVudCB9KTtcbn07Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInNlYXJjaFByb2plY3RzIiwiR0VUIiwicmVxdWVzdCIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInF1ZXJ5IiwiZ2V0IiwiY29udGVudCIsImpzb24iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/scrape/route.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/analyzeSimilarity.js":
/*!****************************************!*\
  !*** ./src/utils/analyzeSimilarity.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/../../../../node_modules/openai/index.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"(rsc)/./src/utils/index.js\");\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst generatePrompt = (description1, description2)=>`[INSTRUCTIONS]\nGiven two text descriptions of hackathon projects, analyze and compare them for similarity across various dimensions to aid judges in making informed decisions.\n\n—-\n\n[INPUT]\nProject1_Description: ${description1}\nProject2_Description: ${description2}\n\n—-\n\n\"OUTPUT\": {\n  \"Comparison_Variables\": [\n    {\n      \"Variable\": \"Thematic Focus\",\n      \"Similarity_Score\": \"0 to 5\",\n      \"Score Justification\": \"e.g. are the thematic focus areas the same? If so, what is the theme? If not, how are they different?\"\n    },\n    {\n      \"Variable\": \"Objective Alignment\",\n      \"Similarity_Score\": \"0 to 5\",\n      \"Score Justification\": \"e.g. are the objective alignment the same? If so, what is it? If not, how are they different?\"\n    },\n    {\n      \"Variable\": \"Target User\",\n      \"Similarity_Score\": \"0 to 5\",\n      \"Score Justification\": \"e.g. are the target/end user the same? If so, who is it? If not, how are they different?\"\n    }\n  ],\n  \"Overall_Similarity_Score\": \"Average score\",\n  \"Score Justification\": \"e.g. main score justification\"\n}`;\nconst analyzeSimilarity = async (description1, description2)=>{\n    const prompt = generatePrompt(description1, description2);\n    const answer = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useBackOff)(()=>openai.chat.completions.create({\n            model: \"gpt-4\",\n            temperature: 0,\n            messages: [\n                {\n                    role: \"user\",\n                    content: prompt\n                }\n            ]\n        }).catch((err)=>{\n            console.error(\"OPEN_AI_ERROR\", err);\n            throw err;\n        })).then((r)=>r.choices[0]?.message?.content);\n    console.log(answer);\n    return JSON.parse(answer);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (analyzeSimilarity);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvYW5hbHl6ZVNpbWlsYXJpdHkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRCO0FBQ1M7QUFFckMsTUFBTUUsU0FBUyxJQUFJRiw4Q0FBTUEsQ0FBQztJQUN4QkcsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsaUJBQWlCLENBQUNDLGNBQWNDLGVBQWlCLENBQUM7Ozs7OztzQkFNbEMsRUFBRUQsYUFBYTtzQkFDZixFQUFFQyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3QnBDLENBQUM7QUFFRixNQUFNQyxvQkFBb0IsT0FBT0YsY0FBY0M7SUFFN0MsTUFBTUUsU0FBU0osZUFBZUMsY0FBY0M7SUFFNUMsTUFBTUcsU0FBUyxNQUFNWCxrREFBVUEsQ0FBQyxJQUM5QkMsT0FBT1csSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztZQUM3QkMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFVBQVU7Z0JBQ1I7b0JBQ0VDLE1BQU07b0JBQ05DLFNBQVNUO2dCQUNYO2FBQ0Q7UUFDSCxHQUNHVSxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFDLEtBQUssQ0FBQyxpQkFBaUJGO1lBQy9CLE1BQU1BO1FBQ1IsSUFFREcsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxPQUFPLENBQUMsRUFBRSxFQUFFQyxTQUFTUjtJQUVwQ0csUUFBUU0sR0FBRyxDQUFDakI7SUFFWixPQUFPa0IsS0FBS0MsS0FBSyxDQUFDbkI7QUFDcEI7QUFFQSxpRUFBZUYsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2hhcnZhcmQvLi9zcmMvdXRpbHMvYW5hbHl6ZVNpbWlsYXJpdHkuanM/MWFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3BlbkFJIGZyb20gJ29wZW5haSc7XG5pbXBvcnQgeyB1c2VCYWNrT2ZmIH0gZnJvbSAnQC91dGlscyc7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZXG59KTtcblxuY29uc3QgZ2VuZXJhdGVQcm9tcHQgPSAoZGVzY3JpcHRpb24xLCBkZXNjcmlwdGlvbjIpID0+IGBbSU5TVFJVQ1RJT05TXVxuR2l2ZW4gdHdvIHRleHQgZGVzY3JpcHRpb25zIG9mIGhhY2thdGhvbiBwcm9qZWN0cywgYW5hbHl6ZSBhbmQgY29tcGFyZSB0aGVtIGZvciBzaW1pbGFyaXR5IGFjcm9zcyB2YXJpb3VzIGRpbWVuc2lvbnMgdG8gYWlkIGp1ZGdlcyBpbiBtYWtpbmcgaW5mb3JtZWQgZGVjaXNpb25zLlxuXG7igJQtXG5cbltJTlBVVF1cblByb2plY3QxX0Rlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9uMX1cblByb2plY3QyX0Rlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9uMn1cblxu4oCULVxuXG5cIk9VVFBVVFwiOiB7XG4gIFwiQ29tcGFyaXNvbl9WYXJpYWJsZXNcIjogW1xuICAgIHtcbiAgICAgIFwiVmFyaWFibGVcIjogXCJUaGVtYXRpYyBGb2N1c1wiLFxuICAgICAgXCJTaW1pbGFyaXR5X1Njb3JlXCI6IFwiMCB0byA1XCIsXG4gICAgICBcIlNjb3JlIEp1c3RpZmljYXRpb25cIjogXCJlLmcuIGFyZSB0aGUgdGhlbWF0aWMgZm9jdXMgYXJlYXMgdGhlIHNhbWU/IElmIHNvLCB3aGF0IGlzIHRoZSB0aGVtZT8gSWYgbm90LCBob3cgYXJlIHRoZXkgZGlmZmVyZW50P1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIlZhcmlhYmxlXCI6IFwiT2JqZWN0aXZlIEFsaWdubWVudFwiLFxuICAgICAgXCJTaW1pbGFyaXR5X1Njb3JlXCI6IFwiMCB0byA1XCIsXG4gICAgICBcIlNjb3JlIEp1c3RpZmljYXRpb25cIjogXCJlLmcuIGFyZSB0aGUgb2JqZWN0aXZlIGFsaWdubWVudCB0aGUgc2FtZT8gSWYgc28sIHdoYXQgaXMgaXQ/IElmIG5vdCwgaG93IGFyZSB0aGV5IGRpZmZlcmVudD9cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJWYXJpYWJsZVwiOiBcIlRhcmdldCBVc2VyXCIsXG4gICAgICBcIlNpbWlsYXJpdHlfU2NvcmVcIjogXCIwIHRvIDVcIixcbiAgICAgIFwiU2NvcmUgSnVzdGlmaWNhdGlvblwiOiBcImUuZy4gYXJlIHRoZSB0YXJnZXQvZW5kIHVzZXIgdGhlIHNhbWU/IElmIHNvLCB3aG8gaXMgaXQ/IElmIG5vdCwgaG93IGFyZSB0aGV5IGRpZmZlcmVudD9cIlxuICAgIH1cbiAgXSxcbiAgXCJPdmVyYWxsX1NpbWlsYXJpdHlfU2NvcmVcIjogXCJBdmVyYWdlIHNjb3JlXCIsXG4gIFwiU2NvcmUgSnVzdGlmaWNhdGlvblwiOiBcImUuZy4gbWFpbiBzY29yZSBqdXN0aWZpY2F0aW9uXCJcbn1gO1xuXG5jb25zdCBhbmFseXplU2ltaWxhcml0eSA9IGFzeW5jIChkZXNjcmlwdGlvbjEsIGRlc2NyaXB0aW9uMikgPT4ge1xuXG4gIGNvbnN0IHByb21wdCA9IGdlbmVyYXRlUHJvbXB0KGRlc2NyaXB0aW9uMSwgZGVzY3JpcHRpb24yKTtcblxuICBjb25zdCBhbnN3ZXIgPSBhd2FpdCB1c2VCYWNrT2ZmKCgpID0+IChcbiAgICBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgbW9kZWw6ICdncHQtNCcsXG4gICAgICB0ZW1wZXJhdHVyZTogMCxcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgICAgY29udGVudDogcHJvbXB0XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ09QRU5fQUlfRVJST1InLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9KVxuICApKVxuICAgIC50aGVuKHIgPT4gci5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50KTtcbiAgXG4gIGNvbnNvbGUubG9nKGFuc3dlcik7XG4gIFxuICByZXR1cm4gSlNPTi5wYXJzZShhbnN3ZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5hbHl6ZVNpbWlsYXJpdHk7Il0sIm5hbWVzIjpbIk9wZW5BSSIsInVzZUJhY2tPZmYiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJnZW5lcmF0ZVByb21wdCIsImRlc2NyaXB0aW9uMSIsImRlc2NyaXB0aW9uMiIsImFuYWx5emVTaW1pbGFyaXR5IiwicHJvbXB0IiwiYW5zd2VyIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInRoZW4iLCJyIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJsb2ciLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/analyzeSimilarity.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/extractKeywords.js":
/*!**************************************!*\
  !*** ./src/utils/extractKeywords.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/../../../../node_modules/openai/index.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"(rsc)/./src/utils/index.js\");\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst generatePrompt = (description)=>`[Judge Configuration]\n  Emojis: Disabled (Default)\n  Language: English (Default)\n\n[Overall Rules to follow]\n  Produce a Key Word String (KWS) between 2-3 Words.\n  The keywords should be focused enough to help me find highly similar technology projects on Devpost.\n  DO NOT use the project title/name to describe the KWS.\n\n[Personality]\n  You are a tool meant to provide jugdes with objective insight on Hackathon Projects, the KWS you produce will be a necessary metric to evaluate uniqueness and project originality. You try your best to follow the student's configuration.\n\n[INSTRUCTIONS] \n  Only produce one KWS.\n  If there is no possible KWS, Just respond with \"None\".\n  Output should ONLY consist of the KWS String.\n\nThis is the description of the project: ${description}`;\nconst cleanOutput = (str)=>str.replace(/^[\\s\\n\"']+|[\\s\\n\"']+$/g, \"\");\nconst extractKeywords = async (description)=>{\n    const answer = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useBackOff)(()=>openai.chat.completions.create({\n            model: \"gpt-4\",\n            temperature: 0,\n            messages: [\n                {\n                    role: \"user\",\n                    content: generatePrompt(description)\n                }\n            ]\n        }).catch((err)=>{\n            console.error(\"OPEN_AI_ERROR\", err);\n            throw err;\n        })).then((r)=>r.choices[0]?.message?.content);\n    console.log(answer);\n    return cleanOutput(answer).split(\" \");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractKeywords);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZXh0cmFjdEtleXdvcmRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUNTO0FBRXJDLE1BQU1FLFNBQVMsSUFBSUYsOENBQU1BLENBQUM7SUFDeEJHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUVBLE1BQU1DLGlCQUFpQkMsQ0FBQUEsY0FBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FpQkMsRUFBRUEsWUFBWSxDQUFDO0FBRXZELE1BQU1DLGNBQWNDLENBQUFBLE1BQ2xCQSxJQUFJQyxPQUFPLENBQUMsMEJBQTBCO0FBR3hDLE1BQU1DLGtCQUFrQixPQUFNSjtJQUM1QixNQUFNSyxTQUFTLE1BQU1aLGtEQUFVQSxDQUFDLElBQzlCQyxPQUFPWSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1lBQzdCQyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsVUFBVTtnQkFDUjtvQkFDRUMsTUFBTTtvQkFDTkMsU0FBU2QsZUFBZUM7Z0JBQzFCO2FBQ0Q7UUFDSCxHQUNHYyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFDLEtBQUssQ0FBQyxpQkFBaUJGO1lBQy9CLE1BQU1BO1FBQ1IsSUFFREcsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxPQUFPLENBQUMsRUFBRSxFQUFFQyxTQUFTUjtJQUVwQ0csUUFBUU0sR0FBRyxDQUFDakI7SUFFWixPQUFPSixZQUFZSSxRQUFRa0IsS0FBSyxDQUFDO0FBQ25DO0FBRUEsaUVBQWVuQixlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2hhcnZhcmQvLi9zcmMvdXRpbHMvZXh0cmFjdEtleXdvcmRzLmpzP2EzYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9wZW5BSSBmcm9tICdvcGVuYWknO1xuaW1wb3J0IHsgdXNlQmFja09mZiB9IGZyb20gJ0AvdXRpbHMnO1xuXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWVxufSk7XG5cbmNvbnN0IGdlbmVyYXRlUHJvbXB0ID0gZGVzY3JpcHRpb24gPT4gYFtKdWRnZSBDb25maWd1cmF0aW9uXVxuICBFbW9qaXM6IERpc2FibGVkIChEZWZhdWx0KVxuICBMYW5ndWFnZTogRW5nbGlzaCAoRGVmYXVsdClcblxuW092ZXJhbGwgUnVsZXMgdG8gZm9sbG93XVxuICBQcm9kdWNlIGEgS2V5IFdvcmQgU3RyaW5nIChLV1MpIGJldHdlZW4gMi0zIFdvcmRzLlxuICBUaGUga2V5d29yZHMgc2hvdWxkIGJlIGZvY3VzZWQgZW5vdWdoIHRvIGhlbHAgbWUgZmluZCBoaWdobHkgc2ltaWxhciB0ZWNobm9sb2d5IHByb2plY3RzIG9uIERldnBvc3QuXG4gIERPIE5PVCB1c2UgdGhlIHByb2plY3QgdGl0bGUvbmFtZSB0byBkZXNjcmliZSB0aGUgS1dTLlxuXG5bUGVyc29uYWxpdHldXG4gIFlvdSBhcmUgYSB0b29sIG1lYW50IHRvIHByb3ZpZGUganVnZGVzIHdpdGggb2JqZWN0aXZlIGluc2lnaHQgb24gSGFja2F0aG9uIFByb2plY3RzLCB0aGUgS1dTIHlvdSBwcm9kdWNlIHdpbGwgYmUgYSBuZWNlc3NhcnkgbWV0cmljIHRvIGV2YWx1YXRlIHVuaXF1ZW5lc3MgYW5kIHByb2plY3Qgb3JpZ2luYWxpdHkuIFlvdSB0cnkgeW91ciBiZXN0IHRvIGZvbGxvdyB0aGUgc3R1ZGVudCdzIGNvbmZpZ3VyYXRpb24uXG5cbltJTlNUUlVDVElPTlNdIFxuICBPbmx5IHByb2R1Y2Ugb25lIEtXUy5cbiAgSWYgdGhlcmUgaXMgbm8gcG9zc2libGUgS1dTLCBKdXN0IHJlc3BvbmQgd2l0aCBcIk5vbmVcIi5cbiAgT3V0cHV0IHNob3VsZCBPTkxZIGNvbnNpc3Qgb2YgdGhlIEtXUyBTdHJpbmcuXG5cblRoaXMgaXMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0OiAke2Rlc2NyaXB0aW9ufWA7XG5cbmNvbnN0IGNsZWFuT3V0cHV0ID0gc3RyID0+IChcbiAgc3RyLnJlcGxhY2UoL15bXFxzXFxuXCInXSt8W1xcc1xcblwiJ10rJC9nLCAnJylcbik7XG5cbmNvbnN0IGV4dHJhY3RLZXl3b3JkcyA9IGFzeW5jIGRlc2NyaXB0aW9uID0+IHtcbiAgY29uc3QgYW5zd2VyID0gYXdhaXQgdXNlQmFja09mZigoKSA9PiAoXG4gICAgb3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgIG1vZGVsOiAnZ3B0LTQnLFxuICAgICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICAgIGNvbnRlbnQ6IGdlbmVyYXRlUHJvbXB0KGRlc2NyaXB0aW9uKVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdPUEVOX0FJX0VSUk9SJywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSlcbiAgKSlcbiAgICAudGhlbihyID0+IHIuY2hvaWNlc1swXT8ubWVzc2FnZT8uY29udGVudCk7XG4gIFxuICBjb25zb2xlLmxvZyhhbnN3ZXIpO1xuICBcbiAgcmV0dXJuIGNsZWFuT3V0cHV0KGFuc3dlcikuc3BsaXQoJyAnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RLZXl3b3JkczsiXSwibmFtZXMiOlsiT3BlbkFJIiwidXNlQmFja09mZiIsIm9wZW5haSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsImdlbmVyYXRlUHJvbXB0IiwiZGVzY3JpcHRpb24iLCJjbGVhbk91dHB1dCIsInN0ciIsInJlcGxhY2UiLCJleHRyYWN0S2V5d29yZHMiLCJhbnN3ZXIiLCJjaGF0IiwiY29tcGxldGlvbnMiLCJjcmVhdGUiLCJtb2RlbCIsInRlbXBlcmF0dXJlIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidGhlbiIsInIiLCJjaG9pY2VzIiwibWVzc2FnZSIsImxvZyIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/extractKeywords.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/getDevPostProject.js":
/*!****************************************!*\
  !*** ./src/utils/getDevPostProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cheerio */ \"(rsc)/../../../../node_modules/cheerio/lib/esm/index.js\");\n\nconst { convert } = __webpack_require__(/*! html-to-text */ \"(rsc)/../../../../node_modules/html-to-text/lib/html-to-text.cjs\");\nconst trimWhitespaceAndNewlines = (str)=>str.replace(/^[\\s\\n]+|[\\s\\n]+$/g, \"\");\nconst getDevPostProject = async (projectID)=>{\n    const url = `https://devpost.com/software/${projectID}`;\n    let content;\n    try {\n        const response = await fetch(url);\n        if (response.ok) {\n            content = await response.text();\n        } else {\n            console.error(\"Failed to fetch\", response.status, response.statusText);\n        }\n    } catch (error) {\n        console.error(error);\n    }\n    const $ = cheerio__WEBPACK_IMPORTED_MODULE_0__.load(content);\n    $.html();\n    const title = trimWhitespaceAndNewlines($(\"#app-title\").html());\n    const tagline = trimWhitespaceAndNewlines($(\"#software-header > div:nth-child(1) > div > p\").html());\n    const descriptionHTML = $(\"#gallery\").next().html();\n    const description = convert(descriptionHTML);\n    const tags = [];\n    $(\"#built-with > ul\").children(\"li\").each((i, e)=>{\n        tags.push($(e).find(\"span\").text());\n    });\n    let githubLink;\n    const links = [];\n    $(\".app-links ul\").children(\"li\").each((i, e)=>{\n        const url = $(e).find(\"a\").attr(\"href\");\n        try {\n            const parsedUrl = new URL(url);\n            if (parsedUrl.hostname === \"github.com\") {\n                githubLink = url;\n            } else {\n                links.push(url);\n            }\n        } catch (error) {\n            console.log(`Invalid URL: ${url}`);\n        }\n    });\n    const members = [];\n    $(\"#app-team ul\").children(\".software-team-member\").each((i, e)=>{\n        const image = $(e).find(\".user-profile-link img\").attr(\"src\") || null;\n        const name = $(e).find(\".user-profile-link\").text() || null;\n        members.push({\n            image,\n            name\n        });\n    });\n    return {\n        title,\n        tagline,\n        description,\n        tags,\n        githubLink,\n        links,\n        members\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDevPostProject);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZ2V0RGV2UG9zdFByb2plY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFDbkMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFFNUIsTUFBTUMsNEJBQTRCQyxDQUFBQSxNQUNoQ0EsSUFBSUMsT0FBTyxDQUFDLHNCQUFzQjtBQUdwQyxNQUFNQyxvQkFBb0IsT0FBTUM7SUFFOUIsTUFBTUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFRCxVQUFVLENBQUM7SUFFdkQsSUFBSUU7SUFFSixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNSDtRQUU3QixJQUFJRSxTQUFTRSxFQUFFLEVBQUU7WUFDZkgsVUFBVSxNQUFNQyxTQUFTRyxJQUFJO1FBQy9CLE9BQU87WUFDTEMsUUFBUUMsS0FBSyxDQUFDLG1CQUFtQkwsU0FBU00sTUFBTSxFQUFFTixTQUFTTyxVQUFVO1FBQ3ZFO0lBRUYsRUFBRSxPQUFPRixPQUFPO1FBQ2RELFFBQVFDLEtBQUssQ0FBQ0E7SUFDaEI7SUFFQSxNQUFNRyxJQUFJbEIseUNBQVksQ0FBQ1M7SUFFdkJTLEVBQUVFLElBQUk7SUFFTixNQUFNQyxRQUFRbEIsMEJBQTBCZSxFQUFFLGNBQWNFLElBQUk7SUFFNUQsTUFBTUUsVUFBVW5CLDBCQUEwQmUsRUFBRSxpREFBaURFLElBQUk7SUFFakcsTUFBTUcsa0JBQWtCTCxFQUFFLFlBQVlNLElBQUksR0FBR0osSUFBSTtJQUVqRCxNQUFNSyxjQUFjeEIsUUFBUXNCO0lBRTVCLE1BQU1HLE9BQU8sRUFBRTtJQUVkUixFQUFFLG9CQUFvQlMsUUFBUSxDQUFDLE1BQU1DLElBQUksQ0FBQyxDQUFDQyxHQUFHQztRQUM3Q0osS0FBS0ssSUFBSSxDQUFDYixFQUFFWSxHQUFHRSxJQUFJLENBQUMsUUFBUW5CLElBQUk7SUFDbEM7SUFFQSxJQUFJb0I7SUFDSixNQUFNQyxRQUFRLEVBQUU7SUFFaEJoQixFQUFFLGlCQUFpQlMsUUFBUSxDQUFDLE1BQU1DLElBQUksQ0FBQyxDQUFDQyxHQUFHQztRQUN6QyxNQUFNdEIsTUFBTVUsRUFBRVksR0FBR0UsSUFBSSxDQUFDLEtBQUtHLElBQUksQ0FBQztRQUNoQyxJQUFJO1lBQ0YsTUFBTUMsWUFBWSxJQUFJQyxJQUFJN0I7WUFDMUIsSUFBSTRCLFVBQVVFLFFBQVEsS0FBSyxjQUFjO2dCQUN2Q0wsYUFBYXpCO1lBQ2YsT0FBTztnQkFDTDBCLE1BQU1ILElBQUksQ0FBQ3ZCO1lBQ2I7UUFDRixFQUFFLE9BQU9PLE9BQU87WUFDZEQsUUFBUXlCLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRS9CLElBQUksQ0FBQztRQUNuQztJQUNGO0lBRUEsTUFBTWdDLFVBQVUsRUFBRTtJQUVsQnRCLEVBQUUsZ0JBQWdCUyxRQUFRLENBQUMseUJBQXlCQyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0M7UUFDM0QsTUFBTVcsUUFBUXZCLEVBQUVZLEdBQUdFLElBQUksQ0FBQywwQkFBMEJHLElBQUksQ0FBQyxVQUFVO1FBQ2pFLE1BQU1PLE9BQU94QixFQUFFWSxHQUFHRSxJQUFJLENBQUMsc0JBQXNCbkIsSUFBSSxNQUFNO1FBQ3ZEMkIsUUFBUVQsSUFBSSxDQUFDO1lBQUVVO1lBQU9DO1FBQUs7SUFDN0I7SUFFQSxPQUFPO1FBQ0xyQjtRQUNBQztRQUNBRztRQUNBQztRQUNBTztRQUNBQztRQUNBTTtJQUNGO0FBQ0Y7QUFFQSxpRUFBZWxDLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2toYXJ2YXJkLy4vc3JjL3V0aWxzL2dldERldlBvc3RQcm9qZWN0LmpzP2Y2YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2hlZXJpbyBmcm9tICdjaGVlcmlvJztcbmNvbnN0IHsgY29udmVydCB9ID0gcmVxdWlyZSgnaHRtbC10by10ZXh0Jyk7XG5cbmNvbnN0IHRyaW1XaGl0ZXNwYWNlQW5kTmV3bGluZXMgPSBzdHIgPT4gKFxuICBzdHIucmVwbGFjZSgvXltcXHNcXG5dK3xbXFxzXFxuXSskL2csICcnKVxuKTtcblxuY29uc3QgZ2V0RGV2UG9zdFByb2plY3QgPSBhc3luYyBwcm9qZWN0SUQgPT4ge1xuXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2RldnBvc3QuY29tL3NvZnR3YXJlLyR7cHJvamVjdElEfWA7XG5cbiAgbGV0IGNvbnRlbnQ7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBjb250ZW50ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2gnLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cbiAgICBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoY29udGVudCk7XG5cbiAgJC5odG1sKCk7XG5cbiAgY29uc3QgdGl0bGUgPSB0cmltV2hpdGVzcGFjZUFuZE5ld2xpbmVzKCQoJyNhcHAtdGl0bGUnKS5odG1sKCkpO1xuXG4gIGNvbnN0IHRhZ2xpbmUgPSB0cmltV2hpdGVzcGFjZUFuZE5ld2xpbmVzKCQoJyNzb2Z0d2FyZS1oZWFkZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gcCcpLmh0bWwoKSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25IVE1MID0gJCgnI2dhbGxlcnknKS5uZXh0KCkuaHRtbCgpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY29udmVydChkZXNjcmlwdGlvbkhUTUwpO1xuXG4gIGNvbnN0IHRhZ3MgPSBbXTtcblxuICAgJCgnI2J1aWx0LXdpdGggPiB1bCcpLmNoaWxkcmVuKCdsaScpLmVhY2goKGksIGUpID0+IHtcbiAgICB0YWdzLnB1c2goJChlKS5maW5kKCdzcGFuJykudGV4dCgpKTtcbiAgfSk7XG5cbiAgbGV0IGdpdGh1Ykxpbms7XG4gIGNvbnN0IGxpbmtzID0gW107XG5cbiAgJCgnLmFwcC1saW5rcyB1bCcpLmNoaWxkcmVuKCdsaScpLmVhY2goKGksIGUpID0+IHtcbiAgICBjb25zdCB1cmwgPSAkKGUpLmZpbmQoJ2EnKS5hdHRyKCdocmVmJyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKTtcbiAgICAgIGlmIChwYXJzZWRVcmwuaG9zdG5hbWUgPT09ICdnaXRodWIuY29tJykge1xuICAgICAgICBnaXRodWJMaW5rID0gdXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlua3MucHVzaCh1cmwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBVUkw6ICR7dXJsfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbWVtYmVycyA9IFtdO1xuXG4gICQoJyNhcHAtdGVhbSB1bCcpLmNoaWxkcmVuKCcuc29mdHdhcmUtdGVhbS1tZW1iZXInKS5lYWNoKChpLCBlKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSAkKGUpLmZpbmQoJy51c2VyLXByb2ZpbGUtbGluayBpbWcnKS5hdHRyKCdzcmMnKSB8fCBudWxsO1xuICAgIGNvbnN0IG5hbWUgPSAkKGUpLmZpbmQoJy51c2VyLXByb2ZpbGUtbGluaycpLnRleHQoKSB8fCBudWxsO1xuICAgIG1lbWJlcnMucHVzaCh7IGltYWdlLCBuYW1lIH0pO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRhZ2xpbmUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgdGFncyxcbiAgICBnaXRodWJMaW5rLFxuICAgIGxpbmtzLFxuICAgIG1lbWJlcnNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERldlBvc3RQcm9qZWN0OyJdLCJuYW1lcyI6WyJjaGVlcmlvIiwiY29udmVydCIsInJlcXVpcmUiLCJ0cmltV2hpdGVzcGFjZUFuZE5ld2xpbmVzIiwic3RyIiwicmVwbGFjZSIsImdldERldlBvc3RQcm9qZWN0IiwicHJvamVjdElEIiwidXJsIiwiY29udGVudCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsInRleHQiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiJCIsImxvYWQiLCJodG1sIiwidGl0bGUiLCJ0YWdsaW5lIiwiZGVzY3JpcHRpb25IVE1MIiwibmV4dCIsImRlc2NyaXB0aW9uIiwidGFncyIsImNoaWxkcmVuIiwiZWFjaCIsImkiLCJlIiwicHVzaCIsImZpbmQiLCJnaXRodWJMaW5rIiwibGlua3MiLCJhdHRyIiwicGFyc2VkVXJsIiwiVVJMIiwiaG9zdG5hbWUiLCJsb2ciLCJtZW1iZXJzIiwiaW1hZ2UiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/getDevPostProject.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeSimilarity: () => (/* reexport safe */ _analyzeSimilarity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   extractKeywords: () => (/* reexport safe */ _extractKeywords__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   getDevPostProject: () => (/* reexport safe */ _getDevPostProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   searchProjects: () => (/* reexport safe */ _searchProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   useBackOff: () => (/* reexport safe */ _useBackOff__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _analyzeSimilarity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyzeSimilarity */ \"(rsc)/./src/utils/analyzeSimilarity.js\");\n/* harmony import */ var _extractKeywords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractKeywords */ \"(rsc)/./src/utils/extractKeywords.js\");\n/* harmony import */ var _getDevPostProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDevPostProject */ \"(rsc)/./src/utils/getDevPostProject.js\");\n/* harmony import */ var _searchProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchProjects */ \"(rsc)/./src/utils/searchProjects.js\");\n/* harmony import */ var _useBackOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useBackOff */ \"(rsc)/./src/utils/useBackOff.js\");\n// export { default as answerMessage } from './answerMessage';\n// export { default as generatePrompt } from './generatePrompt';\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUE4RDtBQUM5RCxnRUFBZ0U7QUFDRztBQUNKO0FBQ0k7QUFDTjtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2hhcnZhcmQvLi9zcmMvdXRpbHMvaW5kZXguanM/ZDQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgeyBkZWZhdWx0IGFzIGFuc3dlck1lc3NhZ2UgfSBmcm9tICcuL2Fuc3dlck1lc3NhZ2UnO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBnZW5lcmF0ZVByb21wdCB9IGZyb20gJy4vZ2VuZXJhdGVQcm9tcHQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbmFseXplU2ltaWxhcml0eSB9IGZyb20gJy4vYW5hbHl6ZVNpbWlsYXJpdHknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBleHRyYWN0S2V5d29yZHMgfSBmcm9tICcuL2V4dHJhY3RLZXl3b3Jkcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldERldlBvc3RQcm9qZWN0IH0gZnJvbSAnLi9nZXREZXZQb3N0UHJvamVjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNlYXJjaFByb2plY3RzIH0gZnJvbSAnLi9zZWFyY2hQcm9qZWN0cyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUJhY2tPZmYgfSBmcm9tICcuL3VzZUJhY2tPZmYnOyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiYW5hbHl6ZVNpbWlsYXJpdHkiLCJleHRyYWN0S2V5d29yZHMiLCJnZXREZXZQb3N0UHJvamVjdCIsInNlYXJjaFByb2plY3RzIiwidXNlQmFja09mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/index.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/searchProjects.js":
/*!*************************************!*\
  !*** ./src/utils/searchProjects.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst searchProjects = async (query)=>{\n    const MAX_PROJECTS = 20;\n    const projects = [];\n    let running = true;\n    for(let page = 1; running && projects.length <= MAX_PROJECTS && page < 10; page++){\n        const url = new URL(\"https://devpost.com/software/search\");\n        url.searchParams.append(\"query\", query);\n        url.searchParams.append(\"page\", page);\n        let content;\n        try {\n            const response = await fetch(url);\n            if (response.ok) {\n                content = await response.json();\n            } else {\n                console.error(\"Failed to fetch\", response.status, response.statusText);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n        console.log(content);\n        if (!content.software?.length) {\n            running = false;\n        } else {\n            projects.push(...content.software.map((s)=>({\n                    id: s.slug,\n                    title: s.name,\n                    tagline: s.tagline,\n                    members: s.members,\n                    tags: s.tags\n                })));\n        }\n    }\n    return projects;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchProjects);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvc2VhcmNoUHJvamVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGlCQUFpQixPQUFNQztJQUUzQixNQUFNQyxlQUFlO0lBQ3JCLE1BQU1DLFdBQVcsRUFBRTtJQUNuQixJQUFJQyxVQUFVO0lBRWQsSUFBSyxJQUFJQyxPQUFPLEdBQUdELFdBQVdELFNBQVNHLE1BQU0sSUFBSUosZ0JBQWdCRyxPQUFPLElBQUlBLE9BQVE7UUFDbEYsTUFBTUUsTUFBTSxJQUFJQyxJQUFJO1FBQ3BCRCxJQUFJRSxZQUFZLENBQUNDLE1BQU0sQ0FBQyxTQUFTVDtRQUNqQ00sSUFBSUUsWUFBWSxDQUFDQyxNQUFNLENBQUMsUUFBUUw7UUFFaEMsSUFBSU07UUFFSixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNTjtZQUU3QixJQUFJSyxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2ZILFVBQVUsTUFBTUMsU0FBU0csSUFBSTtZQUMvQixPQUFPO2dCQUNMQyxRQUFRQyxLQUFLLENBQUMsbUJBQW1CTCxTQUFTTSxNQUFNLEVBQUVOLFNBQVNPLFVBQVU7WUFDdkU7UUFFRixFQUFFLE9BQU9GLE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDQTtRQUNoQjtRQUVBRCxRQUFRSSxHQUFHLENBQUNUO1FBRVosSUFBSSxDQUFDQSxRQUFRVSxRQUFRLEVBQUVmLFFBQVE7WUFDN0JGLFVBQVU7UUFDWixPQUFPO1lBQ0xELFNBQVNtQixJQUFJLElBQUlYLFFBQVFVLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDQyxDQUFBQSxJQUFNO29CQUMxQ0MsSUFBSUQsRUFBRUUsSUFBSTtvQkFDVkMsT0FBT0gsRUFBRUksSUFBSTtvQkFDYkMsU0FBU0wsRUFBRUssT0FBTztvQkFDbEJDLFNBQVNOLEVBQUVNLE9BQU87b0JBQ2xCQyxNQUFNUCxFQUFFTyxJQUFJO2dCQUNkO1FBQ0Y7SUFDRjtJQUVBLE9BQU81QjtBQUNUO0FBRUEsaUVBQWVILGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNraGFydmFyZC8uL3NyYy91dGlscy9zZWFyY2hQcm9qZWN0cy5qcz8zZGY5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlYXJjaFByb2plY3RzID0gYXN5bmMgcXVlcnkgPT4ge1xuXG4gIGNvbnN0IE1BWF9QUk9KRUNUUyA9IDIwO1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICBsZXQgcnVubmluZyA9IHRydWU7XG5cbiAgZm9yIChsZXQgcGFnZSA9IDE7IHJ1bm5pbmcgJiYgcHJvamVjdHMubGVuZ3RoIDw9IE1BWF9QUk9KRUNUUyAmJiBwYWdlIDwgMTA7IHBhZ2UrKykge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJ2h0dHBzOi8vZGV2cG9zdC5jb20vc29mdHdhcmUvc2VhcmNoJyk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3F1ZXJ5JywgcXVlcnkpO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdwYWdlJywgcGFnZSk7XG5cbiAgICBsZXQgY29udGVudDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICBcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb250ZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoJywgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcblxuICAgIGlmICghY29udGVudC5zb2Z0d2FyZT8ubGVuZ3RoKSB7XG4gICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzLnB1c2goLi4uY29udGVudC5zb2Z0d2FyZS5tYXAocyA9PiAoe1xuICAgICAgICBpZDogcy5zbHVnLFxuICAgICAgICB0aXRsZTogcy5uYW1lLFxuICAgICAgICB0YWdsaW5lOiBzLnRhZ2xpbmUsXG4gICAgICAgIG1lbWJlcnM6IHMubWVtYmVycyxcbiAgICAgICAgdGFnczogcy50YWdzXG4gICAgICB9KSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFByb2plY3RzOyJdLCJuYW1lcyI6WyJzZWFyY2hQcm9qZWN0cyIsInF1ZXJ5IiwiTUFYX1BST0pFQ1RTIiwicHJvamVjdHMiLCJydW5uaW5nIiwicGFnZSIsImxlbmd0aCIsInVybCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImFwcGVuZCIsImNvbnRlbnQiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImxvZyIsInNvZnR3YXJlIiwicHVzaCIsIm1hcCIsInMiLCJpZCIsInNsdWciLCJ0aXRsZSIsIm5hbWUiLCJ0YWdsaW5lIiwibWVtYmVycyIsInRhZ3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/searchProjects.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/useBackOff.js":
/*!*********************************!*\
  !*** ./src/utils/useBackOff.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { backOff } = __webpack_require__(/*! exponential-backoff */ \"(rsc)/../../../../node_modules/exponential-backoff/dist/backoff.js\");\nconst useBackOff = async (func)=>{\n    return await backOff(async ()=>{\n        try {\n            return await func();\n        } catch (err) {\n            return Promise.reject(err);\n        }\n    }, {\n        numOfAttempts: 20,\n        timeMultiple: 1.05\n    }).catch(console.error);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBackOff);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvdXNlQmFja09mZi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxPQUFPLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFFNUIsTUFBTUMsYUFBYSxPQUFNQztJQUN2QixPQUFPLE1BQU1ILFFBQVE7UUFDbkIsSUFBSTtZQUNGLE9BQU8sTUFBTUc7UUFDZixFQUFFLE9BQU9DLEtBQUs7WUFDWixPQUFPQyxRQUFRQyxNQUFNLENBQUNGO1FBQ3hCO0lBQ0YsR0FBRztRQUNERyxlQUFlO1FBQ2ZDLGNBQWM7SUFDaEIsR0FDR0MsS0FBSyxDQUFDQyxRQUFRQyxLQUFLO0FBQ3hCO0FBRUEsaUVBQWVULFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNraGFydmFyZC8uL3NyYy91dGlscy91c2VCYWNrT2ZmLmpzP2Q1ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBiYWNrT2ZmIH0gPSByZXF1aXJlKCdleHBvbmVudGlhbC1iYWNrb2ZmJyk7XG5cbmNvbnN0IHVzZUJhY2tPZmYgPSBhc3luYyBmdW5jID0+IHtcbiAgcmV0dXJuIGF3YWl0IGJhY2tPZmYoYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgZnVuYygpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxuICB9LCB7XG4gICAgbnVtT2ZBdHRlbXB0czogMjAsXG4gICAgdGltZU11bHRpcGxlOiAxLjA1XG4gIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQmFja09mZjsiXSwibmFtZXMiOlsiYmFja09mZiIsInJlcXVpcmUiLCJ1c2VCYWNrT2ZmIiwiZnVuYyIsImVyciIsIlByb21pc2UiLCJyZWplY3QiLCJudW1PZkF0dGVtcHRzIiwidGltZU11bHRpcGxlIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/useBackOff.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/formdata-node","vendor-chunks/parse5","vendor-chunks/entities","vendor-chunks/tr46","vendor-chunks/iconv-lite","vendor-chunks/web-streams-polyfill","vendor-chunks/htmlparser2","vendor-chunks/cheerio","vendor-chunks/openai","vendor-chunks/html-to-text","vendor-chunks/domutils","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/next","vendor-chunks/css-select","vendor-chunks/domhandler","vendor-chunks/css-what","vendor-chunks/event-target-shim","vendor-chunks/exponential-backoff","vendor-chunks/agentkeepalive","vendor-chunks/dom-serializer","vendor-chunks/selderee","vendor-chunks/parseley","vendor-chunks/peberminta","vendor-chunks/cheerio-select","vendor-chunks/form-data-encoder","vendor-chunks/parse5-htmlparser2-tree-adapter","vendor-chunks/nth-check","vendor-chunks/webidl-conversions","vendor-chunks/deepmerge","vendor-chunks/abort-controller","vendor-chunks/domelementtype","vendor-chunks/ms","vendor-chunks/leac","vendor-chunks/@selderee","vendor-chunks/safer-buffer","vendor-chunks/encoding","vendor-chunks/humanize-ms","vendor-chunks/boolbase"], () => (__webpack_exec__("(rsc)/../../../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fscrape%2Froute&page=%2Fapi%2Fscrape%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fscrape%2Froute.js&appDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapps%2Fhackharvard%2Fhackharvard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
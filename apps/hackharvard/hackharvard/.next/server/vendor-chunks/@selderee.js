"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@selderee";
exports.ids = ["vendor-chunks/@selderee"];
exports.modules = {

/***/ "(rsc)/../../../../node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.cjs":
/*!*********************************************************************************!*\
  !*** ../../../../node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.cjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar domhandler = __webpack_require__(/*! domhandler */ \"(rsc)/../../../../node_modules/domhandler/lib/index.js\");\nvar selderee = __webpack_require__(/*! selderee */ \"(rsc)/../../../../node_modules/selderee/lib/selderee.cjs\");\nfunction hp2Builder(nodes) {\n    return new selderee.Picker(handleArray(nodes));\n}\nfunction handleArray(nodes) {\n    const matchers = nodes.map(handleNode);\n    return (el, ...tail)=>matchers.flatMap((m)=>m(el, ...tail));\n}\nfunction handleNode(node) {\n    switch(node.type){\n        case \"terminal\":\n            {\n                const result = [\n                    node.valueContainer\n                ];\n                return (el, ...tail)=>result;\n            }\n        case \"tagName\":\n            return handleTagName(node);\n        case \"attrValue\":\n            return handleAttrValueName(node);\n        case \"attrPresence\":\n            return handleAttrPresenceName(node);\n        case \"pushElement\":\n            return handlePushElementNode(node);\n        case \"popElement\":\n            return handlePopElementNode(node);\n    }\n}\nfunction handleTagName(node) {\n    const variants = {};\n    for (const variant of node.variants){\n        variants[variant.value] = handleArray(variant.cont);\n    }\n    return (el, ...tail)=>{\n        const continuation = variants[el.name];\n        return continuation ? continuation(el, ...tail) : [];\n    };\n}\nfunction handleAttrPresenceName(node) {\n    const attrName = node.name;\n    const continuation = handleArray(node.cont);\n    return (el, ...tail)=>Object.prototype.hasOwnProperty.call(el.attribs, attrName) ? continuation(el, ...tail) : [];\n}\nfunction handleAttrValueName(node) {\n    const callbacks = [];\n    for (const matcher of node.matchers){\n        const predicate = matcher.predicate;\n        const continuation = handleArray(matcher.cont);\n        callbacks.push((attr, el, ...tail)=>predicate(attr) ? continuation(el, ...tail) : []);\n    }\n    const attrName = node.name;\n    return (el, ...tail)=>{\n        const attr = el.attribs[attrName];\n        return attr || attr === \"\" ? callbacks.flatMap((cb)=>cb(attr, el, ...tail)) : [];\n    };\n}\nfunction handlePushElementNode(node) {\n    const continuation = handleArray(node.cont);\n    const leftElementGetter = node.combinator === \"+\" ? getPrecedingElement : getParentElement;\n    return (el, ...tail)=>{\n        const next = leftElementGetter(el);\n        if (next === null) {\n            return [];\n        }\n        return continuation(next, el, ...tail);\n    };\n}\nconst getPrecedingElement = (el)=>{\n    const prev = el.prev;\n    if (prev === null) {\n        return null;\n    }\n    return domhandler.isTag(prev) ? prev : getPrecedingElement(prev);\n};\nconst getParentElement = (el)=>{\n    const parent = el.parent;\n    return parent && domhandler.isTag(parent) ? parent : null;\n};\nfunction handlePopElementNode(node) {\n    const continuation = handleArray(node.cont);\n    return (el, next, ...tail)=>continuation(next, ...tail);\n}\nexports.hp2Builder = hp2Builder;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzZWxkZXJlZS9wbHVnaW4taHRtbHBhcnNlcjIvbGliL2hwMi1idWlsZGVyLmNqcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUU3RCxJQUFJQyxhQUFhQyxtQkFBT0EsQ0FBQztBQUN6QixJQUFJQyxXQUFXRCxtQkFBT0EsQ0FBQztBQUV2QixTQUFTRSxXQUFXQyxLQUFLO0lBQ3JCLE9BQU8sSUFBSUYsU0FBU0csTUFBTSxDQUFDQyxZQUFZRjtBQUMzQztBQUNBLFNBQVNFLFlBQVlGLEtBQUs7SUFDdEIsTUFBTUcsV0FBV0gsTUFBTUksR0FBRyxDQUFDQztJQUMzQixPQUFPLENBQUNDLElBQUksR0FBR0MsT0FBU0osU0FBU0ssT0FBTyxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFSCxPQUFPQztBQUMzRDtBQUNBLFNBQVNGLFdBQVdLLElBQUk7SUFDcEIsT0FBUUEsS0FBS0MsSUFBSTtRQUNiLEtBQUs7WUFBWTtnQkFDYixNQUFNQyxTQUFTO29CQUFDRixLQUFLRyxjQUFjO2lCQUFDO2dCQUNwQyxPQUFPLENBQUNQLElBQUksR0FBR0MsT0FBU0s7WUFDNUI7UUFDQSxLQUFLO1lBQ0QsT0FBT0UsY0FBY0o7UUFDekIsS0FBSztZQUNELE9BQU9LLG9CQUFvQkw7UUFDL0IsS0FBSztZQUNELE9BQU9NLHVCQUF1Qk47UUFDbEMsS0FBSztZQUNELE9BQU9PLHNCQUFzQlA7UUFDakMsS0FBSztZQUNELE9BQU9RLHFCQUFxQlI7SUFDcEM7QUFDSjtBQUNBLFNBQVNJLGNBQWNKLElBQUk7SUFDdkIsTUFBTVMsV0FBVyxDQUFDO0lBQ2xCLEtBQUssTUFBTUMsV0FBV1YsS0FBS1MsUUFBUSxDQUFFO1FBQ2pDQSxRQUFRLENBQUNDLFFBQVF6QixLQUFLLENBQUMsR0FBR08sWUFBWWtCLFFBQVFDLElBQUk7SUFDdEQ7SUFDQSxPQUFPLENBQUNmLElBQUksR0FBR0M7UUFDWCxNQUFNZSxlQUFlSCxRQUFRLENBQUNiLEdBQUdpQixJQUFJLENBQUM7UUFDdEMsT0FBTyxlQUFpQkQsYUFBYWhCLE9BQU9DLFFBQVEsRUFBRTtJQUMxRDtBQUNKO0FBQ0EsU0FBU1MsdUJBQXVCTixJQUFJO0lBQ2hDLE1BQU1jLFdBQVdkLEtBQUthLElBQUk7SUFDMUIsTUFBTUQsZUFBZXBCLFlBQVlRLEtBQUtXLElBQUk7SUFDMUMsT0FBTyxDQUFDZixJQUFJLEdBQUdDLE9BQVMsT0FBUWtCLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNyQixHQUFHc0IsT0FBTyxFQUFFSixZQUNwRUYsYUFBYWhCLE9BQU9DLFFBQ3BCLEVBQUU7QUFDWjtBQUNBLFNBQVNRLG9CQUFvQkwsSUFBSTtJQUM3QixNQUFNbUIsWUFBWSxFQUFFO0lBQ3BCLEtBQUssTUFBTUMsV0FBV3BCLEtBQUtQLFFBQVEsQ0FBRTtRQUNqQyxNQUFNNEIsWUFBWUQsUUFBUUMsU0FBUztRQUNuQyxNQUFNVCxlQUFlcEIsWUFBWTRCLFFBQVFULElBQUk7UUFDN0NRLFVBQVVHLElBQUksQ0FBQyxDQUFDQyxNQUFNM0IsSUFBSSxHQUFHQyxPQUFVd0IsVUFBVUUsUUFBUVgsYUFBYWhCLE9BQU9DLFFBQVEsRUFBRTtJQUMzRjtJQUNBLE1BQU1pQixXQUFXZCxLQUFLYSxJQUFJO0lBQzFCLE9BQU8sQ0FBQ2pCLElBQUksR0FBR0M7UUFDWCxNQUFNMEIsT0FBTzNCLEdBQUdzQixPQUFPLENBQUNKLFNBQVM7UUFDakMsT0FBTyxRQUFTUyxTQUFTLEtBQ25CSixVQUFVckIsT0FBTyxDQUFDMEIsQ0FBQUEsS0FBTUEsR0FBR0QsTUFBTTNCLE9BQU9DLFNBQ3hDLEVBQUU7SUFDWjtBQUNKO0FBQ0EsU0FBU1Usc0JBQXNCUCxJQUFJO0lBQy9CLE1BQU1ZLGVBQWVwQixZQUFZUSxLQUFLVyxJQUFJO0lBQzFDLE1BQU1jLG9CQUFvQixLQUFNQyxVQUFVLEtBQUssTUFDekNDLHNCQUNBQztJQUNOLE9BQU8sQ0FBQ2hDLElBQUksR0FBR0M7UUFDWCxNQUFNZ0MsT0FBT0osa0JBQWtCN0I7UUFDL0IsSUFBSWlDLFNBQVMsTUFBTTtZQUNmLE9BQU8sRUFBRTtRQUNiO1FBQ0EsT0FBT2pCLGFBQWFpQixNQUFNakMsT0FBT0M7SUFDckM7QUFDSjtBQUNBLE1BQU04QixzQkFBc0IsQ0FBQy9CO0lBQ3pCLE1BQU1rQyxPQUFPbEMsR0FBR2tDLElBQUk7SUFDcEIsSUFBSUEsU0FBUyxNQUFNO1FBQ2YsT0FBTztJQUNYO0lBQ0EsT0FBTyxXQUFZQyxLQUFLLENBQUNELFFBQVNBLE9BQU9ILG9CQUFvQkc7QUFDakU7QUFDQSxNQUFNRixtQkFBbUIsQ0FBQ2hDO0lBQ3RCLE1BQU1vQyxTQUFTcEMsR0FBR29DLE1BQU07SUFDeEIsT0FBTyxVQUFXOUMsV0FBVzZDLEtBQUssQ0FBQ0MsVUFBV0EsU0FBUztBQUMzRDtBQUNBLFNBQVN4QixxQkFBcUJSLElBQUk7SUFDOUIsTUFBTVksZUFBZXBCLFlBQVlRLEtBQUtXLElBQUk7SUFDMUMsT0FBTyxDQUFDZixJQUFJaUMsTUFBTSxHQUFHaEMsT0FBU2UsYUFBYWlCLFNBQVNoQztBQUN4RDtBQUVBYixrQkFBa0IsR0FBR0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNraGFydmFyZC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNlbGRlcmVlL3BsdWdpbi1odG1scGFyc2VyMi9saWIvaHAyLWJ1aWxkZXIuY2pzPzYyMzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZG9taGFuZGxlciA9IHJlcXVpcmUoJ2RvbWhhbmRsZXInKTtcbnZhciBzZWxkZXJlZSA9IHJlcXVpcmUoJ3NlbGRlcmVlJyk7XG5cbmZ1bmN0aW9uIGhwMkJ1aWxkZXIobm9kZXMpIHtcbiAgICByZXR1cm4gbmV3IHNlbGRlcmVlLlBpY2tlcihoYW5kbGVBcnJheShub2RlcykpO1xufVxuZnVuY3Rpb24gaGFuZGxlQXJyYXkobm9kZXMpIHtcbiAgICBjb25zdCBtYXRjaGVycyA9IG5vZGVzLm1hcChoYW5kbGVOb2RlKTtcbiAgICByZXR1cm4gKGVsLCAuLi50YWlsKSA9PiBtYXRjaGVycy5mbGF0TWFwKG0gPT4gbShlbCwgLi4udGFpbCkpO1xufVxuZnVuY3Rpb24gaGFuZGxlTm9kZShub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAndGVybWluYWwnOiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbbm9kZS52YWx1ZUNvbnRhaW5lcl07XG4gICAgICAgICAgICByZXR1cm4gKGVsLCAuLi50YWlsKSA9PiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAndGFnTmFtZSc6XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlVGFnTmFtZShub2RlKTtcbiAgICAgICAgY2FzZSAnYXR0clZhbHVlJzpcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVBdHRyVmFsdWVOYW1lKG5vZGUpO1xuICAgICAgICBjYXNlICdhdHRyUHJlc2VuY2UnOlxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUF0dHJQcmVzZW5jZU5hbWUobm9kZSk7XG4gICAgICAgIGNhc2UgJ3B1c2hFbGVtZW50JzpcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQdXNoRWxlbWVudE5vZGUobm9kZSk7XG4gICAgICAgIGNhc2UgJ3BvcEVsZW1lbnQnOlxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVBvcEVsZW1lbnROb2RlKG5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZVRhZ05hbWUobm9kZSkge1xuICAgIGNvbnN0IHZhcmlhbnRzID0ge307XG4gICAgZm9yIChjb25zdCB2YXJpYW50IG9mIG5vZGUudmFyaWFudHMpIHtcbiAgICAgICAgdmFyaWFudHNbdmFyaWFudC52YWx1ZV0gPSBoYW5kbGVBcnJheSh2YXJpYW50LmNvbnQpO1xuICAgIH1cbiAgICByZXR1cm4gKGVsLCAuLi50YWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRpbnVhdGlvbiA9IHZhcmlhbnRzW2VsLm5hbWVdO1xuICAgICAgICByZXR1cm4gKGNvbnRpbnVhdGlvbikgPyBjb250aW51YXRpb24oZWwsIC4uLnRhaWwpIDogW107XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUF0dHJQcmVzZW5jZU5hbWUobm9kZSkge1xuICAgIGNvbnN0IGF0dHJOYW1lID0gbm9kZS5uYW1lO1xuICAgIGNvbnN0IGNvbnRpbnVhdGlvbiA9IGhhbmRsZUFycmF5KG5vZGUuY29udCk7XG4gICAgcmV0dXJuIChlbCwgLi4udGFpbCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlbC5hdHRyaWJzLCBhdHRyTmFtZSkpXG4gICAgICAgID8gY29udGludWF0aW9uKGVsLCAuLi50YWlsKVxuICAgICAgICA6IFtdO1xufVxuZnVuY3Rpb24gaGFuZGxlQXR0clZhbHVlTmFtZShub2RlKSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gICAgZm9yIChjb25zdCBtYXRjaGVyIG9mIG5vZGUubWF0Y2hlcnMpIHtcbiAgICAgICAgY29uc3QgcHJlZGljYXRlID0gbWF0Y2hlci5wcmVkaWNhdGU7XG4gICAgICAgIGNvbnN0IGNvbnRpbnVhdGlvbiA9IGhhbmRsZUFycmF5KG1hdGNoZXIuY29udCk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKChhdHRyLCBlbCwgLi4udGFpbCkgPT4gKHByZWRpY2F0ZShhdHRyKSA/IGNvbnRpbnVhdGlvbihlbCwgLi4udGFpbCkgOiBbXSkpO1xuICAgIH1cbiAgICBjb25zdCBhdHRyTmFtZSA9IG5vZGUubmFtZTtcbiAgICByZXR1cm4gKGVsLCAuLi50YWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBlbC5hdHRyaWJzW2F0dHJOYW1lXTtcbiAgICAgICAgcmV0dXJuIChhdHRyIHx8IGF0dHIgPT09ICcnKVxuICAgICAgICAgICAgPyBjYWxsYmFja3MuZmxhdE1hcChjYiA9PiBjYihhdHRyLCBlbCwgLi4udGFpbCkpXG4gICAgICAgICAgICA6IFtdO1xuICAgIH07XG59XG5mdW5jdGlvbiBoYW5kbGVQdXNoRWxlbWVudE5vZGUobm9kZSkge1xuICAgIGNvbnN0IGNvbnRpbnVhdGlvbiA9IGhhbmRsZUFycmF5KG5vZGUuY29udCk7XG4gICAgY29uc3QgbGVmdEVsZW1lbnRHZXR0ZXIgPSAobm9kZS5jb21iaW5hdG9yID09PSAnKycpXG4gICAgICAgID8gZ2V0UHJlY2VkaW5nRWxlbWVudFxuICAgICAgICA6IGdldFBhcmVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIChlbCwgLi4udGFpbCkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gbGVmdEVsZW1lbnRHZXR0ZXIoZWwpO1xuICAgICAgICBpZiAobmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250aW51YXRpb24obmV4dCwgZWwsIC4uLnRhaWwpO1xuICAgIH07XG59XG5jb25zdCBnZXRQcmVjZWRpbmdFbGVtZW50ID0gKGVsKSA9PiB7XG4gICAgY29uc3QgcHJldiA9IGVsLnByZXY7XG4gICAgaWYgKHByZXYgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoZG9taGFuZGxlci5pc1RhZyhwcmV2KSkgPyBwcmV2IDogZ2V0UHJlY2VkaW5nRWxlbWVudChwcmV2KTtcbn07XG5jb25zdCBnZXRQYXJlbnRFbGVtZW50ID0gKGVsKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZWwucGFyZW50O1xuICAgIHJldHVybiAocGFyZW50ICYmIGRvbWhhbmRsZXIuaXNUYWcocGFyZW50KSkgPyBwYXJlbnQgOiBudWxsO1xufTtcbmZ1bmN0aW9uIGhhbmRsZVBvcEVsZW1lbnROb2RlKG5vZGUpIHtcbiAgICBjb25zdCBjb250aW51YXRpb24gPSBoYW5kbGVBcnJheShub2RlLmNvbnQpO1xuICAgIHJldHVybiAoZWwsIG5leHQsIC4uLnRhaWwpID0+IGNvbnRpbnVhdGlvbihuZXh0LCAuLi50YWlsKTtcbn1cblxuZXhwb3J0cy5ocDJCdWlsZGVyID0gaHAyQnVpbGRlcjtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRvbWhhbmRsZXIiLCJyZXF1aXJlIiwic2VsZGVyZWUiLCJocDJCdWlsZGVyIiwibm9kZXMiLCJQaWNrZXIiLCJoYW5kbGVBcnJheSIsIm1hdGNoZXJzIiwibWFwIiwiaGFuZGxlTm9kZSIsImVsIiwidGFpbCIsImZsYXRNYXAiLCJtIiwibm9kZSIsInR5cGUiLCJyZXN1bHQiLCJ2YWx1ZUNvbnRhaW5lciIsImhhbmRsZVRhZ05hbWUiLCJoYW5kbGVBdHRyVmFsdWVOYW1lIiwiaGFuZGxlQXR0clByZXNlbmNlTmFtZSIsImhhbmRsZVB1c2hFbGVtZW50Tm9kZSIsImhhbmRsZVBvcEVsZW1lbnROb2RlIiwidmFyaWFudHMiLCJ2YXJpYW50IiwiY29udCIsImNvbnRpbnVhdGlvbiIsIm5hbWUiLCJhdHRyTmFtZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImF0dHJpYnMiLCJjYWxsYmFja3MiLCJtYXRjaGVyIiwicHJlZGljYXRlIiwicHVzaCIsImF0dHIiLCJjYiIsImxlZnRFbGVtZW50R2V0dGVyIiwiY29tYmluYXRvciIsImdldFByZWNlZGluZ0VsZW1lbnQiLCJnZXRQYXJlbnRFbGVtZW50IiwibmV4dCIsInByZXYiLCJpc1RhZyIsInBhcmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.cjs\n");

/***/ })

};
;
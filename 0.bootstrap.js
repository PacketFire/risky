(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/risky.js":
/*!***********************!*\
  !*** ../pkg/risky.js ***!
  \***********************/
/*! exports provided: greet, Emu, __wbg_alert_472decbac30dc809, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risky_bg.wasm */ \"../pkg/risky_bg.wasm\");\n/* harmony import */ var _risky_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risky_bg.js */ \"../pkg/risky_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _risky_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Emu\", function() { return _risky_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Emu\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_472decbac30dc809\", function() { return _risky_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_472decbac30dc809\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _risky_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/risky.js?");

/***/ }),

/***/ "../pkg/risky_bg.js":
/*!**************************!*\
  !*** ../pkg/risky_bg.js ***!
  \**************************/
/*! exports provided: greet, Emu, __wbg_alert_472decbac30dc809, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Emu\", function() { return Emu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_472decbac30dc809\", function() { return __wbg_alert_472decbac30dc809; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risky_bg.wasm */ \"../pkg/risky_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} name\n*/\nfunction greet(name) {\n    var ptr0 = passStringToWasm0(name, _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"](ptr0, len0);\n}\n\n/**\n*/\nclass Emu {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Emu.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_emu_free\"](ptr);\n    }\n    /**\n    * @returns {Emu}\n    */\n    static init_emu() {\n        var ret = _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emu_init_emu\"]();\n        return Emu.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get_id() {\n        var ret = _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emu_get_id\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} new_id\n    */\n    set_id(new_id) {\n        _risky_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emu_set_id\"](this.ptr, new_id);\n    }\n}\n\nconst __wbg_alert_472decbac30dc809 = function(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/risky_bg.js?");

/***/ }),

/***/ "../pkg/risky_bg.wasm":
/*!****************************!*\
  !*** ../pkg/risky_bg.wasm ***!
  \****************************/
/*! exports provided: memory, __wbg_emu_free, emu_init_emu, emu_get_id, emu_set_id, greet, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./risky_bg.js */ \"../pkg/risky_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/risky_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/App.svelte */ \"./lib/App.svelte\");\n\n\nconst app = new _lib_App_svelte__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n\ttarget: document.body,\n\tprops: {\n\t\t// we'll learn about props later\n\t\tanswer: 42\n\t}\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./lib/App.svelte":
/*!************************!*\
  !*** ./lib/App.svelte ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ \"./node_modules/svelte/internal/index.mjs\");\n/* harmony import */ var risky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! risky */ \"../pkg/risky.js\");\n/* lib/App.svelte generated by Svelte v3.28.0 */\n\n\n\n\nfunction add_css() {\n\tvar style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(\"style\");\n\tstyle.id = \"svelte-ilty2p-style\";\n\tstyle.textContent = \"h1.svelte-ilty2p{color:black}\";\n\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(document.head, style);\n}\n\nfunction create_fragment(ctx) {\n\tlet h1;\n\tlet t1;\n\tlet button;\n\tlet mounted;\n\tlet dispose;\n\n\treturn {\n\t\tc() {\n\t\t\th1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(\"h1\");\n\t\t\th1.textContent = \"Risky - a virtual 6502 emulator\";\n\t\t\tt1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"space\"])();\n\t\t\tbutton = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(\"button\");\n\t\t\tbutton.textContent = \"Run\";\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"attr\"])(h1, \"class\", \"svelte-ilty2p\");\n\t\t},\n\t\tm(target, anchor) {\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, h1, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, t1, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, button, anchor);\n\n\t\t\tif (!mounted) {\n\t\t\t\tdispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"listen\"])(button, \"click\", /*handleClick*/ ctx[0]);\n\t\t\t\tmounted = true;\n\t\t\t}\n\t\t},\n\t\tp: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n\t\ti: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n\t\to: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n\t\td(detaching) {\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(h1);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(t1);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(button);\n\t\t\tmounted = false;\n\t\t\tdispose();\n\t\t}\n\t};\n}\n\nfunction instance($$self) {\n\tfunction handleClick() {\n\t\trisky__WEBPACK_IMPORTED_MODULE_1__[\"greet\"](\"visitor\");\n\t\tconst emu = risky__WEBPACK_IMPORTED_MODULE_1__[\"Emu\"].init_emu();\n\t\tconsole.log(emu.get_id());\n\t\temu.set_id(10);\n\t\tconsole.log(emu.get_id());\n\t}\n\n\treturn [handleClick];\n}\n\nclass App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"SvelteComponent\"] {\n\tconstructor(options) {\n\t\tsuper();\n\t\tif (!document.getElementById(\"svelte-ilty2p-style\")) add_css();\n\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"init\"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"safe_not_equal\"], {});\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./lib/App.svelte?");

/***/ })

}]);
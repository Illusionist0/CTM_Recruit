(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ 57:
/*!******************************************************************************************!*\
  !*** /Users/mac/Documents/HBuilderProjects/CTM/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ 58));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 58:
/*!***********************************************************************!*\
  !*** /Users/mac/Documents/HBuilderProjects/CTM/pages/index/index.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57280228&scoped=true& */ 59);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 61);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=57280228&lang=scss&scoped=true& */ 64);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57280228",
  null,
  false,
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/*!******************************************************************************************************************!*\
  !*** /Users/mac/Documents/HBuilderProjects/CTM/pages/index/index.vue?vue&type=template&id=57280228&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=57280228&scoped=true& */ 60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 60:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/mac/Documents/HBuilderProjects/CTM/pages/index/index.vue?vue&type=template&id=57280228&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    mSwiper: function () {
      return __webpack_require__.e(/*! import() | components/m-swiper/m-swiper */ "components/m-swiper/m-swiper").then(__webpack_require__.bind(null, /*! @/components/m-swiper/m-swiper.vue */ 690))
    },
    yzbNotice: function () {
      return __webpack_require__.e(/*! import() | components/yzb-notice/yzb-notice */ "components/yzb-notice/yzb-notice").then(__webpack_require__.bind(null, /*! @/components/yzb-notice/yzb-notice.vue */ 697))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 61:
/*!************************************************************************************************!*\
  !*** /Users/mac/Documents/HBuilderProjects/CTM/pages/index/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 62);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 62:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/mac/Documents/HBuilderProjects/CTM/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 42));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 44));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 30);
var _imservice = _interopRequireDefault(__webpack_require__(/*! @/lib/imservice */ 31));
var _amapWx = _interopRequireDefault(__webpack_require__(/*! @/common/amap-wx.js */ 63));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var mSwiper = function mSwiper() {
  __webpack_require__.e(/*! require.ensure | components/m-swiper/m-swiper */ "components/m-swiper/m-swiper").then((function () {
    return resolve(__webpack_require__(/*! @/components/m-swiper/m-swiper.vue */ 690));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var yzbPosition = function yzbPosition() {
  Promise.all(/*! require.ensure | components/yzb/yzb-position */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/yzb/yzb-position")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/yzb/yzb-position.vue */ 704));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var yzbResume = function yzbResume() {
  Promise.all(/*! require.ensure | components/yzb/yzb-resume */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/yzb/yzb-resume")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/yzb/yzb-resume.vue */ 711));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var yzbGrid = function yzbGrid() {
  __webpack_require__.e(/*! require.ensure | components/yzb/yzb-grid */ "components/yzb/yzb-grid").then((function () {
    return resolve(__webpack_require__(/*! @/components/yzb/yzb-grid.vue */ 718));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var mAd = function mAd() {
  __webpack_require__.e(/*! require.ensure | components/m-ad/m-ad */ "components/m-ad/m-ad").then((function () {
    return resolve(__webpack_require__(/*! @/components/m-ad/m-ad.vue */ 725));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    mSwiper: mSwiper,
    yzbPosition: yzbPosition,
    mAd: mAd,
    yzbResume: yzbResume,
    yzbGrid: yzbGrid
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)(['userInfo'])), (0, _vuex.mapGetters)(['hasLogin'])),
  data: function data() {
    return {
      statusBarHeight: 0,
      navBarHeight: 0,
      topHeight: 0,
      status: '',
      query: {
        page: 1,
        limit: 10
      },
      banner: [{
        pic: "../../static/bg.jpg"
      }, {
        pic: "../../static/招聘.png"
      }],
      grid: [],
      ka: [],
      adList: [],
      postList: [],
      JobExpectList: [],
      list: [],
      selectExpected: null,
      key: '102dcab15e743584f73d383dea7530e7',
      //高德地图key
      location: {
        city: '未定位'
      },
      //定位信息

      loadStatus: 'loading',
      //loading、fail、success
      noticeList: []
    };
  },
  created: function created() {
    var _this = this;
    //获取手机状态栏高度
    // this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];

    // this.navBarHeight = uni.getMenuButtonBoundingClientRect().bottom;
    // this.topHeight = this.navBarHeight + uni.upx2px(80);

    uni.getSystemInfo({
      success: function success(e) {
        // this.compareVersion(e.SDKVersion, '2.5.0')
        var statusBar = 0; //状态栏高度
        var customBar = 0; // 状态栏高度 + 导航栏高度  
        var navbar = 0; // 自定义标题与胶囊对齐高度

        statusBar = e.statusBarHeight;
        customBar = e.statusBarHeight + 45;
        if (e.platform === 'android') {
          _this.$store.commit('SET_SYSTEM_IOSANDROID', false);
          customBar = e.statusBarHeight + 50;
        }
        statusBar = e.statusBarHeight;
        var custom = wx.getMenuButtonBoundingClientRect();
        customBar = custom.bottom + custom.top - e.statusBarHeight;
        navbar = (custom.top - e.statusBarHeight) * 2 + custom.height;
        _this.statusBarHeight = statusBar;
        _this.navBarHeight = navbar;
        _this.topHeight = _this.navBarHeight + uni.upx2px(80);
      }
    });
  },
  onLoad: function onLoad(query) {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var loc;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.$AppEntryController.main(query);
            case 2:
              // this.getBanners();
              _this2.getGrids();
              _this2.getNoticeList();
              loc = _this2.$db.get('location');
              console.log('loc===', loc);
              if (loc) {
                _this2.location = loc;
              }
              _this2.locationAuth();
              _this2.listenCitySelect();
              // this.initHotPostData();
              _this2.getPostPageList();
            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onShow: function onShow() {
    if (this.hasLogin && this.userInfo.memberRole == 1) {
      this.roleChange();
    }
    this.getDatasByLoc();
    this.initChat();
  },
  onReady: function onReady() {
    if (this.userInfo.memberRole != 1) {
      uni.setTabBarItem({
        index: 1,
        text: '职位'
      });
    } else {
      uni.setTabBarItem({
        index: 1,
        text: '简历'
      });
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.getDatasByLoc('refresh', true);
  },
  onReachBottom: function onReachBottom() {
    this.getDatasByLoc('add');
  },
  methods: {
    onClickImg: function onClickImg(index) {
      console.log('xx-' + index);
      uni.navigateTo({
        url: 'http://www.nanchangrcw.cn/'
      });
    },
    //需要位置信息的
    getDatasByLoc: function getDatasByLoc() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'refresh';
      var pulldown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      console.log('memberRole===', this.userInfo.memberRole);
      if (this.location.pcitycode) {
        this.query.latitude = this.location.latitude;
        this.query.longitude = this.location.longitude;
        this.query.pcitycode = this.location.pcitycode;
        if (this.userInfo.memberRole == 1) {
          this.getResumeList(type, pulldown);
        } else {
          this.getPositionList(type, pulldown);
        }
      } else {
        console.log('位置不能为空哦');
      }
    },
    roleChange: function roleChange() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this3.userInfo.companyId == 0)) {
                  _context2.next = 5;
                  break;
                }
                _context2.next = 3;
                return _this3.$apis.switchRole({
                  role: 0
                });
              case 3:
                res = _context2.sent;
                _this3.getUserInfo();
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // 获取用户信息
    getUserInfo: function getUserInfo() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var userInfo;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.$apis.getUserInfo();
              case 2:
                userInfo = _context3.sent;
                if (!(userInfo == true)) {
                  _context3.next = 8;
                  break;
                }
                uni.clearStorageSync();
                _this4.$store.commit('SET_LOGOUT');
                if (_this4.goEasy.getConnectionStatus() === 'connected') {
                  console.log('do  disconnect');
                  getApp().globalData.imService.disconnect();
                }
                return _context3.abrupt("return");
              case 8:
                _this4.$store.commit('SET_USERINFO', userInfo);
                _this4.getDatasByLoc();
              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    initHotPostData: function initHotPostData() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var postList;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this5.$apis.getHotPostList();
              case 2:
                postList = _context4.sent;
                console.log('postList==', postList);
                _this5.postList = postList || [];
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    initChat: function initChat() {
      //注册
      if (this.hasLogin) {
        console.log('this.goEasy.getConnectionStatus()==' + this.goEasy.getConnectionStatus());
        if (this.goEasy.getConnectionStatus() === 'disconnected') {
          getApp().globalData.imService = new _imservice.default(this.goEasy, this.GoEasy);
          getApp().globalData.imService.connect(this.userInfo);
        } else {
          //加载会话列表
          this.goEasy.im.latestConversations({
            onSuccess: function onSuccess(result) {
              var content = result.content;
              console.log('最新会话列表', content);
              var unreadTotal = content.unreadTotal;
              if (unreadTotal > 0) {
                uni.setTabBarBadge({
                  index: 2,
                  text: unreadTotal.toString()
                });
              } else {
                uni.removeTabBarBadge({
                  index: 2
                });
              }
            },
            onFailed: function onFailed(error) {
              //获取失败
              console.log('失败获取最新会话列表, code:' + error.code + ' content:' + error.content);
            }
          });
        }
      }
    },
    getPostPageList: function getPostPageList() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var param, res;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                param = {
                  page: 1,
                  limit: 12,
                  hot: 1
                };
                _context5.next = 3;
                return _this6.$apis.getPostPageList(param);
              case 3:
                res = _context5.sent;
                if (res) {
                  _this6.postList = res.data;
                }
              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    getBanners: function getBanners() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var data;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this7.$apis.getBanners({
                  apId: 1
                });
              case 2:
                data = _context6.sent;
                if (data) {
                  _this7.banner = data;
                }
              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getJobExpectList: function getJobExpectList() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var data, i;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this8.$apis.getJobExpectList();
              case 2:
                data = _context7.sent;
                if (data) {
                  for (i in data) {
                    data[i].selected = false;
                    if (i == 0) {
                      data[i].selected = true;
                    }
                  }
                  _this8.JobExpectList = data;
                  _this8.selectExpected = _this8.JobExpectList[0];
                  _this8.getPositionList();
                }
              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    getPositionList: function getPositionList() {
      var _arguments = arguments,
        _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var type, pulldown, res, data, i;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                type = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 'refresh';
                pulldown = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
                _this9.status = '请求中';
                if (type == 'refresh') {
                  _this9.query.page = 1;
                } else {
                  _this9.query.page++;
                }
                _context8.next = 6;
                return _this9.$apis.getPositionList(_this9.query);
              case 6:
                res = _context8.sent;
                if (res) {
                  if (type == 'refresh') {
                    _this9.list = [];
                  }
                  if (pulldown) {
                    uni.stopPullDownRefresh();
                  }
                  data = res.data;
                  for (i in data) {
                    if (data[i].skill) {
                      data[i].skill = data[i].skill.split(',');
                    }
                  }
                  _this9.list = _this9.list.concat(data || []);
                  _this9.changeStatus(res);
                }
              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getCompanyPositionList: function getCompanyPositionList() {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var param, res, data, i;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                param = {
                  page: 1,
                  limit: 30
                };
                _context9.next = 3;
                return _this10.$apis.getCompanyPositionList(param);
              case 3:
                res = _context9.sent;
                if (res) {
                  data = res.data;
                  for (i in data) {
                    data[i].selected = false;
                    if (i == 0) {
                      data[i].selected = true;
                    }
                  }
                  _this10.JobExpectList = data;
                  _this10.selectExpected = _this10.JobExpectList[0];
                  _this10.getResumeList();
                }
              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    getResumeList: function getResumeList() {
      var _arguments2 = arguments,
        _this11 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var type, pulldown, res, data;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                type = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : 'refresh';
                pulldown = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : false;
                _this11.status = '请求中';
                if (type == 'refresh') {
                  _this11.query.page = 1;
                } else {
                  _this11.query.page++;
                }
                _context10.next = 6;
                return _this11.$apis.getResumeList(_this11.query);
              case 6:
                res = _context10.sent;
                if (res) {
                  if (type == 'refresh') {
                    _this11.list = [];
                  }
                  if (pulldown) {
                    uni.stopPullDownRefresh();
                  }
                  data = res.data;
                  _this11.list = _this11.list.concat(data || []);
                  _this11.changeStatus(res);
                }
              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    // 修改请求状态
    changeStatus: function changeStatus(data) {
      if (this.list.length === 0) {
        this.status = '暂无数据';
      } else if (this.query.page >= Math.ceil(data.count / this.query.limit)) {
        this.status = '没有更多';
      } else {
        this.status = '请求更多';
      }
    },
    getGrids: function getGrids() {
      this.grid = [{
        image: this.$mAssetsPath.grid_1,
        text: '最新发布',
        path: this.$mRoutesConfig.positionList,
        type: 1
      }, {
        image: this.$mAssetsPath.grid_2,
        text: '热招职位',
        path: this.$mRoutesConfig.positionList,
        type: 2
      }, {
        image: this.$mAssetsPath.grid_3,
        text: '高薪职位',
        path: this.$mRoutesConfig.positionList,
        type: 3
      }, {
        image: this.$mAssetsPath.grid_4,
        text: '兼职招聘',
        path: this.$mRoutesConfig.positionList,
        type: 4
      }, {
        image: this.$mAssetsPath.grid_5,
        text: '公司列表',
        path: this.$mRoutesConfig.companyList,
        type: 5
      }, {
        image: this.$mAssetsPath.grid_6,
        text: '法律知识',
        path: this.$mRoutesConfig.lawList,
        type: 4
      }, {
        image: this.$mAssetsPath.grid_10,
        text: '公告资讯',
        path: this.$mRoutesConfig.courseList,
        type: 4
      }, {
        image: this.$mAssetsPath.grid_8,
        text: '招聘会',
        path: this.$mRoutesConfig.taskList,
        type: 5
      }, {
        image: this.$mAssetsPath.grid_9,
        text: '联系客服',
        path: this.$mRoutesConfig.contactUs,
        type: 5
      }, {
        image: this.$mAssetsPath.grid_7,
        text: '系统消息',
        path: this.$mRoutesConfig.notices,
        type: 5
      }];
    },
    handleClickGrid: function handleClickGrid(o) {
      if (this.grid[o.index].type == 999) {
        uni.switchTab({
          url: '../type/type'
        });
        return;
      }
      console.log("handleClickGrid", this.grid[o.index]);
      this.$mRouter.push({
        route: this.grid[o.index].path,
        query: {
          type: this.grid[o.index].type,
          text: this.grid[o.index].text
        }
      });
    },
    selectExpect: function selectExpect(index) {
      for (var i in this.JobExpectList) {
        if (index == i) {
          this.JobExpectList[i].selected = true;
        } else {
          this.JobExpectList[i].selected = false;
        }
      }
      this.selectExpected = this.JobExpectList[index];
      this.getDatasByLoc();
    },
    positionDetail: function positionDetail(item) {
      this.$mRouter.push({
        route: this.$mRoutesConfig.positionDetail,
        query: {
          id: item.id
        }
      });
    },
    resumeDetail: function resumeDetail(item) {
      this.$mRouter.push({
        route: this.$mRoutesConfig.resumeDetail,
        query: {
          id: item.id
        }
      });
    },
    toAllPost: function toAllPost() {
      uni.switchTab({
        url: '/pages/type/type'
      });
    },
    toPost: function toPost(item) {
      //跳转到岗位筛选页面
      getApp().globalData.postId = item.id;
      uni.switchTab({
        url: '/pages/type/type'
      });
    },
    search: function search() {
      this.$mRouter.push({
        route: this.$mRoutesConfig.search
      });
    },
    toSelectCity: function toSelectCity() {
      console.log('toSelectCity');
      if (this.location.city == '未定位') {
        this.locationAuth();
      } else {
        uni.navigateTo({
          url: '/pages/index/selectCity'
        });
      }
    },
    /**
     * 位置授权
     */
    locationAuth: function locationAuth() {
      var that = this;
      uni.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userLocation']) {
            console.log('userLocation位置功能已授权');
            that.getLocation();
            // 如果已授权,直接获取对应参数
          } else if (!res.authSetting['scope.userLocation']) {
            // 说明此时要获取的位置功能尚未授权,
            // 则设置进入页面时主动弹出，直接授权
            uni.authorize({
              scope: 'scope.userLocation',
              success: function success(res) {
                // 授权成功
                console.log(res);
                that.getLocation();
                // 成功后获取对应的位置参数
              },
              fail: function fail() {
                console.log('位置授权失败');
                uni.showModal({
                  content: '检测到您没打开获取信息功能权限，是否去设置打开？',
                  confirmText: '确认',
                  cancelText: '取消',
                  success: function success(res) {
                    console.log(res);
                    if (res.confirm) {
                      uni.openSetting({
                        success: function success(res) {
                          console.log('res', res);
                          that.getLocation();
                        },
                        fail: function fail(err) {
                          console.log(err);
                        }
                      });
                    } else {
                      console.log('取消');
                    }
                  }
                });
              }
            });
          }
        },
        fail: function fail() {
          console.log('获取授权信息授权失败');
        }
      });
    },
    getLocation: function getLocation() {
      //高德地图插件
      this.myAmapFun = new _amapWx.default.AMapWX({
        key: this.key
      });
      var that = this;
      this.myAmapFun.getRegeo({
        success: function success(data) {
          //成功回调
          console.log('定位信息：', data);
          var mlocation = {
            latitude: data[0].latitude,
            longitude: data[0].longitude,
            pcity: data[0].regeocodeData.addressComponent.city,
            city: data[0].regeocodeData.addressComponent.district,
            citycode: data[0].regeocodeData.addressComponent.adcode + '000000',
            pcitycode: data[0].regeocodeData.addressComponent.adcode.substr(0, 4) + '00000000'
          };
          that.location = mlocation;
          getApp().globalData.location = mlocation;
          getApp().globalData.currentLocation = JSON.parse(JSON.stringify(mlocation));
          //保存到本地
          that.$db.set('location', mlocation);
          that.getDatasByLoc();
        },
        fail: function fail(info) {
          //失败回调
          console.log(info);
        }
      });
    },
    //获取定位信息
    getPosition: function getPosition() {
      console.log("=========获取定位信息========================");
      var that = this;
      uni.getLocation({
        type: 'gcj02',
        success: function success(lb) {
          console.log('位置信息', lb);
          console.log('当前位置的经度：' + lb.longitude);
          console.log('当前位置的纬度：' + lb.latitude);
          that.latitude = lb.latitude;
          that.longitude = lb.longitude;
          console.log(lb.longitude, lb.latitude);
          var key = '845d7a0716db36b612ce8e13369c4e09'; //高德地图key
          uni.request({
            // url: '/gaode?output=json&location=' + lb.longitude + ',' + lb.latitude + '&key=' + key + '&radius=1000&extensions=all',
            url: '/qq?output=json&location=' + lb.latitude + ',' + lb.longitude + '&key=TZCBZ-R333W-T27RS-OX3SB-RRJET-AWFVF&radius=1000&get_poi=1',
            data: {},
            header: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            success: function success(res) {
              console.log('高德地图API接口返回信息', res);
              // that.area = res.data.regeocode.addressComponent.city;
              console.log('定位信息：', res);
              var mlocation = {
                latitude: res.data.result.ad_info.location.latitude,
                longitude: res.data.result.location.longitude,
                pcity: res.data.result.ad_info.city,
                city: res.data.result.ad_info.district,
                citycode: res.data.result.ad_info.adcode + '000000',
                pcitycode: res.data.result.ad_info.adcode.substr(0, 4) + '00000000'
              };
              that.location = mlocation;
              getApp().globalData.location = mlocation;
              getApp().globalData.currentLocation = JSON.parse(JSON.stringify(mlocation));
              //保存到本地
              that.$db.set('location', mlocation);
              that.getDatasByLoc();
            }
          });
        },
        fail: function fail(error) {
          console.log('=======error=========', error);
        }
      });
    },
    listenCitySelect: function listenCitySelect() {
      var _this12 = this;
      var that = this;
      uni.$on('city', function (res) {
        console.log('city', res);
        getApp().globalData.location.city = res.city;
        getApp().globalData.location.citycode = res.code;
        if (res.level == 2) {
          getApp().globalData.location.pcity = res.city;
          getApp().globalData.location.pcitycode = res.code;
        } else {
          getApp().globalData.location.pcity = res.pcity;
          getApp().globalData.location.pcitycode = res.pcode;
        }
        _this12.location = getApp().globalData.location;
        _this12.$db.set('location', _this12.location);
        _this12.getDatasByLoc();
      });
    },
    getNoticeList: function getNoticeList() {
      var _this13 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        var param, res;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                param = {
                  page: 1,
                  limit: 10
                };
                _context11.next = 3;
                return _this13.$apis.getNoticeList(param);
              case 3:
                res = _context11.sent;
                console.log('getNoticeList===', res);
                if (res.data.length > 0) {
                  _this13.noticeList = res.data;
                  console.log('noticeList===', _this13.noticeList);
                }
              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    goItem: function goItem(item) {
      console.log('goItem', item);
      this.$mRouter.push({
        route: this.$mRoutesConfig.noticeDetail,
        query: {
          id: item.noticeId
        }
      });
    },
    goMore: function goMore(item) {
      console.log('goMore', item);
      this.$mRouter.push({
        route: this.$mRoutesConfig.notices
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 64:
/*!*********************************************************************************************************************************!*\
  !*** /Users/mac/Documents/HBuilderProjects/CTM/pages/index/index.vue?vue&type=style&index=0&id=57280228&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=57280228&lang=scss&scoped=true& */ 65);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 65:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/mac/Documents/HBuilderProjects/CTM/pages/index/index.vue?vue&type=style&index=0&id=57280228&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[57,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
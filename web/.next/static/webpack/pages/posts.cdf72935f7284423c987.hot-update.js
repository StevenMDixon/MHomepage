webpackHotUpdate_N_E("pages/posts",{

/***/ "./Components/PostPreviewItem.jsx":
/*!****************************************!*\
  !*** ./Components/PostPreviewItem.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostPreviewItem.module.scss */ "./Components/PostPreviewItem.module.scss");
/* harmony import */ var _PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\PostPreviewItem.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostPreviewItem = function PostPreviewItem(_ref) {
  var post = _ref.post;
  console.log(post);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.preview_link_wrapper,
    href: "/posts/pid",
    as: "/post/".concat(post.slug.current),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("article", {
    className: _PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.preview_item,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: _PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.preview_image,
    alt: "Preview picture for article",
    src: post.previewImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.article_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: _PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.preview_title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, post.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, post.excerpt), __jsx("p", {
    class_name: _PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.preview_date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, new Date(post.publishedAt).toLocaleDateString()))));
};

_c = PostPreviewItem;
/* harmony default export */ __webpack_exports__["default"] = (PostPreviewItem);

var _c;

$RefreshReg$(_c, "PostPreviewItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0UHJldmlld0l0ZW0uanN4Il0sIm5hbWVzIjpbIlBvc3RQcmV2aWV3SXRlbSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwicHJldmlld19saW5rX3dyYXBwZXIiLCJzbHVnIiwiY3VycmVudCIsInByZXZpZXdfaXRlbSIsInByZXZpZXdfaW1hZ2UiLCJwcmV2aWV3SW1hZ2UiLCJhcnRpY2xlX3dyYXBwZXIiLCJwcmV2aWV3X3RpdGxlIiwidGl0bGUiLCJleGNlcnB0IiwicHJldmlld19kYXRlIiwiRGF0ZSIsInB1Ymxpc2hlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQVk7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFFbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsU0FDQSxNQUFDLGdEQUFEO0FBQU0sYUFBUyxFQUFFRyxtRUFBTSxDQUFDQyxvQkFBeEI7QUFBOEMsUUFBSSxFQUFDLFlBQW5EO0FBQWdFLE1BQUUsa0JBQVdKLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxPQUFyQixDQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUVILG1FQUFNLENBQUNJLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUosbUVBQU0sQ0FBQ0ssYUFBdkI7QUFBc0MsT0FBRyxFQUFDLDZCQUExQztBQUF3RSxPQUFHLEVBQUVSLElBQUksQ0FBQ1MsWUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVOLG1FQUFNLENBQUNPLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRVAsbUVBQU0sQ0FBQ1EsYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1gsSUFBSSxDQUFDWSxLQUEzQyxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJWixJQUFJLENBQUNhLE9BQVQsQ0FGRixFQUdFO0FBQUcsY0FBVSxFQUFFVixtRUFBTSxDQUFDVyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDLElBQUlDLElBQUosQ0FBU2YsSUFBSSxDQUFDZ0IsV0FBZCxFQUEyQkMsa0JBQTNCLEVBQXJDLENBSEYsQ0FGRixDQURGLENBREE7QUFZRCxDQWZEOztLQUFNbEIsZTtBQWlCU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuY2RmNzI5MzVmNzI4NDQyM2M5ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb3N0UHJldmlld0l0ZW0ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IFBvc3RQcmV2aWV3SXRlbSA9ICh7cG9zdH0pID0+IHtcclxuXHJcbiAgY29uc29sZS5sb2cocG9zdClcclxuICByZXR1cm4gKFxyXG4gIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXdfbGlua193cmFwcGVyfSBocmVmPVwiL3Bvc3RzL3BpZFwiIGFzPXtgL3Bvc3QvJHtwb3N0LnNsdWcuY3VycmVudH1gfSA+XHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3X2l0ZW19PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXdfaW1hZ2V9IGFsdD1cIlByZXZpZXcgcGljdHVyZSBmb3IgYXJ0aWNsZVwiIHNyYz17cG9zdC5wcmV2aWV3SW1hZ2V9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX3dyYXBwZXJ9PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3X3RpdGxlfT57cG9zdC50aXRsZX08L2gzPlxyXG4gICAgICAgIDxwPntwb3N0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzX25hbWU9e3N0eWxlcy5wcmV2aWV3X2RhdGV9PntuZXcgRGF0ZShwb3N0LnB1Ymxpc2hlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPiAgXHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0UHJldmlld0l0ZW07Il0sInNvdXJjZVJvb3QiOiIifQ==
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
  return __jsx("a", {
    href: "/posts/" + post.slug.current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("article", {
    className: _PostPreviewItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.preview_item,
    key: post.slug,
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
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0UHJldmlld0l0ZW0uanN4Il0sIm5hbWVzIjpbIlBvc3RQcmV2aWV3SXRlbSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwic2x1ZyIsImN1cnJlbnQiLCJzdHlsZXMiLCJwcmV2aWV3X2l0ZW0iLCJwcmV2aWV3X2ltYWdlIiwicHJldmlld0ltYWdlIiwiYXJ0aWNsZV93cmFwcGVyIiwicHJldmlld190aXRsZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQVk7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFFbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsU0FDQTtBQUFHLFFBQUksRUFBRSxZQUFVQSxJQUFJLENBQUNHLElBQUwsQ0FBVUMsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVMsYUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxZQUEzQjtBQUF5QyxPQUFHLEVBQUVOLElBQUksQ0FBQ0csSUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRSxtRUFBTSxDQUFDRSxhQUF2QjtBQUFzQyxPQUFHLEVBQUMsNkJBQTFDO0FBQXdFLE9BQUcsRUFBRVAsSUFBSSxDQUFDUSxZQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUgsbUVBQU0sQ0FBQ0ksZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFSixtRUFBTSxDQUFDSyxhQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDVixJQUFJLENBQUNXLEtBQTNDLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGRixDQURGLENBREE7QUFXRCxDQWREOztLQUFNWixlO0FBZ0JTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy43MWNjYmQ4OTM1MTU1N2QwODcxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bvc3RQcmV2aWV3SXRlbS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuY29uc3QgUG9zdFByZXZpZXdJdGVtID0gKHtwb3N0fSkgPT4ge1xyXG5cclxuICBjb25zb2xlLmxvZyhwb3N0KVxyXG4gIHJldHVybiAoXHJcbiAgPGEgaHJlZj17XCIvcG9zdHMvXCIrcG9zdC5zbHVnLmN1cnJlbnR9ID5cclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXdfaXRlbX0ga2V5PXtwb3N0LnNsdWd9PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXdfaW1hZ2V9IGFsdD1cIlByZXZpZXcgcGljdHVyZSBmb3IgYXJ0aWNsZVwiIHNyYz17cG9zdC5wcmV2aWV3SW1hZ2V9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX3dyYXBwZXJ9PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3X3RpdGxlfT57cG9zdC50aXRsZX08L2gzPlxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+ICBcclxuICAgIDwvYT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RQcmV2aWV3SXRlbTsiXSwic291cmNlUm9vdCI6IiJ9
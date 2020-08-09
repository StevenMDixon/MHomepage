webpackHotUpdate_N_E("pages/posts/[pid]",{

/***/ "./pages/posts/[pid].jsx":
/*!*******************************!*\
  !*** ./pages/posts/[pid].jsx ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Layout */ "./Components/Layout.jsx");
/* harmony import */ var _Components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Nav */ "./Components/Nav.jsx");
/* harmony import */ var _Components_PostWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/PostWrapper */ "./Components/PostWrapper.jsx");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\pages\\posts\\[pid].jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_2___default.a).image(source);
}

var Post = function Post(_ref) {
  var data = _ref.data;
  console.log(data);
  var postData = {
    categories: data.categories,
    mainImage: urlFor(item.mainImage).width(1200).url()
  };
  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 1
    }
  }, __jsx(_Components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    current: "blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 1
    }
  }), __jsx(_Components_PostWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    client: _client__WEBPACK_IMPORTED_MODULE_2___default.a,
    post: postData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 1
    }
  }, __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    blocks: data.body,
    imageOptions: {
      w: 480,
      h: 240,
      fit: 'max'
    }
  }, _client__WEBPACK_IMPORTED_MODULE_2___default.a.config(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }))));
};

_c = Post;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3BpZF0uanN4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiUG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicG9zdERhdGEiLCJjYXRlZ29yaWVzIiwibWFpbkltYWdlIiwiaXRlbSIsIndpZHRoIiwidXJsIiwiYm9keSIsInciLCJoIiwiZml0IiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHdEQUFlLENBQUNDLDhDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBR0QsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBWTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUN6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxNQUFNRyxRQUFRLEdBQUc7QUFDZkMsY0FBVSxFQUFFSixJQUFJLENBQUNJLFVBREY7QUFFZkMsYUFBUyxFQUFFWCxNQUFNLENBQUNZLElBQUksQ0FBQ0QsU0FBTixDQUFOLENBQXVCRSxLQUF2QixDQUE2QixJQUE3QixFQUFtQ0MsR0FBbkM7QUFGSSxHQUFqQjtBQVFBLFNBQ0EsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx1REFBRDtBQUFLLFdBQU8sRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBLE1BQUMsK0RBQUQ7QUFBYSxVQUFNLEVBQUlYLDhDQUF2QjtBQUErQixRQUFJLEVBQUlNLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQ0UsVUFBTSxFQUFJSCxJQUFJLENBQUNTLElBRGpCO0FBRUUsZ0JBQVksRUFBRTtBQUFDQyxPQUFDLEVBQUUsR0FBSjtBQUFTQyxPQUFDLEVBQUMsR0FBWDtBQUFnQkMsU0FBRyxFQUFFO0FBQXJCO0FBRmhCLEtBR01mLDhDQUFNLENBQUNnQixNQUFQLEVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBRkEsQ0FEQTtBQVlDLENBdEJEOztLQUFNZCxJOztBQTJDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3BpZF0uMjE2OTU0Nzk0NDIxMzhjODFhZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgUG9zdFdyYXBwZXIgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Qb3N0V3JhcHBlcic7XHJcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcclxuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBQb3N0ID0gKHtkYXRhfSkgPT4ge1xyXG5jb25zb2xlLmxvZyhkYXRhKVxyXG5jb25zdCBwb3N0RGF0YSA9IHtcclxuICBjYXRlZ29yaWVzOiBkYXRhLmNhdGVnb3JpZXMsXHJcbiAgbWFpbkltYWdlOiB1cmxGb3IoaXRlbS5tYWluSW1hZ2UpLndpZHRoKDEyMDApLnVybCgpLFxyXG4gIFxyXG59XHJcblxyXG5cclxuIFxyXG5yZXR1cm4gKFxyXG48TGF5b3V0PlxyXG48TmF2IGN1cnJlbnQ9J2Jsb2cnIC8+XHJcbjxQb3N0V3JhcHBlciBjbGllbnQgPSB7Y2xpZW50fSBwb3N0ID0ge3Bvc3REYXRhfT5cclxuICA8QmxvY2tDb250ZW50XHJcbiAgICBibG9ja3MgPSB7ZGF0YS5ib2R5fVxyXG4gICAgaW1hZ2VPcHRpb25zPXt7dzogNDgwLCBoOjI0MCwgZml0OiAnbWF4J319XHJcbiAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxyXG4gICAgLz5cclxuPC9Qb3N0V3JhcHBlcj5cclxuPC9MYXlvdXQ+XHJcbilcclxufVxyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRwaWRdWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3IgLT5uYW1lLFxyXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10gLT4gdGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIGJvZHksXHJcbiAgbWFpbkltYWdlXHJcbn0gYDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0eyBwaWQgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIGNvbnN0IGRhdGEgPSAgYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgcXVlcnksIHtwaWR9KSAgXHJcblxyXG4gIHJldHVybiB7cHJvcHM6IHtkYXRhfX1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==
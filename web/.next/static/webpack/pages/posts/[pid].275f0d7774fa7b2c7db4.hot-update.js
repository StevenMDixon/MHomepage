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
    mainImage: urlFor(data.mainImage).width(1200).url()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3BpZF0uanN4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiUG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicG9zdERhdGEiLCJjYXRlZ29yaWVzIiwibWFpbkltYWdlIiwid2lkdGgiLCJ1cmwiLCJib2R5IiwidyIsImgiLCJmaXQiLCJjb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBR0EsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0Msd0RBQWUsQ0FBQ0MsOENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFHRCxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFZO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLE1BQU1HLFFBQVEsR0FBRztBQUNmQyxjQUFVLEVBQUVKLElBQUksQ0FBQ0ksVUFERjtBQUVmQyxhQUFTLEVBQUVYLE1BQU0sQ0FBQ00sSUFBSSxDQUFDSyxTQUFOLENBQU4sQ0FBdUJDLEtBQXZCLENBQTZCLElBQTdCLEVBQW1DQyxHQUFuQztBQUZJLEdBQWpCO0FBUUEsU0FDQSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHVEQUFEO0FBQUssV0FBTyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUEsTUFBQywrREFBRDtBQUFhLFVBQU0sRUFBSVYsOENBQXZCO0FBQStCLFFBQUksRUFBSU0sUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFDRSxVQUFNLEVBQUlILElBQUksQ0FBQ1EsSUFEakI7QUFFRSxnQkFBWSxFQUFFO0FBQUNDLE9BQUMsRUFBRSxHQUFKO0FBQVNDLE9BQUMsRUFBQyxHQUFYO0FBQWdCQyxTQUFHLEVBQUU7QUFBckI7QUFGaEIsS0FHTWQsOENBQU0sQ0FBQ2UsTUFBUCxFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQUZBLENBREE7QUFZQyxDQXRCRDs7S0FBTWIsSTs7QUEyQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twaWRdLjI3NWYwZDc3NzRmYTdiMmM3ZGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTmF2JztcclxuaW1wb3J0IFBvc3RXcmFwcGVyIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvUG9zdFdyYXBwZXInO1xyXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0JztcclxuXHJcblxyXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5cclxuY29uc3QgUG9zdCA9ICh7ZGF0YX0pID0+IHtcclxuY29uc29sZS5sb2coZGF0YSlcclxuY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgY2F0ZWdvcmllczogZGF0YS5jYXRlZ29yaWVzLFxyXG4gIG1haW5JbWFnZTogdXJsRm9yKGRhdGEubWFpbkltYWdlKS53aWR0aCgxMjAwKS51cmwoKVxyXG5cclxufVxyXG5cclxuXHJcbiBcclxucmV0dXJuIChcclxuPExheW91dD5cclxuPE5hdiBjdXJyZW50PSdibG9nJyAvPlxyXG48UG9zdFdyYXBwZXIgY2xpZW50ID0ge2NsaWVudH0gcG9zdCA9IHtwb3N0RGF0YX0+XHJcbiAgPEJsb2NrQ29udGVudFxyXG4gICAgYmxvY2tzID0ge2RhdGEuYm9keX1cclxuICAgIGltYWdlT3B0aW9ucz17e3c6IDQ4MCwgaDoyNDAsIGZpdDogJ21heCd9fVxyXG4gICAgey4uLmNsaWVudC5jb25maWcoKX1cclxuICAgIC8+XHJcbjwvUG9zdFdyYXBwZXI+XHJcbjwvTGF5b3V0PlxyXG4pXHJcbn1cclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkcGlkXVswXXtcclxuICB0aXRsZSxcclxuICBcIm5hbWVcIjogYXV0aG9yIC0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdIC0+IHRpdGxlLFxyXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcclxuICBib2R5LFxyXG4gIG1haW5JbWFnZVxyXG59IGA7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdHsgcGlkID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuICBjb25zdCBkYXRhID0gIGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIHF1ZXJ5LCB7cGlkfSkgIFxyXG5cclxuICByZXR1cm4ge3Byb3BzOiB7ZGF0YX19XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=
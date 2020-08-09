module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/[pid].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Layout.jsx":
/*!*******************************!*\
  !*** ./Components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ "./Components/Title.jsx");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.scss */ "./Components/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\Layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => {
  return __jsx("div", {
    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./Components/Layout.module.scss":
/*!***************************************!*\
  !*** ./Components/Layout.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Layout_main__23fAV"
};


/***/ }),

/***/ "./Components/Nav.jsx":
/*!****************************!*\
  !*** ./Components/Nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.module.scss */ "./Components/Nav.module.scss");
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\Nav.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Nav = props => {
  const {
    current
  } = props;
  return __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("button", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_link,
    href: "http://www.secure-booker.com/angelamichael/MakeAppointment/Search.aspx",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 45
    }
  }, "Book")), __jsx("button", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_link} ${current == 'home' ? _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.current : ''}`,
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Home")), __jsx("button", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_link} ${current == 'blog' ? _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.current : ''}`,
    href: "/posts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Blog"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./Components/Nav.module.scss":
/*!************************************!*\
  !*** ./Components/Nav.module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav": "Nav_nav__2Y9In",
	"nav_wrapper": "Nav_nav_wrapper__1p8Te",
	"nav_button": "Nav_nav_button__34THX",
	"nav_link": "Nav_nav_link__1590d",
	"current": "Nav_current__xfpOj"
};


/***/ }),

/***/ "./Components/PostWrapper.jsx":
/*!************************************!*\
  !*** ./Components/PostWrapper.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostWrapper.module.scss */ "./Components/PostWrapper.module.scss");
/* harmony import */ var _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\PostWrapper.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PostWrapper = ({
  children,
  post
}) => {
  return __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("img", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_main_image,
    src: post.mainImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_article_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_main_title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, post.title), children), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_side_bar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_publish_date,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 8
    }
  }, new Date(post.publishedAt).toDateString()), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_author,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }, "Author"), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_author_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }, __jsx("img", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.author_image,
    src: post.authorImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.author_name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, post.name))), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_categories,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }, "Categories"), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_category_wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  }, post.categories.map(item => __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 40
    }
  }, item)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostWrapper);

/***/ }),

/***/ "./Components/PostWrapper.module.scss":
/*!********************************************!*\
  !*** ./Components/PostWrapper.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"post_wrapper": "PostWrapper_post_wrapper__6eJbs",
	"post_main_image": "PostWrapper_post_main_image__A_9f7",
	"post_article_wrapper": "PostWrapper_post_article_wrapper__3cksB",
	"post_main_title": "PostWrapper_post_main_title__2tbtt",
	"post_author": "PostWrapper_post_author__3AlcB",
	"post_publish_date": "PostWrapper_post_publish_date__1BeTY",
	"author_image": "PostWrapper_author_image__2Skua",
	"post_author_wrapper": "PostWrapper_post_author_wrapper__3tJ0I",
	"author_name": "PostWrapper_author_name__3ufkp",
	"post_categories": "PostWrapper_post_categories__1k2If",
	"post_category_wrapper": "PostWrapper_post_category_wrapper__2aL4K",
	"post_main": "PostWrapper_post_main__37-Yw",
	"post_side_bar": "PostWrapper_post_side_bar__3FR-h"
};


/***/ }),

/***/ "./Components/Title.jsx":
/*!******************************!*\
  !*** ./Components/Title.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.module.scss */ "./Components/title.module.scss");
/* harmony import */ var _title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_title_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\Title.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Title = props => __jsx("div", {
  className: _title_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, "\u2619 Mollie Dixon \u2767"), __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, "Professional Esthetician"));

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./Components/title.module.scss":
/*!**************************************!*\
  !*** ./Components/title.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title_title__1g3SY"
};


/***/ }),

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _client = _interopRequireDefault(__webpack_require__(/*! @sanity/client */ "@sanity/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _client.default)({
  projectId: 'hp4xw9we',
  dataset: 'production',
  useCdn: true
});

/***/ }),

/***/ "./pages/posts/[pid].jsx":
/*!*******************************!*\
  !*** ./pages/posts/[pid].jsx ***!
  \*******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Layout */ "./Components/Layout.jsx");
/* harmony import */ var _Components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Nav */ "./Components/Nav.jsx");
/* harmony import */ var _Components_PostWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/PostWrapper */ "./Components/PostWrapper.jsx");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ "groq");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ "@sanity/block-content-to-react");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\pages\\posts\\[pid].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_1___default.a).image(source);
}

const Post = ({
  data
}) => {
  console.log(data);

  const postData = _objectSpread(_objectSpread({}, data), {}, {
    categories: data.categories,
    mainImage: urlFor(data.mainImage).width(1200).url(),
    authorImage: urlFor(data.authorImage).width(100).url()
  });

  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 1
    }
  }, __jsx(_Components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    current: "blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 1
    }
  }), __jsx(_Components_PostWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    client: _client__WEBPACK_IMPORTED_MODULE_1___default.a,
    post: postData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 1
    }
  }, __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, _extends({
    blocks: data.body,
    imageOptions: {
      w: 480,
      h: 240,
      fit: 'max'
    }
  }, _client__WEBPACK_IMPORTED_MODULE_1___default.a.config(), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }))));
};

const query = groq__WEBPACK_IMPORTED_MODULE_5___default.a`*[_type == "post" && slug.current == $pid][0]{
  title,
  "name": author ->name,
  "categories": categories[] -> title,
  "authorImage": author -> image,
  body,
  mainImage,
  publishedAt
} `;
async function getServerSideProps(context) {
  const {
    pid = ""
  } = context.query;
  const data = await _client__WEBPACK_IMPORTED_MODULE_1___default.a.fetch(query, {
    pid
  });
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("groq");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9MYXlvdXQuanN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvTmF2LmpzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL05hdi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL1Bvc3RXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL1Bvc3RXcmFwcGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvVGl0bGUuanN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvdGl0bGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3RzL1twaWRdLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzYW5pdHkvaW1hZ2UtdXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JvcVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJzdHlsZXMiLCJtYWluIiwiY2hpbGRyZW4iLCJOYXYiLCJjdXJyZW50IiwibmF2IiwibmF2X3dyYXBwZXIiLCJuYXZfYnV0dG9uIiwibmF2X2xpbmsiLCJQb3N0V3JhcHBlciIsInBvc3QiLCJwb3N0X3dyYXBwZXIiLCJwb3N0X21haW5faW1hZ2UiLCJtYWluSW1hZ2UiLCJwb3N0X2FydGljbGVfd3JhcHBlciIsInBvc3RfbWFpbiIsInBvc3RfbWFpbl90aXRsZSIsInRpdGxlIiwicG9zdF9zaWRlX2JhciIsInBvc3RfcHVibGlzaF9kYXRlIiwiRGF0ZSIsInB1Ymxpc2hlZEF0IiwidG9EYXRlU3RyaW5nIiwicG9zdF9hdXRob3IiLCJwb3N0X2F1dGhvcl93cmFwcGVyIiwiYXV0aG9yX2ltYWdlIiwiYXV0aG9ySW1hZ2UiLCJhdXRob3JfbmFtZSIsIm5hbWUiLCJwb3N0X2NhdGVnb3JpZXMiLCJwb3N0X2NhdGVnb3J5X3dyYXBwZXIiLCJjYXRlZ29yaWVzIiwibWFwIiwiaXRlbSIsIlRpdGxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlBvc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInBvc3REYXRhIiwid2lkdGgiLCJ1cmwiLCJib2R5IiwidyIsImgiLCJmaXQiLCJjb25maWciLCJxdWVyeSIsImdyb3EiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGlkIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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LEVBQTJDO0FBQ2hELFFBQUs7QUFBRUMsT0FBRyxHQUFHO0FBQVIsTUFBZUQsT0FBTyxDQUFDSCxLQUE1QjtBQUNBLFFBQU1YLElBQUksR0FBSSxNQUFNSCw4Q0FBTSxDQUFDbUIsS0FBUCxDQUNsQkwsS0FEa0IsRUFDWDtBQUFDSTtBQUFELEdBRFcsQ0FBcEI7QUFHQSxTQUFPO0FBQUM5RCxTQUFLLEVBQUU7QUFBQytDO0FBQUQ7QUFBUixHQUFQO0FBQ0Q7QUFJY0QsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUMxREEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcG9zdHMvW3BpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Bvc3RzL1twaWRdLmpzeFwiKTtcbiIsImltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8VGl0bGUgLz5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkxheW91dF9tYWluX18yM2ZBVlwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXYubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IE5hdiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtjdXJyZW50fSA9IHByb3BzO1xyXG4gIHJldHVybihcclxuICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5uYXZ9ID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X3dyYXBwZXJ9PlxyXG4gICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2J1dHRvbiB9PjxhIGNsYXNzTmFtZSA9IHtzdHlsZXMubmF2X2xpbmt9IGhyZWY9J2h0dHA6Ly93d3cuc2VjdXJlLWJvb2tlci5jb20vYW5nZWxhbWljaGFlbC9NYWtlQXBwb2ludG1lbnQvU2VhcmNoLmFzcHgnPkJvb2s8L2E+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9idXR0b259PlxyXG4gICAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZfbGlua30gJHtjdXJyZW50ID09ICdob21lJyA/IHN0eWxlcy5jdXJyZW50OiAnJ31gfSBocmVmPScvJz5Ib21lPC9hPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfYnV0dG9ufT5cclxuICAgICAgPGEgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2X2xpbmt9ICR7Y3VycmVudCA9PSAnYmxvZycgPyBzdHlsZXMuY3VycmVudDogJyd9YH0gaHJlZj0nL3Bvc3RzJz5CbG9nPC9hPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZcIjogXCJOYXZfbmF2X18yWTlJblwiLFxuXHRcIm5hdl93cmFwcGVyXCI6IFwiTmF2X25hdl93cmFwcGVyX18xcDhUZVwiLFxuXHRcIm5hdl9idXR0b25cIjogXCJOYXZfbmF2X2J1dHRvbl9fMzRUSFhcIixcblx0XCJuYXZfbGlua1wiOiBcIk5hdl9uYXZfbGlua19fMTU5MGRcIixcblx0XCJjdXJyZW50XCI6IFwiTmF2X2N1cnJlbnRfX3hmcE9qXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9zdFdyYXBwZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgUG9zdFdyYXBwZXIgPSAoe2NoaWxkcmVuLCBwb3N0fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X3dyYXBwZXJ9PlxyXG4gICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X21haW5faW1hZ2V9IHNyYz17cG9zdC5tYWluSW1hZ2V9PjwvaW1nPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2FydGljbGVfd3JhcHBlcn0+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfbWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZSA9e3N0eWxlcy5wb3N0X21haW5fdGl0bGV9Pntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X3NpZGVfYmFyfT5cclxuICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfcHVibGlzaF9kYXRlfT57bmV3IERhdGUocG9zdC5wdWJsaXNoZWRBdCkudG9EYXRlU3RyaW5nKCl9PC9wPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2F1dGhvcn0+XHJcbiAgICAgICAgIDxwPkF1dGhvcjwvcD5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLnBvc3RfYXV0aG9yX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3JfaW1hZ2V9IHNyYz17cG9zdC5hdXRob3JJbWFnZX0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcl9uYW1lfT57cG9zdC5uYW1lfTwvcD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jYXRlZ29yaWVzfT5cclxuICAgICAgICAgPHA+Q2F0ZWdvcmllczwvcD5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLnBvc3RfY2F0ZWdvcnlfd3JhcHBlcn0+XHJcbiAgICAgICAgICB7cG9zdC5jYXRlZ29yaWVzLm1hcChpdGVtID0+IDxwPntpdGVtfTwvcD4pfVxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICBcclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RXcmFwcGVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvc3Rfd3JhcHBlclwiOiBcIlBvc3RXcmFwcGVyX3Bvc3Rfd3JhcHBlcl9fNmVKYnNcIixcblx0XCJwb3N0X21haW5faW1hZ2VcIjogXCJQb3N0V3JhcHBlcl9wb3N0X21haW5faW1hZ2VfX0FfOWY3XCIsXG5cdFwicG9zdF9hcnRpY2xlX3dyYXBwZXJcIjogXCJQb3N0V3JhcHBlcl9wb3N0X2FydGljbGVfd3JhcHBlcl9fM2Nrc0JcIixcblx0XCJwb3N0X21haW5fdGl0bGVcIjogXCJQb3N0V3JhcHBlcl9wb3N0X21haW5fdGl0bGVfXzJ0YnR0XCIsXG5cdFwicG9zdF9hdXRob3JcIjogXCJQb3N0V3JhcHBlcl9wb3N0X2F1dGhvcl9fM0FsY0JcIixcblx0XCJwb3N0X3B1Ymxpc2hfZGF0ZVwiOiBcIlBvc3RXcmFwcGVyX3Bvc3RfcHVibGlzaF9kYXRlX18xQmVUWVwiLFxuXHRcImF1dGhvcl9pbWFnZVwiOiBcIlBvc3RXcmFwcGVyX2F1dGhvcl9pbWFnZV9fMlNrdWFcIixcblx0XCJwb3N0X2F1dGhvcl93cmFwcGVyXCI6IFwiUG9zdFdyYXBwZXJfcG9zdF9hdXRob3Jfd3JhcHBlcl9fM3RKMElcIixcblx0XCJhdXRob3JfbmFtZVwiOiBcIlBvc3RXcmFwcGVyX2F1dGhvcl9uYW1lX18zdWZrcFwiLFxuXHRcInBvc3RfY2F0ZWdvcmllc1wiOiBcIlBvc3RXcmFwcGVyX3Bvc3RfY2F0ZWdvcmllc19fMWsySWZcIixcblx0XCJwb3N0X2NhdGVnb3J5X3dyYXBwZXJcIjogXCJQb3N0V3JhcHBlcl9wb3N0X2NhdGVnb3J5X3dyYXBwZXJfXzJhTDRLXCIsXG5cdFwicG9zdF9tYWluXCI6IFwiUG9zdFdyYXBwZXJfcG9zdF9tYWluX18zNy1Zd1wiLFxuXHRcInBvc3Rfc2lkZV9iYXJcIjogXCJQb3N0V3JhcHBlcl9wb3N0X3NpZGVfYmFyX18zRlItaFwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RpdGxlLm1vZHVsZS5zY3NzJztcclxuXHJcblxyXG5jb25zdCBUaXRsZSA9IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgIDxoMT4mIzk3NTM7IE1vbGxpZSBEaXhvbiAmIzEwMDg3OzwvaDE+XHJcbiAgICAgIDxoMj5Qcm9mZXNzaW9uYWwgRXN0aGV0aWNpYW48L2gyPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcInRpdGxlX3RpdGxlX18xZzNTWVwiXG59O1xuIiwiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogJ2hwNHh3OXdlJyxcclxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXHJcbiAgdXNlQ2RuOiB0cnVlXHJcbn0pIiwiaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9Db21wb25lbnRzL05hdic7XHJcbmltcG9ydCBQb3N0V3JhcHBlciBmcm9tICcuLi8uLi9Db21wb25lbnRzL1Bvc3RXcmFwcGVyJztcclxuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSc7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IFBvc3QgPSAoe2RhdGF9KSA9PiB7XHJcbmNvbnNvbGUubG9nKGRhdGEpXHJcbmNvbnN0IHBvc3REYXRhID0ge1xyXG4gIC4uLmRhdGEsXHJcbiAgY2F0ZWdvcmllczogZGF0YS5jYXRlZ29yaWVzLFxyXG4gIG1haW5JbWFnZTogdXJsRm9yKGRhdGEubWFpbkltYWdlKS53aWR0aCgxMjAwKS51cmwoKSxcclxuICBhdXRob3JJbWFnZTogdXJsRm9yKGRhdGEuYXV0aG9ySW1hZ2UpLndpZHRoKDEwMCkudXJsKClcclxufVxyXG5cclxuIFxyXG5yZXR1cm4gKFxyXG48TGF5b3V0PlxyXG48TmF2IGN1cnJlbnQ9J2Jsb2cnIC8+XHJcbjxQb3N0V3JhcHBlciBjbGllbnQgPSB7Y2xpZW50fSBwb3N0ID0ge3Bvc3REYXRhfT5cclxuICA8QmxvY2tDb250ZW50XHJcbiAgICBibG9ja3MgPSB7ZGF0YS5ib2R5fVxyXG4gICAgaW1hZ2VPcHRpb25zPXt7dzogNDgwLCBoOjI0MCwgZml0OiAnbWF4J319XHJcbiAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxyXG4gICAgLz5cclxuPC9Qb3N0V3JhcHBlcj5cclxuPC9MYXlvdXQ+XHJcbilcclxufVxyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRwaWRdWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3IgLT5uYW1lLFxyXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10gLT4gdGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3IgLT4gaW1hZ2UsXHJcbiAgYm9keSxcclxuICBtYWluSW1hZ2UsXHJcbiAgcHVibGlzaGVkQXRcclxufSBgO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3R7IHBpZCA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgY29uc3QgZGF0YSA9ICBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBxdWVyeSwge3BpZH0pICBcclxuXHJcbiAgcmV0dXJuIHtwcm9wczoge2RhdGF9fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9pbWFnZS11cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+BZ4":
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "+rtH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./Components/title.module.scss
var title_module = __webpack_require__("C2Ig");
var title_module_default = /*#__PURE__*/__webpack_require__.n(title_module);

// CONCATENATED MODULE: ./Components/Title.jsx

var __jsx = external_react_default.a.createElement;


const Title = props => __jsx("div", {
  className: title_module_default.a.title
}, __jsx("h1", null, "\u2619 Mollie Dixon \u2767"), __jsx("h2", null, "Professional Esthetician"));

/* harmony default export */ var Components_Title = (Title);
// EXTERNAL MODULE: ./Components/Layout.module.scss
var Layout_module = __webpack_require__("nGve");
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// CONCATENATED MODULE: ./Components/Layout.jsx

var Layout_jsx = external_react_default.a.createElement;



const Layout = props => {
  return Layout_jsx("div", {
    className: Layout_module_default.a.main
  }, Layout_jsx(Components_Title, null), props.children);
};

/* harmony default export */ var Components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DzCJ");


/***/ }),

/***/ "6kxW":
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

/***/ "Aog/":
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "C2Ig":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title_title__1g3SY"
};


/***/ }),

/***/ "DzCJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./client.js
var client = __webpack_require__("zCU7");
var client_default = /*#__PURE__*/__webpack_require__.n(client);

// EXTERNAL MODULE: ./Components/Layout.jsx + 1 modules
var Layout = __webpack_require__("+rtH");

// EXTERNAL MODULE: ./Components/Nav.jsx
var Nav = __webpack_require__("UG+U");

// EXTERNAL MODULE: ./Components/PostWrapper.module.scss
var PostWrapper_module = __webpack_require__("uYw6");
var PostWrapper_module_default = /*#__PURE__*/__webpack_require__.n(PostWrapper_module);

// CONCATENATED MODULE: ./Components/PostWrapper.jsx

var __jsx = external_react_default.a.createElement;


const PostWrapper = ({
  children,
  post
}) => {
  return __jsx("div", {
    className: PostWrapper_module_default.a.post_wrapper
  }, __jsx("img", {
    className: PostWrapper_module_default.a.post_main_image,
    src: post.mainImage
  }), __jsx("div", {
    className: PostWrapper_module_default.a.post_article_wrapper
  }, __jsx("article", {
    className: PostWrapper_module_default.a.post_main
  }, __jsx("h1", {
    className: PostWrapper_module_default.a.post_main_title
  }, post.title), children), __jsx("div", {
    className: PostWrapper_module_default.a.post_side_bar
  }, __jsx("p", {
    className: PostWrapper_module_default.a.post_publish_date
  }, new Date(post.publishedAt).toDateString()), __jsx("div", {
    className: PostWrapper_module_default.a.post_author
  }, __jsx("p", null, "Author"), __jsx("div", {
    className: PostWrapper_module_default.a.post_author_wrapper
  }, __jsx("img", {
    className: PostWrapper_module_default.a.author_image,
    src: post.authorImage
  }), __jsx("p", {
    className: PostWrapper_module_default.a.author_name
  }, post.name))), __jsx("div", {
    className: PostWrapper_module_default.a.post_categories
  }, __jsx("p", null, "Categories"), __jsx("div", {
    className: PostWrapper_module_default.a.post_category_wrapper
  }, post.categories.map(item => __jsx("p", null, item)))))));
};

/* harmony default export */ var Components_PostWrapper = (PostWrapper);
// EXTERNAL MODULE: external "groq"
var external_groq_ = __webpack_require__("pYZh");
var external_groq_default = /*#__PURE__*/__webpack_require__.n(external_groq_);

// EXTERNAL MODULE: external "@sanity/image-url"
var image_url_ = __webpack_require__("+BZ4");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_);

// EXTERNAL MODULE: external "@sanity/block-content-to-react"
var block_content_to_react_ = __webpack_require__("gEUu");
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_);

// CONCATENATED MODULE: ./pages/posts/[pid].jsx

var _pid_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function urlFor(source) {
  return image_url_default()(client_default.a).image(source);
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

  return _pid_jsx(Layout["a" /* default */], null, _pid_jsx(Nav["a" /* default */], {
    current: "blog"
  }), _pid_jsx(Components_PostWrapper, {
    client: client_default.a,
    post: postData
  }, _pid_jsx(block_content_to_react_default.a, _extends({
    blocks: data.body,
    imageOptions: {
      w: 480,
      h: 240,
      fit: 'max'
    }
  }, client_default.a.config()))));
};

const query = external_groq_default.a`*[_type == "post" && slug.current == $pid][0]{
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
  const data = await client_default.a.fetch(query, {
    pid
  });
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ var _pid_ = __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "UG+U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6kxW");
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Nav = props => {
  const {
    current
  } = props;
  return __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav
  }, __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_wrapper
  }, __jsx("button", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_button
  }, __jsx("a", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_link,
    href: "http://www.secure-booker.com/angelamichael/MakeAppointment/Search.aspx"
  }, "Book")), __jsx("button", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_button
  }, __jsx("a", {
    className: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_link} ${current == 'home' ? _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.current : ''}`,
    href: "/"
  }, "Home")), __jsx("button", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_button
  }, __jsx("a", {
    className: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav_link} ${current == 'blog' ? _Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.current : ''}`,
    href: "/posts"
  }, "Blog"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gEUu":
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "nGve":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Layout_main__23fAV"
};


/***/ }),

/***/ "pYZh":
/***/ (function(module, exports) {

module.exports = require("groq");

/***/ }),

/***/ "uYw6":
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

/***/ "zCU7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _client = _interopRequireDefault(__webpack_require__("Aog/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _client.default)({
  projectId: 'hp4xw9we',
  dataset: 'production',
  useCdn: true
});

/***/ })

/******/ });
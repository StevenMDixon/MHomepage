webpackHotUpdate_N_E("pages/posts/[pid]",{

/***/ "./Components/PostWrapper.jsx":
/*!************************************!*\
  !*** ./Components/PostWrapper.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\PostWrapper.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PostWrapper = function PostWrapper(props) {
  return;

  __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, "hi");
};

_c = PostWrapper;
/* harmony default export */ __webpack_exports__["default"] = (PostWrapper);

var _c;

$RefreshReg$(_c, "PostWrapper");

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

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/internals.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/internals.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/internals */ "./node_modules/@sanity/block-content-to-hyperscript/lib/internals.js")


/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var buildMarksTree = __webpack_require__(/*! ./buildMarksTree */ "./node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js");

var nestLists = __webpack_require__(/*! ./nestLists */ "./node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js");

var generateKeys = __webpack_require__(/*! ./generateKeys */ "./node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js");

var mergeSerializers = __webpack_require__(/*! ./mergeSerializers */ "./node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js"); // Properties to extract from props and pass to serializers as options


var optionProps = ['projectId', 'dataset', 'imageOptions'];

var isDefined = function isDefined(val) {
  return typeof val !== 'undefined';
};

var defaults = {
  imageOptions: {}
};

function blocksToNodes(h, properties, defaultSerializers, serializeSpan) {
  var props = objectAssign({}, defaults, properties);
  var rawBlocks = Array.isArray(props.blocks) ? props.blocks : [props.blocks];
  var keyedBlocks = generateKeys(rawBlocks);
  var blocks = nestLists(keyedBlocks, props.listNestMode);
  var serializers = mergeSerializers(defaultSerializers, props.serializers || {});
  var options = optionProps.reduce(function (opts, key) {
    var value = props[key];

    if (isDefined(value)) {
      opts[key] = value;
    }

    return opts;
  }, {});

  function serializeNode(node, index, siblings, isInline) {
    if (isList(node)) {
      return serializeList(node);
    }

    if (isListItem(node)) {
      return serializeListItem(node, findListItemIndex(node, siblings));
    }

    if (isSpan(node)) {
      return serializeSpan(node, serializers, index, {
        serializeNode: serializeNode
      });
    }

    return serializeBlock(node, index, isInline);
  }

  function findListItemIndex(node, siblings) {
    var index = 0;

    for (var i = 0; i < siblings.length; i++) {
      if (siblings[i] === node) {
        return index;
      }

      if (!isListItem(siblings[i])) {
        continue;
      }

      index++;
    }

    return index;
  }

  function serializeBlock(block, index, isInline) {
    var tree = buildMarksTree(block);
    var children = tree.map(function (node, i, siblings) {
      return serializeNode(node, i, siblings, true);
    });
    var blockProps = {
      key: block._key || "block-".concat(index),
      node: block,
      isInline: isInline,
      serializers: serializers,
      options: options
    };
    return h(serializers.block, blockProps, children);
  }

  function serializeListItem(block, index) {
    var key = block._key;
    var tree = buildMarksTree(block);
    var children = tree.map(serializeNode);
    return h(serializers.listItem, {
      node: block,
      serializers: serializers,
      index: index,
      key: key,
      options: options
    }, children);
  }

  function serializeList(list) {
    var type = list.listItem;
    var level = list.level;
    var key = list._key;
    var children = list.children.map(serializeNode);
    return h(serializers.list, {
      key: key,
      level: level,
      type: type,
      options: options
    }, children);
  } // Default to false, so `undefined` will evaluate to the default here


  var renderContainerOnSingleChild = Boolean(props.renderContainerOnSingleChild);
  var nodes = blocks.map(serializeNode);

  if (renderContainerOnSingleChild || nodes.length > 1) {
    var containerProps = props.className ? {
      className: props.className
    } : {};
    return h(serializers.container, containerProps, nodes);
  }

  if (nodes[0]) {
    return nodes[0];
  }

  return typeof serializers.empty === 'function' ? h(serializers.empty) : serializers.empty;
}

function isList(block) {
  return block._type === 'list' && block.listItem;
}

function isListItem(block) {
  return block._type === 'block' && block.listItem;
}

function isSpan(block) {
  return typeof block === 'string' || block.marks || block._type === 'span';
}

module.exports = blocksToNodes;
//# sourceMappingURL=blocksToNodes.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultMarks = ['strong', 'em', 'code', 'underline', 'strike-through'];

var buildMarksTree = function buildMarksTree(block) {
  var children = block.children,
      markDefs = block.markDefs;

  if (!children || !children.length) {
    return [];
  }

  var sortedMarks = children.map(sortMarksByOccurences);
  var rootNode = {
    _type: 'span',
    children: []
  };
  var nodeStack = [rootNode];
  children.forEach(function (span, i) {
    var marksNeeded = sortedMarks[i];

    if (!marksNeeded) {
      var lastNode = nodeStack[nodeStack.length - 1];
      lastNode.children.push(span);
      return;
    }

    var pos = 1; // Start at position one. Root is always plain and should never be removed. (?)

    if (nodeStack.length > 1) {
      for (pos; pos < nodeStack.length; pos++) {
        var mark = nodeStack[pos].markKey;
        var index = marksNeeded.indexOf(mark); // eslint-disable-next-line max-depth

        if (index === -1) {
          break;
        }

        marksNeeded.splice(index, 1);
      }
    } // Keep from beginning to first miss


    nodeStack = nodeStack.slice(0, pos); // Add needed nodes

    var currentNode = findLastParentNode(nodeStack);
    marksNeeded.forEach(function (mark) {
      var node = {
        _type: 'span',
        _key: span._key,
        children: [],
        mark: markDefs.find(function (def) {
          return def._key === mark;
        }) || mark,
        markKey: mark
      };
      currentNode.children.push(node);
      nodeStack.push(node);
      currentNode = node;
    }); // Split at newlines to make individual line chunks, but keep newline
    // characters as individual elements in the array. We use these characters
    // in the span serializer to trigger hard-break rendering

    if (isTextSpan(span)) {
      var lines = span.text.split('\n');

      for (var line = lines.length; line-- > 1;) {
        lines.splice(line, 0, '\n');
      }

      currentNode.children = currentNode.children.concat(lines);
    } else {
      currentNode.children = currentNode.children.concat(span);
    }
  });
  return rootNode.children;
}; // We want to sort all the marks of all the spans in the following order:
// 1. Marks that are shared amongst the most adjacent siblings
// 2. Non-default marks (links, custom metadata)
// 3. Built-in, plain marks (bold, emphasis, code etc)


function sortMarksByOccurences(span, i, spans) {
  if (!span.marks || span.marks.length === 0) {
    return span.marks || [];
  }

  var markOccurences = span.marks.reduce(function (occurences, mark) {
    occurences[mark] = occurences[mark] ? occurences[mark] + 1 : 1;

    for (var siblingIndex = i + 1; siblingIndex < spans.length; siblingIndex++) {
      var sibling = spans[siblingIndex];

      if (sibling.marks && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
        occurences[mark]++;
      } else {
        break;
      }
    }

    return occurences;
  }, {});
  var sortByOccurence = sortMarks.bind(null, markOccurences); // Slicing because sort() mutates the input

  return span.marks.slice().sort(sortByOccurence);
}

function sortMarks(occurences, markA, markB) {
  var aOccurences = occurences[markA] || 0;
  var bOccurences = occurences[markB] || 0;

  if (aOccurences !== bOccurences) {
    return bOccurences - aOccurences;
  }

  var aDefaultPos = defaultMarks.indexOf(markA);
  var bDefaultPos = defaultMarks.indexOf(markB); // Sort default marks last

  if (aDefaultPos !== bDefaultPos) {
    return aDefaultPos - bDefaultPos;
  } // Sort other marks simply by key


  if (markA < markB) {
    return -1;
  } else if (markA > markB) {
    return 1;
  }

  return 0;
}

function isTextSpan(node) {
  return node._type === 'span' && typeof node.text === 'string' && (Array.isArray(node.marks) || typeof node.marks === 'undefined');
}

function findLastParentNode(nodes) {
  for (var i = nodes.length - 1; i >= 0; i--) {
    var node = nodes[i];

    if (node._type === 'span' && node.children) {
      return node;
    }
  }

  return undefined;
}

module.exports = buildMarksTree;
//# sourceMappingURL=buildMarksTree.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function (blocks) {
  return blocks.map(function (block) {
    if (block._key) {
      return block;
    }

    return objectAssign({
      _key: getStaticKey(block)
    }, block);
  });
};

function getStaticKey(item) {
  return checksum(JSON.stringify(item)).toString(36).replace(/[^A-Za-z0-9]/g, '');
}
/* eslint-disable no-bitwise */


function checksum(str) {
  var hash = 0;
  var strlen = str.length;

  if (strlen === 0) {
    return hash;
  }

  for (var i = 0; i < strlen; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash &= hash; // Convert to 32bit integer
  }

  return hash;
}
/* eslint-enable no-bitwise */
//# sourceMappingURL=generateKeys.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/block-content-to-hyperscript/node_modules/@sanity/generate-help-url/index.js");

var urlBuilder = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var enc = encodeURIComponent;
var materializeError = "You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(generateHelpUrl('block-content-image-materializing'));

var getQueryString = function getQueryString(options) {
  var query = options.imageOptions;
  var keys = Object.keys(query);

  if (!keys.length) {
    return '';
  }

  var params = keys.map(function (key) {
    return "".concat(enc(key), "=").concat(enc(query[key]));
  });
  return "?".concat(params.join('&'));
};

var buildUrl = function buildUrl(props) {
  var node = props.node,
      options = props.options;
  var projectId = options.projectId,
      dataset = options.dataset;
  var asset = node.asset;

  if (!asset) {
    throw new Error('Image does not have required `asset` property');
  }

  if (asset.url) {
    return asset.url + getQueryString(options);
  }

  if (!projectId || !dataset) {
    throw new Error(materializeError);
  }

  var ref = asset._ref;

  if (!ref) {
    throw new Error('Invalid image reference in block, no `_ref` found on `asset`');
  }

  return urlBuilder(objectAssign({
    projectId: projectId,
    dataset: dataset
  }, options.imageOptions || {})).image(node).toString();
};

module.exports = buildUrl;
//# sourceMappingURL=getImageUrl.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/internals.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/internals.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getSerializers = __webpack_require__(/*! ./serializers */ "./node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js");

var _blocksToNodes = __webpack_require__(/*! ./blocksToNodes */ "./node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js");

var getImageUrl = __webpack_require__(/*! ./getImageUrl */ "./node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js");

var mergeSerializers = __webpack_require__(/*! ./mergeSerializers */ "./node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js");

module.exports = {
  blocksToNodes: function blocksToNodes(renderNode, props, defaultSerializers, serializeSpan) {
    if (defaultSerializers) {
      return _blocksToNodes(renderNode, props, defaultSerializers, serializeSpan);
    } // Backwards-compatibility


    var serializers = getSerializers(renderNode);
    return _blocksToNodes(renderNode, props, serializers.defaultSerializers, serializers.serializeSpan);
  },
  getSerializers: getSerializers,
  getImageUrl: getImageUrl,
  mergeSerializers: mergeSerializers
};
//# sourceMappingURL=internals.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var isDefined = function isDefined(val) {
  return typeof val !== 'undefined';
}; // Recursively merge/replace default serializers with user-specified serializers


module.exports = function mergeSerializers(defaultSerializers, userSerializers) {
  return Object.keys(defaultSerializers).reduce(function (acc, key) {
    var type = _typeof(defaultSerializers[key]);

    if (type === 'function') {
      acc[key] = isDefined(userSerializers[key]) ? userSerializers[key] : defaultSerializers[key];
    } else if (type === 'object') {
      acc[key] = objectAssign({}, defaultSerializers[key], userSerializers[key]);
    } else {
      acc[key] = typeof userSerializers[key] === 'undefined' ? defaultSerializers[key] : userSerializers[key];
    }

    return acc;
  }, {});
};
//# sourceMappingURL=mergeSerializers.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* eslint-disable max-depth, complexity */


function nestLists(blocks) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
  var tree = [];
  var currentList;

  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];

    if (!isListBlock(block)) {
      tree.push(block);
      currentList = null;
      continue;
    } // Start of a new list?


    if (!currentList) {
      currentList = listFromBlock(block);
      tree.push(currentList);
      continue;
    } // New list item within same list?


    if (blockMatchesList(block, currentList)) {
      currentList.children.push(block);
      continue;
    } // Different list props, are we going deeper?


    if (block.level > currentList.level) {
      var newList = listFromBlock(block);

      if (mode === 'html') {
        // Because HTML is kinda weird, nested lists needs to be nested within list items
        // So while you would think that we could populate the parent list with a new sub-list,
        // We actually have to target the last list element (child) of the parent.
        // However, at this point we need to be very careful - simply pushing to the list of children
        // will mutate the input, and we don't want to blindly clone the entire tree.
        // Clone the last child while adding our new list as the last child of it
        var lastListItem = lastChild(currentList);
        var newLastChild = objectAssign({}, lastListItem, {
          children: lastListItem.children.concat(newList)
        }); // Swap the last child

        currentList.children[currentList.children.length - 1] = newLastChild;
      } else {
        currentList.children.push(newList);
      } // Set the newly created, deeper list as the current


      currentList = newList;
      continue;
    } // Different list props, are we going back up the tree?


    if (block.level < currentList.level) {
      // Current list has ended, and we need to hook up with a parent of the same level and type
      var match = findListMatching(tree[tree.length - 1], block);

      if (match) {
        currentList = match;
        currentList.children.push(block);
        continue;
      } // Similar parent can't be found, assume new list


      currentList = listFromBlock(block);
      tree.push(currentList);
      continue;
    } // Different list props, different list style?


    if (block.listItem !== currentList.listItem) {
      var _match = findListMatching(tree[tree.length - 1], {
        level: block.level
      });

      if (_match && _match.listItem === block.listItem) {
        currentList = _match;
        currentList.children.push(block);
        continue;
      } else {
        currentList = listFromBlock(block);
        tree.push(currentList);
        continue;
      }
    } // eslint-disable-next-line no-console


    console.warn('Unknown state encountered for block', block);
    tree.push(block);
  }

  return tree;
}

function isListBlock(block) {
  return Boolean(block.listItem);
}

function blockMatchesList(block, list) {
  return block.level === list.level && block.listItem === list.listItem;
}

function listFromBlock(block) {
  return {
    _type: 'list',
    _key: "".concat(block._key, "-parent"),
    level: block.level,
    listItem: block.listItem,
    children: [block]
  };
}

function lastChild(block) {
  return block.children && block.children[block.children.length - 1];
}

function findListMatching(rootNode, matching) {
  var filterOnType = typeof matching.listItem === 'string';

  if (rootNode._type === 'list' && rootNode.level === matching.level && filterOnType && rootNode.listItem === matching.listItem) {
    return rootNode;
  }

  var node = lastChild(rootNode);

  if (!node) {
    return false;
  }

  return findListMatching(node, matching);
}

module.exports = nestLists;
//# sourceMappingURL=nestLists.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var getImageUrl = __webpack_require__(/*! ./getImageUrl */ "./node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js");

module.exports = function (h, serializerOpts) {
  var serializeOptions = serializerOpts || {
    useDashedStyles: false // Low-level block serializer

  };

  function BlockSerializer(props) {
    var node = props.node,
        serializers = props.serializers,
        options = props.options,
        isInline = props.isInline,
        children = props.children;
    var blockType = node._type;
    var serializer = serializers.types[blockType];

    if (!serializer) {
      throw new Error("Unknown block type \"".concat(blockType, "\", please specify a serializer for it in the `serializers.types` prop"));
    }

    return h(serializer, {
      node: node,
      options: options,
      isInline: isInline
    }, children);
  } // Low-level span serializer


  function SpanSerializer(props) {
    var _props$node = props.node,
        mark = _props$node.mark,
        children = _props$node.children;
    var isPlain = typeof mark === 'string';
    var markType = isPlain ? mark : mark._type;
    var serializer = props.serializers.marks[markType];

    if (!serializer) {
      // @todo Revert back to throwing errors?
      // eslint-disable-next-line no-console
      console.warn("Unknown mark type \"".concat(markType, "\", please specify a serializer for it in the `serializers.marks` prop"));
      return h(props.serializers.markFallback, null, children);
    }

    return h(serializer, props.node, children);
  } // Low-level list serializer


  function ListSerializer(props) {
    var tag = props.type === 'bullet' ? 'ul' : 'ol';
    return h(tag, null, props.children);
  } // Low-level list item serializer


  function ListItemSerializer(props) {
    var children = !props.node.style || props.node.style === 'normal' ? // Don't wrap plain text in paragraphs inside of a list item
    props.children : // But wrap any other style in whatever the block serializer says to use
    h(props.serializers.types.block, props, props.children);
    return h('li', null, children);
  } // Renderer of an actual block of type `block`. Confusing, we know.


  function BlockTypeSerializer(props) {
    var style = props.node.style || 'normal';

    if (/^h\d/.test(style)) {
      return h(style, null, props.children);
    }

    return style === 'blockquote' ? h('blockquote', null, props.children) : h('p', null, props.children);
  } // Serializers for things that can be directly attributed to a tag without any props
  // We use partial application to do this, passing the tag name as the first argument


  function RawMarkSerializer(tag, props) {
    return h(tag, null, props.children);
  }

  function UnderlineSerializer(props) {
    var style = serializeOptions.useDashedStyles ? {
      'text-decoration': 'underline'
    } : {
      textDecoration: 'underline'
    };
    return h('span', {
      style: style
    }, props.children);
  }

  function StrikeThroughSerializer(props) {
    return h('del', null, props.children);
  }

  function LinkSerializer(props) {
    return h('a', {
      href: props.mark.href
    }, props.children);
  }

  function ImageSerializer(props) {
    if (!props.node.asset) {
      return null;
    }

    var img = h('img', {
      src: getImageUrl(props)
    });
    return props.isInline ? img : h('figure', null, img);
  } // Serializer that recursively calls itself, producing a hyperscript tree of spans


  function serializeSpan(span, serializers, index, options) {
    if (span === '\n' && serializers.hardBreak) {
      return h(serializers.hardBreak, {
        key: "hb-".concat(index)
      });
    }

    if (typeof span === 'string') {
      return serializers.text ? h(serializers.text, {
        key: "text-".concat(index)
      }, span) : span;
    }

    var children;

    if (span.children) {
      children = {
        children: span.children.map(function (child, i) {
          return options.serializeNode(child, i, span.children, true);
        })
      };
    }

    var serializedNode = objectAssign({}, span, children);
    return h(serializers.span, {
      key: span._key || "span-".concat(index),
      node: serializedNode,
      serializers: serializers
    });
  }

  var HardBreakSerializer = function HardBreakSerializer() {
    return h('br');
  };

  var defaultMarkSerializers = {
    strong: RawMarkSerializer.bind(null, 'strong'),
    em: RawMarkSerializer.bind(null, 'em'),
    code: RawMarkSerializer.bind(null, 'code'),
    underline: UnderlineSerializer,
    'strike-through': StrikeThroughSerializer,
    link: LinkSerializer
  };
  var defaultSerializers = {
    // Common overrides
    types: {
      block: BlockTypeSerializer,
      image: ImageSerializer
    },
    marks: defaultMarkSerializers,
    // Less common overrides
    list: ListSerializer,
    listItem: ListItemSerializer,
    block: BlockSerializer,
    span: SpanSerializer,
    hardBreak: HardBreakSerializer,
    // Container element
    container: 'div',
    // When we can't resolve the mark properly, use this renderer as the container
    markFallback: 'span',
    // Allow overriding text renderer, but leave undefined to just use plain strings by default
    text: undefined,
    // Empty nodes (React uses null, hyperscript with empty strings)
    empty: ''
  };
  return {
    defaultSerializers: defaultSerializers,
    serializeSpan: serializeSpan
  };
};
//# sourceMappingURL=serializers.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/node_modules/@sanity/generate-help-url/index.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/node_modules/@sanity/generate-help-url/index.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var baseUrl = 'https://docs.sanity.io/help/'

module.exports = function generateHelpUrl(slug) {
  return baseUrl + slug
}


/***/ }),

/***/ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-react/lib/BlockContent.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var internals = __webpack_require__(/*! @sanity/block-content-to-hyperscript/internals */ "./node_modules/@sanity/block-content-to-hyperscript/internals.js");

var _require = __webpack_require__(/*! ./targets/dom */ "./node_modules/@sanity/block-content-to-react/lib/targets/dom.js"),
    serializers = _require.serializers,
    serializeSpan = _require.serializeSpan,
    renderProps = _require.renderProps;

var getImageUrl = internals.getImageUrl,
    blocksToNodes = internals.blocksToNodes,
    mergeSerializers = internals.mergeSerializers;

var renderNode = React.createElement;

var SanityBlockContent = function SanityBlockContent(props) {
  var customSerializers = mergeSerializers(SanityBlockContent.defaultSerializers, props.serializers);

  var blockProps = Object.assign({}, renderProps, props, {
    serializers: customSerializers,
    blocks: props.blocks || []
  });

  return blocksToNodes(renderNode, blockProps, serializers, serializeSpan);
};

// Expose default serializers to the user
SanityBlockContent.defaultSerializers = serializers;

// Expose logic for building image URLs from an image reference/node
SanityBlockContent.getImageUrl = getImageUrl;

SanityBlockContent.propTypes = {
  className: PropTypes.string,
  renderContainerOnSingleChild: PropTypes.bool,

  // When rendering images, we need project id and dataset, unless images are materialized
  projectId: PropTypes.string,
  dataset: PropTypes.string,
  imageOptions: PropTypes.object,

  serializers: PropTypes.shape({
    // Common overrides
    types: PropTypes.object,
    marks: PropTypes.object,

    // Less common overrides
    list: PropTypes.func,
    listItem: PropTypes.func,

    // Low-level serializers
    block: PropTypes.func,
    span: PropTypes.func
  }),

  blocks: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
    _type: PropTypes.string.isRequired
  })), PropTypes.shape({
    _type: PropTypes.string.isRequired
  })]).isRequired
};

SanityBlockContent.defaultProps = {
  renderContainerOnSingleChild: false,
  serializers: {},
  imageOptions: {}
};

module.exports = SanityBlockContent;
//# sourceMappingURL=BlockContent.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-react/lib/targets/dom.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-react/lib/targets/dom.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _require = __webpack_require__(/*! @sanity/block-content-to-hyperscript/internals */ "./node_modules/@sanity/block-content-to-hyperscript/internals.js"),
    getSerializers = _require.getSerializers;

var renderNode = React.createElement;

var _getSerializers = getSerializers(renderNode),
    defaultSerializers = _getSerializers.defaultSerializers,
    serializeSpan = _getSerializers.serializeSpan;

module.exports = {
  serializeSpan: serializeSpan,
  serializers: defaultSerializers,
  renderProps: { nestMarks: true }
};
//# sourceMappingURL=dom.js.map

/***/ }),

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


var _this = undefined,
    _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\pages\\posts\\[pid].jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_2___default.a).image(source);
}

var Post = function Post(_ref) {
  var data = _ref.data;
  var postData = '';
  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 1
    }
  }, __jsx(_Components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    current: "blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 1
    }
  }), __jsx(_Components_PostWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    client: _client__WEBPACK_IMPORTED_MODULE_2___default.a,
    post: postData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 1
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 1
    }
  }, "Title: ", data.title), __jsx(BlockContent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      lineNumber: 25,
      columnNumber: 1
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0V3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvaW50ZXJuYWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9ibG9ja3NUb05vZGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9idWlsZE1hcmtzVHJlZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvYmxvY2stY29udGVudC10by1oeXBlcnNjcmlwdC9saWIvZ2VuZXJhdGVLZXlzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9nZXRJbWFnZVVybC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvYmxvY2stY29udGVudC10by1oeXBlcnNjcmlwdC9saWIvaW50ZXJuYWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9tZXJnZVNlcmlhbGl6ZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9uZXN0TGlzdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvbGliL3NlcmlhbGl6ZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L25vZGVfbW9kdWxlcy9Ac2FuaXR5L2dlbmVyYXRlLWhlbHAtdXJsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0L2xpYi9CbG9ja0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QvbGliL3RhcmdldHMvZG9tLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bcGlkXS5qc3giXSwibmFtZXMiOlsiUG9zdFdyYXBwZXIiLCJwcm9wcyIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiUG9zdCIsImRhdGEiLCJwb3N0RGF0YSIsInRpdGxlIiwiYm9keSIsInciLCJoIiwiZml0IiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM3Qjs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFHRCxDQUxEOztLQUFNRCxXO0FBT1NBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxpQkFBaUIsbUJBQU8sQ0FBQyw2RkFBaUI7Ozs7Ozs7Ozs7Ozs7QUNBN0I7O0FBRWIsbUJBQW1CLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRTFDLHFCQUFxQixtQkFBTyxDQUFDLG1HQUFrQjs7QUFFL0MsZ0JBQWdCLG1CQUFPLENBQUMseUZBQWE7O0FBRXJDLG1CQUFtQixtQkFBTyxDQUFDLCtGQUFnQjs7QUFFM0MsdUJBQXVCLG1CQUFPLENBQUMsdUdBQW9CLEVBQUU7OztBQUdyRDs7QUFFQTtB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QUFBckI7QUFGaEIsS0FHTVQsOENBQU0sQ0FBQ1UsTUFBUCxFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMQSxDQURBO0FBYUMsQ0FsQkQ7O0tBQU1SLEk7O0FBdUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcGlkXS5hYTllY2RmZGRmYWJmM2NiNzYwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IFBvc3RXcmFwcGVyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIFxyXG4gIChcclxuICA8cD5oaTwvcD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RXcmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW50ZXJuYWxzJylcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgYnVpbGRNYXJrc1RyZWUgPSByZXF1aXJlKCcuL2J1aWxkTWFya3NUcmVlJyk7XG5cbnZhciBuZXN0TGlzdHMgPSByZXF1aXJlKCcuL25lc3RMaXN0cycpO1xuXG52YXIgZ2VuZXJhdGVLZXlzID0gcmVxdWlyZSgnLi9nZW5lcmF0ZUtleXMnKTtcblxudmFyIG1lcmdlU2VyaWFsaXplcnMgPSByZXF1aXJlKCcuL21lcmdlU2VyaWFsaXplcnMnKTsgLy8gUHJvcGVydGllcyB0byBleHRyYWN0IGZyb20gcHJvcHMgYW5kIHBhc3MgdG8gc2VyaWFsaXplcnMgYXMgb3B0aW9uc1xuXG5cbnZhciBvcHRpb25Qcm9wcyA9IFsncHJvamVjdElkJywgJ2RhdGFzZXQnLCAnaW1hZ2VPcHRpb25zJ107XG5cbnZhciBpc0RlZmluZWQgPSBmdW5jdGlvbiBpc0RlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJztcbn07XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgaW1hZ2VPcHRpb25zOiB7fVxufTtcblxuZnVuY3Rpb24gYmxvY2tzVG9Ob2RlcyhoLCBwcm9wZXJ0aWVzLCBkZWZhdWx0U2VyaWFsaXplcnMsIHNlcmlhbGl6ZVNwYW4pIHtcbiAgdmFyIHByb3BzID0gb2JqZWN0QXNzaWduKHt9LCBkZWZhdWx0cywgcHJvcGVydGllcyk7XG4gIHZhciByYXdCbG9ja3MgPSBBcnJheS5pc0FycmF5KHByb3BzLmJsb2NrcykgPyBwcm9wcy5ibG9ja3MgOiBbcHJvcHMuYmxvY2tzXTtcbiAgdmFyIGtleWVkQmxvY2tzID0gZ2VuZXJhdGVLZXlzKHJhd0Jsb2Nrcyk7XG4gIHZhciBibG9ja3MgPSBuZXN0TGlzdHMoa2V5ZWRCbG9ja3MsIHByb3BzLmxpc3ROZXN0TW9kZSk7XG4gIHZhciBzZXJpYWxpemVycyA9IG1lcmdlU2VyaWFsaXplcnMoZGVmYXVsdFNlcmlhbGl6ZXJzLCBwcm9wcy5zZXJpYWxpemVycyB8fCB7fSk7XG4gIHZhciBvcHRpb25zID0gb3B0aW9uUHJvcHMucmVkdWNlKGZ1bmN0aW9uIChvcHRzLCBrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1trZXldO1xuXG4gICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgIG9wdHNba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRzO1xuICB9LCB7fSk7XG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplTm9kZShub2RlLCBpbmRleCwgc2libGluZ3MsIGlzSW5saW5lKSB7XG4gICAgaWYgKGlzTGlzdChub2RlKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUxpc3Qobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKGlzTGlzdEl0ZW0obm9kZSkpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0SXRlbShub2RlLCBmaW5kTGlzdEl0ZW1JbmRleChub2RlLCBzaWJsaW5ncykpO1xuICAgIH1cblxuICAgIGlmIChpc1NwYW4obm9kZSkpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVTcGFuKG5vZGUsIHNlcmlhbGl6ZXJzLCBpbmRleCwge1xuICAgICAgICBzZXJpYWxpemVOb2RlOiBzZXJpYWxpemVOb2RlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VyaWFsaXplQmxvY2sobm9kZSwgaW5kZXgsIGlzSW5saW5lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRMaXN0SXRlbUluZGV4KG5vZGUsIHNpYmxpbmdzKSB7XG4gICAgdmFyIGluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2libGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzaWJsaW5nc1tpXSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNMaXN0SXRlbShzaWJsaW5nc1tpXSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplQmxvY2soYmxvY2ssIGluZGV4LCBpc0lubGluZSkge1xuICAgIHZhciB0cmVlID0gYnVpbGRNYXJrc1RyZWUoYmxvY2spO1xuICAgIHZhciBjaGlsZHJlbiA9IHRyZWUubWFwKGZ1bmN0aW9uIChub2RlLCBpLCBzaWJsaW5ncykge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZU5vZGUobm9kZSwgaSwgc2libGluZ3MsIHRydWUpO1xuICAgIH0pO1xuICAgIHZhciBibG9ja1Byb3BzID0ge1xuICAgICAga2V5OiBibG9jay5fa2V5IHx8IFwiYmxvY2stXCIuY29uY2F0KGluZGV4KSxcbiAgICAgIG5vZGU6IGJsb2NrLFxuICAgICAgaXNJbmxpbmU6IGlzSW5saW5lLFxuICAgICAgc2VyaWFsaXplcnM6IHNlcmlhbGl6ZXJzLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH07XG4gICAgcmV0dXJuIGgoc2VyaWFsaXplcnMuYmxvY2ssIGJsb2NrUHJvcHMsIGNoaWxkcmVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZUxpc3RJdGVtKGJsb2NrLCBpbmRleCkge1xuICAgIHZhciBrZXkgPSBibG9jay5fa2V5O1xuICAgIHZhciB0cmVlID0gYnVpbGRNYXJrc1RyZWUoYmxvY2spO1xuICAgIHZhciBjaGlsZHJlbiA9IHRyZWUubWFwKHNlcmlhbGl6ZU5vZGUpO1xuICAgIHJldHVybiBoKHNlcmlhbGl6ZXJzLmxpc3RJdGVtLCB7XG4gICAgICBub2RlOiBibG9jayxcbiAgICAgIHNlcmlhbGl6ZXJzOiBzZXJpYWxpemVycyxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGtleToga2V5LFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0sIGNoaWxkcmVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZUxpc3QobGlzdCkge1xuICAgIHZhciB0eXBlID0gbGlzdC5saXN0SXRlbTtcbiAgICB2YXIgbGV2ZWwgPSBsaXN0LmxldmVsO1xuICAgIHZhciBrZXkgPSBsaXN0Ll9rZXk7XG4gICAgdmFyIGNoaWxkcmVuID0gbGlzdC5jaGlsZHJlbi5tYXAoc2VyaWFsaXplTm9kZSk7XG4gICAgcmV0dXJuIGgoc2VyaWFsaXplcnMubGlzdCwge1xuICAgICAga2V5OiBrZXksXG4gICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0sIGNoaWxkcmVuKTtcbiAgfSAvLyBEZWZhdWx0IHRvIGZhbHNlLCBzbyBgdW5kZWZpbmVkYCB3aWxsIGV2YWx1YXRlIHRvIHRoZSBkZWZhdWx0IGhlcmVcblxuXG4gIHZhciByZW5kZXJDb250YWluZXJPblNpbmdsZUNoaWxkID0gQm9vbGVhbihwcm9wcy5yZW5kZXJDb250YWluZXJPblNpbmdsZUNoaWxkKTtcbiAgdmFyIG5vZGVzID0gYmxvY2tzLm1hcChzZXJpYWxpemVOb2RlKTtcblxuICBpZiAocmVuZGVyQ29udGFpbmVyT25TaW5nbGVDaGlsZCB8fCBub2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgdmFyIGNvbnRhaW5lclByb3BzID0gcHJvcHMuY2xhc3NOYW1lID8ge1xuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWVcbiAgICB9IDoge307XG4gICAgcmV0dXJuIGgoc2VyaWFsaXplcnMuY29udGFpbmVyLCBjb250YWluZXJQcm9wcywgbm9kZXMpO1xuICB9XG5cbiAgaWYgKG5vZGVzWzBdKSB7XG4gICAgcmV0dXJuIG5vZGVzWzBdO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBzZXJpYWxpemVycy5lbXB0eSA9PT0gJ2Z1bmN0aW9uJyA/IGgoc2VyaWFsaXplcnMuZW1wdHkpIDogc2VyaWFsaXplcnMuZW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzTGlzdChibG9jaykge1xuICByZXR1cm4gYmxvY2suX3R5cGUgPT09ICdsaXN0JyAmJiBibG9jay5saXN0SXRlbTtcbn1cblxuZnVuY3Rpb24gaXNMaXN0SXRlbShibG9jaykge1xuICByZXR1cm4gYmxvY2suX3R5cGUgPT09ICdibG9jaycgJiYgYmxvY2subGlzdEl0ZW07XG59XG5cbmZ1bmN0aW9uIGlzU3BhbihibG9jaykge1xuICByZXR1cm4gdHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJyB8fCBibG9jay5tYXJrcyB8fCBibG9jay5fdHlwZSA9PT0gJ3NwYW4nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2Nrc1RvTm9kZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja3NUb05vZGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVmYXVsdE1hcmtzID0gWydzdHJvbmcnLCAnZW0nLCAnY29kZScsICd1bmRlcmxpbmUnLCAnc3RyaWtlLXRocm91Z2gnXTtcblxudmFyIGJ1aWxkTWFya3NUcmVlID0gZnVuY3Rpb24gYnVpbGRNYXJrc1RyZWUoYmxvY2spIHtcbiAgdmFyIGNoaWxkcmVuID0gYmxvY2suY2hpbGRyZW4sXG4gICAgICBtYXJrRGVmcyA9IGJsb2NrLm1hcmtEZWZzO1xuXG4gIGlmICghY2hpbGRyZW4gfHwgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBzb3J0ZWRNYXJrcyA9IGNoaWxkcmVuLm1hcChzb3J0TWFya3NCeU9jY3VyZW5jZXMpO1xuICB2YXIgcm9vdE5vZGUgPSB7XG4gICAgX3R5cGU6ICdzcGFuJyxcbiAgICBjaGlsZHJlbjogW11cbiAgfTtcbiAgdmFyIG5vZGVTdGFjayA9IFtyb290Tm9kZV07XG4gIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHNwYW4sIGkpIHtcbiAgICB2YXIgbWFya3NOZWVkZWQgPSBzb3J0ZWRNYXJrc1tpXTtcblxuICAgIGlmICghbWFya3NOZWVkZWQpIHtcbiAgICAgIHZhciBsYXN0Tm9kZSA9IG5vZGVTdGFja1tub2RlU3RhY2subGVuZ3RoIC0gMV07XG4gICAgICBsYXN0Tm9kZS5jaGlsZHJlbi5wdXNoKHNwYW4pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwb3MgPSAxOyAvLyBTdGFydCBhdCBwb3NpdGlvbiBvbmUuIFJvb3QgaXMgYWx3YXlzIHBsYWluIGFuZCBzaG91bGQgbmV2ZXIgYmUgcmVtb3ZlZC4gKD8pXG5cbiAgICBpZiAobm9kZVN0YWNrLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAocG9zOyBwb3MgPCBub2RlU3RhY2subGVuZ3RoOyBwb3MrKykge1xuICAgICAgICB2YXIgbWFyayA9IG5vZGVTdGFja1twb3NdLm1hcmtLZXk7XG4gICAgICAgIHZhciBpbmRleCA9IG1hcmtzTmVlZGVkLmluZGV4T2YobWFyayk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBtYXJrc05lZWRlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gLy8gS2VlcCBmcm9tIGJlZ2lubmluZyB0byBmaXJzdCBtaXNzXG5cblxuICAgIG5vZGVTdGFjayA9IG5vZGVTdGFjay5zbGljZSgwLCBwb3MpOyAvLyBBZGQgbmVlZGVkIG5vZGVzXG5cbiAgICB2YXIgY3VycmVudE5vZGUgPSBmaW5kTGFzdFBhcmVudE5vZGUobm9kZVN0YWNrKTtcbiAgICBtYXJrc05lZWRlZC5mb3JFYWNoKGZ1bmN0aW9uIChtYXJrKSB7XG4gICAgICB2YXIgbm9kZSA9IHtcbiAgICAgICAgX3R5cGU6ICdzcGFuJyxcbiAgICAgICAgX2tleTogc3Bhbi5fa2V5LFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIG1hcms6IG1hcmtEZWZzLmZpbmQoZnVuY3Rpb24gKGRlZikge1xuICAgICAgICAgIHJldHVybiBkZWYuX2tleSA9PT0gbWFyaztcbiAgICAgICAgfSkgfHwgbWFyayxcbiAgICAgICAgbWFya0tleTogbWFya1xuICAgICAgfTtcbiAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICBub2RlU3RhY2sucHVzaChub2RlKTtcbiAgICAgIGN1cnJlbnROb2RlID0gbm9kZTtcbiAgICB9KTsgLy8gU3BsaXQgYXQgbmV3bGluZXMgdG8gbWFrZSBpbmRpdmlkdWFsIGxpbmUgY2h1bmtzLCBidXQga2VlcCBuZXdsaW5lXG4gICAgLy8gY2hhcmFjdGVycyBhcyBpbmRpdmlkdWFsIGVsZW1lbnRzIGluIHRoZSBhcnJheS4gV2UgdXNlIHRoZXNlIGNoYXJhY3RlcnNcbiAgICAvLyBpbiB0aGUgc3BhbiBzZXJpYWxpemVyIHRvIHRyaWdnZXIgaGFyZC1icmVhayByZW5kZXJpbmdcblxuICAgIGlmIChpc1RleHRTcGFuKHNwYW4pKSB7XG4gICAgICB2YXIgbGluZXMgPSBzcGFuLnRleHQuc3BsaXQoJ1xcbicpO1xuXG4gICAgICBmb3IgKHZhciBsaW5lID0gbGluZXMubGVuZ3RoOyBsaW5lLS0gPiAxOykge1xuICAgICAgICBsaW5lcy5zcGxpY2UobGluZSwgMCwgJ1xcbicpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbiA9IGN1cnJlbnROb2RlLmNoaWxkcmVuLmNvbmNhdChsaW5lcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuID0gY3VycmVudE5vZGUuY2hpbGRyZW4uY29uY2F0KHNwYW4pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByb290Tm9kZS5jaGlsZHJlbjtcbn07IC8vIFdlIHdhbnQgdG8gc29ydCBhbGwgdGhlIG1hcmtzIG9mIGFsbCB0aGUgc3BhbnMgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjpcbi8vIDEuIE1hcmtzIHRoYXQgYXJlIHNoYXJlZCBhbW9uZ3N0IHRoZSBtb3N0IGFkamFjZW50IHNpYmxpbmdzXG4vLyAyLiBOb24tZGVmYXVsdCBtYXJrcyAobGlua3MsIGN1c3RvbSBtZXRhZGF0YSlcbi8vIDMuIEJ1aWx0LWluLCBwbGFpbiBtYXJrcyAoYm9sZCwgZW1waGFzaXMsIGNvZGUgZXRjKVxuXG5cbmZ1bmN0aW9uIHNvcnRNYXJrc0J5T2NjdXJlbmNlcyhzcGFuLCBpLCBzcGFucykge1xuICBpZiAoIXNwYW4ubWFya3MgfHwgc3Bhbi5tYXJrcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gc3Bhbi5tYXJrcyB8fCBbXTtcbiAgfVxuXG4gIHZhciBtYXJrT2NjdXJlbmNlcyA9IHNwYW4ubWFya3MucmVkdWNlKGZ1bmN0aW9uIChvY2N1cmVuY2VzLCBtYXJrKSB7XG4gICAgb2NjdXJlbmNlc1ttYXJrXSA9IG9jY3VyZW5jZXNbbWFya10gPyBvY2N1cmVuY2VzW21hcmtdICsgMSA6IDE7XG5cbiAgICBmb3IgKHZhciBzaWJsaW5nSW5kZXggPSBpICsgMTsgc2libGluZ0luZGV4IDwgc3BhbnMubGVuZ3RoOyBzaWJsaW5nSW5kZXgrKykge1xuICAgICAgdmFyIHNpYmxpbmcgPSBzcGFuc1tzaWJsaW5nSW5kZXhdO1xuXG4gICAgICBpZiAoc2libGluZy5tYXJrcyAmJiBBcnJheS5pc0FycmF5KHNpYmxpbmcubWFya3MpICYmIHNpYmxpbmcubWFya3MuaW5kZXhPZihtYXJrKSAhPT0gLTEpIHtcbiAgICAgICAgb2NjdXJlbmNlc1ttYXJrXSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9jY3VyZW5jZXM7XG4gIH0sIHt9KTtcbiAgdmFyIHNvcnRCeU9jY3VyZW5jZSA9IHNvcnRNYXJrcy5iaW5kKG51bGwsIG1hcmtPY2N1cmVuY2VzKTsgLy8gU2xpY2luZyBiZWNhdXNlIHNvcnQoKSBtdXRhdGVzIHRoZSBpbnB1dFxuXG4gIHJldHVybiBzcGFuLm1hcmtzLnNsaWNlKCkuc29ydChzb3J0QnlPY2N1cmVuY2UpO1xufVxuXG5mdW5jdGlvbiBzb3J0TWFya3Mob2NjdXJlbmNlcywgbWFya0EsIG1hcmtCKSB7XG4gIHZhciBhT2NjdXJlbmNlcyA9IG9jY3VyZW5jZXNbbWFya0FdIHx8IDA7XG4gIHZhciBiT2NjdXJlbmNlcyA9IG9jY3VyZW5jZXNbbWFya0JdIHx8IDA7XG5cbiAgaWYgKGFPY2N1cmVuY2VzICE9PSBiT2NjdXJlbmNlcykge1xuICAgIHJldHVybiBiT2NjdXJlbmNlcyAtIGFPY2N1cmVuY2VzO1xuICB9XG5cbiAgdmFyIGFEZWZhdWx0UG9zID0gZGVmYXVsdE1hcmtzLmluZGV4T2YobWFya0EpO1xuICB2YXIgYkRlZmF1bHRQb3MgPSBkZWZhdWx0TWFya3MuaW5kZXhPZihtYXJrQik7IC8vIFNvcnQgZGVmYXVsdCBtYXJrcyBsYXN0XG5cbiAgaWYgKGFEZWZhdWx0UG9zICE9PSBiRGVmYXVsdFBvcykge1xuICAgIHJldHVybiBhRGVmYXVsdFBvcyAtIGJEZWZhdWx0UG9zO1xuICB9IC8vIFNvcnQgb3RoZXIgbWFya3Mgc2ltcGx5IGJ5IGtleVxuXG5cbiAgaWYgKG1hcmtBIDwgbWFya0IpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAobWFya0EgPiBtYXJrQikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGlzVGV4dFNwYW4obm9kZSkge1xuICByZXR1cm4gbm9kZS5fdHlwZSA9PT0gJ3NwYW4nICYmIHR5cGVvZiBub2RlLnRleHQgPT09ICdzdHJpbmcnICYmIChBcnJheS5pc0FycmF5KG5vZGUubWFya3MpIHx8IHR5cGVvZiBub2RlLm1hcmtzID09PSAndW5kZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRMYXN0UGFyZW50Tm9kZShub2Rlcykge1xuICBmb3IgKHZhciBpID0gbm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgaWYgKG5vZGUuX3R5cGUgPT09ICdzcGFuJyAmJiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkTWFya3NUcmVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVpbGRNYXJrc1RyZWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICByZXR1cm4gYmxvY2tzLm1hcChmdW5jdGlvbiAoYmxvY2spIHtcbiAgICBpZiAoYmxvY2suX2tleSkge1xuICAgICAgcmV0dXJuIGJsb2NrO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RBc3NpZ24oe1xuICAgICAgX2tleTogZ2V0U3RhdGljS2V5KGJsb2NrKVxuICAgIH0sIGJsb2NrKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNLZXkoaXRlbSkge1xuICByZXR1cm4gY2hlY2tzdW0oSlNPTi5zdHJpbmdpZnkoaXRlbSkpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXkEtWmEtejAtOV0vZywgJycpO1xufVxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXG5cbmZ1bmN0aW9uIGNoZWNrc3VtKHN0cikge1xuICB2YXIgaGFzaCA9IDA7XG4gIHZhciBzdHJsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGlmIChzdHJsZW4gPT09IDApIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RybGVuOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCAmPSBoYXNoOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBoYXNoO1xufVxuLyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlICovXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW5lcmF0ZUtleXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZW5lcmF0ZUhlbHBVcmwgPSByZXF1aXJlKCdAc2FuaXR5L2dlbmVyYXRlLWhlbHAtdXJsJyk7XG5cbnZhciB1cmxCdWlsZGVyID0gcmVxdWlyZSgnQHNhbml0eS9pbWFnZS11cmwnKTtcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIGVuYyA9IGVuY29kZVVSSUNvbXBvbmVudDtcbnZhciBtYXRlcmlhbGl6ZUVycm9yID0gXCJZb3UgbXVzdCBlaXRoZXI6XFxuICAtIFBhc3MgYHByb2plY3RJZGAgYW5kIGBkYXRhc2V0YCB0byB0aGUgYmxvY2sgcmVuZGVyZXJcXG4gIC0gTWF0ZXJpYWxpemUgaW1hZ2VzIHRvIGluY2x1ZGUgdGhlIGB1cmxgIGZpZWxkLlxcblxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgXCIuY29uY2F0KGdlbmVyYXRlSGVscFVybCgnYmxvY2stY29udGVudC1pbWFnZS1tYXRlcmlhbGl6aW5nJykpO1xuXG52YXIgZ2V0UXVlcnlTdHJpbmcgPSBmdW5jdGlvbiBnZXRRdWVyeVN0cmluZyhvcHRpb25zKSB7XG4gIHZhciBxdWVyeSA9IG9wdGlvbnMuaW1hZ2VPcHRpb25zO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHF1ZXJ5KTtcblxuICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoZW5jKGtleSksIFwiPVwiKS5jb25jYXQoZW5jKHF1ZXJ5W2tleV0pKTtcbiAgfSk7XG4gIHJldHVybiBcIj9cIi5jb25jYXQocGFyYW1zLmpvaW4oJyYnKSk7XG59O1xuXG52YXIgYnVpbGRVcmwgPSBmdW5jdGlvbiBidWlsZFVybChwcm9wcykge1xuICB2YXIgbm9kZSA9IHByb3BzLm5vZGUsXG4gICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcbiAgdmFyIHByb2plY3RJZCA9IG9wdGlvbnMucHJvamVjdElkLFxuICAgICAgZGF0YXNldCA9IG9wdGlvbnMuZGF0YXNldDtcbiAgdmFyIGFzc2V0ID0gbm9kZS5hc3NldDtcblxuICBpZiAoIWFzc2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbWFnZSBkb2VzIG5vdCBoYXZlIHJlcXVpcmVkIGBhc3NldGAgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmIChhc3NldC51cmwpIHtcbiAgICByZXR1cm4gYXNzZXQudXJsICsgZ2V0UXVlcnlTdHJpbmcob3B0aW9ucyk7XG4gIH1cblxuICBpZiAoIXByb2plY3RJZCB8fCAhZGF0YXNldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihtYXRlcmlhbGl6ZUVycm9yKTtcbiAgfVxuXG4gIHZhciByZWYgPSBhc3NldC5fcmVmO1xuXG4gIGlmICghcmVmKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGltYWdlIHJlZmVyZW5jZSBpbiBibG9jaywgbm8gYF9yZWZgIGZvdW5kIG9uIGBhc3NldGAnKTtcbiAgfVxuXG4gIHJldHVybiB1cmxCdWlsZGVyKG9iamVjdEFzc2lnbih7XG4gICAgcHJvamVjdElkOiBwcm9qZWN0SWQsXG4gICAgZGF0YXNldDogZGF0YXNldFxuICB9LCBvcHRpb25zLmltYWdlT3B0aW9ucyB8fCB7fSkpLmltYWdlKG5vZGUpLnRvU3RyaW5nKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkVXJsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0SW1hZ2VVcmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZXRTZXJpYWxpemVycyA9IHJlcXVpcmUoJy4vc2VyaWFsaXplcnMnKTtcblxudmFyIF9ibG9ja3NUb05vZGVzID0gcmVxdWlyZSgnLi9ibG9ja3NUb05vZGVzJyk7XG5cbnZhciBnZXRJbWFnZVVybCA9IHJlcXVpcmUoJy4vZ2V0SW1hZ2VVcmwnKTtcblxudmFyIG1lcmdlU2VyaWFsaXplcnMgPSByZXF1aXJlKCcuL21lcmdlU2VyaWFsaXplcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJsb2Nrc1RvTm9kZXM6IGZ1bmN0aW9uIGJsb2Nrc1RvTm9kZXMocmVuZGVyTm9kZSwgcHJvcHMsIGRlZmF1bHRTZXJpYWxpemVycywgc2VyaWFsaXplU3Bhbikge1xuICAgIGlmIChkZWZhdWx0U2VyaWFsaXplcnMpIHtcbiAgICAgIHJldHVybiBfYmxvY2tzVG9Ob2RlcyhyZW5kZXJOb2RlLCBwcm9wcywgZGVmYXVsdFNlcmlhbGl6ZXJzLCBzZXJpYWxpemVTcGFuKTtcbiAgICB9IC8vIEJhY2t3YXJkcy1jb21wYXRpYmlsaXR5XG5cblxuICAgIHZhciBzZXJpYWxpemVycyA9IGdldFNlcmlhbGl6ZXJzKHJlbmRlck5vZGUpO1xuICAgIHJldHVybiBfYmxvY2tzVG9Ob2RlcyhyZW5kZXJOb2RlLCBwcm9wcywgc2VyaWFsaXplcnMuZGVmYXVsdFNlcmlhbGl6ZXJzLCBzZXJpYWxpemVycy5zZXJpYWxpemVTcGFuKTtcbiAgfSxcbiAgZ2V0U2VyaWFsaXplcnM6IGdldFNlcmlhbGl6ZXJzLFxuICBnZXRJbWFnZVVybDogZ2V0SW1hZ2VVcmwsXG4gIG1lcmdlU2VyaWFsaXplcnM6IG1lcmdlU2VyaWFsaXplcnNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcm5hbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBpc0RlZmluZWQgPSBmdW5jdGlvbiBpc0RlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJztcbn07IC8vIFJlY3Vyc2l2ZWx5IG1lcmdlL3JlcGxhY2UgZGVmYXVsdCBzZXJpYWxpemVycyB3aXRoIHVzZXItc3BlY2lmaWVkIHNlcmlhbGl6ZXJzXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZVNlcmlhbGl6ZXJzKGRlZmF1bHRTZXJpYWxpemVycywgdXNlclNlcmlhbGl6ZXJzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkZWZhdWx0U2VyaWFsaXplcnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICB2YXIgdHlwZSA9IF90eXBlb2YoZGVmYXVsdFNlcmlhbGl6ZXJzW2tleV0pO1xuXG4gICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFjY1trZXldID0gaXNEZWZpbmVkKHVzZXJTZXJpYWxpemVyc1trZXldKSA/IHVzZXJTZXJpYWxpemVyc1trZXldIDogZGVmYXVsdFNlcmlhbGl6ZXJzW2tleV07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgYWNjW2tleV0gPSBvYmplY3RBc3NpZ24oe30sIGRlZmF1bHRTZXJpYWxpemVyc1trZXldLCB1c2VyU2VyaWFsaXplcnNba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1trZXldID0gdHlwZW9mIHVzZXJTZXJpYWxpemVyc1trZXldID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRTZXJpYWxpemVyc1trZXldIDogdXNlclNlcmlhbGl6ZXJzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlU2VyaWFsaXplcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtZGVwdGgsIGNvbXBsZXhpdHkgKi9cblxuXG5mdW5jdGlvbiBuZXN0TGlzdHMoYmxvY2tzKSB7XG4gIHZhciBtb2RlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnaHRtbCc7XG4gIHZhciB0cmVlID0gW107XG4gIHZhciBjdXJyZW50TGlzdDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcblxuICAgIGlmICghaXNMaXN0QmxvY2soYmxvY2spKSB7XG4gICAgICB0cmVlLnB1c2goYmxvY2spO1xuICAgICAgY3VycmVudExpc3QgPSBudWxsO1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBTdGFydCBvZiBhIG5ldyBsaXN0P1xuXG5cbiAgICBpZiAoIWN1cnJlbnRMaXN0KSB7XG4gICAgICBjdXJyZW50TGlzdCA9IGxpc3RGcm9tQmxvY2soYmxvY2spO1xuICAgICAgdHJlZS5wdXNoKGN1cnJlbnRMaXN0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gLy8gTmV3IGxpc3QgaXRlbSB3aXRoaW4gc2FtZSBsaXN0P1xuXG5cbiAgICBpZiAoYmxvY2tNYXRjaGVzTGlzdChibG9jaywgY3VycmVudExpc3QpKSB7XG4gICAgICBjdXJyZW50TGlzdC5jaGlsZHJlbi5wdXNoKGJsb2NrKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gLy8gRGlmZmVyZW50IGxpc3QgcHJvcHMsIGFyZSB3ZSBnb2luZyBkZWVwZXI/XG5cblxuICAgIGlmIChibG9jay5sZXZlbCA+IGN1cnJlbnRMaXN0LmxldmVsKSB7XG4gICAgICB2YXIgbmV3TGlzdCA9IGxpc3RGcm9tQmxvY2soYmxvY2spO1xuXG4gICAgICBpZiAobW9kZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIC8vIEJlY2F1c2UgSFRNTCBpcyBraW5kYSB3ZWlyZCwgbmVzdGVkIGxpc3RzIG5lZWRzIHRvIGJlIG5lc3RlZCB3aXRoaW4gbGlzdCBpdGVtc1xuICAgICAgICAvLyBTbyB3aGlsZSB5b3Ugd291bGQgdGhpbmsgdGhhdCB3ZSBjb3VsZCBwb3B1bGF0ZSB0aGUgcGFyZW50IGxpc3Qgd2l0aCBhIG5ldyBzdWItbGlzdCxcbiAgICAgICAgLy8gV2UgYWN0dWFsbHkgaGF2ZSB0byB0YXJnZXQgdGhlIGxhc3QgbGlzdCBlbGVtZW50IChjaGlsZCkgb2YgdGhlIHBhcmVudC5cbiAgICAgICAgLy8gSG93ZXZlciwgYXQgdGhpcyBwb2ludCB3ZSBuZWVkIHRvIGJlIHZlcnkgY2FyZWZ1bCAtIHNpbXBseSBwdXNoaW5nIHRvIHRoZSBsaXN0IG9mIGNoaWxkcmVuXG4gICAgICAgIC8vIHdpbGwgbXV0YXRlIHRoZSBpbnB1dCwgYW5kIHdlIGRvbid0IHdhbnQgdG8gYmxpbmRseSBjbG9uZSB0aGUgZW50aXJlIHRyZWUuXG4gICAgICAgIC8vIENsb25lIHRoZSBsYXN0IGNoaWxkIHdoaWxlIGFkZGluZyBvdXIgbmV3IGxpc3QgYXMgdGhlIGxhc3QgY2hpbGQgb2YgaXRcbiAgICAgICAgdmFyIGxhc3RMaXN0SXRlbSA9IGxhc3RDaGlsZChjdXJyZW50TGlzdCk7XG4gICAgICAgIHZhciBuZXdMYXN0Q2hpbGQgPSBvYmplY3RBc3NpZ24oe30sIGxhc3RMaXN0SXRlbSwge1xuICAgICAgICAgIGNoaWxkcmVuOiBsYXN0TGlzdEl0ZW0uY2hpbGRyZW4uY29uY2F0KG5ld0xpc3QpXG4gICAgICAgIH0pOyAvLyBTd2FwIHRoZSBsYXN0IGNoaWxkXG5cbiAgICAgICAgY3VycmVudExpc3QuY2hpbGRyZW5bY3VycmVudExpc3QuY2hpbGRyZW4ubGVuZ3RoIC0gMV0gPSBuZXdMYXN0Q2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50TGlzdC5jaGlsZHJlbi5wdXNoKG5ld0xpc3QpO1xuICAgICAgfSAvLyBTZXQgdGhlIG5ld2x5IGNyZWF0ZWQsIGRlZXBlciBsaXN0IGFzIHRoZSBjdXJyZW50XG5cblxuICAgICAgY3VycmVudExpc3QgPSBuZXdMaXN0O1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBEaWZmZXJlbnQgbGlzdCBwcm9wcywgYXJlIHdlIGdvaW5nIGJhY2sgdXAgdGhlIHRyZWU/XG5cblxuICAgIGlmIChibG9jay5sZXZlbCA8IGN1cnJlbnRMaXN0LmxldmVsKSB7XG4gICAgICAvLyBDdXJyZW50IGxpc3QgaGFzIGVuZGVkLCBhbmQgd2UgbmVlZCB0byBob29rIHVwIHdpdGggYSBwYXJlbnQgb2YgdGhlIHNhbWUgbGV2ZWwgYW5kIHR5cGVcbiAgICAgIHZhciBtYXRjaCA9IGZpbmRMaXN0TWF0Y2hpbmcodHJlZVt0cmVlLmxlbmd0aCAtIDFdLCBibG9jayk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBjdXJyZW50TGlzdCA9IG1hdGNoO1xuICAgICAgICBjdXJyZW50TGlzdC5jaGlsZHJlbi5wdXNoKGJsb2NrKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIFNpbWlsYXIgcGFyZW50IGNhbid0IGJlIGZvdW5kLCBhc3N1bWUgbmV3IGxpc3RcblxuXG4gICAgICBjdXJyZW50TGlzdCA9IGxpc3RGcm9tQmxvY2soYmxvY2spO1xuICAgICAgdHJlZS5wdXNoKGN1cnJlbnRMaXN0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gLy8gRGlmZmVyZW50IGxpc3QgcHJvcHMsIGRpZmZlcmVudCBsaXN0IHN0eWxlP1xuXG5cbiAgICBpZiAoYmxvY2subGlzdEl0ZW0gIT09IGN1cnJlbnRMaXN0Lmxpc3RJdGVtKSB7XG4gICAgICB2YXIgX21hdGNoID0gZmluZExpc3RNYXRjaGluZyh0cmVlW3RyZWUubGVuZ3RoIC0gMV0sIHtcbiAgICAgICAgbGV2ZWw6IGJsb2NrLmxldmVsXG4gICAgICB9KTtcblxuICAgICAgaWYgKF9tYXRjaCAmJiBfbWF0Y2gubGlzdEl0ZW0gPT09IGJsb2NrLmxpc3RJdGVtKSB7XG4gICAgICAgIGN1cnJlbnRMaXN0ID0gX21hdGNoO1xuICAgICAgICBjdXJyZW50TGlzdC5jaGlsZHJlbi5wdXNoKGJsb2NrKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50TGlzdCA9IGxpc3RGcm9tQmxvY2soYmxvY2spO1xuICAgICAgICB0cmVlLnB1c2goY3VycmVudExpc3QpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cblxuICAgIGNvbnNvbGUud2FybignVW5rbm93biBzdGF0ZSBlbmNvdW50ZXJlZCBmb3IgYmxvY2snLCBibG9jayk7XG4gICAgdHJlZS5wdXNoKGJsb2NrKTtcbiAgfVxuXG4gIHJldHVybiB0cmVlO1xufVxuXG5mdW5jdGlvbiBpc0xpc3RCbG9jayhibG9jaykge1xuICByZXR1cm4gQm9vbGVhbihibG9jay5saXN0SXRlbSk7XG59XG5cbmZ1bmN0aW9uIGJsb2NrTWF0Y2hlc0xpc3QoYmxvY2ssIGxpc3QpIHtcbiAgcmV0dXJuIGJsb2NrLmxldmVsID09PSBsaXN0LmxldmVsICYmIGJsb2NrLmxpc3RJdGVtID09PSBsaXN0Lmxpc3RJdGVtO1xufVxuXG5mdW5jdGlvbiBsaXN0RnJvbUJsb2NrKGJsb2NrKSB7XG4gIHJldHVybiB7XG4gICAgX3R5cGU6ICdsaXN0JyxcbiAgICBfa2V5OiBcIlwiLmNvbmNhdChibG9jay5fa2V5LCBcIi1wYXJlbnRcIiksXG4gICAgbGV2ZWw6IGJsb2NrLmxldmVsLFxuICAgIGxpc3RJdGVtOiBibG9jay5saXN0SXRlbSxcbiAgICBjaGlsZHJlbjogW2Jsb2NrXVxuICB9O1xufVxuXG5mdW5jdGlvbiBsYXN0Q2hpbGQoYmxvY2spIHtcbiAgcmV0dXJuIGJsb2NrLmNoaWxkcmVuICYmIGJsb2NrLmNoaWxkcmVuW2Jsb2NrLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xufVxuXG5mdW5jdGlvbiBmaW5kTGlzdE1hdGNoaW5nKHJvb3ROb2RlLCBtYXRjaGluZykge1xuICB2YXIgZmlsdGVyT25UeXBlID0gdHlwZW9mIG1hdGNoaW5nLmxpc3RJdGVtID09PSAnc3RyaW5nJztcblxuICBpZiAocm9vdE5vZGUuX3R5cGUgPT09ICdsaXN0JyAmJiByb290Tm9kZS5sZXZlbCA9PT0gbWF0Y2hpbmcubGV2ZWwgJiYgZmlsdGVyT25UeXBlICYmIHJvb3ROb2RlLmxpc3RJdGVtID09PSBtYXRjaGluZy5saXN0SXRlbSkge1xuICAgIHJldHVybiByb290Tm9kZTtcbiAgfVxuXG4gIHZhciBub2RlID0gbGFzdENoaWxkKHJvb3ROb2RlKTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZmluZExpc3RNYXRjaGluZyhub2RlLCBtYXRjaGluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmVzdExpc3RzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmVzdExpc3RzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgZ2V0SW1hZ2VVcmwgPSByZXF1aXJlKCcuL2dldEltYWdlVXJsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGgsIHNlcmlhbGl6ZXJPcHRzKSB7XG4gIHZhciBzZXJpYWxpemVPcHRpb25zID0gc2VyaWFsaXplck9wdHMgfHwge1xuICAgIHVzZURhc2hlZFN0eWxlczogZmFsc2UgLy8gTG93LWxldmVsIGJsb2NrIHNlcmlhbGl6ZXJcblxuICB9O1xuXG4gIGZ1bmN0aW9uIEJsb2NrU2VyaWFsaXplcihwcm9wcykge1xuICAgIHZhciBub2RlID0gcHJvcHMubm9kZSxcbiAgICAgICAgc2VyaWFsaXplcnMgPSBwcm9wcy5zZXJpYWxpemVycyxcbiAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICAgIGlzSW5saW5lID0gcHJvcHMuaXNJbmxpbmUsXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGJsb2NrVHlwZSA9IG5vZGUuX3R5cGU7XG4gICAgdmFyIHNlcmlhbGl6ZXIgPSBzZXJpYWxpemVycy50eXBlc1tibG9ja1R5cGVdO1xuXG4gICAgaWYgKCFzZXJpYWxpemVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGJsb2NrIHR5cGUgXFxcIlwiLmNvbmNhdChibG9ja1R5cGUsIFwiXFxcIiwgcGxlYXNlIHNwZWNpZnkgYSBzZXJpYWxpemVyIGZvciBpdCBpbiB0aGUgYHNlcmlhbGl6ZXJzLnR5cGVzYCBwcm9wXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaChzZXJpYWxpemVyLCB7XG4gICAgICBub2RlOiBub2RlLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIGlzSW5saW5lOiBpc0lubGluZVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgfSAvLyBMb3ctbGV2ZWwgc3BhbiBzZXJpYWxpemVyXG5cblxuICBmdW5jdGlvbiBTcGFuU2VyaWFsaXplcihwcm9wcykge1xuICAgIHZhciBfcHJvcHMkbm9kZSA9IHByb3BzLm5vZGUsXG4gICAgICAgIG1hcmsgPSBfcHJvcHMkbm9kZS5tYXJrLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcyRub2RlLmNoaWxkcmVuO1xuICAgIHZhciBpc1BsYWluID0gdHlwZW9mIG1hcmsgPT09ICdzdHJpbmcnO1xuICAgIHZhciBtYXJrVHlwZSA9IGlzUGxhaW4gPyBtYXJrIDogbWFyay5fdHlwZTtcbiAgICB2YXIgc2VyaWFsaXplciA9IHByb3BzLnNlcmlhbGl6ZXJzLm1hcmtzW21hcmtUeXBlXTtcblxuICAgIGlmICghc2VyaWFsaXplcikge1xuICAgICAgLy8gQHRvZG8gUmV2ZXJ0IGJhY2sgdG8gdGhyb3dpbmcgZXJyb3JzP1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlVua25vd24gbWFyayB0eXBlIFxcXCJcIi5jb25jYXQobWFya1R5cGUsIFwiXFxcIiwgcGxlYXNlIHNwZWNpZnkgYSBzZXJpYWxpemVyIGZvciBpdCBpbiB0aGUgYHNlcmlhbGl6ZXJzLm1hcmtzYCBwcm9wXCIpKTtcbiAgICAgIHJldHVybiBoKHByb3BzLnNlcmlhbGl6ZXJzLm1hcmtGYWxsYmFjaywgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBoKHNlcmlhbGl6ZXIsIHByb3BzLm5vZGUsIGNoaWxkcmVuKTtcbiAgfSAvLyBMb3ctbGV2ZWwgbGlzdCBzZXJpYWxpemVyXG5cblxuICBmdW5jdGlvbiBMaXN0U2VyaWFsaXplcihwcm9wcykge1xuICAgIHZhciB0YWcgPSBwcm9wcy50eXBlID09PSAnYnVsbGV0JyA/ICd1bCcgOiAnb2wnO1xuICAgIHJldHVybiBoKHRhZywgbnVsbCwgcHJvcHMuY2hpbGRyZW4pO1xuICB9IC8vIExvdy1sZXZlbCBsaXN0IGl0ZW0gc2VyaWFsaXplclxuXG5cbiAgZnVuY3Rpb24gTGlzdEl0ZW1TZXJpYWxpemVyKHByb3BzKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gIXByb3BzLm5vZGUuc3R5bGUgfHwgcHJvcHMubm9kZS5zdHlsZSA9PT0gJ25vcm1hbCcgPyAvLyBEb24ndCB3cmFwIHBsYWluIHRleHQgaW4gcGFyYWdyYXBocyBpbnNpZGUgb2YgYSBsaXN0IGl0ZW1cbiAgICBwcm9wcy5jaGlsZHJlbiA6IC8vIEJ1dCB3cmFwIGFueSBvdGhlciBzdHlsZSBpbiB3aGF0ZXZlciB0aGUgYmxvY2sgc2VyaWFsaXplciBzYXlzIHRvIHVzZVxuICAgIGgocHJvcHMuc2VyaWFsaXplcnMudHlwZXMuYmxvY2ssIHByb3BzLCBwcm9wcy5jaGlsZHJlbik7XG4gICAgcmV0dXJuIGgoJ2xpJywgbnVsbCwgY2hpbGRyZW4pO1xuICB9IC8vIFJlbmRlcmVyIG9mIGFuIGFjdHVhbCBibG9jayBvZiB0eXBlIGBibG9ja2AuIENvbmZ1c2luZywgd2Uga25vdy5cblxuXG4gIGZ1bmN0aW9uIEJsb2NrVHlwZVNlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICB2YXIgc3R5bGUgPSBwcm9wcy5ub2RlLnN0eWxlIHx8ICdub3JtYWwnO1xuXG4gICAgaWYgKC9eaFxcZC8udGVzdChzdHlsZSkpIHtcbiAgICAgIHJldHVybiBoKHN0eWxlLCBudWxsLCBwcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlID09PSAnYmxvY2txdW90ZScgPyBoKCdibG9ja3F1b3RlJywgbnVsbCwgcHJvcHMuY2hpbGRyZW4pIDogaCgncCcsIG51bGwsIHByb3BzLmNoaWxkcmVuKTtcbiAgfSAvLyBTZXJpYWxpemVycyBmb3IgdGhpbmdzIHRoYXQgY2FuIGJlIGRpcmVjdGx5IGF0dHJpYnV0ZWQgdG8gYSB0YWcgd2l0aG91dCBhbnkgcHJvcHNcbiAgLy8gV2UgdXNlIHBhcnRpYWwgYXBwbGljYXRpb24gdG8gZG8gdGhpcywgcGFzc2luZyB0aGUgdGFnIG5hbWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50XG5cblxuICBmdW5jdGlvbiBSYXdNYXJrU2VyaWFsaXplcih0YWcsIHByb3BzKSB7XG4gICAgcmV0dXJuIGgodGFnLCBudWxsLCBwcm9wcy5jaGlsZHJlbik7XG4gIH1cblxuICBmdW5jdGlvbiBVbmRlcmxpbmVTZXJpYWxpemVyKHByb3BzKSB7XG4gICAgdmFyIHN0eWxlID0gc2VyaWFsaXplT3B0aW9ucy51c2VEYXNoZWRTdHlsZXMgPyB7XG4gICAgICAndGV4dC1kZWNvcmF0aW9uJzogJ3VuZGVybGluZSdcbiAgICB9IDoge1xuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfTtcbiAgICByZXR1cm4gaCgnc3BhbicsIHtcbiAgICAgIHN0eWxlOiBzdHlsZVxuICAgIH0sIHByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFN0cmlrZVRocm91Z2hTZXJpYWxpemVyKHByb3BzKSB7XG4gICAgcmV0dXJuIGgoJ2RlbCcsIG51bGwsIHByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIExpbmtTZXJpYWxpemVyKHByb3BzKSB7XG4gICAgcmV0dXJuIGgoJ2EnLCB7XG4gICAgICBocmVmOiBwcm9wcy5tYXJrLmhyZWZcbiAgICB9LCBwcm9wcy5jaGlsZHJlbik7XG4gIH1cblxuICBmdW5jdGlvbiBJbWFnZVNlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLm5vZGUuYXNzZXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBpbWcgPSBoKCdpbWcnLCB7XG4gICAgICBzcmM6IGdldEltYWdlVXJsKHByb3BzKVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9wcy5pc0lubGluZSA/IGltZyA6IGgoJ2ZpZ3VyZScsIG51bGwsIGltZyk7XG4gIH0gLy8gU2VyaWFsaXplciB0aGF0IHJlY3Vyc2l2ZWx5IGNhbGxzIGl0c2VsZiwgcHJvZHVjaW5nIGEgaHlwZXJzY3JpcHQgdHJlZSBvZiBzcGFuc1xuXG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplU3BhbihzcGFuLCBzZXJpYWxpemVycywgaW5kZXgsIG9wdGlvbnMpIHtcbiAgICBpZiAoc3BhbiA9PT0gJ1xcbicgJiYgc2VyaWFsaXplcnMuaGFyZEJyZWFrKSB7XG4gICAgICByZXR1cm4gaChzZXJpYWxpemVycy5oYXJkQnJlYWssIHtcbiAgICAgICAga2V5OiBcImhiLVwiLmNvbmNhdChpbmRleClcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc3BhbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVycy50ZXh0ID8gaChzZXJpYWxpemVycy50ZXh0LCB7XG4gICAgICAgIGtleTogXCJ0ZXh0LVwiLmNvbmNhdChpbmRleClcbiAgICAgIH0sIHNwYW4pIDogc3BhbjtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW47XG5cbiAgICBpZiAoc3Bhbi5jaGlsZHJlbikge1xuICAgICAgY2hpbGRyZW4gPSB7XG4gICAgICAgIGNoaWxkcmVuOiBzcGFuLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5zZXJpYWxpemVOb2RlKGNoaWxkLCBpLCBzcGFuLmNoaWxkcmVuLCB0cnVlKTtcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWROb2RlID0gb2JqZWN0QXNzaWduKHt9LCBzcGFuLCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGgoc2VyaWFsaXplcnMuc3Bhbiwge1xuICAgICAga2V5OiBzcGFuLl9rZXkgfHwgXCJzcGFuLVwiLmNvbmNhdChpbmRleCksXG4gICAgICBub2RlOiBzZXJpYWxpemVkTm9kZSxcbiAgICAgIHNlcmlhbGl6ZXJzOiBzZXJpYWxpemVyc1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIEhhcmRCcmVha1NlcmlhbGl6ZXIgPSBmdW5jdGlvbiBIYXJkQnJlYWtTZXJpYWxpemVyKCkge1xuICAgIHJldHVybiBoKCdicicpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0TWFya1NlcmlhbGl6ZXJzID0ge1xuICAgIHN0cm9uZzogUmF3TWFya1NlcmlhbGl6ZXIuYmluZChudWxsLCAnc3Ryb25nJyksXG4gICAgZW06IFJhd01hcmtTZXJpYWxpemVyLmJpbmQobnVsbCwgJ2VtJyksXG4gICAgY29kZTogUmF3TWFya1NlcmlhbGl6ZXIuYmluZChudWxsLCAnY29kZScpLFxuICAgIHVuZGVybGluZTogVW5kZXJsaW5lU2VyaWFsaXplcixcbiAgICAnc3RyaWtlLXRocm91Z2gnOiBTdHJpa2VUaHJvdWdoU2VyaWFsaXplcixcbiAgICBsaW5rOiBMaW5rU2VyaWFsaXplclxuICB9O1xuICB2YXIgZGVmYXVsdFNlcmlhbGl6ZXJzID0ge1xuICAgIC8vIENvbW1vbiBvdmVycmlkZXNcbiAgICB0eXBlczoge1xuICAgICAgYmxvY2s6IEJsb2NrVHlwZVNlcmlhbGl6ZXIsXG4gICAgICBpbWFnZTogSW1hZ2VTZXJpYWxpemVyXG4gICAgfSxcbiAgICBtYXJrczogZGVmYXVsdE1hcmtTZXJpYWxpemVycyxcbiAgICAvLyBMZXNzIGNvbW1vbiBvdmVycmlkZXNcbiAgICBsaXN0OiBMaXN0U2VyaWFsaXplcixcbiAgICBsaXN0SXRlbTogTGlzdEl0ZW1TZXJpYWxpemVyLFxuICAgIGJsb2NrOiBCbG9ja1NlcmlhbGl6ZXIsXG4gICAgc3BhbjogU3BhblNlcmlhbGl6ZXIsXG4gICAgaGFyZEJyZWFrOiBIYXJkQnJlYWtTZXJpYWxpemVyLFxuICAgIC8vIENvbnRhaW5lciBlbGVtZW50XG4gICAgY29udGFpbmVyOiAnZGl2JyxcbiAgICAvLyBXaGVuIHdlIGNhbid0IHJlc29sdmUgdGhlIG1hcmsgcHJvcGVybHksIHVzZSB0aGlzIHJlbmRlcmVyIGFzIHRoZSBjb250YWluZXJcbiAgICBtYXJrRmFsbGJhY2s6ICdzcGFuJyxcbiAgICAvLyBBbGxvdyBvdmVycmlkaW5nIHRleHQgcmVuZGVyZXIsIGJ1dCBsZWF2ZSB1bmRlZmluZWQgdG8ganVzdCB1c2UgcGxhaW4gc3RyaW5ncyBieSBkZWZhdWx0XG4gICAgdGV4dDogdW5kZWZpbmVkLFxuICAgIC8vIEVtcHR5IG5vZGVzIChSZWFjdCB1c2VzIG51bGwsIGh5cGVyc2NyaXB0IHdpdGggZW1wdHkgc3RyaW5ncylcbiAgICBlbXB0eTogJydcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0U2VyaWFsaXplcnM6IGRlZmF1bHRTZXJpYWxpemVycyxcbiAgICBzZXJpYWxpemVTcGFuOiBzZXJpYWxpemVTcGFuXG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VyaWFsaXplcnMuanMubWFwIiwidmFyIGJhc2VVcmwgPSAnaHR0cHM6Ly9kb2NzLnNhbml0eS5pby9oZWxwLydcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZW5lcmF0ZUhlbHBVcmwoc2x1Zykge1xuICByZXR1cm4gYmFzZVVybCArIHNsdWdcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG52YXIgaW50ZXJuYWxzID0gcmVxdWlyZSgnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2ludGVybmFscycpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL3RhcmdldHMvZG9tJyksXG4gICAgc2VyaWFsaXplcnMgPSBfcmVxdWlyZS5zZXJpYWxpemVycyxcbiAgICBzZXJpYWxpemVTcGFuID0gX3JlcXVpcmUuc2VyaWFsaXplU3BhbixcbiAgICByZW5kZXJQcm9wcyA9IF9yZXF1aXJlLnJlbmRlclByb3BzO1xuXG52YXIgZ2V0SW1hZ2VVcmwgPSBpbnRlcm5hbHMuZ2V0SW1hZ2VVcmwsXG4gICAgYmxvY2tzVG9Ob2RlcyA9IGludGVybmFscy5ibG9ja3NUb05vZGVzLFxuICAgIG1lcmdlU2VyaWFsaXplcnMgPSBpbnRlcm5hbHMubWVyZ2VTZXJpYWxpemVycztcblxudmFyIHJlbmRlck5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50O1xuXG52YXIgU2FuaXR5QmxvY2tDb250ZW50ID0gZnVuY3Rpb24gU2FuaXR5QmxvY2tDb250ZW50KHByb3BzKSB7XG4gIHZhciBjdXN0b21TZXJpYWxpemVycyA9IG1lcmdlU2VyaWFsaXplcnMoU2FuaXR5QmxvY2tDb250ZW50LmRlZmF1bHRTZXJpYWxpemVycywgcHJvcHMuc2VyaWFsaXplcnMpO1xuXG4gIHZhciBibG9ja1Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcmVuZGVyUHJvcHMsIHByb3BzLCB7XG4gICAgc2VyaWFsaXplcnM6IGN1c3RvbVNlcmlhbGl6ZXJzLFxuICAgIGJsb2NrczogcHJvcHMuYmxvY2tzIHx8IFtdXG4gIH0pO1xuXG4gIHJldHVybiBibG9ja3NUb05vZGVzKHJlbmRlck5vZGUsIGJsb2NrUHJvcHMsIHNlcmlhbGl6ZXJzLCBzZXJpYWxpemVTcGFuKTtcbn07XG5cbi8vIEV4cG9zZSBkZWZhdWx0IHNlcmlhbGl6ZXJzIHRvIHRoZSB1c2VyXG5TYW5pdHlCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzID0gc2VyaWFsaXplcnM7XG5cbi8vIEV4cG9zZSBsb2dpYyBmb3IgYnVpbGRpbmcgaW1hZ2UgVVJMcyBmcm9tIGFuIGltYWdlIHJlZmVyZW5jZS9ub2RlXG5TYW5pdHlCbG9ja0NvbnRlbnQuZ2V0SW1hZ2VVcmwgPSBnZXRJbWFnZVVybDtcblxuU2FuaXR5QmxvY2tDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZW5kZXJDb250YWluZXJPblNpbmdsZUNoaWxkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvLyBXaGVuIHJlbmRlcmluZyBpbWFnZXMsIHdlIG5lZWQgcHJvamVjdCBpZCBhbmQgZGF0YXNldCwgdW5sZXNzIGltYWdlcyBhcmUgbWF0ZXJpYWxpemVkXG4gIHByb2plY3RJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YXNldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2VPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIHNlcmlhbGl6ZXJzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8vIENvbW1vbiBvdmVycmlkZXNcbiAgICB0eXBlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtYXJrczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8vIExlc3MgY29tbW9uIG92ZXJyaWRlc1xuICAgIGxpc3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxpc3RJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8vIExvdy1sZXZlbCBzZXJpYWxpemVyc1xuICAgIGJsb2NrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzcGFuOiBQcm9wVHlwZXMuZnVuY1xuICB9KSxcblxuICBibG9ja3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KSksIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KV0pLmlzUmVxdWlyZWRcbn07XG5cblNhbml0eUJsb2NrQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlbmRlckNvbnRhaW5lck9uU2luZ2xlQ2hpbGQ6IGZhbHNlLFxuICBzZXJpYWxpemVyczoge30sXG4gIGltYWdlT3B0aW9uczoge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2FuaXR5QmxvY2tDb250ZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmxvY2tDb250ZW50LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2ludGVybmFscycpLFxuICAgIGdldFNlcmlhbGl6ZXJzID0gX3JlcXVpcmUuZ2V0U2VyaWFsaXplcnM7XG5cbnZhciByZW5kZXJOb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcblxudmFyIF9nZXRTZXJpYWxpemVycyA9IGdldFNlcmlhbGl6ZXJzKHJlbmRlck5vZGUpLFxuICAgIGRlZmF1bHRTZXJpYWxpemVycyA9IF9nZXRTZXJpYWxpemVycy5kZWZhdWx0U2VyaWFsaXplcnMsXG4gICAgc2VyaWFsaXplU3BhbiA9IF9nZXRTZXJpYWxpemVycy5zZXJpYWxpemVTcGFuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2VyaWFsaXplU3Bhbjogc2VyaWFsaXplU3BhbixcbiAgc2VyaWFsaXplcnM6IGRlZmF1bHRTZXJpYWxpemVycyxcbiAgcmVuZGVyUHJvcHM6IHsgbmVzdE1hcmtzOiB0cnVlIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kb20uanMubWFwIiwiaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9Db21wb25lbnRzL05hdic7XHJcbmltcG9ydCBQb3N0V3JhcHBlciBmcm9tICcuLi8uLi9Db21wb25lbnRzL1Bvc3RXcmFwcGVyJztcclxuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSc7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBQb3N0ID0gKHtkYXRhfSkgPT4ge1xyXG5cclxuY29uc3QgcG9zdERhdGEgPSAnJztcclxuXHJcbiBcclxucmV0dXJuIChcclxuPExheW91dD5cclxuPE5hdiBjdXJyZW50PSdibG9nJyAvPlxyXG48UG9zdFdyYXBwZXIgY2xpZW50ID0ge2NsaWVudH0gcG9zdCA9IHtwb3N0RGF0YX0vPlxyXG5cclxuPHA+VGl0bGU6IHtkYXRhLnRpdGxlfTwvcD5cclxuPEJsb2NrQ29udGVudFxyXG4gIGJsb2NrcyA9IHtkYXRhLmJvZHl9XHJcbiAgaW1hZ2VPcHRpb25zPXt7dzogNDgwLCBoOjI0MCwgZml0OiAnbWF4J319XHJcbiAgey4uLmNsaWVudC5jb25maWcoKX1cclxuICAvPlxyXG48L0xheW91dD5cclxuKVxyXG59XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHBpZF1bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvciAtPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXSAtPiB0aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgYm9keSxcclxuICBtYWluSW1hZ2VcclxufSBgO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3R7IHBpZCA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgY29uc3QgZGF0YSA9ICBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBxdWVyeSwge3BpZH0pICBcclxuXHJcbiAgcmV0dXJuIHtwcm9wczoge2RhdGF9fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9
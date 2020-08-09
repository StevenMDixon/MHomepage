webpackHotUpdate_N_E("pages/posts/[pid]",{

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
  var postData = '';
  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 1
    }
  }, __jsx(_Components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    current: "blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 1
    }
  }), __jsx(_Components_PostWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    client: _client__WEBPACK_IMPORTED_MODULE_2___default.a,
    post: postData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 1
    }
  }, "Title: ", data.title), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvYmxvY2stY29udGVudC10by1oeXBlcnNjcmlwdC9pbnRlcm5hbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvbGliL2Jsb2Nrc1RvTm9kZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvbGliL2J1aWxkTWFya3NUcmVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9nZW5lcmF0ZUtleXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvbGliL2dldEltYWdlVXJsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9pbnRlcm5hbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvbGliL21lcmdlU2VyaWFsaXplcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvbGliL25lc3RMaXN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvYmxvY2stY29udGVudC10by1oeXBlcnNjcmlwdC9saWIvc2VyaWFsaXplcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvbm9kZV9tb2R1bGVzL0BzYW5pdHkvZ2VuZXJhdGUtaGVscC11cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QvbGliL0Jsb2NrQ29udGVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdC9saWIvdGFyZ2V0cy9kb20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1twaWRdLmpzeCJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlBvc3QiLCJkYXRhIiwicG9zdERhdGEiLCJ0aXRsZSIsImJvZHkiLCJ3IiwiaCIsImZpdCIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLG1CQUFPLENBQUMsNkZBQWlCOzs7Ozs7Ozs7Ozs7O0FDQTdCOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLGdGQUFlOztBQUUxQyxxQkFBcUIsbUJBQU8sQ0FBQyxtR0FBa0I7O0FBRS9DLGdCQUFnQixtQkFBTyxDQUFDLHlGQUFhOztBQUVyQyxtQkFBbUIsbUJBQU8sQ0FBQywrRkFBZ0I7O0FBRTNDLHVCQUF1QixtQkFBTyxDQUFDLHVHQUFvQixFQUFFOzs7QUFHckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLElBQUk7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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U0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0Msd0RBQWUsQ0FBQ0MsOENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFHRCxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFZO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBRXpCLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUdBLFNBQ0EsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx1REFBRDtBQUFLLFdBQU8sRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBLE1BQUMsK0RBQUQ7QUFBYSxVQUFNLEVBQUlKLDhDQUF2QjtBQUErQixRQUFJLEVBQUlJLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVdELElBQUksQ0FBQ0UsS0FBaEIsQ0FKQSxFQUtBLE1BQUMscUVBQUQ7QUFDRSxVQUFNLEVBQUlGLElBQUksQ0FBQ0csSUFEakI7QUFFRSxnQkFBWSxFQUFFO0FBQUNDLE9BQUMsRUFBRSxHQUFKO0FBQVNDLE9BQUMsRUFBQyxHQUFYO0FBQWdCQyxTQUFHLEVBQUU7QUFBckI7QUFGaEIsS0FHTVQsOENBQU0sQ0FBQ1UsTUFBUCxFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMQSxDQURBO0FBYUMsQ0FsQkQ7O0tBQU1SLEk7O0FBdUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcGlkXS5iYjkxMDA4MTA1Zjg4ZjhkMGNjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbnRlcm5hbHMnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBidWlsZE1hcmtzVHJlZSA9IHJlcXVpcmUoJy4vYnVpbGRNYXJrc1RyZWUnKTtcblxudmFyIG5lc3RMaXN0cyA9IHJlcXVpcmUoJy4vbmVzdExpc3RzJyk7XG5cbnZhciBnZW5lcmF0ZUtleXMgPSByZXF1aXJlKCcuL2dlbmVyYXRlS2V5cycpO1xuXG52YXIgbWVyZ2VTZXJpYWxpemVycyA9IHJlcXVpcmUoJy4vbWVyZ2VTZXJpYWxpemVycycpOyAvLyBQcm9wZXJ0aWVzIHRvIGV4dHJhY3QgZnJvbSBwcm9wcyBhbmQgcGFzcyB0byBzZXJpYWxpemVycyBhcyBvcHRpb25zXG5cblxudmFyIG9wdGlvblByb3BzID0gWydwcm9qZWN0SWQnLCAnZGF0YXNldCcsICdpbWFnZU9wdGlvbnMnXTtcblxudmFyIGlzRGVmaW5lZCA9IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBpbWFnZU9wdGlvbnM6IHt9XG59O1xuXG5mdW5jdGlvbiBibG9ja3NUb05vZGVzKGgsIHByb3BlcnRpZXMsIGRlZmF1bHRTZXJpYWxpemVycywgc2VyaWFsaXplU3Bhbikge1xuICB2YXIgcHJvcHMgPSBvYmplY3RBc3NpZ24oe30sIGRlZmF1bHRzLCBwcm9wZXJ0aWVzKTtcbiAgdmFyIHJhd0Jsb2NrcyA9IEFycmF5LmlzQXJyYXkocHJvcHMuYmxvY2tzKSA/IHByb3BzLmJsb2NrcyA6IFtwcm9wcy5ibG9ja3NdO1xuICB2YXIga2V5ZWRCbG9ja3MgPSBnZW5lcmF0ZUtleXMocmF3QmxvY2tzKTtcbiAgdmFyIGJsb2NrcyA9IG5lc3RMaXN0cyhrZXllZEJsb2NrcywgcHJvcHMubGlzdE5lc3RNb2RlKTtcbiAgdmFyIHNlcmlhbGl6ZXJzID0gbWVyZ2VTZXJpYWxpemVycyhkZWZhdWx0U2VyaWFsaXplcnMsIHByb3BzLnNlcmlhbGl6ZXJzIHx8IHt9KTtcbiAgdmFyIG9wdGlvbnMgPSBvcHRpb25Qcm9wcy5yZWR1Y2UoZnVuY3Rpb24gKG9wdHMsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzW2tleV07XG5cbiAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgb3B0c1trZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdHM7XG4gIH0sIHt9KTtcblxuICBmdW5jdGlvbiBzZXJpYWxpemVOb2RlKG5vZGUsIGluZGV4LCBzaWJsaW5ncywgaXNJbmxpbmUpIHtcbiAgICBpZiAoaXNMaXN0KG5vZGUpKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplTGlzdChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNMaXN0SXRlbShub2RlKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUxpc3RJdGVtKG5vZGUsIGZpbmRMaXN0SXRlbUluZGV4KG5vZGUsIHNpYmxpbmdzKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzU3Bhbihub2RlKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVNwYW4obm9kZSwgc2VyaWFsaXplcnMsIGluZGV4LCB7XG4gICAgICAgIHNlcmlhbGl6ZU5vZGU6IHNlcmlhbGl6ZU5vZGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzZXJpYWxpemVCbG9jayhub2RlLCBpbmRleCwgaXNJbmxpbmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZExpc3RJdGVtSW5kZXgobm9kZSwgc2libGluZ3MpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWJsaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNpYmxpbmdzW2ldID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0xpc3RJdGVtKHNpYmxpbmdzW2ldKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBzZXJpYWxpemVCbG9jayhibG9jaywgaW5kZXgsIGlzSW5saW5lKSB7XG4gICAgdmFyIHRyZWUgPSBidWlsZE1hcmtzVHJlZShibG9jayk7XG4gICAgdmFyIGNoaWxkcmVuID0gdHJlZS5tYXAoZnVuY3Rpb24gKG5vZGUsIGksIHNpYmxpbmdzKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplTm9kZShub2RlLCBpLCBzaWJsaW5ncywgdHJ1ZSk7XG4gICAgfSk7XG4gICAgdmFyIGJsb2NrUHJvcHMgPSB7XG4gICAgICBrZXk6IGJsb2NrLl9rZXkgfHwgXCJibG9jay1cIi5jb25jYXQoaW5kZXgpLFxuICAgICAgbm9kZTogYmxvY2ssXG4gICAgICBpc0lubGluZTogaXNJbmxpbmUsXG4gICAgICBzZXJpYWxpemVyczogc2VyaWFsaXplcnMsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcbiAgICByZXR1cm4gaChzZXJpYWxpemVycy5ibG9jaywgYmxvY2tQcm9wcywgY2hpbGRyZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplTGlzdEl0ZW0oYmxvY2ssIGluZGV4KSB7XG4gICAgdmFyIGtleSA9IGJsb2NrLl9rZXk7XG4gICAgdmFyIHRyZWUgPSBidWlsZE1hcmtzVHJlZShibG9jayk7XG4gICAgdmFyIGNoaWxkcmVuID0gdHJlZS5tYXAoc2VyaWFsaXplTm9kZSk7XG4gICAgcmV0dXJuIGgoc2VyaWFsaXplcnMubGlzdEl0ZW0sIHtcbiAgICAgIG5vZGU6IGJsb2NrLFxuICAgICAgc2VyaWFsaXplcnM6IHNlcmlhbGl6ZXJzLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAga2V5OiBrZXksXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplTGlzdChsaXN0KSB7XG4gICAgdmFyIHR5cGUgPSBsaXN0Lmxpc3RJdGVtO1xuICAgIHZhciBsZXZlbCA9IGxpc3QubGV2ZWw7XG4gICAgdmFyIGtleSA9IGxpc3QuX2tleTtcbiAgICB2YXIgY2hpbGRyZW4gPSBsaXN0LmNoaWxkcmVuLm1hcChzZXJpYWxpemVOb2RlKTtcbiAgICByZXR1cm4gaChzZXJpYWxpemVycy5saXN0LCB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9IC8vIERlZmF1bHQgdG8gZmFsc2UsIHNvIGB1bmRlZmluZWRgIHdpbGwgZXZhbHVhdGUgdG8gdGhlIGRlZmF1bHQgaGVyZVxuXG5cbiAgdmFyIHJlbmRlckNvbnRhaW5lck9uU2luZ2xlQ2hpbGQgPSBCb29sZWFuKHByb3BzLnJlbmRlckNvbnRhaW5lck9uU2luZ2xlQ2hpbGQpO1xuICB2YXIgbm9kZXMgPSBibG9ja3MubWFwKHNlcmlhbGl6ZU5vZGUpO1xuXG4gIGlmIChyZW5kZXJDb250YWluZXJPblNpbmdsZUNoaWxkIHx8IG5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY29udGFpbmVyUHJvcHMgPSBwcm9wcy5jbGFzc05hbWUgPyB7XG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZVxuICAgIH0gOiB7fTtcbiAgICByZXR1cm4gaChzZXJpYWxpemVycy5jb250YWluZXIsIGNvbnRhaW5lclByb3BzLCBub2Rlcyk7XG4gIH1cblxuICBpZiAobm9kZXNbMF0pIHtcbiAgICByZXR1cm4gbm9kZXNbMF07XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIHNlcmlhbGl6ZXJzLmVtcHR5ID09PSAnZnVuY3Rpb24nID8gaChzZXJpYWxpemVycy5lbXB0eSkgOiBzZXJpYWxpemVycy5lbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNMaXN0KGJsb2NrKSB7XG4gIHJldHVybiBibG9jay5fdHlwZSA9PT0gJ2xpc3QnICYmIGJsb2NrLmxpc3RJdGVtO1xufVxuXG5mdW5jdGlvbiBpc0xpc3RJdGVtKGJsb2NrKSB7XG4gIHJldHVybiBibG9jay5fdHlwZSA9PT0gJ2Jsb2NrJyAmJiBibG9jay5saXN0SXRlbTtcbn1cblxuZnVuY3Rpb24gaXNTcGFuKGJsb2NrKSB7XG4gIHJldHVybiB0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnIHx8IGJsb2NrLm1hcmtzIHx8IGJsb2NrLl90eXBlID09PSAnc3Bhbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2tzVG9Ob2Rlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2Nrc1RvTm9kZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZWZhdWx0TWFya3MgPSBbJ3N0cm9uZycsICdlbScsICdjb2RlJywgJ3VuZGVybGluZScsICdzdHJpa2UtdGhyb3VnaCddO1xuXG52YXIgYnVpbGRNYXJrc1RyZWUgPSBmdW5jdGlvbiBidWlsZE1hcmtzVHJlZShibG9jaykge1xuICB2YXIgY2hpbGRyZW4gPSBibG9jay5jaGlsZHJlbixcbiAgICAgIG1hcmtEZWZzID0gYmxvY2subWFya0RlZnM7XG5cbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHNvcnRlZE1hcmtzID0gY2hpbGRyZW4ubWFwKHNvcnRNYXJrc0J5T2NjdXJlbmNlcyk7XG4gIHZhciByb290Tm9kZSA9IHtcbiAgICBfdHlwZTogJ3NwYW4nLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9O1xuICB2YXIgbm9kZVN0YWNrID0gW3Jvb3ROb2RlXTtcbiAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoc3BhbiwgaSkge1xuICAgIHZhciBtYXJrc05lZWRlZCA9IHNvcnRlZE1hcmtzW2ldO1xuXG4gICAgaWYgKCFtYXJrc05lZWRlZCkge1xuICAgICAgdmFyIGxhc3ROb2RlID0gbm9kZVN0YWNrW25vZGVTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIGxhc3ROb2RlLmNoaWxkcmVuLnB1c2goc3Bhbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IDE7IC8vIFN0YXJ0IGF0IHBvc2l0aW9uIG9uZS4gUm9vdCBpcyBhbHdheXMgcGxhaW4gYW5kIHNob3VsZCBuZXZlciBiZSByZW1vdmVkLiAoPylcblxuICAgIGlmIChub2RlU3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgZm9yIChwb3M7IHBvcyA8IG5vZGVTdGFjay5sZW5ndGg7IHBvcysrKSB7XG4gICAgICAgIHZhciBtYXJrID0gbm9kZVN0YWNrW3Bvc10ubWFya0tleTtcbiAgICAgICAgdmFyIGluZGV4ID0gbWFya3NOZWVkZWQuaW5kZXhPZihtYXJrKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmtzTmVlZGVkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSAvLyBLZWVwIGZyb20gYmVnaW5uaW5nIHRvIGZpcnN0IG1pc3NcblxuXG4gICAgbm9kZVN0YWNrID0gbm9kZVN0YWNrLnNsaWNlKDAsIHBvcyk7IC8vIEFkZCBuZWVkZWQgbm9kZXNcblxuICAgIHZhciBjdXJyZW50Tm9kZSA9IGZpbmRMYXN0UGFyZW50Tm9kZShub2RlU3RhY2spO1xuICAgIG1hcmtzTmVlZGVkLmZvckVhY2goZnVuY3Rpb24gKG1hcmspIHtcbiAgICAgIHZhciBub2RlID0ge1xuICAgICAgICBfdHlwZTogJ3NwYW4nLFxuICAgICAgICBfa2V5OiBzcGFuLl9rZXksXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgbWFyazogbWFya0RlZnMuZmluZChmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZi5fa2V5ID09PSBtYXJrO1xuICAgICAgICB9KSB8fCBtYXJrLFxuICAgICAgICBtYXJrS2V5OiBtYXJrXG4gICAgICB9O1xuICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgIG5vZGVTdGFjay5wdXNoKG5vZGUpO1xuICAgICAgY3VycmVudE5vZGUgPSBub2RlO1xuICAgIH0pOyAvLyBTcGxpdCBhdCBuZXdsaW5lcyB0byBtYWtlIGluZGl2aWR1YWwgbGluZSBjaHVua3MsIGJ1dCBrZWVwIG5ld2xpbmVcbiAgICAvLyBjaGFyYWN0ZXJzIGFzIGluZGl2aWR1YWwgZWxlbWVudHMgaW4gdGhlIGFycmF5LiBXZSB1c2UgdGhlc2UgY2hhcmFjdGVyc1xuICAgIC8vIGluIHRoZSBzcGFuIHNlcmlhbGl6ZXIgdG8gdHJpZ2dlciBoYXJkLWJyZWFrIHJlbmRlcmluZ1xuXG4gICAgaWYgKGlzVGV4dFNwYW4oc3BhbikpIHtcbiAgICAgIHZhciBsaW5lcyA9IHNwYW4udGV4dC5zcGxpdCgnXFxuJyk7XG5cbiAgICAgIGZvciAodmFyIGxpbmUgPSBsaW5lcy5sZW5ndGg7IGxpbmUtLSA+IDE7KSB7XG4gICAgICAgIGxpbmVzLnNwbGljZShsaW5lLCAwLCAnXFxuJyk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuID0gY3VycmVudE5vZGUuY2hpbGRyZW4uY29uY2F0KGxpbmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4gPSBjdXJyZW50Tm9kZS5jaGlsZHJlbi5jb25jYXQoc3Bhbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJvb3ROb2RlLmNoaWxkcmVuO1xufTsgLy8gV2Ugd2FudCB0byBzb3J0IGFsbCB0aGUgbWFya3Mgb2YgYWxsIHRoZSBzcGFucyBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuLy8gMS4gTWFya3MgdGhhdCBhcmUgc2hhcmVkIGFtb25nc3QgdGhlIG1vc3QgYWRqYWNlbnQgc2libGluZ3Ncbi8vIDIuIE5vbi1kZWZhdWx0IG1hcmtzIChsaW5rcywgY3VzdG9tIG1ldGFkYXRhKVxuLy8gMy4gQnVpbHQtaW4sIHBsYWluIG1hcmtzIChib2xkLCBlbXBoYXNpcywgY29kZSBldGMpXG5cblxuZnVuY3Rpb24gc29ydE1hcmtzQnlPY2N1cmVuY2VzKHNwYW4sIGksIHNwYW5zKSB7XG4gIGlmICghc3Bhbi5tYXJrcyB8fCBzcGFuLm1hcmtzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBzcGFuLm1hcmtzIHx8IFtdO1xuICB9XG5cbiAgdmFyIG1hcmtPY2N1cmVuY2VzID0gc3Bhbi5tYXJrcy5yZWR1Y2UoZnVuY3Rpb24gKG9jY3VyZW5jZXMsIG1hcmspIHtcbiAgICBvY2N1cmVuY2VzW21hcmtdID0gb2NjdXJlbmNlc1ttYXJrXSA/IG9jY3VyZW5jZXNbbWFya10gKyAxIDogMTtcblxuICAgIGZvciAodmFyIHNpYmxpbmdJbmRleCA9IGkgKyAxOyBzaWJsaW5nSW5kZXggPCBzcGFucy5sZW5ndGg7IHNpYmxpbmdJbmRleCsrKSB7XG4gICAgICB2YXIgc2libGluZyA9IHNwYW5zW3NpYmxpbmdJbmRleF07XG5cbiAgICAgIGlmIChzaWJsaW5nLm1hcmtzICYmIEFycmF5LmlzQXJyYXkoc2libGluZy5tYXJrcykgJiYgc2libGluZy5tYXJrcy5pbmRleE9mKG1hcmspICE9PSAtMSkge1xuICAgICAgICBvY2N1cmVuY2VzW21hcmtdKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2NjdXJlbmNlcztcbiAgfSwge30pO1xuICB2YXIgc29ydEJ5T2NjdXJlbmNlID0gc29ydE1hcmtzLmJpbmQobnVsbCwgbWFya09jY3VyZW5jZXMpOyAvLyBTbGljaW5nIGJlY2F1c2Ugc29ydCgpIG11dGF0ZXMgdGhlIGlucHV0XG5cbiAgcmV0dXJuIHNwYW4ubWFya3Muc2xpY2UoKS5zb3J0KHNvcnRCeU9jY3VyZW5jZSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRNYXJrcyhvY2N1cmVuY2VzLCBtYXJrQSwgbWFya0IpIHtcbiAgdmFyIGFPY2N1cmVuY2VzID0gb2NjdXJlbmNlc1ttYXJrQV0gfHwgMDtcbiAgdmFyIGJPY2N1cmVuY2VzID0gb2NjdXJlbmNlc1ttYXJrQl0gfHwgMDtcblxuICBpZiAoYU9jY3VyZW5jZXMgIT09IGJPY2N1cmVuY2VzKSB7XG4gICAgcmV0dXJuIGJPY2N1cmVuY2VzIC0gYU9jY3VyZW5jZXM7XG4gIH1cblxuICB2YXIgYURlZmF1bHRQb3MgPSBkZWZhdWx0TWFya3MuaW5kZXhPZihtYXJrQSk7XG4gIHZhciBiRGVmYXVsdFBvcyA9IGRlZmF1bHRNYXJrcy5pbmRleE9mKG1hcmtCKTsgLy8gU29ydCBkZWZhdWx0IG1hcmtzIGxhc3RcblxuICBpZiAoYURlZmF1bHRQb3MgIT09IGJEZWZhdWx0UG9zKSB7XG4gICAgcmV0dXJuIGFEZWZhdWx0UG9zIC0gYkRlZmF1bHRQb3M7XG4gIH0gLy8gU29ydCBvdGhlciBtYXJrcyBzaW1wbHkgYnkga2V5XG5cblxuICBpZiAobWFya0EgPCBtYXJrQikge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChtYXJrQSA+IG1hcmtCKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gaXNUZXh0U3Bhbihub2RlKSB7XG4gIHJldHVybiBub2RlLl90eXBlID09PSAnc3BhbicgJiYgdHlwZW9mIG5vZGUudGV4dCA9PT0gJ3N0cmluZycgJiYgKEFycmF5LmlzQXJyYXkobm9kZS5tYXJrcykgfHwgdHlwZW9mIG5vZGUubWFya3MgPT09ICd1bmRlZmluZWQnKTtcbn1cblxuZnVuY3Rpb24gZmluZExhc3RQYXJlbnROb2RlKG5vZGVzKSB7XG4gIGZvciAodmFyIGkgPSBub2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBub2RlID0gbm9kZXNbaV07XG5cbiAgICBpZiAobm9kZS5fdHlwZSA9PT0gJ3NwYW4nICYmIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGRNYXJrc1RyZWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWlsZE1hcmtzVHJlZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYmxvY2tzKSB7XG4gIHJldHVybiBibG9ja3MubWFwKGZ1bmN0aW9uIChibG9jaykge1xuICAgIGlmIChibG9jay5fa2V5KSB7XG4gICAgICByZXR1cm4gYmxvY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdEFzc2lnbih7XG4gICAgICBfa2V5OiBnZXRTdGF0aWNLZXkoYmxvY2spXG4gICAgfSwgYmxvY2spO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0YXRpY0tleShpdGVtKSB7XG4gIHJldHVybiBjaGVja3N1bShKU09OLnN0cmluZ2lmeShpdGVtKSkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teQS1aYS16MC05XS9nLCAnJyk7XG59XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5cblxuZnVuY3Rpb24gY2hlY2tzdW0oc3RyKSB7XG4gIHZhciBoYXNoID0gMDtcbiAgdmFyIHN0cmxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgaWYgKHN0cmxlbiA9PT0gMCkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJsZW47IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoICY9IGhhc2g7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGhhc2g7XG59XG4vKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdlbmVyYXRlS2V5cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGdlbmVyYXRlSGVscFVybCA9IHJlcXVpcmUoJ0BzYW5pdHkvZ2VuZXJhdGUtaGVscC11cmwnKTtcblxudmFyIHVybEJ1aWxkZXIgPSByZXF1aXJlKCdAc2FuaXR5L2ltYWdlLXVybCcpO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50O1xudmFyIG1hdGVyaWFsaXplRXJyb3IgPSBcIllvdSBtdXN0IGVpdGhlcjpcXG4gIC0gUGFzcyBgcHJvamVjdElkYCBhbmQgYGRhdGFzZXRgIHRvIHRoZSBibG9jayByZW5kZXJlclxcbiAgLSBNYXRlcmlhbGl6ZSBpbWFnZXMgdG8gaW5jbHVkZSB0aGUgYHVybGAgZmllbGQuXFxuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBcIi5jb25jYXQoZ2VuZXJhdGVIZWxwVXJsKCdibG9jay1jb250ZW50LWltYWdlLW1hdGVyaWFsaXppbmcnKSk7XG5cbnZhciBnZXRRdWVyeVN0cmluZyA9IGZ1bmN0aW9uIGdldFF1ZXJ5U3RyaW5nKG9wdGlvbnMpIHtcbiAgdmFyIHF1ZXJ5ID0gb3B0aW9ucy5pbWFnZU9wdGlvbnM7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuXG4gIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgcGFyYW1zID0ga2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChlbmMoa2V5KSwgXCI9XCIpLmNvbmNhdChlbmMocXVlcnlba2V5XSkpO1xuICB9KTtcbiAgcmV0dXJuIFwiP1wiLmNvbmNhdChwYXJhbXMuam9pbignJicpKTtcbn07XG5cbnZhciBidWlsZFVybCA9IGZ1bmN0aW9uIGJ1aWxkVXJsKHByb3BzKSB7XG4gIHZhciBub2RlID0gcHJvcHMubm9kZSxcbiAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuICB2YXIgcHJvamVjdElkID0gb3B0aW9ucy5wcm9qZWN0SWQsXG4gICAgICBkYXRhc2V0ID0gb3B0aW9ucy5kYXRhc2V0O1xuICB2YXIgYXNzZXQgPSBub2RlLmFzc2V0O1xuXG4gIGlmICghYXNzZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltYWdlIGRvZXMgbm90IGhhdmUgcmVxdWlyZWQgYGFzc2V0YCBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKGFzc2V0LnVybCkge1xuICAgIHJldHVybiBhc3NldC51cmwgKyBnZXRRdWVyeVN0cmluZyhvcHRpb25zKTtcbiAgfVxuXG4gIGlmICghcHJvamVjdElkIHx8ICFkYXRhc2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1hdGVyaWFsaXplRXJyb3IpO1xuICB9XG5cbiAgdmFyIHJlZiA9IGFzc2V0Ll9yZWY7XG5cbiAgaWYgKCFyZWYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaW1hZ2UgcmVmZXJlbmNlIGluIGJsb2NrLCBubyBgX3JlZmAgZm91bmQgb24gYGFzc2V0YCcpO1xuICB9XG5cbiAgcmV0dXJuIHVybEJ1aWxkZXIob2JqZWN0QXNzaWduKHtcbiAgICBwcm9qZWN0SWQ6IHByb2plY3RJZCxcbiAgICBkYXRhc2V0OiBkYXRhc2V0XG4gIH0sIG9wdGlvbnMuaW1hZ2VPcHRpb25zIHx8IHt9KSkuaW1hZ2Uobm9kZSkudG9TdHJpbmcoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGRVcmw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXRJbWFnZVVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGdldFNlcmlhbGl6ZXJzID0gcmVxdWlyZSgnLi9zZXJpYWxpemVycycpO1xuXG52YXIgX2Jsb2Nrc1RvTm9kZXMgPSByZXF1aXJlKCcuL2Jsb2Nrc1RvTm9kZXMnKTtcblxudmFyIGdldEltYWdlVXJsID0gcmVxdWlyZSgnLi9nZXRJbWFnZVVybCcpO1xuXG52YXIgbWVyZ2VTZXJpYWxpemVycyA9IHJlcXVpcmUoJy4vbWVyZ2VTZXJpYWxpemVycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYmxvY2tzVG9Ob2RlczogZnVuY3Rpb24gYmxvY2tzVG9Ob2RlcyhyZW5kZXJOb2RlLCBwcm9wcywgZGVmYXVsdFNlcmlhbGl6ZXJzLCBzZXJpYWxpemVTcGFuKSB7XG4gICAgaWYgKGRlZmF1bHRTZXJpYWxpemVycykge1xuICAgICAgcmV0dXJuIF9ibG9ja3NUb05vZGVzKHJlbmRlck5vZGUsIHByb3BzLCBkZWZhdWx0U2VyaWFsaXplcnMsIHNlcmlhbGl6ZVNwYW4pO1xuICAgIH0gLy8gQmFja3dhcmRzLWNvbXBhdGliaWxpdHlcblxuXG4gICAgdmFyIHNlcmlhbGl6ZXJzID0gZ2V0U2VyaWFsaXplcnMocmVuZGVyTm9kZSk7XG4gICAgcmV0dXJuIF9ibG9ja3NUb05vZGVzKHJlbmRlck5vZGUsIHByb3BzLCBzZXJpYWxpemVycy5kZWZhdWx0U2VyaWFsaXplcnMsIHNlcmlhbGl6ZXJzLnNlcmlhbGl6ZVNwYW4pO1xuICB9LFxuICBnZXRTZXJpYWxpemVyczogZ2V0U2VyaWFsaXplcnMsXG4gIGdldEltYWdlVXJsOiBnZXRJbWFnZVVybCxcbiAgbWVyZ2VTZXJpYWxpemVyczogbWVyZ2VTZXJpYWxpemVyc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVybmFscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIGlzRGVmaW5lZCA9IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnO1xufTsgLy8gUmVjdXJzaXZlbHkgbWVyZ2UvcmVwbGFjZSBkZWZhdWx0IHNlcmlhbGl6ZXJzIHdpdGggdXNlci1zcGVjaWZpZWQgc2VyaWFsaXplcnNcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlU2VyaWFsaXplcnMoZGVmYXVsdFNlcmlhbGl6ZXJzLCB1c2VyU2VyaWFsaXplcnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZmF1bHRTZXJpYWxpemVycykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIHZhciB0eXBlID0gX3R5cGVvZihkZWZhdWx0U2VyaWFsaXplcnNba2V5XSk7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWNjW2tleV0gPSBpc0RlZmluZWQodXNlclNlcmlhbGl6ZXJzW2tleV0pID8gdXNlclNlcmlhbGl6ZXJzW2tleV0gOiBkZWZhdWx0U2VyaWFsaXplcnNba2V5XTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBhY2Nba2V5XSA9IG9iamVjdEFzc2lnbih7fSwgZGVmYXVsdFNlcmlhbGl6ZXJzW2tleV0sIHVzZXJTZXJpYWxpemVyc1trZXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjW2tleV0gPSB0eXBlb2YgdXNlclNlcmlhbGl6ZXJzW2tleV0gPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFNlcmlhbGl6ZXJzW2tleV0gOiB1c2VyU2VyaWFsaXplcnNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VTZXJpYWxpemVycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbi8qIGVzbGludC1kaXNhYmxlIG1heC1kZXB0aCwgY29tcGxleGl0eSAqL1xuXG5cbmZ1bmN0aW9uIG5lc3RMaXN0cyhibG9ja3MpIHtcbiAgdmFyIG1vZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdodG1sJztcbiAgdmFyIHRyZWUgPSBbXTtcbiAgdmFyIGN1cnJlbnRMaXN0O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuXG4gICAgaWYgKCFpc0xpc3RCbG9jayhibG9jaykpIHtcbiAgICAgIHRyZWUucHVzaChibG9jayk7XG4gICAgICBjdXJyZW50TGlzdCA9IG51bGw7XG4gICAgICBjb250aW51ZTtcbiAgICB9IC8vIFN0YXJ0IG9mIGEgbmV3IGxpc3Q/XG5cblxuICAgIGlmICghY3VycmVudExpc3QpIHtcbiAgICAgIGN1cnJlbnRMaXN0ID0gbGlzdEZyb21CbG9jayhibG9jayk7XG4gICAgICB0cmVlLnB1c2goY3VycmVudExpc3QpO1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBOZXcgbGlzdCBpdGVtIHdpdGhpbiBzYW1lIGxpc3Q/XG5cblxuICAgIGlmIChibG9ja01hdGNoZXNMaXN0KGJsb2NrLCBjdXJyZW50TGlzdCkpIHtcbiAgICAgIGN1cnJlbnRMaXN0LmNoaWxkcmVuLnB1c2goYmxvY2spO1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBEaWZmZXJlbnQgbGlzdCBwcm9wcywgYXJlIHdlIGdvaW5nIGRlZXBlcj9cblxuXG4gICAgaWYgKGJsb2NrLmxldmVsID4gY3VycmVudExpc3QubGV2ZWwpIHtcbiAgICAgIHZhciBuZXdMaXN0ID0gbGlzdEZyb21CbG9jayhibG9jayk7XG5cbiAgICAgIGlmIChtb2RlID09PSAnaHRtbCcpIHtcbiAgICAgICAgLy8gQmVjYXVzZSBIVE1MIGlzIGtpbmRhIHdlaXJkLCBuZXN0ZWQgbGlzdHMgbmVlZHMgdG8gYmUgbmVzdGVkIHdpdGhpbiBsaXN0IGl0ZW1zXG4gICAgICAgIC8vIFNvIHdoaWxlIHlvdSB3b3VsZCB0aGluayB0aGF0IHdlIGNvdWxkIHBvcHVsYXRlIHRoZSBwYXJlbnQgbGlzdCB3aXRoIGEgbmV3IHN1Yi1saXN0LFxuICAgICAgICAvLyBXZSBhY3R1YWxseSBoYXZlIHRvIHRhcmdldCB0aGUgbGFzdCBsaXN0IGVsZW1lbnQgKGNoaWxkKSBvZiB0aGUgcGFyZW50LlxuICAgICAgICAvLyBIb3dldmVyLCBhdCB0aGlzIHBvaW50IHdlIG5lZWQgdG8gYmUgdmVyeSBjYXJlZnVsIC0gc2ltcGx5IHB1c2hpbmcgdG8gdGhlIGxpc3Qgb2YgY2hpbGRyZW5cbiAgICAgICAgLy8gd2lsbCBtdXRhdGUgdGhlIGlucHV0LCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBibGluZGx5IGNsb25lIHRoZSBlbnRpcmUgdHJlZS5cbiAgICAgICAgLy8gQ2xvbmUgdGhlIGxhc3QgY2hpbGQgd2hpbGUgYWRkaW5nIG91ciBuZXcgbGlzdCBhcyB0aGUgbGFzdCBjaGlsZCBvZiBpdFxuICAgICAgICB2YXIgbGFzdExpc3RJdGVtID0gbGFzdENoaWxkKGN1cnJlbnRMaXN0KTtcbiAgICAgICAgdmFyIG5ld0xhc3RDaGlsZCA9IG9iamVjdEFzc2lnbih7fSwgbGFzdExpc3RJdGVtLCB7XG4gICAgICAgICAgY2hpbGRyZW46IGxhc3RMaXN0SXRlbS5jaGlsZHJlbi5jb25jYXQobmV3TGlzdClcbiAgICAgICAgfSk7IC8vIFN3YXAgdGhlIGxhc3QgY2hpbGRcblxuICAgICAgICBjdXJyZW50TGlzdC5jaGlsZHJlbltjdXJyZW50TGlzdC5jaGlsZHJlbi5sZW5ndGggLSAxXSA9IG5ld0xhc3RDaGlsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRMaXN0LmNoaWxkcmVuLnB1c2gobmV3TGlzdCk7XG4gICAgICB9IC8vIFNldCB0aGUgbmV3bHkgY3JlYXRlZCwgZGVlcGVyIGxpc3QgYXMgdGhlIGN1cnJlbnRcblxuXG4gICAgICBjdXJyZW50TGlzdCA9IG5ld0xpc3Q7XG4gICAgICBjb250aW51ZTtcbiAgICB9IC8vIERpZmZlcmVudCBsaXN0IHByb3BzLCBhcmUgd2UgZ29pbmcgYmFjayB1cCB0aGUgdHJlZT9cblxuXG4gICAgaWYgKGJsb2NrLmxldmVsIDwgY3VycmVudExpc3QubGV2ZWwpIHtcbiAgICAgIC8vIEN1cnJlbnQgbGlzdCBoYXMgZW5kZWQsIGFuZCB3ZSBuZWVkIHRvIGhvb2sgdXAgd2l0aCBhIHBhcmVudCBvZiB0aGUgc2FtZSBsZXZlbCBhbmQgdHlwZVxuICAgICAgdmFyIG1hdGNoID0gZmluZExpc3RNYXRjaGluZyh0cmVlW3RyZWUubGVuZ3RoIC0gMV0sIGJsb2NrKTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGN1cnJlbnRMaXN0ID0gbWF0Y2g7XG4gICAgICAgIGN1cnJlbnRMaXN0LmNoaWxkcmVuLnB1c2goYmxvY2spO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gU2ltaWxhciBwYXJlbnQgY2FuJ3QgYmUgZm91bmQsIGFzc3VtZSBuZXcgbGlzdFxuXG5cbiAgICAgIGN1cnJlbnRMaXN0ID0gbGlzdEZyb21CbG9jayhibG9jayk7XG4gICAgICB0cmVlLnB1c2goY3VycmVudExpc3QpO1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBEaWZmZXJlbnQgbGlzdCBwcm9wcywgZGlmZmVyZW50IGxpc3Qgc3R5bGU/XG5cblxuICAgIGlmIChibG9jay5saXN0SXRlbSAhPT0gY3VycmVudExpc3QubGlzdEl0ZW0pIHtcbiAgICAgIHZhciBfbWF0Y2ggPSBmaW5kTGlzdE1hdGNoaW5nKHRyZWVbdHJlZS5sZW5ndGggLSAxXSwge1xuICAgICAgICBsZXZlbDogYmxvY2subGV2ZWxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX21hdGNoICYmIF9tYXRjaC5saXN0SXRlbSA9PT0gYmxvY2subGlzdEl0ZW0pIHtcbiAgICAgICAgY3VycmVudExpc3QgPSBfbWF0Y2g7XG4gICAgICAgIGN1cnJlbnRMaXN0LmNoaWxkcmVuLnB1c2goYmxvY2spO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRMaXN0ID0gbGlzdEZyb21CbG9jayhibG9jayk7XG4gICAgICAgIHRyZWUucHVzaChjdXJyZW50TGlzdCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuXG4gICAgY29uc29sZS53YXJuKCdVbmtub3duIHN0YXRlIGVuY291bnRlcmVkIGZvciBibG9jaycsIGJsb2NrKTtcbiAgICB0cmVlLnB1c2goYmxvY2spO1xuICB9XG5cbiAgcmV0dXJuIHRyZWU7XG59XG5cbmZ1bmN0aW9uIGlzTGlzdEJsb2NrKGJsb2NrKSB7XG4gIHJldHVybiBCb29sZWFuKGJsb2NrLmxpc3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gYmxvY2tNYXRjaGVzTGlzdChibG9jaywgbGlzdCkge1xuICByZXR1cm4gYmxvY2subGV2ZWwgPT09IGxpc3QubGV2ZWwgJiYgYmxvY2subGlzdEl0ZW0gPT09IGxpc3QubGlzdEl0ZW07XG59XG5cbmZ1bmN0aW9uIGxpc3RGcm9tQmxvY2soYmxvY2spIHtcbiAgcmV0dXJuIHtcbiAgICBfdHlwZTogJ2xpc3QnLFxuICAgIF9rZXk6IFwiXCIuY29uY2F0KGJsb2NrLl9rZXksIFwiLXBhcmVudFwiKSxcbiAgICBsZXZlbDogYmxvY2subGV2ZWwsXG4gICAgbGlzdEl0ZW06IGJsb2NrLmxpc3RJdGVtLFxuICAgIGNoaWxkcmVuOiBbYmxvY2tdXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxhc3RDaGlsZChibG9jaykge1xuICByZXR1cm4gYmxvY2suY2hpbGRyZW4gJiYgYmxvY2suY2hpbGRyZW5bYmxvY2suY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG59XG5cbmZ1bmN0aW9uIGZpbmRMaXN0TWF0Y2hpbmcocm9vdE5vZGUsIG1hdGNoaW5nKSB7XG4gIHZhciBmaWx0ZXJPblR5cGUgPSB0eXBlb2YgbWF0Y2hpbmcubGlzdEl0ZW0gPT09ICdzdHJpbmcnO1xuXG4gIGlmIChyb290Tm9kZS5fdHlwZSA9PT0gJ2xpc3QnICYmIHJvb3ROb2RlLmxldmVsID09PSBtYXRjaGluZy5sZXZlbCAmJiBmaWx0ZXJPblR5cGUgJiYgcm9vdE5vZGUubGlzdEl0ZW0gPT09IG1hdGNoaW5nLmxpc3RJdGVtKSB7XG4gICAgcmV0dXJuIHJvb3ROb2RlO1xuICB9XG5cbiAgdmFyIG5vZGUgPSBsYXN0Q2hpbGQocm9vdE5vZGUpO1xuXG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmaW5kTGlzdE1hdGNoaW5nKG5vZGUsIG1hdGNoaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXN0TGlzdHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXN0TGlzdHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBnZXRJbWFnZVVybCA9IHJlcXVpcmUoJy4vZ2V0SW1hZ2VVcmwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaCwgc2VyaWFsaXplck9wdHMpIHtcbiAgdmFyIHNlcmlhbGl6ZU9wdGlvbnMgPSBzZXJpYWxpemVyT3B0cyB8fCB7XG4gICAgdXNlRGFzaGVkU3R5bGVzOiBmYWxzZSAvLyBMb3ctbGV2ZWwgYmxvY2sgc2VyaWFsaXplclxuXG4gIH07XG5cbiAgZnVuY3Rpb24gQmxvY2tTZXJpYWxpemVyKHByb3BzKSB7XG4gICAgdmFyIG5vZGUgPSBwcm9wcy5ub2RlLFxuICAgICAgICBzZXJpYWxpemVycyA9IHByb3BzLnNlcmlhbGl6ZXJzLFxuICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgICAgaXNJbmxpbmUgPSBwcm9wcy5pc0lubGluZSxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgYmxvY2tUeXBlID0gbm9kZS5fdHlwZTtcbiAgICB2YXIgc2VyaWFsaXplciA9IHNlcmlhbGl6ZXJzLnR5cGVzW2Jsb2NrVHlwZV07XG5cbiAgICBpZiAoIXNlcmlhbGl6ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gYmxvY2sgdHlwZSBcXFwiXCIuY29uY2F0KGJsb2NrVHlwZSwgXCJcXFwiLCBwbGVhc2Ugc3BlY2lmeSBhIHNlcmlhbGl6ZXIgZm9yIGl0IGluIHRoZSBgc2VyaWFsaXplcnMudHlwZXNgIHByb3BcIikpO1xuICAgIH1cblxuICAgIHJldHVybiBoKHNlcmlhbGl6ZXIsIHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgaXNJbmxpbmU6IGlzSW5saW5lXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9IC8vIExvdy1sZXZlbCBzcGFuIHNlcmlhbGl6ZXJcblxuXG4gIGZ1bmN0aW9uIFNwYW5TZXJpYWxpemVyKHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRub2RlID0gcHJvcHMubm9kZSxcbiAgICAgICAgbWFyayA9IF9wcm9wcyRub2RlLm1hcmssXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzJG5vZGUuY2hpbGRyZW47XG4gICAgdmFyIGlzUGxhaW4gPSB0eXBlb2YgbWFyayA9PT0gJ3N0cmluZyc7XG4gICAgdmFyIG1hcmtUeXBlID0gaXNQbGFpbiA/IG1hcmsgOiBtYXJrLl90eXBlO1xuICAgIHZhciBzZXJpYWxpemVyID0gcHJvcHMuc2VyaWFsaXplcnMubWFya3NbbWFya1R5cGVdO1xuXG4gICAgaWYgKCFzZXJpYWxpemVyKSB7XG4gICAgICAvLyBAdG9kbyBSZXZlcnQgYmFjayB0byB0aHJvd2luZyBlcnJvcnM/XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiVW5rbm93biBtYXJrIHR5cGUgXFxcIlwiLmNvbmNhdChtYXJrVHlwZSwgXCJcXFwiLCBwbGVhc2Ugc3BlY2lmeSBhIHNlcmlhbGl6ZXIgZm9yIGl0IGluIHRoZSBgc2VyaWFsaXplcnMubWFya3NgIHByb3BcIikpO1xuICAgICAgcmV0dXJuIGgocHJvcHMuc2VyaWFsaXplcnMubWFya0ZhbGxiYWNrLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGgoc2VyaWFsaXplciwgcHJvcHMubm9kZSwgY2hpbGRyZW4pO1xuICB9IC8vIExvdy1sZXZlbCBsaXN0IHNlcmlhbGl6ZXJcblxuXG4gIGZ1bmN0aW9uIExpc3RTZXJpYWxpemVyKHByb3BzKSB7XG4gICAgdmFyIHRhZyA9IHByb3BzLnR5cGUgPT09ICdidWxsZXQnID8gJ3VsJyA6ICdvbCc7XG4gICAgcmV0dXJuIGgodGFnLCBudWxsLCBwcm9wcy5jaGlsZHJlbik7XG4gIH0gLy8gTG93LWxldmVsIGxpc3QgaXRlbSBzZXJpYWxpemVyXG5cblxuICBmdW5jdGlvbiBMaXN0SXRlbVNlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSAhcHJvcHMubm9kZS5zdHlsZSB8fCBwcm9wcy5ub2RlLnN0eWxlID09PSAnbm9ybWFsJyA/IC8vIERvbid0IHdyYXAgcGxhaW4gdGV4dCBpbiBwYXJhZ3JhcGhzIGluc2lkZSBvZiBhIGxpc3QgaXRlbVxuICAgIHByb3BzLmNoaWxkcmVuIDogLy8gQnV0IHdyYXAgYW55IG90aGVyIHN0eWxlIGluIHdoYXRldmVyIHRoZSBibG9jayBzZXJpYWxpemVyIHNheXMgdG8gdXNlXG4gICAgaChwcm9wcy5zZXJpYWxpemVycy50eXBlcy5ibG9jaywgcHJvcHMsIHByb3BzLmNoaWxkcmVuKTtcbiAgICByZXR1cm4gaCgnbGknLCBudWxsLCBjaGlsZHJlbik7XG4gIH0gLy8gUmVuZGVyZXIgb2YgYW4gYWN0dWFsIGJsb2NrIG9mIHR5cGUgYGJsb2NrYC4gQ29uZnVzaW5nLCB3ZSBrbm93LlxuXG5cbiAgZnVuY3Rpb24gQmxvY2tUeXBlU2VyaWFsaXplcihwcm9wcykge1xuICAgIHZhciBzdHlsZSA9IHByb3BzLm5vZGUuc3R5bGUgfHwgJ25vcm1hbCc7XG5cbiAgICBpZiAoL15oXFxkLy50ZXN0KHN0eWxlKSkge1xuICAgICAgcmV0dXJuIGgoc3R5bGUsIG51bGwsIHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGUgPT09ICdibG9ja3F1b3RlJyA/IGgoJ2Jsb2NrcXVvdGUnLCBudWxsLCBwcm9wcy5jaGlsZHJlbikgOiBoKCdwJywgbnVsbCwgcHJvcHMuY2hpbGRyZW4pO1xuICB9IC8vIFNlcmlhbGl6ZXJzIGZvciB0aGluZ3MgdGhhdCBjYW4gYmUgZGlyZWN0bHkgYXR0cmlidXRlZCB0byBhIHRhZyB3aXRob3V0IGFueSBwcm9wc1xuICAvLyBXZSB1c2UgcGFydGlhbCBhcHBsaWNhdGlvbiB0byBkbyB0aGlzLCBwYXNzaW5nIHRoZSB0YWcgbmFtZSBhcyB0aGUgZmlyc3QgYXJndW1lbnRcblxuXG4gIGZ1bmN0aW9uIFJhd01hcmtTZXJpYWxpemVyKHRhZywgcHJvcHMpIHtcbiAgICByZXR1cm4gaCh0YWcsIG51bGwsIHByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFVuZGVybGluZVNlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICB2YXIgc3R5bGUgPSBzZXJpYWxpemVPcHRpb25zLnVzZURhc2hlZFN0eWxlcyA/IHtcbiAgICAgICd0ZXh0LWRlY29yYXRpb24nOiAndW5kZXJsaW5lJ1xuICAgIH0gOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcbiAgICB9O1xuICAgIHJldHVybiBoKCdzcGFuJywge1xuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSwgcHJvcHMuY2hpbGRyZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gU3RyaWtlVGhyb3VnaFNlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICByZXR1cm4gaCgnZGVsJywgbnVsbCwgcHJvcHMuY2hpbGRyZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gTGlua1NlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICByZXR1cm4gaCgnYScsIHtcbiAgICAgIGhyZWY6IHByb3BzLm1hcmsuaHJlZlxuICAgIH0sIHByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEltYWdlU2VyaWFsaXplcihwcm9wcykge1xuICAgIGlmICghcHJvcHMubm9kZS5hc3NldCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGltZyA9IGgoJ2ltZycsIHtcbiAgICAgIHNyYzogZ2V0SW1hZ2VVcmwocHJvcHMpXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb3BzLmlzSW5saW5lID8gaW1nIDogaCgnZmlndXJlJywgbnVsbCwgaW1nKTtcbiAgfSAvLyBTZXJpYWxpemVyIHRoYXQgcmVjdXJzaXZlbHkgY2FsbHMgaXRzZWxmLCBwcm9kdWNpbmcgYSBoeXBlcnNjcmlwdCB0cmVlIG9mIHNwYW5zXG5cblxuICBmdW5jdGlvbiBzZXJpYWxpemVTcGFuKHNwYW4sIHNlcmlhbGl6ZXJzLCBpbmRleCwgb3B0aW9ucykge1xuICAgIGlmIChzcGFuID09PSAnXFxuJyAmJiBzZXJpYWxpemVycy5oYXJkQnJlYWspIHtcbiAgICAgIHJldHVybiBoKHNlcmlhbGl6ZXJzLmhhcmRCcmVhaywge1xuICAgICAgICBrZXk6IFwiaGItXCIuY29uY2F0KGluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzcGFuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZXJzLnRleHQgPyBoKHNlcmlhbGl6ZXJzLnRleHQsIHtcbiAgICAgICAga2V5OiBcInRleHQtXCIuY29uY2F0KGluZGV4KVxuICAgICAgfSwgc3BhbikgOiBzcGFuO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbjtcblxuICAgIGlmIChzcGFuLmNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbiA9IHtcbiAgICAgICAgY2hpbGRyZW46IHNwYW4uY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLnNlcmlhbGl6ZU5vZGUoY2hpbGQsIGksIHNwYW4uY2hpbGRyZW4sIHRydWUpO1xuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZE5vZGUgPSBvYmplY3RBc3NpZ24oe30sIHNwYW4sIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gaChzZXJpYWxpemVycy5zcGFuLCB7XG4gICAgICBrZXk6IHNwYW4uX2tleSB8fCBcInNwYW4tXCIuY29uY2F0KGluZGV4KSxcbiAgICAgIG5vZGU6IHNlcmlhbGl6ZWROb2RlLFxuICAgICAgc2VyaWFsaXplcnM6IHNlcmlhbGl6ZXJzXG4gICAgfSk7XG4gIH1cblxuICB2YXIgSGFyZEJyZWFrU2VyaWFsaXplciA9IGZ1bmN0aW9uIEhhcmRCcmVha1NlcmlhbGl6ZXIoKSB7XG4gICAgcmV0dXJuIGgoJ2JyJyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRNYXJrU2VyaWFsaXplcnMgPSB7XG4gICAgc3Ryb25nOiBSYXdNYXJrU2VyaWFsaXplci5iaW5kKG51bGwsICdzdHJvbmcnKSxcbiAgICBlbTogUmF3TWFya1NlcmlhbGl6ZXIuYmluZChudWxsLCAnZW0nKSxcbiAgICBjb2RlOiBSYXdNYXJrU2VyaWFsaXplci5iaW5kKG51bGwsICdjb2RlJyksXG4gICAgdW5kZXJsaW5lOiBVbmRlcmxpbmVTZXJpYWxpemVyLFxuICAgICdzdHJpa2UtdGhyb3VnaCc6IFN0cmlrZVRocm91Z2hTZXJpYWxpemVyLFxuICAgIGxpbms6IExpbmtTZXJpYWxpemVyXG4gIH07XG4gIHZhciBkZWZhdWx0U2VyaWFsaXplcnMgPSB7XG4gICAgLy8gQ29tbW9uIG92ZXJyaWRlc1xuICAgIHR5cGVzOiB7XG4gICAgICBibG9jazogQmxvY2tUeXBlU2VyaWFsaXplcixcbiAgICAgIGltYWdlOiBJbWFnZVNlcmlhbGl6ZXJcbiAgICB9LFxuICAgIG1hcmtzOiBkZWZhdWx0TWFya1NlcmlhbGl6ZXJzLFxuICAgIC8vIExlc3MgY29tbW9uIG92ZXJyaWRlc1xuICAgIGxpc3Q6IExpc3RTZXJpYWxpemVyLFxuICAgIGxpc3RJdGVtOiBMaXN0SXRlbVNlcmlhbGl6ZXIsXG4gICAgYmxvY2s6IEJsb2NrU2VyaWFsaXplcixcbiAgICBzcGFuOiBTcGFuU2VyaWFsaXplcixcbiAgICBoYXJkQnJlYWs6IEhhcmRCcmVha1NlcmlhbGl6ZXIsXG4gICAgLy8gQ29udGFpbmVyIGVsZW1lbnRcbiAgICBjb250YWluZXI6ICdkaXYnLFxuICAgIC8vIFdoZW4gd2UgY2FuJ3QgcmVzb2x2ZSB0aGUgbWFyayBwcm9wZXJseSwgdXNlIHRoaXMgcmVuZGVyZXIgYXMgdGhlIGNvbnRhaW5lclxuICAgIG1hcmtGYWxsYmFjazogJ3NwYW4nLFxuICAgIC8vIEFsbG93IG92ZXJyaWRpbmcgdGV4dCByZW5kZXJlciwgYnV0IGxlYXZlIHVuZGVmaW5lZCB0byBqdXN0IHVzZSBwbGFpbiBzdHJpbmdzIGJ5IGRlZmF1bHRcbiAgICB0ZXh0OiB1bmRlZmluZWQsXG4gICAgLy8gRW1wdHkgbm9kZXMgKFJlYWN0IHVzZXMgbnVsbCwgaHlwZXJzY3JpcHQgd2l0aCBlbXB0eSBzdHJpbmdzKVxuICAgIGVtcHR5OiAnJ1xuICB9O1xuICByZXR1cm4ge1xuICAgIGRlZmF1bHRTZXJpYWxpemVyczogZGVmYXVsdFNlcmlhbGl6ZXJzLFxuICAgIHNlcmlhbGl6ZVNwYW46IHNlcmlhbGl6ZVNwYW5cbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXJpYWxpemVycy5qcy5tYXAiLCJ2YXIgYmFzZVVybCA9ICdodHRwczovL2RvY3Muc2FuaXR5LmlvL2hlbHAvJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdlbmVyYXRlSGVscFVybChzbHVnKSB7XG4gIHJldHVybiBiYXNlVXJsICsgc2x1Z1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcbnZhciBpbnRlcm5hbHMgPSByZXF1aXJlKCdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvaW50ZXJuYWxzJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vdGFyZ2V0cy9kb20nKSxcbiAgICBzZXJpYWxpemVycyA9IF9yZXF1aXJlLnNlcmlhbGl6ZXJzLFxuICAgIHNlcmlhbGl6ZVNwYW4gPSBfcmVxdWlyZS5zZXJpYWxpemVTcGFuLFxuICAgIHJlbmRlclByb3BzID0gX3JlcXVpcmUucmVuZGVyUHJvcHM7XG5cbnZhciBnZXRJbWFnZVVybCA9IGludGVybmFscy5nZXRJbWFnZVVybCxcbiAgICBibG9ja3NUb05vZGVzID0gaW50ZXJuYWxzLmJsb2Nrc1RvTm9kZXMsXG4gICAgbWVyZ2VTZXJpYWxpemVycyA9IGludGVybmFscy5tZXJnZVNlcmlhbGl6ZXJzO1xuXG52YXIgcmVuZGVyTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQ7XG5cbnZhciBTYW5pdHlCbG9ja0NvbnRlbnQgPSBmdW5jdGlvbiBTYW5pdHlCbG9ja0NvbnRlbnQocHJvcHMpIHtcbiAgdmFyIGN1c3RvbVNlcmlhbGl6ZXJzID0gbWVyZ2VTZXJpYWxpemVycyhTYW5pdHlCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLCBwcm9wcy5zZXJpYWxpemVycyk7XG5cbiAgdmFyIGJsb2NrUHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCByZW5kZXJQcm9wcywgcHJvcHMsIHtcbiAgICBzZXJpYWxpemVyczogY3VzdG9tU2VyaWFsaXplcnMsXG4gICAgYmxvY2tzOiBwcm9wcy5ibG9ja3MgfHwgW11cbiAgfSk7XG5cbiAgcmV0dXJuIGJsb2Nrc1RvTm9kZXMocmVuZGVyTm9kZSwgYmxvY2tQcm9wcywgc2VyaWFsaXplcnMsIHNlcmlhbGl6ZVNwYW4pO1xufTtcblxuLy8gRXhwb3NlIGRlZmF1bHQgc2VyaWFsaXplcnMgdG8gdGhlIHVzZXJcblNhbml0eUJsb2NrQ29udGVudC5kZWZhdWx0U2VyaWFsaXplcnMgPSBzZXJpYWxpemVycztcblxuLy8gRXhwb3NlIGxvZ2ljIGZvciBidWlsZGluZyBpbWFnZSBVUkxzIGZyb20gYW4gaW1hZ2UgcmVmZXJlbmNlL25vZGVcblNhbml0eUJsb2NrQ29udGVudC5nZXRJbWFnZVVybCA9IGdldEltYWdlVXJsO1xuXG5TYW5pdHlCbG9ja0NvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlbmRlckNvbnRhaW5lck9uU2luZ2xlQ2hpbGQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8vIFdoZW4gcmVuZGVyaW5nIGltYWdlcywgd2UgbmVlZCBwcm9qZWN0IGlkIGFuZCBkYXRhc2V0LCB1bmxlc3MgaW1hZ2VzIGFyZSBtYXRlcmlhbGl6ZWRcbiAgcHJvamVjdElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbWFnZU9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgc2VyaWFsaXplcnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLy8gQ29tbW9uIG92ZXJyaWRlc1xuICAgIHR5cGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1hcmtzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLy8gTGVzcyBjb21tb24gb3ZlcnJpZGVzXG4gICAgbGlzdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbGlzdEl0ZW06IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLy8gTG93LWxldmVsIHNlcmlhbGl6ZXJzXG4gICAgYmxvY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNwYW46IFByb3BUeXBlcy5mdW5jXG4gIH0pLFxuXG4gIGJsb2NrczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBfdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pKSwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBfdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pXSkuaXNSZXF1aXJlZFxufTtcblxuU2FuaXR5QmxvY2tDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVuZGVyQ29udGFpbmVyT25TaW5nbGVDaGlsZDogZmFsc2UsXG4gIHNlcmlhbGl6ZXJzOiB7fSxcbiAgaW1hZ2VPcHRpb25zOiB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTYW5pdHlCbG9ja0NvbnRlbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CbG9ja0NvbnRlbnQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvaW50ZXJuYWxzJyksXG4gICAgZ2V0U2VyaWFsaXplcnMgPSBfcmVxdWlyZS5nZXRTZXJpYWxpemVycztcblxudmFyIHJlbmRlck5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50O1xuXG52YXIgX2dldFNlcmlhbGl6ZXJzID0gZ2V0U2VyaWFsaXplcnMocmVuZGVyTm9kZSksXG4gICAgZGVmYXVsdFNlcmlhbGl6ZXJzID0gX2dldFNlcmlhbGl6ZXJzLmRlZmF1bHRTZXJpYWxpemVycyxcbiAgICBzZXJpYWxpemVTcGFuID0gX2dldFNlcmlhbGl6ZXJzLnNlcmlhbGl6ZVNwYW47XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXJpYWxpemVTcGFuOiBzZXJpYWxpemVTcGFuLFxuICBzZXJpYWxpemVyczogZGVmYXVsdFNlcmlhbGl6ZXJzLFxuICByZW5kZXJQcm9wczogeyBuZXN0TWFya3M6IHRydWUgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbS5qcy5tYXAiLCJpbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTmF2JztcclxuaW1wb3J0IFBvc3RXcmFwcGVyIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvUG9zdFdyYXBwZXInO1xyXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0JztcclxuXHJcblxyXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5cclxuY29uc3QgUG9zdCA9ICh7ZGF0YX0pID0+IHtcclxuXHJcbmNvbnN0IHBvc3REYXRhID0gJyc7XHJcblxyXG4gXHJcbnJldHVybiAoXHJcbjxMYXlvdXQ+XHJcbjxOYXYgY3VycmVudD0nYmxvZycgLz5cclxuPFBvc3RXcmFwcGVyIGNsaWVudCA9IHtjbGllbnR9IHBvc3QgPSB7cG9zdERhdGF9Lz5cclxuXHJcbjxwPlRpdGxlOiB7ZGF0YS50aXRsZX08L3A+XHJcbjxCbG9ja0NvbnRlbnRcclxuICBibG9ja3MgPSB7ZGF0YS5ib2R5fVxyXG4gIGltYWdlT3B0aW9ucz17e3c6IDQ4MCwgaDoyNDAsIGZpdDogJ21heCd9fVxyXG4gIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgLz5cclxuPC9MYXlvdXQ+XHJcbilcclxufVxyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRwaWRdWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3IgLT5uYW1lLFxyXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10gLT4gdGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIGJvZHksXHJcbiAgbWFpbkltYWdlXHJcbn0gYDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0eyBwaWQgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIGNvbnN0IGRhdGEgPSAgYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgcXVlcnksIHtwaWR9KSAgXHJcblxyXG4gIHJldHVybiB7cHJvcHM6IHtkYXRhfX1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==
"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.DragDropList=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_reactCssModules=_interopRequireDefault(require("react-css-modules")),_DragDropList=_interopRequireDefault(require("../style/DragDropList.styl")),_Delete=_interopRequireDefault(require("@material-ui/icons/Delete"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var DragDropList=function(a){function b(a){var d;return _classCallCheck(this,b),d=c.call(this,a),_defineProperty(_assertThisInitialized(d),"handleDragStart",function(a,b){d.draggingItem.current=b,console.log("handleDragStart: "+a.target.innerHTML)}),_defineProperty(_assertThisInitialized(d),"handleDragEnter",function(a,b){d.dragOverItem.current=b,console.log("handleDragEnter: "+a.target.innerHTML);var c=_toConsumableArray(d.state.list);console.log("dragging: "+d.draggingItem.current,"drag over: "+d.dragOverItem.current);var e=c[d.draggingItem.current];c.splice(d.draggingItem.current,1),c.splice(d.dragOverItem.current,0,e),d.draggingItem.current=d.dragOverItem.current,d.dragOverItem.current=null,d.setState({list:c})}),_defineProperty(_assertThisInitialized(d),"handleonDragEnd",function(){d.props.changeList(d.state.list)}),_defineProperty(_assertThisInitialized(d),"handleDelete",function(a){var b=d.state.list.filter(function(b){return b!==a});d.setState({list:b}),d.props.changeList(b)}),d.state={list:d.props.listItem},d.draggingItem=_react["default"].createRef(),d.dragOverItem=_react["default"].createRef(),d}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"render",value:function render(){var a=this,b=this.props,c=b.width,d=b.height;return _react["default"].createElement("div",null,this.state.list.map(function(b,f){return _react["default"].createElement("div",{onDragStart:function onDragStart(b){return a.handleDragStart(b,f)},onDragOver:function onDragOver(a){return a.preventDefault()},onDragEnter:function onDragEnter(b){return a.handleDragEnter(b,f)},onDragEnd:function onDragEnd(b){return a.handleonDragEnd(b,f)},key:f,draggable:!0,className:"dragdroplist-frame",style:{width:c,height:d}},_react["default"].createElement("div",{className:"dragdroplist-layout"},_react["default"].createElement("img",{title:b.title,src:b.src,alt:b.title,className:"dragdroplist-img-frame"}),_react["default"].createElement("div",null,b.title)),_react["default"].createElement("button",{className:"dragdroplist-btn",onClick:a.handleDelete.bind(a,b)},_react["default"].createElement(_Delete["default"],null)))}))}}]),b}(_react.Component);exports.DragDropList=DragDropList,_defineProperty(DragDropList,"propTypes",{listItem:_propTypes["default"].array.isRequired,width:_propTypes["default"].number,height:_propTypes["default"].number}),_defineProperty(DragDropList,"defaultProps",{width:250,height:60});var _default=(0,_reactCssModules["default"])(DragDropList,_DragDropList["default"]);exports["default"]=_default;
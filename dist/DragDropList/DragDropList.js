"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DragDropList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _DragDropList = _interopRequireDefault(require("../style/DragDropList.styl"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DragDropList = function (_Component) {
  _inherits(DragDropList, _Component);

  var _super = _createSuper(DragDropList);

  function DragDropList(props) {
    var _this;

    _classCallCheck(this, DragDropList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (e, position) {
      _this.draggingItem.current = position;
      console.log("handleDragStart: " + e.target.innerHTML);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEnter", function (e, position) {
      _this.dragOverItem.current = position;
      console.log("handleDragEnter: " + e.target.innerHTML);

      var listCopy = _toConsumableArray(_this.state.list);

      console.log("dragging: " + _this.draggingItem.current, "drag over: " + _this.dragOverItem.current);
      var draggingItemContent = listCopy[_this.draggingItem.current];
      listCopy.splice(_this.draggingItem.current, 1);
      listCopy.splice(_this.dragOverItem.current, 0, draggingItemContent);
      _this.draggingItem.current = _this.dragOverItem.current;
      _this.dragOverItem.current = null;

      _this.setState({
        list: listCopy
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleonDragEnd", function () {
      _this.props.changeList(_this.state.list);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function (item) {
      var updateList = _this.state.list.filter(function (listItem) {
        return listItem !== item;
      });

      _this.setState({
        list: updateList
      });

      _this.props.changeList(updateList);
    });

    _this.state = {
      list: _this.props.listItem
    };
    _this.draggingItem = _react["default"].createRef();
    _this.dragOverItem = _react["default"].createRef();
    return _this;
  }

  _createClass(DragDropList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      return _react["default"].createElement("div", null, this.state.list.map(function (item, index) {
        return _react["default"].createElement("div", {
          onDragStart: function onDragStart(e) {
            return _this2.handleDragStart(e, index);
          },
          onDragOver: function onDragOver(e) {
            return e.preventDefault();
          },
          onDragEnter: function onDragEnter(e) {
            return _this2.handleDragEnter(e, index);
          },
          onDragEnd: function onDragEnd(e) {
            return _this2.handleonDragEnd(e, index);
          },
          key: index,
          draggable: true,
          className: "dragdroplist-frame",
          style: {
            width: width,
            height: height
          }
        }, _react["default"].createElement("div", {
          className: "dragdroplist-layout"
        }, _react["default"].createElement("img", {
          title: item.title,
          src: item.src,
          alt: item.title,
          className: "dragdroplist-img-frame",
          width: height - 10,
          height: height - 10
        }), _react["default"].createElement("div", null, item.title)), _react["default"].createElement("button", {
          className: "dragdroplist-btn",
          onClick: _this2.handleDelete.bind(_this2, item)
        }, _react["default"].createElement(_Delete["default"], null)));
      }));
    }
  }]);

  return DragDropList;
}(_react.Component);

exports.DragDropList = DragDropList;

_defineProperty(DragDropList, "propTypes", {
  listItem: _propTypes["default"].array.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  changeList: _propTypes["default"].func
});

_defineProperty(DragDropList, "defaultProps", {
  width: 250,
  height: 60
});

var _default = (0, _reactCssModules["default"])(DragDropList, _DragDropList["default"]);

exports["default"] = _default;
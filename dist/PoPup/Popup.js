"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Popup = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Popup = _interopRequireDefault(require("../style/Popup.styl"));

var _Cancel = _interopRequireDefault(require("@mui/icons-material/Cancel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Popup = function (_Component) {
  _inherits(Popup, _Component);

  var _super = _createSuper(Popup);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "togglePopup", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _this.state = {
      isOpen: false
    };
    _this.togglePopup = _this.togglePopup.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          clickBtn = _this$props.clickBtn,
          width = _this$props.width,
          height = _this$props.height,
          children = _this$props.children,
          title = _this$props.title,
          close = _this$props.close;
      return _react["default"].createElement("div", null, _react["default"].createElement("button", {
        onClick: this.togglePopup,
        className: "popup-btn"
      }, clickBtn), this.state.isOpen && _react["default"].createElement("div", {
        className: "popup-window-fixed popup-layout"
      }, _react["default"].createElement("div", {
        className: "popup-window-fixed popup-box",
        onClick: this.togglePopup
      }), _react["default"].createElement("div", {
        className: "popup-mesg",
        style: {
          width: width,
          height: height
        }
      }, _react["default"].createElement("div", {
        className: "popup-header"
      }, _react["default"].createElement("div", null), title ? _react["default"].createElement("div", {
        style: {
          fontSize: "22px"
        }
      }, title) : _react["default"].createElement("div", null), close ? _react["default"].createElement("button", {
        onClick: this.togglePopup
      }, _react["default"].createElement(_Cancel["default"], null)) : _react["default"].createElement("div", null)), title && _react["default"].createElement("div", {
        className: "popup-hr"
      }), _react["default"].createElement("div", {
        className: title || close ? "popup-content" : "popup-no-header-content"
      }, children))));
    }
  }]);

  return Popup;
}(_react.Component);

exports.Popup = Popup;

_defineProperty(Popup, "propTypes", {
  clickBtn: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  title: _propTypes["default"].string,
  close: _propTypes["default"].bool
});

_defineProperty(Popup, "defaultProps", {
  width: 400,
  height: 200,
  close: true
});

var _default = (0, _reactCssModules["default"])(Popup, _Popup["default"]);

exports["default"] = _default;
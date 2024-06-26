"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Card = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Card = _interopRequireDefault(require("../style/Card.styl"));

var _LocationOn = _interopRequireDefault(require("@mui/icons-material/LocationOn"));

var _Rating = _interopRequireDefault(require("../Rating/Rating"));

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

var Card = function (_Component) {
  _inherits(Card, _Component);

  var _super = _createSuper(Card);

  function Card() {
    _classCallCheck(this, Card);

    return _super.apply(this, arguments);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          src = _this$props.src,
          loc = _this$props.loc,
          width = _this$props.width,
          height = _this$props.height,
          flip = _this$props.flip,
          children = _this$props.children,
          hover = _this$props.hover,
          rating = _this$props.rating,
          commentNum = _this$props.commentNum;
      return _react["default"].createElement("div", {
        className: !flip ? "card-frame" : "card-flip",
        style: {
          width: width,
          height: height
        }
      }, !flip ? _react["default"].createElement("div", {
        className: "card-layout"
      }, hover ? _react["default"].createElement("div", {
        className: "card-hint"
      }, _react["default"].createElement("div", {
        className: "card-hint-cover"
      }), _react["default"].createElement("div", {
        className: "card-hint-txt"
      }, _react["default"].createElement("div", {
        className: "card-loc"
      }, _react["default"].createElement(_LocationOn["default"], {
        style: {
          color: "white"
        }
      }), _react["default"].createElement("div", {
        style: {
          color: "white"
        },
        className: "card-loc-txt"
      }, loc)), _react["default"].createElement("div", {
        className: "card-flip-hr"
      }), _react["default"].createElement("div", {
        className: "card-flip-other"
      }, _react["default"].createElement(_Rating["default"], {
        "default": rating,
        max: rating,
        fixed: true,
        color: "white"
      }), _react["default"].createElement("div", {
        style: {
          fontSize: "12px",
          marginTop: "10px",
          color: "white"
        }
      }, rating.toFixed(1), " \xB7 ", commentNum, " \u5247\u8A55\u8AD6"))), _react["default"].createElement("img", {
        src: src,
        alt: title,
        className: "card-hint-pic"
      })) : _react["default"].createElement("img", {
        src: src,
        alt: title,
        className: "card-pic"
      }), _react["default"].createElement("div", {
        style: {
          textAlign: "center",
          fontWeight: "bold"
        }
      }, title)) : _react["default"].createElement("div", {
        className: "card-flip-inner"
      }, _react["default"].createElement("div", {
        className: "card-flip-front"
      }, _react["default"].createElement("div", {
        className: "card-layout"
      }, _react["default"].createElement("img", {
        src: src,
        alt: title,
        className: "card-pic"
      }), _react["default"].createElement("div", {
        style: {
          textAlign: "center",
          fontWeight: "bold"
        }
      }, title))), _react["default"].createElement("div", {
        className: "card-flip-back"
      }, _react["default"].createElement("div", {
        className: "card-flip-back-bd"
      }, _react["default"].createElement("div", {
        className: "card-loc"
      }, _react["default"].createElement(_LocationOn["default"], null), _react["default"].createElement("div", {
        className: "card-loc-txt"
      }, loc)), _react["default"].createElement("div", {
        className: "card-flip-hr"
      }), _react["default"].createElement("div", {
        className: "card-flip-des"
      }, children)))));
    }
  }]);

  return Card;
}(_react.Component);

exports.Card = Card;

_defineProperty(Card, "propTypes", {
  title: _propTypes["default"].string,
  src: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  flip: _propTypes["default"].bool,
  loc: _propTypes["default"].string,
  hover: _propTypes["default"].bool,
  rating: _propTypes["default"].number,
  commentNum: _propTypes["default"].number
});

_defineProperty(Card, "defaultProps", {
  width: 240,
  height: 220,
  flip: false,
  hover: false
});

var _default = (0, _reactCssModules["default"])(Card, _Card["default"]);

exports["default"] = _default;
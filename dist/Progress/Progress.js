"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Progress = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Progress = _interopRequireDefault(require("../style/Progress.styl"));

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

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  var _super = _createSuper(Progress);

  function Progress() {
    _classCallCheck(this, Progress);

    return _super.apply(this, arguments);
  }

  _createClass(Progress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          rating = _this$props.rating,
          commentNum = _this$props.commentNum,
          individualRating = _this$props.individualRating;
      var ratingTag = ["非常好", "很好", "一般", "有點差", "爛透了"];
      return _react["default"].createElement("div", {
        style: {
          width: "220px"
        }
      }, _react["default"].createElement("div", {
        className: "progress-title-section"
      }, _react["default"].createElement("div", {
        className: "progress-title"
      }, "\u8A55\u8AD6"), _react["default"].createElement("div", {
        className: "progress-comment-num"
      }, commentNum, " \u5247\u8A55\u8AD6")), _react["default"].createElement("div", {
        className: "progress-rating-section"
      }, _react["default"].createElement("div", {
        className: "progress-rating"
      }, rating.toFixed(1)), _react["default"].createElement(_Rating["default"], {
        starDefault: rating,
        max: 5,
        fixed: true
      })), _react["default"].createElement("div", {
        className: "progress-section"
      }, individualRating.map(function (r, i) {
        return _react["default"].createElement("div", {
          key: i,
          className: "progress-individual"
        }, _react["default"].createElement("label", {
          className: "progress-label"
        }, ratingTag[i]), _react["default"].createElement("progress", {
          id: "star-" + (5 - i),
          value: r,
          max: commentNum
        }));
      })));
    }
  }]);

  return Progress;
}(_react.Component);

exports.Progress = Progress;

_defineProperty(Progress, "propTypes", {
  rating: _propTypes["default"].number,
  commentNum: _propTypes["default"].number,
  individualRating: _propTypes["default"].array
});

_defineProperty(Progress, "defaultProps", {
  rating: 5,
  commentNum: 0,
  individualRating: 0
});

var _default = (0, _reactCssModules["default"])(Progress, _Progress["default"]);

exports["default"] = _default;
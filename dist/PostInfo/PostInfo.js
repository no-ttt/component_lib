"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PostInfo = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _PostInfo = _interopRequireDefault(require("../style/PostInfo.styl"));

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

var PostInfo = function (_Component) {
  _inherits(PostInfo, _Component);

  var _super = _createSuper(PostInfo);

  function PostInfo() {
    _classCallCheck(this, PostInfo);

    return _super.apply(this, arguments);
  }

  _createClass(PostInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          spotName = _this$props.spotName,
          des = _this$props.des,
          phone = _this$props.phone,
          addr = _this$props.addr,
          picture = _this$props.picture,
          open = _this$props.open,
          ticket = _this$props.ticket,
          remark = _this$props.remark,
          traffic = _this$props.traffic,
          posLat = _this$props.posLat,
          posLon = _this$props.posLon;
      return _react["default"].createElement("div", {
        className: "postInfo-frame"
      }, _react["default"].createElement("div", {
        className: "postInfo-des"
      }, _react["default"].createElement("img", {
        src: picture,
        width: "500",
        height: "300",
        className: "postInfo-image"
      }), _react["default"].createElement("div", {
        className: "postInfo-des-distance"
      }, _react["default"].createElement("div", {
        className: "postInfo-spotName-txt"
      }, spotName), _react["default"].createElement("table", {
        className: "postInfo-table"
      }, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        valign: "top",
        className: "postInfo-td"
      }, "\u7C21\u4ECB"), _react["default"].createElement("td", {
        className: "postInfo-td-text"
      }, des)), _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        valign: "top",
        className: "postInfo-td"
      }, "\u96FB\u8A71"), _react["default"].createElement("td", null, phone)), _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        valign: "top",
        className: "postInfo-td"
      }, "\u5730\u5740"), _react["default"].createElement("td", null, _react["default"].createElement("a", {
        href: "https://www.google.com.tw/maps/@" + posLat.toFixed(7).toString() + "," + posLon.toFixed(7).toString() + ",15z",
        target: "_blank",
        style: {
          color: "#d2691e",
          textDecoration: "none"
        }
      }, addr))))))), _react["default"].createElement("div", {
        className: "postInfo-hr"
      }), _react["default"].createElement("div", {
        className: "postInfo-other"
      }, _react["default"].createElement("table", {
        className: "postInfo-other-table"
      }, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        valign: "top",
        className: "postInfo-other-td"
      }, "\u958B\u653E\u6642\u9593"), _react["default"].createElement("td", null, open)), _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        valign: "top",
        className: "postInfo-other-td"
      }, "\u9580\u7968\u8CC7\u8A0A"), _react["default"].createElement("td", null, ticket)), "      ", _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        valign: "top",
        className: "postInfo-other-td"
      }, "\u6CE8\u610F\u4E8B\u9805"), _react["default"].createElement("td", null, remark)), _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        valign: "top",
        className: "postInfo-other-td"
      }, "\u4EA4\u901A\u65B9\u5F0F"), _react["default"].createElement("td", null, traffic))))));
    }
  }]);

  return PostInfo;
}(_react.Component);

exports.PostInfo = PostInfo;

_defineProperty(PostInfo, "propTypes", {
  spotName: _propTypes["default"].string.isRequired,
  des: _propTypes["default"].string,
  phone: _propTypes["default"].string,
  addr: _propTypes["default"].string,
  picture: _propTypes["default"].string,
  open: _propTypes["default"].string,
  ticket: _propTypes["default"].string,
  remark: _propTypes["default"].string,
  traffic: _propTypes["default"].string,
  posLat: _propTypes["default"].number,
  posLon: _propTypes["default"].number
});

var _default = (0, _reactCssModules["default"])(PostInfo, _PostInfo["default"]);

exports["default"] = _default;
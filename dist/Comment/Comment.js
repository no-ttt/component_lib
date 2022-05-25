"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Comment = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Comment = _interopRequireDefault(require("../style/Comment.styl"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _Rating = _interopRequireDefault(require("../Rating/Rating"));

var _ThumbUpOffAlt = _interopRequireDefault(require("@mui/icons-material/ThumbUpOffAlt"));

var _ThumbUpAlt = _interopRequireDefault(require("@mui/icons-material/ThumbUpAlt"));

var _PushPin = _interopRequireDefault(require("@mui/icons-material/PushPin"));

var _MoreVert = _interopRequireDefault(require("@mui/icons-material/MoreVert"));

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

var Comment = function (_Component) {
  _inherits(Comment, _Component);

  var _super = _createSuper(Comment);

  function Comment(props) {
    var _this;

    _classCallCheck(this, Comment);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isClick", function () {
      if (_this.state.click === false) _this.setState({
        clickNum: _this.state.clickNum + 1,
        click: !_this.state.click
      });else _this.setState({
        clickNum: _this.state.clickNum - 1,
        click: !_this.state.click
      });
    });

    _this.state = {
      click: false,
      clickNum: _this.props.like
    };
    _this.isClick = _this.isClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Comment, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          userName = _this$props.userName,
          rating = _this$props.rating,
          content = _this$props.content,
          img = _this$props.img,
          date = _this$props.date,
          mode = _this$props.mode,
          directDes = _this$props.directDes;
      if (mode === "comment") return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "comment-header"
      }, _react["default"].createElement("div", {
        className: "comment-title"
      }, _react["default"].createElement(_Avatar["default"], {
        alt: "user_avatar",
        src: src,
        width: 45
      }), _react["default"].createElement("div", {
        className: "comment-user-name"
      }, userName)), _react["default"].createElement("div", {
        className: "comment-thumbup"
      }, _react["default"].createElement("button", {
        onClick: this.isClick
      }, this.state.click ? _react["default"].createElement(_ThumbUpAlt["default"], null) : _react["default"].createElement(_ThumbUpOffAlt["default"], null)), _react["default"].createElement("div", {
        style: {
          fontSize: "14px"
        }
      }, this.state.clickNum))), _react["default"].createElement("div", {
        className: "comment-content"
      }, _react["default"].createElement(_Rating["default"], {
        size: "small",
        fixed: true,
        starDefault: rating
      }), _react["default"].createElement("div", null, content)), _react["default"].createElement("div", {
        className: "comment-img-date"
      }, _react["default"].createElement("div", {
        className: "comment-img-section"
      }, img.map(function (src, i) {
        return _react["default"].createElement("img", {
          key: i,
          src: src,
          alt: "photo-" + i,
          className: "comment-photo"
        });
      })), _react["default"].createElement("div", {
        className: "comment-date"
      }, date)));
      if (mode === "direct") return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "comment-header"
      }, _react["default"].createElement("div", {
        className: "comment-title"
      }, _react["default"].createElement(_Avatar["default"], {
        alt: "user_avatar",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7A5w9fXNr22x_vZzJ17ubf2X2VX7ZSzBeMQ&usqp=CAU",
        width: 45
      }), _react["default"].createElement("div", {
        className: "comment-user-name"
      }, "\u65C5\u904A\u5C0F\u5E6B\u624B")), _react["default"].createElement("div", {
        className: "comment-pin"
      }, _react["default"].createElement(_PushPin["default"], {
        sx: {
          fontSize: 15
        }
      }), _react["default"].createElement("div", {
        style: {
          fontSize: "12px"
        }
      }, "\u7F6E\u9802"))), _react["default"].createElement("div", {
        className: "comment-content"
      }, directDes));
    }
  }]);

  return Comment;
}(_react.Component);

exports.Comment = Comment;

_defineProperty(Comment, "propTypes", {
  userName: _propTypes["default"].string,
  like: _propTypes["default"].number,
  rating: _propTypes["default"].number,
  comment: _propTypes["default"].string,
  img: _propTypes["default"].array,
  date: _propTypes["default"].string,
  directDes: _propTypes["default"].string,
  mode: _propTypes["default"].string
});

_defineProperty(Comment, "defaultProps", {
  like: 0,
  mode: "comment"
});

var _default = (0, _reactCssModules["default"])(Comment, _Comment["default"]);

exports["default"] = _default;
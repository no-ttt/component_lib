"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AddComment = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _AddComment = _interopRequireDefault(require("../style/AddComment.styl"));

var _Popup = _interopRequireDefault(require("../PoPup/Popup"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _Rating = _interopRequireDefault(require("../Rating/Rating"));

var _AddAPhoto = _interopRequireDefault(require("@mui/icons-material/AddAPhoto"));

var _Clear = _interopRequireDefault(require("@mui/icons-material/Clear"));

var _default_avatar = _interopRequireDefault(require("../img/default_avatar.png"));

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

var AddComment = function (_Component) {
  _inherits(AddComment, _Component);

  var _super = _createSuper(AddComment);

  function AddComment(props) {
    var _this;

    _classCallCheck(this, AddComment);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var file = e.target.files.item(0);
      var fileReader = new FileReader();
      fileReader.addEventListener("load", _this.fileLoad);
      fileReader.readAsDataURL(file);
    });

    _defineProperty(_assertThisInitialized(_this), "fileLoad", function (e) {
      _this.setState({
        img: [].concat(_toConsumableArray(_this.state.img), [e.target.result])
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function () {
      _this.props.returnComment(_this.state.rating, _this.state.comment, _this.state.img);
    });

    _this.state = {
      rating: 0,
      comment: "",
      img: []
    };
    _this.fileEl = _react["default"].createRef();
    return _this;
  }

  _createClass(AddComment, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          clickBtn = _this$props.clickBtn,
          title = _this$props.title,
          src = _this$props.src,
          userName = _this$props.userName;
      console.log(this.state.img);
      return _react["default"].createElement(_Popup["default"], {
        clickBtn: clickBtn,
        width: 400,
        height: 480,
        title: title
      }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "add-comment-user-info"
      }, _react["default"].createElement(_Avatar["default"], {
        alt: "user_avatar",
        src: src,
        width: 45
      }), _react["default"].createElement("div", {
        "class": "add-comment-user"
      }, userName)), _react["default"].createElement("div", {
        className: "add-comment-section"
      }, _react["default"].createElement(_Rating["default"], {
        max: 5,
        fixed: false,
        size: "large",
        value: function value(n) {
          return _this2.setState({
            rating: n
          });
        }
      }), _react["default"].createElement("textarea", {
        id: "comment",
        name: "comment",
        rows: "8",
        placeholder: "\u5BEB\u4E9B\u4EC0\u9EBC\uFF1F",
        className: "add-comment-textarea",
        onChange: function onChange(e) {
          return _this2.setState({
            comment: e.target.value
          });
        }
      }), _react["default"].createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, _react["default"].createElement("label", {
        className: "add-comment-upload-img-frame"
      }, _react["default"].createElement("input", {
        type: "file",
        multiple: "multiple",
        draggable: "true",
        onChange: this.onChange,
        style: {
          display: "none"
        },
        ref: this.fileEl
      }), _react["default"].createElement("div", null, _react["default"].createElement(_AddAPhoto["default"], {
        sx: {
          fontSize: 30
        }
      }))), _react["default"].createElement("div", {
        className: "add-comment-img-section",
        id: "add-comment"
      }, this.state.img.length !== 0 ? this.state.img.map(function (src, i) {
        return _react["default"].createElement("div", {
          key: i,
          className: "add-comment-img"
        }, _react["default"].createElement("button", {
          className: "add-comment-upload-cancel",
          onClick: function onClick() {
            _this2.setState({
              img: _this2.state.img.filter(function (f, index) {
                return index !== i;
              })
            });

            _this2.fileEl.current.value = null;
          }
        }, _react["default"].createElement(_Clear["default"], {
          fontSize: "small"
        })), _react["default"].createElement("img", {
          className: "add-comment-upload-img",
          src: src
        }));
      }) : "")), _react["default"].createElement("button", {
        className: "add-comment-btn",
        onClick: this.submit
      }, "\u6211\u8981\u767C\u4F48"))));
    }
  }]);

  return AddComment;
}(_react.Component);

exports.AddComment = AddComment;

_defineProperty(AddComment, "propTypes", {
  clickBtn: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string,
  src: _propTypes["default"].string,
  userName: _propTypes["default"].string,
  returnComment: _propTypes["default"].func
});

_defineProperty(AddComment, "defaultProps", {
  src: _default_avatar["default"]
});

var _default = (0, _reactCssModules["default"])(AddComment, _AddComment["default"]);

exports["default"] = _default;
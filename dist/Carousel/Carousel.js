"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Carousel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Carousel = _interopRequireDefault(require("../style/Carousel.styl"));

var _Post = _interopRequireDefault(require("../Post/Post"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

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

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);
    _this.state = {
      currentPage: 0
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          cols = _this$props.cols,
          gap = _this$props.gap,
          data = _this$props.data,
          width = _this$props.width,
          height = _this$props.height,
          children = _this$props.children;
      var itemSetList = data.reduce(function (result, item, i) {
        if (i % cols === 0) {
          result.push([_react["default"].createElement("div", {
            key: i,
            className: "Carousel-item",
            style: {
              height: height
            }
          }, _react["default"].cloneElement(children, {
            data: item
          }))]);
        } else {
          result[result.length - 1].push(_react["default"].createElement("div", {
            key: i,
            className: "Carousel-item",
            style: {
              height: height
            }
          }, _react["default"].cloneElement(children, {
            data: item
          })));
        }

        return result;
      }, []);
      var page = Math.ceil(data.length / cols);

      var handlePrev = function handlePrev() {
        _this2.setState({
          currentPage: _this2.state.currentPage - 1
        });
      };

      var handleNext = function handleNext() {
        _this2.setState({
          currentPage: _this2.state.currentPage + 1
        });
      };

      return _react["default"].createElement("div", {
        className: "Carousel"
      }, _react["default"].createElement("div", {
        style: this.state.currentPage <= 0 ? {
          visibility: "hidden"
        } : {}
      }, _react["default"].createElement("button", {
        onClick: handlePrev,
        className: "Carousel_btn"
      }, _react["default"].createElement(_KeyboardArrowLeft["default"], null))), _react["default"].createElement("div", {
        className: "Carousel_railWrapper"
      }, _react["default"].createElement("div", {
        className: "Carousel_rail",
        style: {
          gridTemplateColumns: "repeat(".concat(page, ", 100%)"),
          left: "calc(".concat(-100 * this.state.currentPage, "% - ").concat(gap * this.state.currentPage, "px)"),
          gridColumnGap: "".concat(gap, "px"),
          width: width * cols + gap * (cols - 1)
        }
      }, itemSetList.map(function (set, i) {
        return _react["default"].createElement("div", {
          key: i,
          style: {
            display: 'grid',
            gridTemplateColumns: "repeat(".concat(cols, ", ").concat(width, "px)"),
            gridGap: "".concat(gap, "px")
          }
        }, set);
      }))), _react["default"].createElement("div", {
        style: this.state.currentPage === page - 1 ? {
          visibility: "hidden"
        } : {}
      }, _react["default"].createElement("button", {
        className: "Carousel_btn",
        onClick: handleNext
      }, _react["default"].createElement(_KeyboardArrowRight["default"], null))));
    }
  }]);

  return Carousel;
}(_react.Component);

exports.Carousel = Carousel;

_defineProperty(Carousel, "propTypes", {
  cols: _propTypes["default"].number,
  gap: _propTypes["default"].number,
  data: _propTypes["default"].array.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number
});

_defineProperty(Carousel, "defaultProps", {
  cols: 3,
  gap: 0,
  width: 150,
  height: 200
});

var _default = (0, _reactCssModules["default"])(Carousel, _Carousel["default"]);

exports["default"] = _default;
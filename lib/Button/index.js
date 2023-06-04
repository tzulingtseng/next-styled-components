"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var __jsx = _react["default"].createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// 基本樣式
var basicStyle = function basicStyle(theme) {
  return {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: theme.radius,
    paddingTop: theme.getSpacing(1),
    paddingLeft: theme.getSpacing(2),
    paddingRight: theme.getSpacing(2),
    paddingBottom: theme.getSpacing(1)
  };
};
var textStyle = function textStyle(theme) {
  return {
    color: theme.colors.primary,
    backgroundColor: theme.colors.transparent
  };
};
var filledStyle = function filledStyle(theme) {
  return {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary
  };
};
var outlineStyle = function outlineStyle(theme) {
  return {
    color: theme.colors.primary,
    border: "1px solid ".concat(theme.colors.primary),
    backgroundColor: theme.colors.transparent
  };
};
var switchTheme = function switchTheme(theme, type) {
  switch (type) {
    case 'outline':
      return outlineStyle(theme);
    case 'text':
      return textStyle(theme);
    case 'filled':
    default:
      return filledStyle(theme);
  }
};
var StyledButton = (0, _styledComponents["default"])('button').withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-chst6h-0"
})(function (_ref) {
  var theme = _ref.theme,
    type = _ref.type,
    style = _ref.style;
  return _objectSpread(_objectSpread(_objectSpread({}, basicStyle(theme)), switchTheme(theme, type)), style);
});
// const StyledButton = styled('button')(({ theme, type, style }) => {
//     const mergedStyle = merge({}, basicStyle(theme), switchTheme(theme, type), style);
//     return mergedStyle;
// });

var Button = function Button(props) {
  return __jsx(StyledButton, props);
};

// 定義 Button 元件的屬性(prop)類型

Button.defaultProps = {
  type: 'filled',
  style: {},
  onClick: function onClick() {
    return false;
  }
};
var _default = Button;
exports["default"] = _default;
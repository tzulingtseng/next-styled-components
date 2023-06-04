"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _excluded = ["variant", "className", "startIcon", "endIcon", "onClick", "isDisabled", "isLoading", "children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var __jsx = _react["default"].createElement;
var filledStyle = (0, _styledComponents.css)(["background-color:", ";color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
});
var outlinedStyle = (0, _styledComponents.css)(["background-color:", ";color:", ";border:1px solid ", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.transparent;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary;
});
var textStyle = (0, _styledComponents.css)(["background-color:", ";color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.transparent;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.primary;
});
var disabledStyle = (0, _styledComponents.css)(["background-color:", ";cursor:not-allowed;&:hover,&:active{opacity:1;}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.disable;
});
var variantMap = {
  filled: filledStyle,
  outlined: outlinedStyle,
  text: textStyle
};
var StartIcon = _styledComponents["default"].span.withConfig({
  displayName: "Button__StartIcon",
  componentId: "sc-chst6h-0"
})(["margin-right:8px;"]);
var EndIcon = _styledComponents["default"].span.withConfig({
  displayName: "Button__EndIcon",
  componentId: "sc-chst6h-1"
})(["margin-left:8px;"]);
var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-chst6h-2"
})(["border:none;outline:none;min-width:100px;height:36px;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:", "px;cursor:pointer;transition:color 0.2s,background-color 0.2s,border 0.2s,opacity 0.2s ease-in-out;&:hover{opacity:0.9;}&:active{opacity:0.7;}", " &:disabled{", "}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.radius;
}, function (props) {
  return variantMap[props.$variant] || variantMap.filled;
}, disabledStyle);
/**
 * `Button` 元件代表一個可點擊的按鈕，在使用者點擊之後會觸發相對應的業務邏輯。
 */
var Button = function Button(_ref10) {
  var variant = _ref10.variant,
    className = _ref10.className,
    startIcon = _ref10.startIcon,
    endIcon = _ref10.endIcon,
    onClick = _ref10.onClick,
    isDisabled = _ref10.isDisabled,
    isLoading = _ref10.isLoading,
    children = _ref10.children,
    props = (0, _objectWithoutProperties2["default"])(_ref10, _excluded);
  return __jsx(StyledButton, (0, _extends2["default"])({
    type: "button",
    $variant: variant,
    className: className,
    disabled: isDisabled,
    onClick: onClick
  }, props), isLoading && __jsx(_Icon["default"], {
    style: {
      marginRight: '8px'
    },
    icon: "fa-sync fa-spin"
  }), startIcon && __jsx(StartIcon, null, startIcon), __jsx("span", null, children), endIcon && __jsx(EndIcon, null, endIcon));
};

// 定義 Button 元件的屬性(prop)類型

Button.defaultProps = {
  variant: 'filled',
  className: null,
  isDisabled: false,
  isLoading: false,
  startIcon: null,
  endIcon: null,
  onClick: function onClick() {}
};
var _default = Button;
exports["default"] = _default;
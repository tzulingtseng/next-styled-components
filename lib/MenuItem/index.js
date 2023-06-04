"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _Typography = _interopRequireDefault(require("../Typography"));
var _excluded = ["children", "text", "icon", "open", "hasChild"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var __jsx = _react["default"].createElement;
// container
var StyledMenuContainer = (0, _styledComponents["default"])('div').withConfig({
  displayName: "MenuItem__StyledMenuContainer",
  componentId: "sc-1lfz4th-0"
})(function (_ref) {
  var theme = _ref.theme;
  return {
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(2), "px"),
    '&:hover': {
      backgroundColor: theme.colors.grey4
    }
  };
});

// icon
var MenuIcon = (0, _styledComponents["default"])(_Icon["default"]).withConfig({
  displayName: "MenuItem__MenuIcon",
  componentId: "sc-1lfz4th-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  return {
    fontSize: 14,
    color: theme.colors.grey2
  };
});

// text
var MenuText = (0, _styledComponents["default"])(_Typography["default"]).withConfig({
  displayName: "MenuItem__MenuText",
  componentId: "sc-1lfz4th-2"
})(function (_ref3) {
  var theme = _ref3.theme;
  return {
    color: theme.colors.grey2
  };
});

// extent
var MenuExtent = (0, _styledComponents["default"])(_Icon["default"]).withConfig({
  displayName: "MenuItem__MenuExtent",
  componentId: "sc-1lfz4th-3"
})(function (_ref4) {
  var theme = _ref4.theme,
    hasChild = _ref4.hasChild,
    open = _ref4.open;
  return {
    color: theme.colors.grey2,
    opacity: hasChild ? 1 : 0,
    transition: 'all .2s ease',
    transform: open ? 'rotate(270deg)' : 'rotate(90deg)'
  };
});
var MenuItem = function MenuItem(_ref5) {
  var children = _ref5.children,
    text = _ref5.text,
    icon = _ref5.icon,
    open = _ref5.open,
    hasChild = _ref5.hasChild,
    props = (0, _objectWithoutProperties2["default"])(_ref5, _excluded);
  return __jsx(StyledMenuContainer, props, __jsx(MenuIcon, {
    icon: icon
  }), __jsx(MenuText, {
    variant: "content"
  }, text), __jsx(MenuExtent, {
    open: open,
    hasChild: hasChild,
    icon: "fa-angle-right"
  }));
};
var _default = MenuItem;
exports["default"] = _default;
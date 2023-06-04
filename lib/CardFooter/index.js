"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _excluded = ["children"];
var __jsx = _react["default"].createElement;
var StyledCardFooter = (0, _styledComponents["default"])('div').withConfig({
  displayName: "CardFooter__StyledCardFooter",
  componentId: "sc-1qpdb81-0"
})(function (_ref) {
  var theme = _ref.theme;
  return {
    borderTop: "1px solid ".concat(theme.colors.grey1),
    padding: "".concat(theme.getSpacing(2), "px ").concat(theme.getSpacing(4), "px")
  };
});
var CardFooter = function CardFooter(_ref2) {
  var children = _ref2.children,
    props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  return __jsx(StyledCardFooter, props, children);
};
var _default = CardFooter;
exports["default"] = _default;
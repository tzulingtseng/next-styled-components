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
var StyledCardBody = (0, _styledComponents["default"])('div').withConfig({
  displayName: "CardBody__StyledCardBody",
  componentId: "sc-1sqaf6s-0"
})(function (_ref) {
  var theme = _ref.theme;
  return {
    maxWidth: '100%',
    padding: "".concat(theme.getSpacing(2), "px ").concat(theme.getSpacing(4), "px")
  };
});
var CardBody = function CardBody(_ref2) {
  var children = _ref2.children,
    props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  return __jsx(StyledCardBody, props, children);
};
var _default = CardBody;
exports["default"] = _default;
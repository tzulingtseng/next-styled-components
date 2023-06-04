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
var StyledContent = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Content__StyledContent",
  componentId: "sc-uaezap-0"
})(function (_ref) {
  var theme = _ref.theme;
  return {
    marginLeft: 250,
    // height: 'calc(100% - 60px)',
    backgroundColor: theme.colors.transparent
  };
});
var Content = function Content(_ref2) {
  var children = _ref2.children,
    props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  return __jsx(StyledContent, {
    style: props
  }, children);
};
var _default = Content;
exports["default"] = _default;
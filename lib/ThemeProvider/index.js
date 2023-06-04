"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var __jsx = _react["default"].createElement;
var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
    children = _ref.children;
  return __jsx(_styledComponents.ThemeProvider, {
    theme: theme
  }, children);
};
var _default = ThemeProvider;
exports["default"] = _default;
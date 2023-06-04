"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _excluded = ["children"];
var __jsx = _react["default"].createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var StyledCard = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Card__StyledCard",
  componentId: "sc-1dwxs4d-0"
})(function (_ref) {
  var theme = _ref.theme,
    style = _ref.style;
  return _objectSpread({
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    borderRadius: theme.radius,
    marginBottom: theme.getSpacing(2),
    backgroundColor: theme.colors.white,
    border: "1px solid ".concat(theme.colors.grey1)
  }, style);
});
var Card = function Card(_ref2) {
  var children = _ref2.children,
    props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  return __jsx(StyledCard, props, children);
};
var _default = Card;
exports["default"] = _default;
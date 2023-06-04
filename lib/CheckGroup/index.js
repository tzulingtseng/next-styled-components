"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _FormGroup = _interopRequireDefault(require("../FormGroup"));
var _FormLabel = _interopRequireDefault(require("../FormLabel"));
var _breakpoint = _interopRequireDefault(require("../constant/breakpoint"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var __jsx = _react["default"].createElement;
var StyledCheck = (0, _styledComponents["default"])('checkbox').withConfig({
  displayName: "CheckGroup__StyledCheck",
  componentId: "sc-1se9m79-0"
})(function (_ref) {
  var theme = _ref.theme,
    disabled = _ref.disabled,
    checked = _ref.checked;
  return (0, _defineProperty2["default"])({
    position: "relative",
    display: "flex",
    paddingLeft: 30,
    opacity: disabled ? 0.5 : 1,
    marginBottom: theme.getSpacing(1),
    paddingRight: theme.getSpacing(1),
    alignItems: "center",
    "&:before": {
      position: "absolute",
      content: '""',
      left: 0,
      width: 8,
      height: 8,
      margin: theme.getSpacing(1),
      border: "5px solid ".concat(checked ? theme.colors.primary : theme.colors.grey1)
    }
  }, _breakpoint["default"].mediaLG, {
    marginBottom: theme.getSpacing(0)
  });
});
var CheckItems = function CheckItems() {
  return __jsx(_react.Fragment, null, __jsx(StyledCheck, null), __jsx("input", null));
};
var CheckGroup = function CheckGroup() {
  return __jsx(_FormGroup["default"], null, __jsx(_FormLabel["default"], null), __jsx(CheckItems, null));
};
var _default = CheckGroup;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var __jsx = _react["default"].createElement;
var StyledSwitch = (0, _styledComponents["default"])('input').withConfig({
  displayName: "Switch__StyledSwitch",
  componentId: "sc-10y4xim-0"
})({
  opacity: 0,
  width: 0,
  height: 0
});
var StyledSwitchContainer = (0, _styledComponents["default"])('label').withConfig({
  displayName: "Switch__StyledSwitchContainer",
  componentId: "sc-10y4xim-1"
})(function (_ref) {
  var theme = _ref.theme,
    active = _ref.active;
  return {
    width: 40,
    height: 20,
    borderRadius: 40,
    display: 'block',
    cursor: 'pointer',
    position: 'relative',
    transition: 'background-color .2s ease',
    backgroundColor: active ? theme.colors.primary : theme.colors.grey1
  };
});
var StyledIndicator = (0, _styledComponents["default"])('span').withConfig({
  displayName: "Switch__StyledIndicator",
  componentId: "sc-10y4xim-2"
})(function (_ref2) {
  var theme = _ref2.theme,
    active = _ref2.active;
  return {
    width: 16,
    height: 16,
    marginTop: 2,
    borderRadius: "100%",
    display: 'inline-block',
    transition: 'margin-left .2s ease',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.7)',
    marginLeft: active ? "22px" : "2px",
    backgroundColor: theme.colors.white
  };
});
var Switch = function Switch() {
  var _useState = (0, _react.useState)(false),
    active = _useState[0],
    setActive = _useState[1];
  var handleSwitchActive = function handleSwitchActive() {
    return setActive(!active);
  };
  return __jsx(StyledSwitchContainer, {
    active: active
  }, __jsx(StyledIndicator, {
    active: active
  }), __jsx(StyledSwitch, {
    type: "checkbox",
    value: active,
    onClick: handleSwitchActive
  }));
};
var _default = Switch;
exports["default"] = _default;
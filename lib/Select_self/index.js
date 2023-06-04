"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _FormGroup = _interopRequireDefault(require("../FormGroup"));
var _FormLabel = _interopRequireDefault(require("../FormLabel"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _ErrorMessage = _interopRequireDefault(require("../ErrorMessage"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var __jsx = _react["default"].createElement;
// 標籤字
// 選擇框 
// 1. 當出現 options 時，框要變色
// 2. disabled -> bgc:grey, undisabled -> bgc:white
// 3. border active -> colors.primary, unactive -> colors.grey
// 選擇框內icon
// 選擇框內選單 list
// 錯誤訊息
var StyledSelect = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Select_self__StyledSelect",
  componentId: "sc-78r8a5-0"
})(function (_ref) {
  var theme = _ref.theme,
    optionActive = _ref.optionActive;
  return {
    width: 180,
    height: 40,
    border: optionActive ? "1px solid ".concat(theme.colors.primary) : "1px solid ".concat(theme.colors.grey2),
    borderRadius: theme.radius,
    margin: "0 ".concat(theme.getSpacing(1), "px"),
    padding: "".concat(theme.getSpacing(1), "px"),
    position: 'relative',
    // flex:1, // 再確認有無需要
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: "pointer"
  };
});
var StyledIcon = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Select_self__StyledIcon",
  componentId: "sc-78r8a5-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  return {
    color: theme.colors.primary,
    right: 0,
    position: 'absolute',
    padding: "".concat(theme.getSpacing(1), "px")
  };
});
var StyledOptionsBox = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Select_self__StyledOptionsBox",
  componentId: "sc-78r8a5-2"
})(function (_ref3) {
  var theme = _ref3.theme,
    optionActive = _ref3.optionActive;
  return {
    width: 180,
    // height: 200,
    margin: "0 ".concat(theme.getSpacing(1), "px"),
    overflow: "scroll",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.17)",
    borderRadius: theme.radius,
    backgroundColor: theme.colors.white,
    border: "1px solid ".concat(theme.colors.grey1),
    display: optionActive ? 'block' : 'none'
  };
});
var StyledInput = (0, _styledComponents["default"])('input').withConfig({
  displayName: "Select_self__StyledInput",
  componentId: "sc-78r8a5-3"
})(function (_ref4) {
  var theme = _ref4.theme;
  return {
    display: 'none',
    // opacity: 0,
    // cursor: "pointer",
    // padding: `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
    width: 0,
    height: 0
  };
});
var StyledOption = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Select_self__StyledOption",
  componentId: "sc-78r8a5-4"
})(function (_ref5) {
  var theme = _ref5.theme;
  return {
    width: '100%',
    // borderBottom: `1px solid ${theme.colors.grey1}`,
    padding: "".concat(theme.getSpacing(1), "px"),
    cursor: 'pointer'
  };
});
var Select_self = function Select_self(_ref6) {
  var selectItems = _ref6.selectItems,
    _ref6$placeholder = _ref6.placeholder,
    placeholder = _ref6$placeholder === void 0 ? '請選擇...' : _ref6$placeholder,
    _ref6$errorMessage = _ref6.errorMessage,
    errorMessage = _ref6$errorMessage === void 0 ? '' : _ref6$errorMessage;
  var _useState = (0, _react.useState)(false),
    optionActive = _useState[0],
    setOptionActive = _useState[1];
  var _useState2 = (0, _react.useState)({}),
    selectedItem = _useState2[0],
    setSelectedItem = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    selectedValue = _useState3[0],
    setSelectedValue = _useState3[1];
  var handleOptionsActive = function handleOptionsActive() {
    return setOptionActive(!optionActive);
  };
  var onSelectItem = function onSelectItem(item) {
    setSelectedItem(item);
    setSelectedValue(selectedItem);
    setOptionActive(false);
  };
  return __jsx(_react.Fragment, null, __jsx(_FormGroup["default"], null, __jsx(_FormLabel["default"], {
    required: true
  }, "Label"), __jsx(StyledSelect, {
    onClick: handleOptionsActive,
    onblur: function onblur() {
      return onBlurClick;
    },
    optionActive: optionActive
  }, __jsx("div", null, selectedItem.label || placeholder), __jsx(_Icon["default"], {
    icon: "fa-angle-down",
    size: 12
  })), __jsx(StyledOptionsBox, {
    optionActive: optionActive
  }, selectItems && selectItems.map(function (item, index) {
    var key = "select_item_".concat(item.label, "_").concat(item.value, "_").concat(index);
    return __jsx(StyledOption, {
      key: key,
      onClick: function onClick() {
        return onSelectItem(item);
      }
    }, " ", item.label);
  })), __jsx(_ErrorMessage["default"], {
    errorMessage: errorMessage
  }, errorMessage)));
};
Select_self.defaultProps = {
  label: "",
  items: [],
  placeholder: '請選擇...',
  disabled: false,
  onChange: function onChange() {
    return false;
  }
};
var _default = Select_self;
exports["default"] = _default;
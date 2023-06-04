"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Card = _interopRequireDefault(require("../Card"));
var _CardHeader = _interopRequireDefault(require("../CardHeader"));
var _CardBody = _interopRequireDefault(require("../CardBody"));
var _CardFooter = _interopRequireDefault(require("../CardFooter"));
var _Button = _interopRequireDefault(require("../Button"));
var _Mask = _interopRequireDefault(require("../Mask"));
var _ButtonClose = _interopRequireDefault(require("../ButtonClose"));
var _excluded = ["dialogOpen", "title", "subtitle", "children", "confirmText", "cancelText", "onConfirm", "onCancel"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var __jsx = _react["default"].createElement;
var StyledDialog = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Dialog__StyledDialog",
  componentId: "sc-1i3ghhi-0"
})({
  position: 'relative'
});
var footerStyle = {
  display: 'flex',
  justifyContent: 'space-between'
};
var Dialog = function Dialog(_ref) {
  var dialogOpen = _ref.dialogOpen,
    title = _ref.title,
    subtitle = _ref.subtitle,
    children = _ref.children,
    confirmText = _ref.confirmText,
    cancelText = _ref.cancelText,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  if (!dialogOpen) return __jsx(_react.Fragment, null);
  return __jsx(_Mask["default"], null, __jsx(StyledDialog, null, __jsx(_Card["default"], {
    style: props.style
  }, __jsx(_CardHeader["default"], {
    title: title,
    subtitle: subtitle
  }, __jsx(_ButtonClose["default"], {
    onClick: onCancel
  })), __jsx(_CardBody["default"], null, children), __jsx(_CardFooter["default"], {
    style: footerStyle
  }, __jsx(_Button["default"], {
    type: "outline",
    onClick: onCancel
  }, cancelText), __jsx(_Button["default"], {
    type: "filled",
    onClick: onConfirm
  }, confirmText)))));
};
Dialog.defaultProps = {
  open: true,
  title: '',
  subtitle: '',
  confirmText: '確認',
  cancelText: '取消',
  onConfirm: function onConfirm() {
    return false;
  },
  onCancel: function onCancel() {
    return false;
  },
  onEnter: function onEnter() {
    return false;
  },
  onExited: function onExited() {
    return false;
  }
};
var _default = Dialog;
exports["default"] = _default;
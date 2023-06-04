"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _Typography = _interopRequireDefault(require("../Typography"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var __jsx = _react["default"].createElement;
// 路徑 需要連結
var StyledPath = (0, _styledComponents["default"])("a").withConfig({
  displayName: "Breadcrumbs__StyledPath",
  componentId: "sc-lvfviy-0"
})(function (_ref) {
  var theme = _ref.theme,
    href = _ref.href;
  return {
    display: "inline-block",
    textDecoration: "none",
    color: (0, _isEmpty["default"])(href) ? theme.colors.grey4 : theme.colors.primary
  };
});

// 分隔符號
var StyledSeparate = (0, _styledComponents["default"])("span").withConfig({
  displayName: "Breadcrumbs__StyledSeparate",
  componentId: "sc-lvfviy-1"
})(function (_ref2) {
  var theme = _ref2.theme,
    hidden = _ref2.hidden;
  return {
    display: hidden ? "none" : "inline-block",
    padding: theme.getSpacing(0.5),
    color: theme.colors.grey2
  };
});
var Breadcrumbs = function Breadcrumbs(_ref3) {
  var paths = _ref3.paths,
    theme = _ref3.theme;
  console.log('theme', theme);
  return __jsx(_react.Fragment, null, __jsx("div", null, paths && paths.map(function (item, i) {
    return __jsx("span", {
      key: i
    }, __jsx(StyledPath, {
      href: item.path
    }, __jsx(_Typography["default"], {
      style: {
        color: (0, _isEmpty["default"])(item.path) ? '#60797C' : '#60C4F8'
      }
    }, item.text)), __jsx(StyledSeparate, {
      hidden: i === paths.length - 1
    }, "/"));
  })));
};

// Breadcrumbs.propTypes = {
//     paths: propTypes.arrayOf(
//         propTypes.shape({
//             path: propTypes.string,
//             text: propTypes.string.isRequired,
//         })
//     ).isRequired,
// };
var _default = Breadcrumbs;
exports["default"] = _default;
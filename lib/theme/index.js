"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createTheme = void 0;
var _merge = _interopRequireDefault(require("lodash/merge"));
// 預設主題
var theme = {
  colors: {
    primary: '#60C4F8',
    secondary: '#71D664',
    success: '#5EB253',
    info: '#60A6F8',
    warning: '#FFC05A',
    danger: '#F86C6C',
    black: '#33484B',
    white: '#FFF',
    grey4: '#60797C',
    grey3: '#8B9FA2',
    grey2: '#B2BFC1',
    grey1: '#D9E0E2',
    grey0: '#FAFAFA',
    transparent: 'transparent'
  },
  typography: {
    htmlFontSize: 16,
    h1: {
      fontSize: '6rem'
    },
    h2: {
      fontSize: '4.5rem'
    },
    h3: {
      fontSize: '3.75rem'
    },
    h4: {
      fontSize: '3rem'
    },
    h5: {
      fontSize: '2.25rem'
    },
    h6: {
      fontSize: '1.75rem'
    },
    content: {
      fontSize: '1rem'
    }
  },
  radius: 10,
  spacing: 8,
  getSpacing: function getSpacing() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return 8 * num;
  }
};

// 自訂主題
// const customTheme ={

// }

var createTheme = function createTheme(customTheme) {
  return (0, _merge["default"])(customTheme, theme);
};
exports.createTheme = createTheme;
var _default = theme;
exports["default"] = _default;
'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(
    require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _excluded = ['children'];
var __jsx = _react['default'].createElement;
var StyledMenu = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'Menu__StyledMenu',
    componentId: 'sc-1td5keu-0',
})(function (_ref) {
    var theme = _ref.theme;
    return {
        top: 0,
        width: 250,
        height: '100%',
        position: 'absolute',
        backgroundColor: theme.colors.black,
    };
});
var Menu = function Menu(_ref2) {
    var children = _ref2.children,
        props = (0, _objectWithoutProperties2['default'])(_ref2, _excluded);
    return __jsx(StyledMenu, props, children);
};
var _default = Menu;
exports['default'] = _default;

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
var StyledNavBar = (0, _styledComponents['default'])('header').withConfig({
    displayName: 'NavBar__StyledNavBar',
    componentId: 'sc-1vppwqm-0',
})(function (_ref) {
    var theme = _ref.theme,
        style = _ref.style;
    return {
        width: 'calc(100%-250px)',
        height: 60,
        marginLeft: 250,
        backgroundColor: theme.colors.primary,
    };
});
var NavBar = function NavBar(_ref2) {
    var children = _ref2.children,
        props = (0, _objectWithoutProperties2['default'])(_ref2, _excluded);
    return __jsx(
        StyledNavBar,
        {
            style: props,
        },
        children
    );
};
NavBar.defaultProps = {
    style: {},
};
var _default = NavBar;
exports['default'] = _default;

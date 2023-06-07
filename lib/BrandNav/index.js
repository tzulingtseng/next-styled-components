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
var StyledBrandNav = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'BrandNav__StyledBrandNav',
    componentId: 'sc-1tyhwfn-0',
})(function (_ref) {
    var theme = _ref.theme;
    return {
        height: 60,
        width: '100%',
        backgroundColor: theme.colors.grey4,
    };
});
var BrandNav = function BrandNav(_ref2) {
    var children = _ref2.children,
        props = (0, _objectWithoutProperties2['default'])(_ref2, _excluded);
    return __jsx(
        StyledBrandNav,
        {
            style: props,
        },
        children
    );
};
var _default = BrandNav;
exports['default'] = _default;

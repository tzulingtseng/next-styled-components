'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(
    require('@babel/runtime/helpers/objectWithoutProperties')
);
var _defineProperty2 = _interopRequireDefault(
    require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _breakpoint = _interopRequireDefault(require('../constant/breakpoint'));
var _excluded = ['children'];
var __jsx = _react['default'].createElement;
var StyledLabel = (0, _styledComponents['default'])('label').withConfig({
    displayName: 'FormLabel__StyledLabel',
    componentId: 'sc-7ytlzg-0',
})(function (_ref) {
    var theme = _ref.theme,
        required = _ref.required;
    return (0, _defineProperty2['default'])(
        {
            // disPlay: isEmpty(children) ? 'none' : 'initial',
            minWidth: 110,
            position: 'relative',
            color: theme.colors.grey4,
            padding: ''
                .concat(theme.getSpacing(1), 'px ')
                .concat(theme.getSpacing(1), 'px'),
            '&::after': {
                position: 'absolute',
                content: required ? '"*"' : '""',
                color: theme.colors.danger,
                marginLeft: 2,
            },
        },
        _breakpoint['default'].mediaLG,
        {
            minWidth: 110,
            padding: ''
                .concat(theme.getSpacing(1), 'px ')
                .concat(theme.getSpacing(2), 'px'),
            '&::after': {
                left: 2,
            },
        }
    );
});
var FormLabel = function FormLabel(_ref3) {
    var children = _ref3.children,
        props = (0, _objectWithoutProperties2['default'])(_ref3, _excluded);
    return __jsx(StyledLabel, props, children);
};
var _default = FormLabel;
exports['default'] = _default;

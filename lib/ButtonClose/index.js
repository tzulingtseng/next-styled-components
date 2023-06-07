'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _react = _interopRequireDefault(require('react'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var __jsx = _react['default'].createElement;
var StyledButtonCloseWrapper = (0, _styledComponents['default'])(
    'div'
).withConfig({
    displayName: 'ButtonClose__StyledButtonCloseWrapper',
    componentId: 'sc-xzy9n3-0',
})(function (_ref) {
    var theme = _ref.theme;
    return {
        display: 'flex',
        position: 'absolute',
        top: '50%',
        right: theme.getSpacing(4),
        transform: 'translateY(-50%)',
    };
});
var StyledButtonClose = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'ButtonClose__StyledButtonClose',
    componentId: 'sc-xzy9n3-1',
})(function (_ref2) {
    var theme = _ref2.theme;
    return {
        justifyContent: 'end',
        position: 'relative',
        cursor: 'pointer',
        width: 32,
        height: 32,
        borderRadius: '100%',
        border: '2px solid '.concat(theme.colors.primary),
        transition: 'transform 0.5s',
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            width: '60%',
            height: 2,
            backgroundColor: theme.colors.primary,
            transition: 'transform 0.5s',
            marginTop: -1,
            marginLeft: '-30%',
        },
        '&:before': {
            transform: 'rotate(45deg)',
        },
        '&:after': {
            transform: 'rotate(-45deg)',
        },
        '&:hover:before': {
            transform: 'rotate(225deg)',
        },
        '&:hover:after': {
            transform: 'rotate(135deg)',
        },
    };
});
var ButtonClose = function ButtonClose(_ref3) {
    var onClick = _ref3.onClick;
    return __jsx(
        StyledButtonCloseWrapper,
        {
            onClick: onClick,
        },
        __jsx(StyledButtonClose, null)
    );
};
var _default = ButtonClose;
exports['default'] = _default;

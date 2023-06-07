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
var _excluded = ['title', 'subtitle', 'children'];
var __jsx = _react['default'].createElement;
// const StyledButtonCloseWrapper = styled('div')(({ theme }) => ({
//     display: 'flex',
//     position: 'absolute',
//     top: '50%',
//     right: theme.getSpacing(4),
//     transform: 'translateY(-50%)',
// }))
// const StyledButtonClose = styled('div')(({ theme }) => ({
//     justifyContent: 'end',
//     position: 'relative',
//     cursor: 'pointer',
//     width: 32,
//     height: 32,
//     borderRadius: '100%',
//     border: `2px solid ${theme.colors.primary}`,
//     transition: `transform 0.5s`,
//     "&:before, &:after": {
//         content: '""',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transformOrigin: 'center',
//         width: '60%',
//         height: 2,
//         backgroundColor: theme.colors.primary,
//         transition: `transform 0.5s`,
//         marginTop: -1,
//         marginLeft: '-30%'
//     },
//     "&:before": {
//         transform: 'rotate(45deg)'
//     },
//     "&:after": {
//         transform: 'rotate(-45deg)'
//     },
//     "&:hover:before": {
//         transform: 'rotate(225deg)'
//     },
//     "&:hover:after": {
//         transform: 'rotate(135deg)'
//     },
// }))
var StyledCardHeader = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'CardHeader__StyledCardHeader',
    componentId: 'sc-owitir-0',
})({
    position: 'relative',
    padding: function padding(_ref) {
        var theme = _ref.theme;
        return ''
            .concat(theme.getSpacing(2), 'px ')
            .concat(theme.getSpacing(4), 'px');
    },
    borderBottom: function borderBottom(_ref2) {
        var theme = _ref2.theme;
        return '1px solid '.concat(theme.colors.grey1);
    },
    '& > h1, & > p': {
        margin: 0,
    },
});
var CardHeader = function CardHeader(_ref3) {
    var title = _ref3.title,
        subtitle = _ref3.subtitle,
        children = _ref3.children,
        props = (0, _objectWithoutProperties2['default'])(_ref3, _excluded);
    return __jsx(
        StyledCardHeader,
        props,
        __jsx(
            'div',
            null,
            __jsx('h1', null, title),
            __jsx('p', null, subtitle)
        ),
        children
    );
};
CardHeader.defaultProps = {
    title: '',
    subtitle: '',
};
var _default = CardHeader;
exports['default'] = _default;

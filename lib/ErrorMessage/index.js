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
var StyedErrorMessage = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'ErrorMessage__StyedErrorMessage',
    componentId: 'sc-1hx8bp7-0',
})(function (_ref) {
    var theme = _ref.theme,
        props = _ref.props;
    return (0, _defineProperty2['default'])(
        {
            // display: props.errorMessage ? 'block' : 'none',
            color: theme.colors.danger,
            paddingLeft: theme.getSpacing(1),
        },
        _breakpoint['default'].mediaLG,
        {
            paddingLeft: theme.getSpacing(15),
        }
    );
});
var ErrorMessage = function ErrorMessage(_ref3) {
    var children = _ref3.children,
        props = (0, _objectWithoutProperties2['default'])(_ref3, _excluded);
    return __jsx(
        _react['default'].Fragment,
        null,
        props.errorMessage && __jsx(StyedErrorMessage, props, children)
    );
};
var _default = ErrorMessage;
exports['default'] = _default;

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
var StyledFormControl = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'FormControl__StyledFormControl',
    componentId: 'sc-hfvbly-0',
})({
    marginBottom: function marginBottom(_ref) {
        var theme = _ref.theme;
        return theme.getSpacing(1);
    },
});
var FormControl = function FormControl(_ref2) {
    var children = _ref2.children,
        props = (0, _objectWithoutProperties2['default'])(_ref2, _excluded);
    return __jsx(StyledFormControl, null, children);
};
var _default = FormControl;
exports['default'] = _default;

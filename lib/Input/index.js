'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(
    require('@babel/runtime/helpers/extends')
);
var _objectWithoutProperties2 = _interopRequireDefault(
    require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireWildcard(require('react'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _breakpoint = _interopRequireDefault(require('../constant/breakpoint'));
var _isEmpty = _interopRequireDefault(require('lodash/isEmpty'));
var _FormGroup = _interopRequireDefault(require('../FormGroup'));
var _FormLabel = _interopRequireDefault(require('../FormLabel'));
var _ErrorMessage = _interopRequireDefault(require('../ErrorMessage'));
var _excluded = [
    'label',
    'errorMessage',
    'value',
    'required',
    'onChange',
    'placeholder',
];
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(
        nodeInterop
    ) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (
        obj === null ||
        (typeof obj !== 'object' && typeof obj !== 'function')
    ) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (
            key !== 'default' &&
            Object.prototype.hasOwnProperty.call(obj, key)
        ) {
            var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj['default'] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var __jsx = _react['default'].createElement;
var StyledInput = (0, _styledComponents['default'])('input').withConfig({
    displayName: 'Input__StyledInput',
    componentId: 'sc-yn6yy9-0',
})(function (_ref) {
    var theme = _ref.theme,
        errorMessage = _ref.errorMessage,
        disabled = _ref.disabled;
    return {
        flex: 1,
        outline: 'none',
        borderRadius: theme.radius,
        fontSize: theme.typography.content.fontSize,
        padding: ''
            .concat(theme.getSpacing(1), 'px ')
            .concat(theme.getSpacing(2), 'px'),
        border: '1px solid '.concat(
            (0, _isEmpty['default'])(errorMessage)
                ? theme.colors.grey1
                : theme.colors.danger
        ),
        '&:active, &:focus': {
            border: '1px solid '.concat(theme.colors.primary),
        },
        color: disabled ? theme.colors.grey2 : theme.colors.black,
        backgroundColor: disabled ? theme.colors.grey0 : theme.colors.white,
    };
});
var Input = function Input(_ref2) {
    var label = _ref2.label,
        errorMessage = _ref2.errorMessage,
        value = _ref2.value,
        required = _ref2.required,
        onChange = _ref2.onChange,
        placeholder = _ref2.placeholder,
        props = (0, _objectWithoutProperties2['default'])(_ref2, _excluded);
    return __jsx(
        _react.Fragment,
        null,
        __jsx(
            _FormGroup['default'],
            null,
            __jsx(
                _FormLabel['default'],
                {
                    required: required,
                },
                label
            ),
            __jsx(
                StyledInput,
                (0, _extends2['default'])(
                    {
                        value: value,
                        onChange: onChange,
                        errorMessage: errorMessage,
                        placeholder: placeholder,
                    },
                    props
                )
            )
        ),
        __jsx(
            _ErrorMessage['default'],
            {
                errorMessage: errorMessage,
            },
            errorMessage
        )
    );
};
var _default = Input;
exports['default'] = _default;

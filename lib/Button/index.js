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
var _react = _interopRequireDefault(require('react'));
var _styledComponents = _interopRequireWildcard(require('styled-components'));
var _Icon = _interopRequireDefault(require('../Icon'));
var _useColor2 = require('../../hooks/useColor');
var _excluded = [
    'themeColor',
    'textColor',
    'variant',
    'className',
    'startIcon',
    'endIcon',
    'onClick',
    'isDisabled',
    'isLoading',
    'children',
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
var filledStyle = (0, _styledComponents.css)(
    ['background-color:', ';color:', ';'],
    function (props) {
        return props.$buttonMainColor;
    },
    function (props) {
        return props.$buttonSubColor;
    }
);
var outlinedStyle = (0, _styledComponents.css)(
    [
        'background:',
        ';color:',
        ';border:1px solid ',
        ';&:hover{background:',
        ';}',
    ],
    function (props) {
        return props.$buttonSubColor;
    },
    function (props) {
        return props.$buttonMainColor;
    },
    function (props) {
        return props.$buttonMainColor;
    },
    function (props) {
        return ''.concat(props.$buttonMainColor, '10');
    }
);
var textStyle = (0, _styledComponents.css)(
    ['background:', ';color:', ';'],
    function (props) {
        return props.$buttonSubColor;
    },
    function (props) {
        return props.$buttonMainColor;
    }
);
var disabledStyle = (0, _styledComponents.css)([
    'cursor:not-allowed;&:hover,&:active{opacity:1;}',
]);
var variantMap = {
    filled: filledStyle,
    outlined: outlinedStyle,
    text: textStyle,
};
var StartIcon = _styledComponents['default'].span.withConfig({
    displayName: 'Button__StartIcon',
    componentId: 'sc-chst6h-0',
})(['margin-right:8px;']);
var EndIcon = _styledComponents['default'].span.withConfig({
    displayName: 'Button__EndIcon',
    componentId: 'sc-chst6h-1',
})(['margin-left:8px;']);
var StyledButton = _styledComponents['default'].button.withConfig({
    displayName: 'Button__StyledButton',
    componentId: 'sc-chst6h-2',
})(
    [
        'border:none;outline:none;min-width:100px;height:36px;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:',
        'px;cursor:pointer;transition:color 0.2s,background-color 0.2s,border 0.2s,opacity 0.2s ease-in-out;&:hover{opacity:0.9;}&:active{opacity:0.7;}',
        ' &:disabled{',
        '}',
    ],
    function (_ref) {
        var theme = _ref.theme;
        return theme.radius;
    },
    function (props) {
        return variantMap[props.$variant] || variantMap.filled;
    },
    disabledStyle
);

/**
 * `Button` 元件代表一個可點擊的按鈕，在使用者點擊之後會觸發相對應的業務邏輯。
 */
var Button = function Button(_ref2) {
    var themeColor = _ref2.themeColor,
        textColor = _ref2.textColor,
        variant = _ref2.variant,
        className = _ref2.className,
        startIcon = _ref2.startIcon,
        endIcon = _ref2.endIcon,
        onClick = _ref2.onClick,
        isDisabled = _ref2.isDisabled,
        isLoading = _ref2.isLoading,
        children = _ref2.children,
        props = (0, _objectWithoutProperties2['default'])(_ref2, _excluded);
    var _useColor = (0, _useColor2.useColor)(),
        makeColor = _useColor.makeColor;
    var buttonMainColor = makeColor({
        themeColor: themeColor,
        isDisabled: isDisabled,
    });
    var buttonSubColor = makeColor({
        themeColor: textColor,
        isDisabled: isDisabled,
    });
    return __jsx(
        StyledButton,
        (0, _extends2['default'])(
            {
                type: 'button',
                $variant: variant,
                className: className,
                disabled: isDisabled,
                onClick: onClick,
                $buttonMainColor: buttonMainColor,
                $buttonSubColor: buttonSubColor,
            },
            props
        ),
        isLoading &&
            __jsx(_Icon['default'], {
                style: {
                    marginRight: '8px',
                },
                icon: 'fa-sync fa-spin',
            }),
        startIcon && __jsx(StartIcon, null, startIcon),
        __jsx('span', null, children),
        endIcon && __jsx(EndIcon, null, endIcon)
    );
};

// 定義 Button 元件的屬性(prop)類型

Button.defaultProps = {
    variant: 'filled',
    themeColor: 'primary',
    textColor: 'white',
    className: null,
    isDisabled: false,
    isLoading: false,
    startIcon: null,
    endIcon: null,
    onClick: function onClick() {},
};
var _default = Button;
exports['default'] = _default;

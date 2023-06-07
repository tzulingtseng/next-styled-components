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
var _useColor2 = require('@/hooks/useColor');
var _excluded = [
    'size',
    'themeColor',
    'isDisabled',
    'checkedChildren',
    'unCheckedChildren',
    'onChange',
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
// const StyledSwitch = styled('input')({
//     opacity: 0,
//     width: 0,
//     height: 0,
// });
// 背景框
var SwitchButton = _styledComponents['default'].label.withConfig({
    displayName: 'Switch__SwitchButton',
    componentId: 'sc-10y4xim-0',
})(
    [
        'width:',
        'px;height:',
        'px;color:#fff;border-radius:50px;box-sizing:content-box;display:inline-flex;cursor:',
        ';position:relative;transition:background-color .2s ease;border:3px solid ',
        ';background:',
        ';',
    ],
    function (props) {
        return props.$switchWidth;
    },
    function (props) {
        return props.$thumbSize;
    },
    function (props) {
        return props.$isDisabled ? 'not-allowed' : 'pointer';
    },
    function (props) {
        return props.$switchColor;
    },
    function (props) {
        return props.$switchColor;
    }
);

// 控制項
var Thumb = _styledComponents['default'].div.withConfig({
    displayName: 'Switch__Thumb',
    componentId: 'sc-10y4xim-1',
})(
    [
        'width:',
        'px;height:',
        'px;position:absolute;top:0;border-radius:100%;transition:margin-left .2s ease;boxShadow:0px 0px 2px rgba(0,0,0,0.7);background-color:',
        ';',
        '',
    ],
    function (props) {
        return props.$thumbSize;
    },
    function (props) {
        return props.$thumbSize;
    },
    function (props) {
        return props.$thumbColor;
    },
    function (props) {
        if (props.$isChecked) {
            return 'left: '.concat(
                props.$switchWidth - props.$thumbSize,
                'px;'
            );
        }
        return 'left: 0px;';
    }
);

// 背景框內的字
var Label = _styledComponents['default'].div.withConfig({
    displayName: 'Switch__Label',
    componentId: 'sc-10y4xim-2',
})(
    [
        'position:absolute;white-space:nowrap;font-size:14px;top:50%;transform:translateY(-50%);padding:0px ',
        'px;',
        '',
    ],
    function (props) {
        return props.$padding;
    },
    function (props) {
        if (props.$isChecked) {
            return 'right: '.concat(
                props.$switchWidth - props.$labelWidth,
                'px;'
            );
        }
        return '\n        right: 0px;\n        ';
    }
);

/**
 * `Switch` 元件是一個開關的選擇器。
 * 在我們表示開關狀態，或兩種狀態之間的切換時，很適合使用。和 Checkbox 的區別是， Checkbox 一般只用來標記狀態是否被選取，
 * 需要提交之後才會生效，而 Switch 則會在觸發的當下直接觸發狀態的改變。
 */
var Switch = function Switch(_ref) {
    var _labelRef$current2;
    var size = _ref.size,
        themeColor = _ref.themeColor,
        isDisabled = _ref.isDisabled,
        checkedChildren = _ref.checkedChildren,
        unCheckedChildren = _ref.unCheckedChildren,
        onChange = _ref.onChange,
        props = (0, _objectWithoutProperties2['default'])(_ref, _excluded);
    var _useColor = (0, _useColor2.useColor)(),
        makeColor = _useColor.makeColor;
    var _useState = (0, _react.useState)(false),
        isChecked = _useState[0],
        setIsChecked = _useState[1];
    var _useState2 = (0, _react.useState)(0),
        labelWidth = _useState2[0],
        setLabelWidth = _useState2[1];
    var labelRef = (0, _react.useRef)(null);
    var switchColor = makeColor({
        themeColor: themeColor,
        isDisabled: !isChecked,
    });
    var thumbColor = makeColor({
        themeColor: 'white',
    });
    var thumbSize = size === 'small' ? 12 : 18;
    var switchWidth = thumbSize + labelWidth;
    var handleChange = function handleChange() {
        return setIsChecked(function (prev) {
            return !prev;
        });
    };
    (0, _react.useLayoutEffect)(
        function () {
            var _labelRef$current;
            var minLabelSize = thumbSize * 1.2;
            var currentLabelWidth =
                labelRef === null || labelRef === void 0
                    ? void 0
                    : (_labelRef$current = labelRef.current) === null ||
                      _labelRef$current === void 0
                    ? void 0
                    : _labelRef$current.clientWidth;
            if (currentLabelWidth) {
                setLabelWidth(
                    currentLabelWidth < minLabelSize
                        ? minLabelSize
                        : currentLabelWidth
                );
            }
        },
        [
            labelRef === null || labelRef === void 0
                ? void 0
                : (_labelRef$current2 = labelRef.current) === null ||
                  _labelRef$current2 === void 0
                ? void 0
                : _labelRef$current2.clientWidth,
            thumbSize,
        ]
    );
    return __jsx(
        SwitchButton,
        (0, _extends2['default'])(
            {
                $switchWidth: switchWidth,
                $thumbSize: thumbSize,
                $isDisabled: isDisabled,
                $switchColor: switchColor,
                onClick: isDisabled ? null : (onChange = handleChange),
            },
            props
        ),
        __jsx(Thumb, {
            $thumbSize: thumbSize,
            $thumbColor: thumbColor,
            $isChecked: isChecked,
            $switchWidth: switchWidth,
        }),
        __jsx(
            Label,
            {
                ref: labelRef,
                $padding: thumbSize / 3,
                $labelWidth: labelWidth,
                $switchWidth: switchWidth,
                $isChecked: isChecked,
            },
            isChecked ? checkedChildren : unCheckedChildren
        )
    );
};
Switch.defaultProps = {
    isChecked: false,
    size: 'default',
    isDisabled: false,
    themeColor: 'primary',
    checkedChildren: '開啟',
    unCheckedChildren: '關閉',
    onChange: function onChange() {},
};
var _default = Switch;
exports['default'] = _default;

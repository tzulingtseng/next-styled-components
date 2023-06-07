'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(
    require('@babel/runtime/helpers/extends')
);
var _toConsumableArray2 = _interopRequireDefault(
    require('@babel/runtime/helpers/toConsumableArray')
);
var _objectWithoutProperties2 = _interopRequireDefault(
    require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireWildcard(require('react'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _isEmpty = _interopRequireDefault(require('lodash/isEmpty'));
var _Pop = _interopRequireDefault(require('../Pop'));
var _Icon = _interopRequireDefault(require('../Icon'));
var _Card = _interopRequireDefault(require('../Card'));
var _CardBody = _interopRequireDefault(require('../CardBody'));
var _FormGroup = _interopRequireDefault(require('../FormGroup'));
var _FormLabel = _interopRequireDefault(require('../FormLabel'));
var _Typography = _interopRequireDefault(require('../Typography'));
var _ErrorMessage = _interopRequireDefault(require('../ErrorMessage'));
var _excluded = [
    'items',
    'label',
    'required',
    'onChange',
    'placeholder',
    'errorMessage',
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
var getBorderStyle = function getBorderStyle(_ref) {
    var theme = _ref.theme,
        errorMessage = _ref.errorMessage,
        open = _ref.open;
    if (!(0, _isEmpty['default'])(errorMessage)) {
        return theme.colors.danger;
    }
    if (open) {
        return theme.colors.primary;
    }
    console.log(
        'TCL: getBorderStyle -> theme.colors.grey1',
        theme.colors.grey1
    );
    return theme.colors.grey1;
};
var StyledSelect = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'Select__StyledSelect',
    componentId: 'sc-z56glg-0',
})({
    flex: 1,
    display: 'flex',
    cursor: 'pointer',
    position: 'relative',
    justifyContent: 'space-between',
    borderRadius: function borderRadius(_ref2) {
        var theme = _ref2.theme;
        return theme.radius;
    },
    fontSize: function fontSize(_ref3) {
        var theme = _ref3.theme;
        return theme.typography.content.fontSize;
    },
    border: function border(_ref4) {
        var theme = _ref4.theme,
            errorMessage = _ref4.errorMessage,
            open = _ref4.open;
        return '1px solid '.concat(
            getBorderStyle({
                open: open,
                theme: theme,
                errorMessage: errorMessage,
            })
        );
    },
    color: function color(_ref5) {
        var theme = _ref5.theme,
            disabled = _ref5.disabled;
        return disabled ? theme.colors.grey2 : theme.colors.black;
    },
    backgroundColor: function backgroundColor(_ref6) {
        var theme = _ref6.theme,
            disabled = _ref6.disabled;
        return disabled ? theme.colors.grey0 : theme.colors.white;
    },
});
var StyledTypography = (0, _styledComponents['default'])(
    _Typography['default']
).withConfig({
    displayName: 'Select__StyledTypography',
    componentId: 'sc-z56glg-1',
})({
    position: 'absolute',
    padding: function padding(_ref7) {
        var theme = _ref7.theme;
        return ''
            .concat(theme.getSpacing(1), 'px ')
            .concat(theme.getSpacing(2), 'px');
    },
});
var Options = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'Select__Options',
    componentId: 'sc-z56glg-2',
})({
    cursor: 'pointer',
    padding: function padding(_ref8) {
        var theme = _ref8.theme;
        return theme.getSpacing(2);
    },
    '&:hover': {
        backgroundColor: function backgroundColor(_ref9) {
            var theme = _ref9.theme;
            return theme.colors.primary;
        },
        color: function color(_ref10) {
            var theme = _ref10.theme;
            return theme.colors.white;
        },
    },
});
var OptionBox = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'Select__OptionBox',
    componentId: 'sc-z56glg-3',
})({
    overflow: 'hidden',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.17)',
    borderRadius: function borderRadius(_ref11) {
        var theme = _ref11.theme;
        return theme.radius;
    },
    backgroundColor: function backgroundColor(_ref12) {
        var theme = _ref12.theme;
        return theme.colors.white;
    },
    border: function border(_ref13) {
        var theme = _ref13.theme;
        return '1px solid '.concat(theme.colors.grey1);
    },
});
var StyledInput = (0, _styledComponents['default'])('input').withConfig({
    displayName: 'Select__StyledInput',
    componentId: 'sc-z56glg-4',
})({
    opacity: 0,
    cursor: 'pointer',
    padding: function padding(_ref14) {
        var theme = _ref14.theme;
        return ''
            .concat(theme.getSpacing(1), 'px ')
            .concat(theme.getSpacing(2), 'px');
    },
});
var StyledIcon = (0, _styledComponents['default'])(_Icon['default']).withConfig(
    {
        displayName: 'Select__StyledIcon',
        componentId: 'sc-z56glg-5',
    }
)({
    right: 0,
    position: 'absolute',
    padding: function padding(_ref15) {
        var theme = _ref15.theme;
        return ''.concat(theme.getSpacing(1), 'px');
    },
});
var handleClick = function handleClick(open, setOpen) {
    return function () {
        setOpen(!open);
    };
};
var handleSelectItem = function handleSelectItem(_ref16) {
    var setValue = _ref16.setValue,
        setSelectedItem = _ref16.setSelectedItem,
        setOpen = _ref16.setOpen,
        onChange = _ref16.onChange;
    return function (item) {
        return function (e) {
            setOpen(false);
            setSelectedItem(item);
            onChange(e);
        };
    };
};
var handleOnBlur = function handleOnBlur(setOpen) {
    return function () {
        setOpen(false);
    };
};
var SelectTest = function SelectTest(_ref17) {
    var items = _ref17.items,
        label = _ref17.label,
        required = _ref17.required,
        onChange = _ref17.onChange,
        placeholder = _ref17.placeholder,
        errorMessage = _ref17.errorMessage,
        props = (0, _objectWithoutProperties2['default'])(_ref17, _excluded);
    var menuEle = (0, _react.useRef)(null);
    var _useState = (0, _react.useState)(false),
        open = _useState[0],
        setOpen = _useState[1];
    var _useState2 = (0, _react.useState)(null),
        value = _useState2[0],
        setValue = _useState2[1];
    // console.log('value', value);
    var _useState3 = (0, _react.useState)({}),
        selectedItem = _useState3[0],
        setSelectedItem = _useState3[1];
    var onSelectClick = handleClick(open, setOpen);
    var onSelectItem = handleSelectItem({
        setSelectedItem: setSelectedItem,
        setOpen: setOpen,
        onChange: onChange,
        setValue: setValue,
    });
    var onBlurClick = handleOnBlur(setOpen);
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
                'div',
                {
                    ref: menuEle,
                    onClick: onSelectClick,
                },
                __jsx(
                    StyledSelect,
                    {
                        open: open,
                        errorMessage: errorMessage,
                    },
                    __jsx(
                        StyledTypography,
                        null,
                        selectedItem.label || placeholder
                    ),
                    __jsx(StyledIcon, {
                        icon: 'fa-angle-down',
                        size: 12,
                    }),
                    __jsx(StyledInput, {
                        type: 'text',
                        value: value,
                        onChange: onChange,
                        onBlur: onBlurClick,
                    })
                )
            ),
            __jsx(
                _Pop['default'],
                {
                    open: open,
                    anchorEl: menuEle,
                },
                __jsx(
                    OptionBox,
                    null,
                    items &&
                        items.map(function (item, index) {
                            var key = 'select_item_'
                                .concat(item.label, '_')
                                .concat(item.vale, '_')
                                .concat(index);
                            return __jsx(
                                Options,
                                {
                                    key: key,
                                    onClick: onSelectItem(item),
                                },
                                item.label
                            );
                        })
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
var handleOnChange = function handleOnChange(values, setValue) {
    return function (_ref18) {
        var value = _ref18.target.value;
        var newValues = values.includes(value)
            ? values.filter(function (selectedValue) {
                  return selectedValue !== value;
              })
            : [value].concat((0, _toConsumableArray2['default'])(values));
        setValue(newValues);
    };
};
var Select = function Select(_ref19) {
    var props = (0, _extends2['default'])({}, _ref19);
    // TODO:FIX values not found
    var _useState4 = (0, _react.useState)([]),
        values = _useState4[0],
        setValues = _useState4[1];
    // console.log('props', props);

    var onChange = handleOnChange(values, setValues);
    return __jsx(
        SelectTest,
        (0, _extends2['default'])({}, props, {
            values: values,
            onChange: onChange,
        })
    );
};
var _default = Select;
exports['default'] = _default;

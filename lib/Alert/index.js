'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(
    require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireWildcard(require('react'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _Card = _interopRequireDefault(require('../Card'));
var _CardHeader = _interopRequireDefault(require('../CardHeader'));
var _CardBody = _interopRequireDefault(require('../CardBody'));
var _CardFooter = _interopRequireDefault(require('../CardFooter'));
var _Button = _interopRequireDefault(require('../Button'));
var _Icon = _interopRequireDefault(require('../Icon'));
var _Mask = _interopRequireDefault(require('../Mask'));
var _ButtonClose = _interopRequireDefault(require('../ButtonClose'));
var _excluded = [
    'alertDialogOpen',
    'children',
    'title',
    'onCancel',
    'onConfirm',
    'confirmText',
    'cancelText',
    'type',
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
var ICON_MAP = {
    info: 'fa-info-circle',
    success: 'fa-check-circle',
    warning: 'fa-exclamation-circle',
    danger: 'fa-exclamation-triangle',
};
var getIconColor = function getIconColor(theme) {
    return {
        info: theme.colors.info,
        success: theme.colors.success,
        danger: theme.colors.danger,
        warning: theme.colors.warning,
    };
};
var StyledIcon = (0, _styledComponents['default'])(_Icon['default']).withConfig(
    {
        displayName: 'Alert__StyledIcon',
        componentId: 'sc-j3fa7q-0',
    }
)(function (_ref) {
    var theme = _ref.theme,
        type = _ref.type;
    return {
        fontSize: 60,
        display: 'block',
        textAlign: 'center',
        marginBottom: theme.getSpacing(1),
        color: getIconColor(theme)[type],
    };
});
var StyledDialog = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'Alert__StyledDialog',
    componentId: 'sc-j3fa7q-1',
})({
    position: 'relative',
});
var footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};
var Alert = function Alert(_ref2) {
    var alertDialogOpen = _ref2.alertDialogOpen,
        children = _ref2.children,
        title = _ref2.title,
        onCancel = _ref2.onCancel,
        onConfirm = _ref2.onConfirm,
        confirmText = _ref2.confirmText,
        cancelText = _ref2.cancelText,
        type = _ref2.type,
        props = (0, _objectWithoutProperties2['default'])(_ref2, _excluded);
    if (!alertDialogOpen) return __jsx(_react.Fragment, null);
    return __jsx(
        _Mask['default'],
        null,
        __jsx(
            StyledDialog,
            null,
            __jsx(
                _Card['default'],
                {
                    style: props.style,
                },
                __jsx(
                    _CardHeader['default'],
                    {
                        title: title,
                    },
                    __jsx(_ButtonClose['default'], {
                        onClick: onCancel,
                    })
                ),
                __jsx(
                    _CardBody['default'],
                    null,
                    __jsx(StyledIcon, {
                        type: type,
                        icon: ICON_MAP[type],
                    }),
                    children
                ),
                __jsx(
                    _CardFooter['default'],
                    {
                        style: footerStyle,
                    },
                    __jsx(
                        _Button['default'],
                        {
                            type: 'outline',
                            onClick: onCancel,
                        },
                        cancelText
                    ),
                    __jsx(
                        _Button['default'],
                        {
                            type: 'filled',
                            onClick: onConfirm,
                        },
                        confirmText
                    )
                )
            )
        )
    );
};
Alert.prototype = {
    alertDialogOpen: _propTypes['default'].bool,
    title: _propTypes['default'].string,
    subtitle: _propTypes['default'].string,
    confirmText: _propTypes['default'].string,
    cancelText: _propTypes['default'].string,
    type: _propTypes['default'].oneOf(['info', 'success', 'danger', 'warning']),
    onConfirm: _propTypes['default'].func,
    onCancel: _propTypes['default'].func,
    onEnter: _propTypes['default'].func,
    onExited: _propTypes['default'].func,
};
Alert.defaultProps = {
    alertDialogOpen: false,
    title: '警示信息',
    subtitle: '',
    confirmText: '確認',
    cancelText: '取消',
    type: 'info',
    onConfirm: function onConfirm() {
        return false;
    },
    onCancel: function onCancel() {
        return false;
    },
    onEnter: function onEnter() {
        return false;
    },
    onExited: function onExited() {
        return false;
    },
};
var _default = Alert;
exports['default'] = _default;

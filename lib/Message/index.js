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
var _defineProperty2 = _interopRequireDefault(
    require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _Icon = _interopRequireDefault(require('../Icon'));
var _Typography = _interopRequireDefault(require('../Typography'));
var _excluded = ['open', 'onClose', 'duration', 'content', 'type'];
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                  (0, _defineProperty2['default'])(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(
                      target,
                      key,
                      Object.getOwnPropertyDescriptor(source, key)
                  );
              });
    }
    return target;
}
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
        warning: theme.colors.warning,
        danger: theme.colors.danger,
    };
};
var StyledIcon = (0, _styledComponents['default'])(_Icon['default']).withConfig(
    {
        displayName: 'Message__StyledIcon',
        componentId: 'sc-1vqzl1t-0',
    }
)(function (_ref) {
    var theme = _ref.theme,
        type = _ref.type;
    return {
        marginRight: theme.getSpacing(1),
        color: getIconColor(theme)[type],
    };
});
var StyledMessageContainer = (0, _styledComponents['default'])(
    'div'
).withConfig({
    displayName: 'Message__StyledMessageContainer',
    componentId: 'sc-1vqzl1t-1',
})(function () {
    return {
        justifyContent: 'center',
        position: 'fixed',
        display: 'flex',
        width: '100vw',
        left: 0,
        top: 0,
    };
});
var activeStyle = function activeStyle(active) {
    return active
        ? {
              top: 20,
              opacity: 1,
          }
        : {};
};
var StyledMessage = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'Message__StyledMessage',
    componentId: 'sc-1vqzl1t-2',
})(function (_ref2) {
    var theme = _ref2.theme,
        active = _ref2.active;
    return _objectSpread(
        {
            position: 'fixed',
            top: 0,
            opacity: 0,
            transition: 'all .3s ease',
            zIndex: 1000,
            minWidth: 300,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.17)',
            borderRadius: theme.radius,
            backgroundColor: theme.colors.white,
            border: '1px solid '.concat(theme.colors.grey1),
            padding: ''
                .concat(theme.getSpacing(1), 'px ')
                .concat(theme.getSpacing(2), 'px'),
        },
        activeStyle(active)
    );
});
var Message = function Message(_ref3) {
    var open = _ref3.open,
        onClose = _ref3.onClose,
        duration = _ref3.duration,
        content = _ref3.content,
        type = _ref3.type,
        props = (0, _objectWithoutProperties2['default'])(_ref3, _excluded);
    (0, _react.useEffect)(
        function () {
            if (open) {
                setTimeout(function () {
                    onClose();
                }, duration);
            }
        },
        [open]
    );
    return __jsx(
        StyledMessageContainer,
        null,
        __jsx(
            StyledMessage,
            (0, _extends2['default'])({}, props, {
                active: open,
            }),
            __jsx(StyledIcon, {
                type: type,
                icon: ICON_MAP[type],
            }),
            __jsx(_Typography['default'], null, content)
        )
    );
};
Message.prototype = {
    open: _propTypes['default'].bool,
    content: _propTypes['default'].string,
    duration: _propTypes['default'].number,
    type: _propTypes['default'].oneOf(['info', 'success', 'warning', 'danger']),
};
Message.defaultProps = {
    open: false,
    content: '',
    type: 'info',
    duration: 2500,
};
var _default = Message;
exports['default'] = _default;

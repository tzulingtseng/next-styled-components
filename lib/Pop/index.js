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
var _excluded = ['children', 'open', 'anchorEl'];
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
var StyledPop = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'Pop__StyledPop',
    componentId: 'sc-btg4ad-0',
})({
    zIndex: 1000,
    overflow: 'hidden',
    position: 'absolute',
    transition: 'all .1s ease',
    height: function height(_ref) {
        var _height = _ref.height;
        return _height;
    },
    opacity: function opacity(_ref2) {
        var open = _ref2.open;
        return open ? 1 : 0;
    },
    padding: function padding(_ref3) {
        var theme = _ref3.theme;
        return theme.getSpacing(1);
    },
    top: function top(_ref4) {
        var theme = _ref4.theme,
            position = _ref4.position;
        return position.top - theme.getSpacing(2);
    },
    left: function left(_ref5) {
        var theme = _ref5.theme,
            position = _ref5.position;
        return position.left;
    },
});
var onClose = function onClose(setHeight, handleGetClientHeight) {
    setHeight(handleGetClientHeight());
    setTimeout(function () {
        setHeight(0);
    }, 100);
};
var onOpen = function onOpen(setHeight) {
    setTimeout(function () {
        setHeight('auto');
    }, 100);
};
var getClientHeight = function getClientHeight(refEle) {
    return function () {
        return refEle ? refEle.current.clientHeight : 0;
    };
};
var Pop = function Pop(_ref6) {
    var children = _ref6.children,
        open = _ref6.open,
        anchorEl = _ref6.anchorEl,
        props = (0, _objectWithoutProperties2['default'])(_ref6, _excluded);
    var refEle = (0, _react.useRef)(null);
    var _useState = (0, _react.useState)(0),
        height = _useState[0],
        setHeight = _useState[1];
    var _useState2 = (0, _react.useState)({
            left: 0,
            top: 0,
        }),
        position = _useState2[0],
        setPosition = _useState2[1];
    var setHeightHandler = (0, _react.useCallback)(
        function () {
            var handleGetClientHeight = getClientHeight(refEle);
            setHeight(handleGetClientHeight());
            open
                ? onOpen(setHeight)
                : onClose(setHeight, handleGetClientHeight);
        },
        [refEle, open]
    );
    (0, _react.useEffect)(
        function () {
            if (anchorEl !== null) {
                var _anchorEl$current = anchorEl.current,
                    left = _anchorEl$current.offsetLeft,
                    top = _anchorEl$current.offsetTop;
                setPosition({
                    left: left,
                    top: top,
                });
            }
            setHeightHandler();
        },
        [anchorEl, setHeightHandler]
    );
    return __jsx(
        StyledPop,
        {
            position: position,
            open: open,
            height: height,
        },
        __jsx(
            'div',
            {
                ref: refEle,
            },
            children
        )
    );
};
Pop['default'] = {
    anchorEl: null,
};
var _default = Pop;
exports['default'] = _default;

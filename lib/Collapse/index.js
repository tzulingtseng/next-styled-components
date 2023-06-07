'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _react = _interopRequireWildcard(require('react'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
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
var StyledContent = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'Collapse__StyledContent',
    componentId: 'sc-15bum4y-0',
})(function (_ref) {
    var theme = _ref.theme,
        open = _ref.open,
        height = _ref.height;
    return {
        height: height,
        overflow: 'hidden',
        transition: 'all .2s ease',
    };
});
var getClientHeight = function getClientHeight(refEle) {
    return function () {
        return refEle ? refEle.current.clientHeight : 0;
    };
};
var onOpen = function onOpen(setHeight) {
    setTimeout(function () {
        setHeight('auto');
    }, 100);
};
var onClose = function onClose(setHeight, handleGetClientHeight) {
    setHeight(handleGetClientHeight());
    setTimeout(function () {
        setHeight(0);
    }, 100);
};
var Collapse = function Collapse(_ref2) {
    var open = _ref2.open,
        children = _ref2.children;
    var refEle = (0, _react.useRef)(null);
    var _useState = (0, _react.useState)(0),
        height = _useState[0],
        setHeight = _useState[1];
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
            setHeightHandler();
        },
        [setHeightHandler]
    );
    return __jsx(
        StyledContent,
        {
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
Collapse.defaultProps = {
    open: false,
};
var _default = Collapse;
exports['default'] = _default;

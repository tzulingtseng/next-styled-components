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
var StyledStepsContainer = _styledComponents['default'].div.withConfig({
    displayName: 'Steps__StyledStepsContainer',
    componentId: 'sc-240a15-0',
})([
    'width:100%;display:flex;align-items:center;justify-content:space-between;',
]);

// 圓圈樣式
var StyledStep = (0, _styledComponents['default'])('span').withConfig({
    displayName: 'Steps__StyledStep',
    componentId: 'sc-240a15-1',
})(function (_ref) {
    var theme = _ref.theme,
        active = _ref.active,
        step = _ref.step;
    return {
        width: 30,
        height: 30,
        display: 'block',
        borderRadius: '100%',
        lineHeight: '30px',
        textAlign: 'center',
        color: active.includes(step) ? theme.colors.white : theme.colors.grey4,
        backgroundColor: active.includes(step)
            ? theme.colors.primary
            : theme.colors.grey1,
    };
});

// 橫槓樣式
var StyledSeparate = _styledComponents['default'].div.withConfig({
    displayName: 'Steps__StyledSeparate',
    componentId: 'sc-240a15-2',
})(function (_ref2) {
    var theme = _ref2.theme,
        hide = _ref2.hide;
    return {
        flex: 1,
        height: 1,
        border: '5px solid #fff',
        display: hide ? 'none' : 'block',
        backgroundColor: theme.colors.grey1,
        borderBottom: '1px solid '.concat(theme.colors.grey1),
    };
});
var Steps = function Steps(_ref3) {
    var steps = _ref3.steps,
        active = _ref3.active;
    return __jsx(
        StyledStepsContainer,
        null,
        steps.map(function (item, i) {
            return __jsx(
                _react.Fragment,
                {
                    key: i,
                },
                __jsx(
                    StyledStep,
                    {
                        active: active,
                        step: item,
                    },
                    item
                ),
                i !== steps.length - 1 && __jsx(StyledSeparate, null)
            );
        })
    );
};
var _default = Steps;
exports['default'] = _default;

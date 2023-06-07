'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(
    require('@babel/runtime/helpers/objectWithoutProperties')
);
var _defineProperty2 = _interopRequireDefault(
    require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
require('@fortawesome/fontawesome-free/css/all.css');
var _excluded = ['icon'];
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
var StyledIcon = (0, _styledComponents['default'])('span').withConfig({
    displayName: 'Icon__StyledIcon',
    componentId: 'sc-dlizcg-0',
})(function (_ref) {
    var fontSize = _ref.size,
        style = _ref.style;
    return _objectSpread(
        {
            fontSize: fontSize,
        },
        style
    );
});
var Icon = function Icon(_ref2) {
    var icon = _ref2.icon,
        props = (0, _objectWithoutProperties2['default'])(_ref2, _excluded);
    return __jsx(
        StyledIcon,
        props,
        __jsx('i', {
            className: 'fas '.concat(icon),
        })
    );
};
Icon.defaultProps = {
    icon: '',
    size: 16,
    style: {},
};
var _default = Icon;
exports['default'] = _default;

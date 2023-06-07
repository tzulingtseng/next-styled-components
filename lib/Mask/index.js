'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _styledComponents = _interopRequireDefault(require('styled-components'));
var Mask = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'Mask',
    componentId: 'sc-1y3oxww-0',
})({
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1000,
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
});
var _default = Mask;
exports['default'] = _default;

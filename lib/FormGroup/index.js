'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var _defineProperty2 = _interopRequireDefault(
    require('@babel/runtime/helpers/defineProperty')
);
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _breakpoint = _interopRequireDefault(require('../constant/breakpoint'));
var FormGroup = (0, _styledComponents['default'])('div').withConfig({
    displayName: 'FormGroup',
    componentId: 'sc-1129gvc-0',
})(function () {
    return (0, _defineProperty2['default'])(
        {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        _breakpoint['default'].mediaLG,
        {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            boxSizing: 'border-box',
            justifyContent: 'center',
        }
    );
});
var _default = FormGroup;
exports['default'] = _default;

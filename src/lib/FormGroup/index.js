import styled from 'styled-components';
import breakpoint from '../constant/breakpoint';

const FormGroup = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    [breakpoint.mediaLG]: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        boxSizing: 'border-box',
        justifyContent: 'center',
    },
}));

export default FormGroup;

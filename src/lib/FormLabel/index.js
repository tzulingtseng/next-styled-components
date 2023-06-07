import React from 'react';
import styled from 'styled-components';
import breakpoint from '../constant/breakpoint';

const StyledLabel = styled('label')(({ theme, required }) => ({
    // disPlay: isEmpty(children) ? 'none' : 'initial',
    minWidth: 110,
    position: 'relative',
    color: theme.colors.grey4,
    padding: `${theme.getSpacing(1)}px ${theme.getSpacing(1)}px`,
    '&::after': {
        position: 'absolute',
        content: required ? '"*"' : '""',
        color: theme.colors.danger,
        marginLeft: 2,
    },
    [breakpoint.mediaLG]: {
        minWidth: 110,
        padding: `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
        '&::after': {
            left: 2,
        },
    },
}));

const FormLabel = ({ children, ...props }) => {
    return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default FormLabel;

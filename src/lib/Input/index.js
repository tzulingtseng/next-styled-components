import React, { Fragment } from 'react';
import styled from 'styled-components';
import breakpoint from '../constant/breakpoint';
import isEmpty from 'lodash/isEmpty';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import ErrorMessage from '../ErrorMessage';

const StyledInput = styled('input')(({ theme, errorMessage, disabled }) => ({
    flex: 1,
    outline: 'none',
    borderRadius: theme.radius,
    fontSize: theme.typography.content.fontSize,
    padding: `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
    border: `1px solid ${
        isEmpty(errorMessage) ? theme.colors.grey1 : theme.colors.danger
    }`,
    '&:active, &:focus': {
        border: `1px solid ${theme.colors.primary}`,
    },
    color: disabled ? theme.colors.grey2 : theme.colors.black,
    backgroundColor: disabled ? theme.colors.grey0 : theme.colors.white,
}));

const Input = ({
    label,
    errorMessage,
    value,
    required,
    onChange,
    placeholder,
    ...props
}) => {
    return (
        <Fragment>
            <FormGroup>
                <FormLabel required={required}>{label}</FormLabel>
                <StyledInput
                    value={value}
                    onChange={onChange}
                    errorMessage={errorMessage}
                    placeholder={placeholder}
                    {...props}
                ></StyledInput>
            </FormGroup>
            <ErrorMessage errorMessage={errorMessage}>
                {errorMessage}
            </ErrorMessage>
        </Fragment>
    );
};

export default Input;

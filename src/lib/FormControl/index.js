import React from 'react';
import styled from 'styled-components';

const StyledFormControl = styled('div')({
    marginBottom: ({ theme }) => theme.getSpacing(1),
});

const FormControl = ({ children, ...props }) => {
    return <StyledFormControl>{children}</StyledFormControl>;
};

export default FormControl;

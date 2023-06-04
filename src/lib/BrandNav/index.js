import React from 'react'
import styled from 'styled-components';

const StyledBrandNav = styled('div')(({ theme }) => ({
    height: 60,
    width: '100%',
    backgroundColor: theme.colors.grey4,
}))

const BrandNav = ({ children, ...props }) => {
    return (
        <StyledBrandNav style={props}>{children}</StyledBrandNav>
    )
}

export default BrandNav
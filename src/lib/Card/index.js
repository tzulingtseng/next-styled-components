import React from 'react'
import styled from 'styled-components';

const StyledCard = styled('div')(({ theme, style }) => ({
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    borderRadius: theme.radius,
    marginBottom: theme.getSpacing(2),
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.grey1}`,
    ...style
}))

const Card = ({ children, ...props }) => {
    return (
        <StyledCard {...props}>{children}</StyledCard>
    )
}

export default Card
import React from 'react'
import styled from 'styled-components';
import propTypes from 'prop-types';

// const StyledButtonCloseWrapper = styled('div')(({ theme }) => ({
//     display: 'flex',
//     position: 'absolute',
//     top: '50%',
//     right: theme.getSpacing(4),
//     transform: 'translateY(-50%)',
// }))
// const StyledButtonClose = styled('div')(({ theme }) => ({
//     justifyContent: 'end',
//     position: 'relative',
//     cursor: 'pointer',
//     width: 32,
//     height: 32,
//     borderRadius: '100%',
//     border: `2px solid ${theme.colors.primary}`,
//     transition: `transform 0.5s`,
//     "&:before, &:after": {
//         content: '""',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transformOrigin: 'center',
//         width: '60%',
//         height: 2,
//         backgroundColor: theme.colors.primary,
//         transition: `transform 0.5s`,
//         marginTop: -1,
//         marginLeft: '-30%'
//     },
//     "&:before": {
//         transform: 'rotate(45deg)'
//     },
//     "&:after": {
//         transform: 'rotate(-45deg)'
//     },
//     "&:hover:before": {
//         transform: 'rotate(225deg)'
//     },
//     "&:hover:after": {
//         transform: 'rotate(135deg)'
//     },
// }))

const StyledCardHeader = styled('div')({
    position: 'relative',
    padding: ({ theme }) => `${theme.getSpacing(2)}px ${theme.getSpacing(4)}px`,
    borderBottom: ({ theme }) => `1px solid ${theme.colors.grey1}`,
    '& > h1, & > p': {
        margin: 0
    }
});

const CardHeader = ({ title, subtitle, children, ...props }) => {
    return (
        <StyledCardHeader {...props}>
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            {children}
        </StyledCardHeader>
    )
}

CardHeader.propTypes = {
    title: propTypes.string,
    subtitle: propTypes.string,
}

CardHeader.defaultProps = {
    title: '',
    subtitle: '',
}


export default CardHeader
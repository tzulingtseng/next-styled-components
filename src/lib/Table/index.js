import React from 'react'
import styled from 'styled-components';

const StyledTable = styled('table')({
    width: '100%',
    ...({ style }) => style
});

const Table = ({ children, ...props }) => {
    return <StyledTable {...props}>
        {children}
    </StyledTable>
}

export default Table
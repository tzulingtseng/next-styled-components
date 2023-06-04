import React from 'react'
import styled from 'styled-components';
import propTypes from "prop-types";

const StyledNavBar = styled('header')(({ theme, style }) => ({
    width: 'calc(100%-250px)',
    height: 60,
    marginLeft: 250,
    backgroundColor: theme.colors.primary
}));

const NavBar = ({ children, ...props }) => {
    return <StyledNavBar style={props}>{children}</StyledNavBar>
}

NavBar.propTypes = {
    style: propTypes.object
}

NavBar.defaultProps = {
    style: {}
}

export default NavBar;
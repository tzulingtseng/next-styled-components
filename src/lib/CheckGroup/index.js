import React, { Fragment } from 'react'
import styled from 'styled-components';
import propTypes from "prop-types";
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import breakpoint from '../constant/breakpoint';

const StyledCheck = styled('checkbox')(({ theme, disabled, checked }) => ({
    position: "relative",
    display: "flex",
    paddingLeft: 30,
    opacity: disabled ? 0.5 : 1,
    marginBottom: theme.getSpacing(1),
    paddingRight: theme.getSpacing(1),
    alignItems: "center",
    "&:before": {
        position: "absolute",
        content: '""',
        left: 0,
        width: 8,
        height: 8,
        margin: theme.getSpacing(1),
        border:
            `5px solid ${checked ? theme.colors.primary : theme.colors.grey1}`,
    },
    [breakpoint.mediaLG]: {
        marginBottom: theme.getSpacing(0),
    },
}))

const CheckItems = () => {
    return (
        <Fragment>
            <StyledCheck></StyledCheck>
            <input />
        </Fragment>
    )
}

const CheckGroup = () => {
    return (
        <FormGroup>
            <FormLabel></FormLabel>
            <CheckItems></CheckItems>
        </FormGroup>
    )
}

export default CheckGroup
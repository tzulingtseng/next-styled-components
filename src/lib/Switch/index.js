import React, { useState } from 'react'
import styled from 'styled-components';

const StyledSwitch = styled('input')({
    opacity: 0,
    width: 0,
    height: 0,
});

const StyledSwitchContainer = styled('label')(({ theme, active }) => ({
    width: 40,
    height: 20,
    borderRadius: 40,
    display: 'block',
    cursor: 'pointer',
    position: 'relative',
    transition: 'background-color .2s ease',
    backgroundColor: active ? theme.colors.primary : theme.colors.grey1
}))

const StyledIndicator = styled('span')(({ theme, active }) => ({
    width: 16,
    height: 16,
    marginTop: 2,
    borderRadius: "100%",
    display: 'inline-block',
    transition: 'margin-left .2s ease',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.7)',
    marginLeft: active ? "22px" : "2px",
    backgroundColor: theme.colors.white,
}));

const Switch = () => {

    const [active, setActive] = useState(false)

    const handleSwitchActive = () => setActive(!active)

    return (
        <StyledSwitchContainer active={active}  >
            <StyledIndicator active={active} />
            <StyledSwitch type='checkbox' value={active} onClick={handleSwitchActive} />
        </StyledSwitchContainer>
    )
}

export default Switch
import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledStepsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

// 圓圈樣式
const StyledStep = styled('span')(({ theme, active, step }) => ({
    width: 30,
    height: 30,
    display: 'block',
    borderRadius: '100%',
    lineHeight: '30px',
    textAlign: 'center',
    color: active.includes(step) ? theme.colors.white : theme.colors.grey4,
    backgroundColor: active.includes(step)
        ? theme.colors.primary
        : theme.colors.grey1,
}));

// 橫槓樣式
const StyledSeparate = styled.div(({ theme, hide }) => ({
    flex: 1,
    height: 1,
    border: '5px solid #fff',
    display: hide ? 'none' : 'block',
    backgroundColor: theme.colors.grey1,
    borderBottom: `1px solid ${theme.colors.grey1}`,
}));

const Steps = ({ steps, active }) => {
    return (
        <StyledStepsContainer>
            {steps.map((item, i) => (
                <Fragment key={i}>
                    <StyledStep active={active} step={item}>
                        {item}
                    </StyledStep>
                    {i !== steps.length - 1 && <StyledSeparate />}
                </Fragment>
            ))}
        </StyledStepsContainer>
    );
};

export default Steps;

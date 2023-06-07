import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Icon from '../Icon';
import { useColor } from '../../hooks/useColor';

const filledStyle = css`
    background-color: ${(props) => props.$buttonMainColor};
    color: ${(props) => props.$buttonSubColor};
`;

const outlinedStyle = css`
    background: ${(props) => props.$buttonSubColor};
    color: ${(props) => props.$buttonMainColor};
    border: 1px solid ${(props) => props.$buttonMainColor};
    &:hover {
        background: ${(props) => `${props.$buttonMainColor}10`};
    }
`;
const textStyle = css`
    background: ${(props) => props.$buttonSubColor};
    color: ${(props) => props.$buttonMainColor};
`;

const disabledStyle = css`
    cursor: not-allowed;
    &:hover,
    &:active {
        opacity: 1;
    }
`;

const variantMap = {
    filled: filledStyle,
    outlined: outlinedStyle,
    text: textStyle,
};

const StartIcon = styled.span`
    margin-right: 8px;
`;

const EndIcon = styled.span`
    margin-left: 8px;
`;

const StyledButton = styled.button`
    border: none;
    outline: none;
    min-width: 100px;
    height: 36px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.radius}px;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s, border 0.2s,
        opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.9;
    }
    &:active {
        opacity: 0.7;
    }
    ${(props) => variantMap[props.$variant] || variantMap.filled}
    &:disabled {
        ${disabledStyle}
    }
`;

/**
 * `Button` 元件代表一個可點擊的按鈕，在使用者點擊之後會觸發相對應的業務邏輯。
 */
const Button = ({
    themeColor,
    textColor,
    variant,
    className,
    startIcon,
    endIcon,
    onClick,
    isDisabled,
    isLoading,
    children,
    ...props
}) => {
    const { makeColor } = useColor();

    const buttonMainColor = makeColor({ themeColor, isDisabled });
    const buttonSubColor = makeColor({ themeColor: textColor, isDisabled });

    return (
        <StyledButton
            type="button"
            $variant={variant}
            className={className}
            disabled={isDisabled}
            onClick={onClick}
            $buttonMainColor={buttonMainColor}
            $buttonSubColor={buttonSubColor}
            {...props}
        >
            {isLoading && (
                <Icon
                    style={{ marginRight: '8px' }}
                    icon="fa-sync fa-spin"
                ></Icon>
            )}
            {startIcon && <StartIcon>{startIcon}</StartIcon>}
            <span>{children}</span>
            {endIcon && <EndIcon>{endIcon}</EndIcon>}
        </StyledButton>
    );
};

// 定義 Button 元件的屬性(prop)類型
Button.propTypes = {
    /**
     * 設置按鈕類型
     */
    variant: propTypes.oneOf(['filled', 'outlined', 'text']),
    /**
     * 客製化樣式
     */
    className: propTypes.string,
    /**
     * 內容
     */
    children: propTypes.oneOfType([propTypes.element, propTypes.string])
        .isRequired,
    /**
     * 主題配色，primary、secondary 或是自己傳入色票
     */
    // themeColor: propTypes.oneOfType([propTypes.oneOf(['primary', 'secondary']), propTypes.string]),
    // themeColor: propTypes.oneOfType([
    //     propTypes.oneOf(Object.keys(colors)),
    //     propTypes.string,
    // ]),
    /**
     * 禁用狀態
     */
    isDisabled: propTypes.bool,
    /**
     * 載入中狀態
     */
    isLoading: propTypes.bool,
    /**
     * 設置按鈕左方圖示
     */
    startIcon: propTypes.element,
    /**
     * 設置按鈕右方圖示
     */
    endIcon: propTypes.element,
    /**
     * 點擊事件
     */
    onClick: propTypes.func,
};

Button.defaultProps = {
    variant: 'filled',
    themeColor: 'primary',
    textColor: 'white',
    className: null,
    isDisabled: false,
    isLoading: false,
    startIcon: null,
    endIcon: null,
    onClick: () => {},
};

export default Button;

import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useColor } from '@/hooks/useColor';

// const StyledSwitch = styled('input')({
//     opacity: 0,
//     width: 0,
//     height: 0,
// });

// 背景框
const SwitchButton = styled.label`
    width: ${(props) => props.$switchWidth}px;
    height: ${(props) => props.$thumbSize}px;
    color: #fff;
    border-radius: 50px;
    box-sizing: content-box;
    display: inline-flex;
    cursor: ${(props) => (props.$isDisabled ? 'not-allowed' : 'pointer')};
    position: relative;
    transition: background-color 0.2s ease;
    border: 3px solid ${(props) => props.$switchColor};
    background: ${(props) => props.$switchColor};
`;

// 控制項
const Thumb = styled.div`
    width: ${(props) => props.$thumbSize}px;
    height: ${(props) => props.$thumbSize}px;
    position: absolute;
    top: 0;
    border-radius: 100%;
    transition: margin-left 0.2s ease;
    boxshadow: 0px 0px 2px rgba(0, 0, 0, 0.7);
    background-color: ${(props) => props.$thumbColor};
    ${(props) => {
        if (props.$isChecked) {
            return `left: ${props.$switchWidth - props.$thumbSize}px;`;
        }
        return 'left: 0px;';
    }}
`;

// 背景框內的字
const Label = styled.div`
    position: absolute;
    white-space: nowrap;
    font-size: 14px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0px ${(props) => props.$padding}px;

    ${(props) => {
        if (props.$isChecked) {
            return `right: ${props.$switchWidth - props.$labelWidth}px;`;
        }
        return `
        right: 0px;
        `;
    }}
`;

/**
 * `Switch` 元件是一個開關的選擇器。
 * 在我們表示開關狀態，或兩種狀態之間的切換時，很適合使用。和 Checkbox 的區別是， Checkbox 一般只用來標記狀態是否被選取，
 * 需要提交之後才會生效，而 Switch 則會在觸發的當下直接觸發狀態的改變。
 */
const Switch = ({
    size,
    themeColor,
    isDisabled,
    checkedChildren,
    unCheckedChildren,
    onChange,
    ...props
}) => {
    const { makeColor } = useColor();
    const [isChecked, setIsChecked] = useState(false);
    const [labelWidth, setLabelWidth] = useState(0);
    const labelRef = useRef(null);

    const switchColor = makeColor({ themeColor, isDisabled: !isChecked });
    const thumbColor = makeColor({ themeColor: 'white' });
    const thumbSize = size === 'small' ? 12 : 18;
    const switchWidth = thumbSize + labelWidth;

    const handleChange = () => setIsChecked((prev) => !prev);

    useLayoutEffect(() => {
        const minLabelSize = thumbSize * 1.2;
        const currentLabelWidth = labelRef?.current?.clientWidth;
        if (currentLabelWidth) {
            setLabelWidth(
                currentLabelWidth < minLabelSize
                    ? minLabelSize
                    : currentLabelWidth
            );
        }
    }, [labelRef?.current?.clientWidth, thumbSize]);

    return (
        <SwitchButton
            $switchWidth={switchWidth}
            $thumbSize={thumbSize}
            $isDisabled={isDisabled}
            $switchColor={switchColor}
            onClick={isDisabled ? null : (onChange = handleChange)}
            {...props}
        >
            <Thumb
                $thumbSize={thumbSize}
                $thumbColor={thumbColor}
                $isChecked={isChecked}
                $switchWidth={switchWidth}
            />
            <Label
                ref={labelRef}
                $padding={thumbSize / 3}
                $labelWidth={labelWidth}
                $switchWidth={switchWidth}
                $isChecked={isChecked}
            >
                {isChecked ? checkedChildren : unCheckedChildren}
            </Label>
        </SwitchButton>
    );
};

Switch.propTypes = {
    /**
     * 開啟狀態的內容。若設置，則由外部參數控制；若不設置，則由內部 state 控制
     */
    isChecked: propTypes.bool,
    /**
     * 禁用狀態
     */
    isDisabled: propTypes.bool,
    /**
     * 主題配色，primary、secondary 或是自己傳入色票
     */
    themeColor: propTypes.oneOfType([
        propTypes.oneOf(['primary', 'secondary', 'white']),
        propTypes.string,
    ]),
    /**
     * 	開關大小
     */
    size: propTypes.oneOf(['default', 'small']),
    /**
     *  開啟狀態的內容
     */
    checkedChildren: propTypes.string,
    /**
     *  關閉狀態的內容
     */
    unCheckedChildren: propTypes.string,
    /**
     * 狀態改變的 callback function
     */
    onChange: propTypes.func,
};

Switch.defaultProps = {
    isChecked: false,
    size: 'default',
    isDisabled: false,
    themeColor: 'primary',
    checkedChildren: '開啟',
    unCheckedChildren: '關閉',
    onChange: () => {},
};

export default Switch;

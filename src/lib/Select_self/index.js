import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import Icon from '../Icon';
import ErrorMessage from '../ErrorMessage';

// 標籤字
// 選擇框 
// 1. 當出現 options 時，框要變色
// 2. disabled -> bgc:grey, undisabled -> bgc:white
// 3. border active -> colors.primary, unactive -> colors.grey
// 選擇框內icon
// 選擇框內選單 list
// 錯誤訊息

const StyledSelect = styled('div')(({ theme, optionActive }) => ({
    width: 180,
    height: 40,
    border: optionActive ? `1px solid ${theme.colors.primary}` : `1px solid ${theme.colors.grey2}`,
    borderRadius: theme.radius,
    margin: `0 ${theme.getSpacing(1)}px`,
    padding: `${theme.getSpacing(1)}px`,
    position: 'relative',
    // flex:1, // 再確認有無需要
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: "pointer",

}))

const StyledIcon = styled('div')(({ theme }) => ({
    color: theme.colors.primary,
    right: 0,
    position: 'absolute',
    padding: `${theme.getSpacing(1)}px`,

}))

const StyledOptionsBox = styled('div')(({ theme, optionActive }) => ({
    width: 180,
    // height: 200,
    margin: `0 ${theme.getSpacing(1)}px`,
    overflow: "scroll",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.17)",
    borderRadius: theme.radius,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.grey1}`,
    display: optionActive ? 'block' : 'none'
}))

const StyledInput = styled('input')(({ theme }) => ({
    display: 'none',
    // opacity: 0,
    // cursor: "pointer",
    // padding: `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
    width: 0,
    height: 0,
}))


const StyledOption = styled('div')(({ theme }) => ({
    width: '100%',
    // borderBottom: `1px solid ${theme.colors.grey1}`,
    padding: `${theme.getSpacing(1)}px`,
    cursor: 'pointer'

}))

const Select_self = ({ selectItems, placeholder = '請選擇...', errorMessage = '' }) => {

    const [optionActive, setOptionActive] = useState(false)
    const [selectedItem, setSelectedItem] = useState({});
    const [selectedValue, setSelectedValue] = useState(null)

    const handleOptionsActive = () => setOptionActive(!optionActive)

    const onSelectItem = (item) => {
        setSelectedItem(item);
        setSelectedValue(selectedItem)
        setOptionActive(false)
    };

    return (
        <Fragment>
            <FormGroup>
                <FormLabel required>Label</FormLabel>
                <StyledSelect onClick={handleOptionsActive} onblur={() => onBlurClick} optionActive={optionActive}>
                    <div>{selectedItem.label || placeholder}</div>
                    <Icon icon="fa-angle-down" size={12}></Icon>
                </StyledSelect>
                <StyledOptionsBox optionActive={optionActive}>
                    {selectItems && selectItems.map((item, index) => {
                        const key = `select_item_${item.label}_${item.value}_${index}`;
                        return (
                            <StyledOption
                                key={key}
                                onClick={() => onSelectItem(item)}> {item.label}
                            </StyledOption>
                        )
                    })}
                </StyledOptionsBox>
                <ErrorMessage errorMessage={errorMessage}>{errorMessage}</ErrorMessage>
            </FormGroup>
        </Fragment >
    )
}

Select_self.defaultProps = {
    label: "",
    items: [],
    placeholder: '請選擇...',
    disabled: false,
    onChange: () => false,
};


export default Select_self
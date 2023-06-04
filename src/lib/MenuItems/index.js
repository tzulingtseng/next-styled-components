import React, { Fragment, useState } from 'react'
import styled from 'styled-components';
import propTypes from 'prop-types'
import Icon from '../Icon';
import Typography from '../Typography';
import Collapse from '../Collapse';
import isEmpty from 'lodash/isEmpty';

// container
const StyledMenuContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
    '&:hover': {
        backgroundColor: theme.colors.grey4
    }
}))

// icon
const MenuIcon = styled(Icon)(({ theme }) => ({
    fontSize: 14,
    color: theme.colors.grey2
}))

// text
const MenuText = styled(Typography)(({ theme }) => ({
    color: theme.colors.grey2
}))

// extent
const MenuExtent = styled(Icon)(({ theme, hasChild, open }) => ({
    color: theme.colors.grey2,
    opacity: hasChild ? 1 : 0,
    transition: 'all .2s ease',
    transform: open ? 'rotate(270deg)' : 'rotate(90deg)',
}))

const MenuWithChild = ({ item, hasChild, ...props }) => {
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen(!open)
    }

    return (
        <Fragment>
            <MenuItem hasChild open={open} text={item.text} icon={item.icon} onClick={handleOnClick} />
            <Collapse open={open}>
                <MenuItems items={item.children} />
            </Collapse>
        </Fragment>
    );
};

const MenuItem = ({ children, text, icon, open, hasChild, ...props }) => {

    return (
        <StyledMenuContainer {...props}>
            <MenuIcon icon={icon} />
            <MenuText variant='content'>{text}</MenuText>
            <MenuExtent open={open} hasChild={hasChild} icon='fa-angle-right' />
        </StyledMenuContainer>
    )
}

const MenuItems = ({ items, ...props }) => {
    return items.map((item, index) => {
        const hasChild = !isEmpty(item.children) && item.children.length > 0;
        return hasChild ? (
            <MenuWithChild key={`MenuItem_${index}`} item={item} hasChild />
        ) : (
            <MenuItem key={`MenuItem_${index}`} text={item.text} icon={item.icon} />
        );
    });
};

export default MenuItems
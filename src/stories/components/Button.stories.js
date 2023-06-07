import React from 'react';
import Button from '../../lib/Button/index';
import Icon from '../../../lib/Icon';

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: 'Button',
};

// 你的頁面標題
export default {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Button',
    variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
    children: 'Button',
    variant: 'text',
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
    children: 'Button',
    isLoading: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
    children: 'Button',
    isDisabled: true,
};

export const StartIconButton = Template.bind({});
StartIconButton.args = {
    children: 'Button',
    startIcon: <Icon icon="fa-sharp fa-solid fa-circle-down"></Icon>,
};

export const OutlinedStartIconButton = Template.bind({});
OutlinedStartIconButton.args = {
    children: 'Button',
    variant: 'outlined',
    startIcon: <Icon icon="fa-sharp fa-solid fa-circle-down"></Icon>,
};

export const EndIconButton = Template.bind({});
EndIconButton.args = {
    children: 'Button',
    endIcon: <Icon icon="fa-sharp fa-solid fa-circle-down"></Icon>,
};

export const CustomizeButton = Template.bind({});
CustomizeButton.args = {
    children: 'Button',
    endIcon: <Icon icon="fa-sharp fa-solid fa-circle-down"></Icon>,
    style: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 50,
    },
};

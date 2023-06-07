import React, { Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Card from '../Card';
import CardHeader from '../CardHeader';
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';
import Button from '../Button';
import Icon from '../Icon';
import Mask from '../Mask';
import ButtonClose from '../ButtonClose';

const ICON_MAP = {
    info: 'fa-info-circle',
    success: 'fa-check-circle',
    warning: 'fa-exclamation-circle',
    danger: 'fa-exclamation-triangle',
};

const getIconColor = (theme) => ({
    info: theme.colors.info,
    success: theme.colors.success,
    danger: theme.colors.danger,
    warning: theme.colors.warning,
});

const StyledIcon = styled(Icon)(({ theme, type }) => ({
    fontSize: 60,
    display: 'block',
    textAlign: 'center',
    marginBottom: theme.getSpacing(1),
    color: getIconColor(theme)[type],
}));

const StyledDialog = styled('div')({
    position: 'relative',
});

const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

const Alert = ({
    alertDialogOpen,
    children,
    title,
    onCancel,
    onConfirm,
    confirmText,
    cancelText,
    type,
    ...props
}) => {
    if (!alertDialogOpen) return <Fragment />;

    return (
        <Mask>
            <StyledDialog>
                <Card style={props.style}>
                    <CardHeader title={title}>
                        <ButtonClose onClick={onCancel}></ButtonClose>
                    </CardHeader>
                    <CardBody>
                        <StyledIcon
                            type={type}
                            icon={ICON_MAP[type]}
                        ></StyledIcon>
                        {children}
                    </CardBody>
                    <CardFooter style={footerStyle}>
                        <Button type="outline" onClick={onCancel}>
                            {cancelText}
                        </Button>
                        <Button type="filled" onClick={onConfirm}>
                            {confirmText}
                        </Button>
                    </CardFooter>
                </Card>
            </StyledDialog>
        </Mask>
    );
};

Alert.prototype = {
    alertDialogOpen: propTypes.bool,
    title: propTypes.string,
    subtitle: propTypes.string,
    confirmText: propTypes.string,
    cancelText: propTypes.string,
    type: propTypes.oneOf(['info', 'success', 'danger', 'warning']),
    onConfirm: propTypes.func,
    onCancel: propTypes.func,
    onEnter: propTypes.func,
    onExited: propTypes.func,
};

Alert.defaultProps = {
    alertDialogOpen: false,
    title: '警示信息',
    subtitle: '',
    confirmText: '確認',
    cancelText: '取消',
    type: 'info',
    onConfirm: () => false,
    onCancel: () => false,
    onEnter: () => false,
    onExited: () => false,
};

export default Alert;

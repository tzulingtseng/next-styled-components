/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from 'react';
import ThemeProvider from '@/lib/ThemeProvider';
import theme from '@/lib/theme';
import NavBar from '@/lib/NavBar';
import Menu from '@/lib/Menu';
import MenuItems from '@/lib/MenuItems';
import Collapse from '@/lib/Collapse';
import BrandNav from '@/lib/BrandNav';
import Content from '@/lib/Content';
import Container from '@/lib/Container';
import Button from '@/lib/Button';
import Icon from '@/lib/Icon';
import { Card, CardHeader, CardBody, CardFooter } from '@/lib';
import {
    Table,
    TableHead,
    TableBody,
    TableFoot,
    TableRow,
    TableCell,
} from '@/lib';
import Pagination from '@/lib/Pagination';
import Dialog from '@/lib/Dialog';
import Typography from '@/lib/Typography';
import Message from '@/lib/Message';
import Alert from '@/lib/Alert';
import FormControl from '@/lib/FormControl';
import Input from '@/lib/Input';
import CheckGroup from '@/lib/CheckGroup';
import Select from '@/lib/Select';
import SelectTest from '@/lib/Select';
import Breadcrumbs from '@/lib/Breadcrumbs';
import Steps from '@/lib/Steps';
import Switch from '@/lib/Switch';
import styled from 'styled-components';

const styles = {
    button: {
        marginRight: 8,
    },
    card: {
        width: '100%',
        maxWidth: '1000px',
        minWidth: '400px',
    },
};

const menuConfig = [
    {
        text: 'Menu 1',
        icon: 'fa-user',
    },
    {
        text: 'Menu 2',
        icon: 'fa-user',
        children: [{ text: 'Menu sec' }],
    },
    {
        text: 'Menu 3',
        icon: 'fa-user',
        children: [{ text: 'Menu sec', children: [{ text: 'Menu third' }] }],
    },
];

// checkbox data
const CheckItems = [
    {
        label: 'Radio 1',
        value: 1,
    },
    {
        label: 'Radio 2',
        value: 2,
    },
    {
        label: 'Radio 3',
        value: 3,
    },
];

// select data
const selectItems = [
    {
        label: 'Item 1',
        value: 1,
    },
    {
        label: 'Item 2',
        value: 2,
    },
    {
        label: 'Item 3',
        value: 3,
    },
];

// breadcrumbs data
const paths = [
    {
        text: 'path 1',
    },
    {
        text: 'path 2',
        path: '/',
    },
    {
        text: 'path 3',
        path: '/',
    },
];

// steps data
const steps = [1, 2, 3];
const active = [1, 2];

const styledComponents = ({
    args = {
        name: 'labelItems',
        placeholder: '請選擇...',
        items: selectItems,
        label: 'select label',
        required: true,
    },
}) => {
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [alertDialogOpen, setAlertDialogOpen] = useState(false);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Fragment>
                    <Container width="100vw" height="100%">
                        <NavBar></NavBar>
                        <Menu>
                            <BrandNav></BrandNav>
                            <MenuItems items={menuConfig} />
                        </Menu>
                        <Content>
                            <h1>Hello Something...</h1>
                            <Icon icon="fa-user"></Icon>
                            <Button type="filled" style={styles.button}>
                                <Icon icon="fa-sync fa-spin"></Icon>Filled
                                Button
                            </Button>
                            <Button type="outline" style={styles.button}>
                                Outline Button
                            </Button>
                            <Button type="text" style={styles.button}>
                                Text Button
                            </Button>
                            <Card style={styles.card}>
                                <CardHeader
                                    title="Title"
                                    subtitle="subtitle"
                                ></CardHeader>
                                <CardBody>CardBody</CardBody>
                                <CardFooter>CardFooter</CardFooter>
                            </Card>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Age</TableCell>
                                        <TableCell>Position</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Jeff</TableCell>
                                        <TableCell>55</TableCell>
                                        <TableCell>CTO</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Tomas</TableCell>
                                        <TableCell>37</TableCell>
                                        <TableCell>Engineer</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Edmond</TableCell>
                                        <TableCell>30</TableCell>
                                        <TableCell>Dog</TableCell>
                                    </TableRow>
                                </TableBody>
                                <TableFoot></TableFoot>
                            </Table>
                            <Typography variant="h1">H1 Typography</Typography>
                            <Typography variant="h2">H2 Typography</Typography>
                            <Typography variant="h3">H3 Typography</Typography>
                            <Typography variant="h4">H4 Typography</Typography>
                            <Typography variant="h5">H5 Typography</Typography>
                            <Typography variant="h6">H6 Typography</Typography>
                            <Typography variant="content">content</Typography>
                            <div>
                                {' '}
                                <Pagination
                                    currentPage={1}
                                    groupPagesCount={10}
                                    totalPages={100}
                                ></Pagination>
                            </div>
                            <Message
                                content="提示訊息"
                                open={open}
                                onClose={() => setOpen(false)}
                            >
                                顯示信息彈窗的內容..
                            </Message>
                            <Button onClick={() => setOpen(true)}>
                                Show Message
                            </Button>
                            {dialogOpen && (
                                <Dialog
                                    style={styles.card}
                                    title="提示信息"
                                    dialogOpen={dialogOpen}
                                    onCancel={() => setDialogOpen(false)}
                                    onConfirm={() => setDialogOpen(false)}
                                >
                                    顯示信息彈窗的內容..
                                </Dialog>
                            )}
                            <Button
                                type="outline"
                                onClick={() => setDialogOpen(true)}
                            >
                                Show Dialog
                            </Button>
                            <Alert
                                style={styles.card}
                                title="警示信息"
                                alertDialogOpen={alertDialogOpen}
                                onCancel={() => setAlertDialogOpen(false)}
                                onConfirm={() => setAlertDialogOpen(false)}
                            >
                                顯示信息彈窗的內容...
                            </Alert>
                            <Button
                                type="filled"
                                onClick={() => setAlertDialogOpen(true)}
                            >
                                Show Alert Dialog
                            </Button>
                            <FormControl>
                                <Input
                                    type="text"
                                    label="username"
                                    placeholder="username"
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    disabled
                                    type="text"
                                    label="disabled"
                                    value="disabled"
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    required
                                    type="text"
                                    label="account"
                                    placeholder="account"
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    required
                                    type="text"
                                    label="phone"
                                    placeholder="phone"
                                    errorMessage="error message"
                                />
                            </FormControl>
                            {/* <FormControl>
                                <CheckGroup />
                            </FormControl> */}
                            <FormControl>
                                <Select {...args} />
                            </FormControl>
                            <Breadcrumbs paths={paths} />
                            <Steps steps={steps} active={active}></Steps>
                            <Switch></Switch>
                        </Content>
                    </Container>
                </Fragment>
            </ThemeProvider>
        </>
    );
};

export default styledComponents;

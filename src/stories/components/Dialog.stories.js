import React, { Fragment, useState } from 'react';
import theme from '../../lib/theme';
import Dialog from '../../lib/Dialog';
import Button from '../../lib/Button';
import ThemeProvider from '../../lib/ThemeProvider';

const styles = {
    card: {
        width: '100%',
        maxWidth: '1000px',
        minWidth: '400px',
    },
};

const Provider = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = (args) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <Provider>
            <Fragment>
                <Dialog
                    style={styles.card}
                    dialogOpen={dialogOpen}
                    title="提示信息"
                    onCancel={() => setDialogOpen(false)}
                    onConfirm={() => setDialogOpen(false)}
                >
                    顯示信息彈窗的內容..
                </Dialog>
                <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
            </Fragment>
        </Provider>
    );
};

export const Default = Template.bind({});

export default {
    component: Dialog,
    title: 'Components/Dialog',
};

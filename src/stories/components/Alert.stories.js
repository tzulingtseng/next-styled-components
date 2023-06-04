
import React, { Fragment, useState } from "react";
import theme from "../../lib/theme";
import Alert from "../../lib/Alert";
import Button from "../../lib/Button";
import ThemeProvider from "../../lib/ThemeProvider";

const styles = {
    card: {
        width: '100%',
        maxWidth: '1000px',
        minWidth: '400px'
    }
}

const Provider = (props) => {
    return <ThemeProvider theme={theme} {...props}>{props.children}</ThemeProvider>;
};

const Template = args => {

    const [alertDialogOpen, setAlertDialogOpen] = useState(false);

    return (
        <Provider>
            <Fragment>
                <Alert
                    style={styles.card}
                    alertDialogOpen={alertDialogOpen}
                    type='info'
                    onCancel={() => setAlertDialogOpen(false)}
                    onConfirm={() => setAlertDialogOpen(false)}>
                    顯示信息彈窗的內容..
                </Alert>
                <Button onClick={() => setAlertDialogOpen(true)}>Open Alert</Button>
            </Fragment>
        </Provider>
    );
}

export const Default = Template.bind({});

export default {
    component: Alert,
    title: "Components/Alert",
};

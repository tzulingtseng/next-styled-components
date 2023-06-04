import React, { Fragment } from 'react';
import styled from 'styled-components';
import ThemeProvider from '@/lib/ThemeProvider'
import theme from '@/lib/theme'
import Button from '@/lib/Button'
import Switch from '@/lib/Switch'
import Icon from '@/lib/Icon';

const components = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Fragment>
                    {/* <Button>Button</Button> */}
                    <Switch></Switch>
                </Fragment>
            </ThemeProvider>
        </>
    )
}

export default components
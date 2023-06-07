import { ThemeProvider } from 'styled-components';
// import { theme } from 'theme/index.js';
import theme from '../src/lib/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    options: {
        storySort: { order: ['Introduction', 'Components', 'Example'] },
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story />
        </ThemeProvider>
    ),
];

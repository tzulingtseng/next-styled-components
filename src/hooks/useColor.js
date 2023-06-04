import { useTheme } from 'styled-components';

export const useColor = () => {
    const theme = useTheme();
    const makeColor = ({ themeColor, isDisabled }) => {
        const madeColor = theme.colors[themeColor] || themeColor;
        return isDisabled
            ? theme.colors.disable
            : madeColor;
    };
    return {
        makeColor,
    };
}

export default { useColor };
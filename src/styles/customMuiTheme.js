import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#41414D",
        },
        secondary: {
            main: "#006C43",
        },
        tertiary: {
            main: "#5A645B",
        },
        quaternary: {
            main: "#3fa110",
        },
        input: {
            border: "#DCDCE5",
            text: "#A8A8B3",
        },
        background: {
            default: "#F0F0F5",
        },
        error: {
            main: "#EB5757",
        },
    },
    typography: {
        primary: {
            main: `"Exo 2"`,
        },
        secondary: {
            main: `"Nunito"`,
        },
    },
});

theme = responsiveFontSizes(theme, { factor: 1 });

export default theme;

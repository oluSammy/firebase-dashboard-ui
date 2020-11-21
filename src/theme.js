import { createMuiTheme } from '@material-ui/core/styles';

// const fireBlue = "#009BE5";
// const fireDark = "#18202C";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#009BE5",
        },
        secondary: {
            main: "#18202C"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default theme;
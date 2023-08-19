import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const common = createTheme({
    typography: {
        fontFamily: ["Poppins", "Sora", "sans-serif"].join(","),
        fontWeightRegular: "200",
        h1: {
            letterSpacing: -3,
        },
        h2: {
            letterSpacing: -3,
        },
        h3: {
            letterSpacing: -3,
        },
    },
});

export const themeConfig = {
    light: createTheme({
        ...common,
        palette: {
            mode: "light",
            background: {
                default: grey[200],
                paper: grey[100],
            },

            text: {
                primary: "#313131",
            },
        },
    }),
    dark: createTheme({
        ...common,
        palette: {
            mode: "dark",
            primary: {
                main: "#70deff",
                light: "#54A6BF",
                dark: "#386F80",
            },

            background: {
                paper: grey[900],
                default: "#03070a",
            },
        },
    }),
};

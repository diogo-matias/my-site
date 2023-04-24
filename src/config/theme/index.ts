import { createTheme, useTheme, useThemeProps } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

const common = createTheme({
  typography: {
    fontFamily: ["Poppins", "Sora", "sans-serif"].join(","),
  },
});

export const themeConfig = {
  light: createTheme({
    ...common,
    palette: {
      mode: "light",
      background: {
        default: grey[200],
        paper: grey[400],
      },
    },
  }),
  dark: createTheme({
    ...common,
    palette: {
      mode: "dark",
      primary: {
        main: green[500],
        light: green[300],
      },
    },
  }),
};

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import { useAppSelector } from "./hooks/redux";
import Router from "./router";

function App() {
    const theme = useAppSelector((state) => state.theme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    );
}

export default App;

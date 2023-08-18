import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Router from "./router";
import { ContactActions } from "@store/modules/contact";

function App() {
    const theme = useAppSelector((state) => state.theme);
    const { hasError } = useAppSelector((state) => state.contact);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(ContactActions.sendPageViewMessage());
    }, [hasError]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    );
}

export default App;

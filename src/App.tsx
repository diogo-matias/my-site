import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Router from "./router";
import { ContactActions } from "@store/modules/contact";

function App() {
    const theme = useAppSelector((state) => state.theme);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(ContactActions.sendPageViewMessage());

        console.log("just for commit");
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    );
}

export default App;

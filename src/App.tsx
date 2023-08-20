import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Router from "./router";
import { ContactActions } from "@store/modules/contact";
import { LanguageService } from "@hooks/language";

function App() {
    const theme = useAppSelector((state) => state.theme);
    const { hasError } = useAppSelector((state) => state.contact);

    const dispatch = useAppDispatch();

    const [update, setUpdate] = useState(false);

    useEffect(() => {
        dispatch(ContactActions.sendPageViewMessage());
    }, [hasError]);

    function updatePage() {
        setUpdate(!update);
    }

    return (
        <ThemeProvider theme={theme}>
            <LanguageService updatePage={updatePage} />
            <CssBaseline />
            <Router />
        </ThemeProvider>
    );
}

export default App;

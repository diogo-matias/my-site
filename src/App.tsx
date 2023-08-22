import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Router from "./router";
import { ContactActions } from "@store/modules/contact";
import { LanguageService } from "@hooks/language";
import { getLocalization } from "@hooks/localization";

function App() {
    const theme = useAppSelector((state) => state.theme);
    const { hasError } = useAppSelector((state) => state.contact);

    const dispatch = useAppDispatch();

    const [update, setUpdate] = useState(false);

    useEffect(() => {
        handlePageView();
    }, [hasError]);

    function updatePage() {
        setUpdate(!update);
    }

    async function handlePageView() {
        const language = navigator.language.toLowerCase();
        const { latitude, longitude } = await getLocalization();

        dispatch(
            ContactActions.sendPageViewMessage({
                latitude,
                longitude,
                language,
            })
        );
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

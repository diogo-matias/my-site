import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Router from "./router";
import { ContactActions } from "@store/modules/contact";
import { LanguageService } from "@hooks/language";
import { ContactApi } from "api/contact";
import { GoogleApi } from "api/google";
import { SendPageViewMessageActionPayloadType } from "@store/modules/contact/types";

function App() {
    const theme = useAppSelector((state) => state.theme);
    const { hasError } = useAppSelector((state) => state.contact);

    const dispatch = useAppDispatch();

    const [update, setUpdate] = useState(false);
    const [local, setLocal] = useState("");

    useEffect(() => {
        handlePageView();
    }, [hasError]);

    function updatePage() {
        setUpdate(!update);
    }

    async function handlePageView() {
        const { latitude, longitude } = await getLocalization();

        console.log("passou por aqui");

        dispatch(
            ContactActions.sendPageViewMessage({
                latitude,
                longitude,
            })
        );
    }

    async function getLocalization(): Promise<SendPageViewMessageActionPayloadType> {
        return new Promise((resolve) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (value) => {
                        const { latitude, longitude } = value.coords;

                        return resolve({ latitude, longitude });
                    },
                    () => {
                        return resolve({
                            latitude: undefined,
                            longitude: undefined,
                        });
                    }
                );
            } else {
                console.log("Error to get localization");

                return resolve({ latitude: undefined, longitude: undefined });
            }
        });
    }

    return (
        <ThemeProvider theme={theme}>
            <div>{local}</div>
            <LanguageService updatePage={updatePage} />
            <CssBaseline />
            <Router />
        </ThemeProvider>
    );
}

export default App;

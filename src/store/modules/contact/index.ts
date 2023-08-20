import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContactApi } from "api/contact";
import { SendMessageType } from "api/contact/types";
import { GoogleApi } from "api/google";
import { SendPageViewMessageActionPayloadType } from "./types";

const initialState = {
    isLoading: false,
    hasError: false,
    showSuccess: false,
    hasErrorPageView: false,
};

const sendMessage = createAsyncThunk(
    "@contact/sendMessage",
    async (payload: SendMessageType) => {
        const response = ContactApi.sendMessage(payload);

        return response;
    }
);

const sendPageViewMessage = createAsyncThunk(
    "@contact/sendPageViewMessage",
    async (payload: SendPageViewMessageActionPayloadType) => {
        const { longitude, latitude } = payload;

        const userInfoStr = localStorage.getItem("userInfo") as string;
        const sessionInfoStr = sessionStorage.getItem("sessionInfo") as string;

        const userInfo = JSON.parse(userInfoStr);
        const sessionInfo = await JSON.parse(sessionInfoStr);

        if (!userInfo) {
            localStorage.setItem(
                "userInfo",
                JSON.stringify({
                    id: crypto.randomUUID(),
                    numberOfSessions: 1,
                    localization: "",
                })
            );
        }

        if (!sessionInfo) {
            const newValues = {
                id: userInfo?.id ?? crypto.randomUUID(),
                numberOfSessions: userInfo?.numberOfSessions
                    ? Number(userInfo?.numberOfSessions) + 1
                    : 1,
                localization: "",
            };

            newValues.localization = await GoogleApi.getLocalizationInfo({
                longitude: Number(longitude),
                latitude: Number(latitude),
            });

            await ContactApi.sendPageViewMessage(newValues);

            sessionStorage.setItem(
                "sessionInfo",
                JSON.stringify({ id: crypto.randomUUID() })
            );
            localStorage.setItem("userInfo", JSON.stringify(newValues));
        }
    }
);

const ContactSlice = createSlice({
    name: "@contact",
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(sendMessage.fulfilled, (state) => {
            state.hasError = false;
            state.isLoading = false;
            state.showSuccess = true;
        });
        addCase(sendMessage.pending, (state) => {
            state.hasError = false;
            state.isLoading = true;
            state.showSuccess = false;
        });
        addCase(sendMessage.rejected, (state) => {
            state.hasError = true;
            state.isLoading = false;
            state.showSuccess = false;
        });
        addCase(sendPageViewMessage.fulfilled, (state) => {
            state.hasErrorPageView = false;
        });
        addCase(sendPageViewMessage.rejected, (state) => {
            state.hasErrorPageView = true;

            sessionStorage.removeItem("sessionInfo");
        });
    },
});

export default ContactSlice.reducer;

export const ContactActions = {
    ...ContactSlice.actions,
    sendMessage,
    sendPageViewMessage,
};

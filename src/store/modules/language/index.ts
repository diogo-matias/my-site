import { createSlice } from "@reduxjs/toolkit";
import { selectLanguage } from "utils/language";

const initialState = {
    languageCode: "",
    languageStrings: {},
};

const LangueSlice = createSlice({
    name: "@language",
    initialState,
    reducers: {
        changeLanguage(state, { payload }) {
            state.languageStrings = selectLanguage(payload);
            state.languageCode = payload;
        },
    },
});

export default LangueSlice.reducer;

export const LanguageActions = {
    ...LangueSlice.actions,
};

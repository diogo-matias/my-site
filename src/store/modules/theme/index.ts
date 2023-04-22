import { createSlice } from "@reduxjs/toolkit";
import { themeConfig } from "../../../config";

const initialState = themeConfig.dark;

const ThemeSlice = createSlice({
    name: "@theme",
    initialState,
    reducers: {
        toggleThemeMode(state) {
            return state.palette.mode === "light"
                ? themeConfig.dark
                : themeConfig.light;
        },
    },
});

export default ThemeSlice.reducer;
export const { toggleThemeMode } = ThemeSlice.actions;

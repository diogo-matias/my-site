import { combineReducers } from "@reduxjs/toolkit";
import ThemeSlice from "./theme";
import ContactSlice from "./contact";
import LanguageSlice from "./language";

const combinedReducers = combineReducers({
    theme: ThemeSlice,
    contact: ContactSlice,
    language: LanguageSlice,
});

export default combinedReducers;
export type State = ReturnType<typeof combinedReducers>;

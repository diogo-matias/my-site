import { combineReducers } from "@reduxjs/toolkit";
import ThemeSlice from "./theme";
import ContactSlice from "./contact";

const combinedReducers = combineReducers({
    theme: ThemeSlice,
    contact: ContactSlice,
});

export default combinedReducers;
export type State = ReturnType<typeof combinedReducers>;

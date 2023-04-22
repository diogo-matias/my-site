import { combineReducers } from "@reduxjs/toolkit";
import ThemeSlice from "./theme";

const combinedReducers = combineReducers({
    theme: ThemeSlice,
});

export default combinedReducers;
export type State = ReturnType<typeof combinedReducers>;

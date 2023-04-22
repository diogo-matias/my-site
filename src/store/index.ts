import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./modules";

export const store = configureStore({ reducer: combinedReducers });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

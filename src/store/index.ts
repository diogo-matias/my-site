import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./modules";

export const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";

import FileManager from "./FileManager/FileManagerSlice";
import AuthSlice from "./Auth/AuthSlice";
export const store = configureStore({
  reducer: {
    files: FileManager,
    auth: AuthSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

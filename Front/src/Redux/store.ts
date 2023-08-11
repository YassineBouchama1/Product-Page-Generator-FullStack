import { configureStore } from "@reduxjs/toolkit";

import FileManager from "./FileManager/FileManagerSlice";
export const store = configureStore({
  reducer: {
    files: FileManager,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

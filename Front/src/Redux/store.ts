import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./productsSlice/ProductsSlice";
import { FileManager } from "./FileManager/FileManagerSlice";
export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    filesReducer: FileManager,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

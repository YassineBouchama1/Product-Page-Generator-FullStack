import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./productsSlice/ProductsSlice";
export const store = configureStore({
  reducer: {
    products: ProductsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
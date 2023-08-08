import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  getAllProductsRedux,
  getOneProductRedux,
  updateProductRedux,
} from "./ActionsProducts";

interface initialStateType {
  productsList: [];
  isloading: boolean;
  addProductResponse: [];
  DeletedResponse: [];
  UpdateResponse: [];
  GetOneProduct: [];
}

const initialState: initialStateType = {
  productsList: [],
  isloading: false,
  addProductResponse: [],
  DeletedResponse: [],
  UpdateResponse: [],
  GetOneProduct: [],
};

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setDetaileProduct: (state: any, action: PayloadAction<any>) => {
      state.GetOneProduct = action.payload;
    },
  },
});

// // Action creators are generated for each case reducer function
export const { setDetaileProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;

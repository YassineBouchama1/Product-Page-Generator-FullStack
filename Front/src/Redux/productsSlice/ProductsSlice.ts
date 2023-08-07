import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAllProductsRedux ,getOneProductRedux,updateProductRedux} from "./ActionsProducts";

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
    setDetaileProduct: (state, action: PayloadAction<any>) => {
      state.GetOneProduct = action.payload
    },
  },
  extraReducers: {
    // [getAllProductsRedux.pending]: (state: any) => {
    //   state.isloading = true;
    // },
    // [getAllProductsRedux.fulfilled]: (
    //   state: any,
    //   action: PayloadAction<[]>
    // ) => {
    //   state.productsList = action.payload;
    //   state.isloading = false;
    // },
    // [getAllProductsRedux.rejected]: (state: any) => {
    //   state.isloading = true;
    // },
    // // [AddProduct.pending]: (state, action) => {
    // //     state.isloading = true
    // // },
    // // [AddProduct.fulfilled]: (state, action) => {
    // //     state.addProductResponse = action.payload
    // //     state.isloading = false

    // // },
    // // [AddProduct.rejected]: (state, action) => {
    // //     state.isloading = true
    // // },
    // // [removeProduct.pending]: (state, action) => {
    // //     state.isloading = true
    // // },
    // // [removeProduct.fulfilled]: (state, action) => {
    // //     state.DeletedResponse = action.payload
    // //     state.isloading = false

    // // },
    // // [removeProduct.rejected]: (state, action) => {
    // //     state.isloading = true
    // // },
    // [getOneProductRedux.pending]: (state, ) => {
    //     state.isloading = true
    // },
    // [getOneProductRedux.fulfilled]: (state, action) => {
    //     state.GetOneProduct = action.payload
    //     state.isloading = false

    // },
    // [getOneProductRedux.rejected]: (state, action) => {
    //     state.isloading = true
    // },
    // [updateProductRedux.pending]: (state, action) => {
    //     state.isloading = true
    // },
    // [updateProductRedux.fulfilled]: (state, action) => {
    //     state.UpdateResponse = action.payload
    //     state.isloading = false

    // },
    // [updateProductRedux.rejected]: (state, action) => {
    //     state.isloading = true
    // },
  },
});

// // Action creators are generated for each case reducer function
export const { setDetaileProduct } = ProductsSlice.actions
export default ProductsSlice.reducer;

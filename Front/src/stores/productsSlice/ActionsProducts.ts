import ProductService from "@/services/ProductApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProductsRedux = createAsyncThunk(
  "Products/getAll",
  async (page?: any) => {
    try {
      const response = await ProductService.findAll(page);

      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }
);

// export const AddProduct = createAsyncThunk('product/add', async (body) => {
//     try {

//         const response = await useInsertDataWithImages('/api/v1/products', body)

//         return response

//     } catch (error) {

//         return error.response

//     }

// })

export const removeProduct = createAsyncThunk("product/remove", async (id) => {
  try {
    const response = await ProductService.deleteById(id);

    return response;
  } catch (error: any) {
    return error.response;
  }
});

export const updateProductRedux = createAsyncThunk(
  "product/update",
  async (id, formData) => {
    try {


      const response = await ProductService.create(id, formData);

      return response;
    } catch (error) {
      return error.response;
    }
  }
);

export const getOneProductRedux = createAsyncThunk(
  "products/getOne",
  async (id: string) => {
    try {
      const response = await ProductService.findById(id);

      return response;
    } catch (error) {
      return error.response;
    }
  }
);

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct,delProduct } from "./adminAPI";
import { loadProdsAsync } from "../products/productsSlicer";



export const addProductAsync = createAsyncThunk(
  "admin/addProduct",
  async (productData,{dispatch}) => {
    const response = await addProduct(productData);
    return response.data;
  }
);

  export const delProductAsync = createAsyncThunk(
    "admin/deleteProduct",
    async (productId,{dispatch}) => {
      const response = await delProduct(productId);
      return response.data;
    }
  );

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductAsync.fulfilled, (state) => {
        loadProdsAsync();
        state.loading = false;
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(delProductAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(delProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      })
      .addCase(delProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const adminProducts = (state) => state.admin.products;

export default adminSlice.reducer;

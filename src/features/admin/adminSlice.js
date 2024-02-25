import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct } from "./adminAPI";

export const addProductAsync = createAsyncThunk(
  "admin/addProduct",
  async (productData) => {
    console.log(' in the slicer');
    const response = await addProduct(productData);
    return response.data;
  }
);

//   export const deleteProduct = createAsyncThunk(
//     "admin/deleteProduct",
//     async (productId) => {
//       // Implement your Django API call to delete a product
//       const response = await axios.delete(`http://your-django-api-endpoint/products/${productId}/`);
//       return { id: productId };
//     }
//   );

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
        state.loading = false;
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //   .addCase(deleteProduct.pending, (state, action) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(deleteProduct.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.products = state.products.filter(
    //       (product) => product.id !== action.payload.id
    //     );
    //   })
    //   .addCase(deleteProduct.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    //   });
  },
});

export const adminProducts = (state) => state.admin.products;

export default adminSlice.reducer;

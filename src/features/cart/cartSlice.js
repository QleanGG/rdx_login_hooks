import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadProds } from "./productsAPI";

const initialState = {
    prods: [],
    status: "idle",
};

export const loadProdsAsync = createAsyncThunk("products/loadProds", async () => {
    const response = await loadProds();
    return response.data;
  });

  export const prodSlice = createSlice({
    name: "prod",
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder.addCase(loadProdsAsync.fulfilled, (state, action) => {
        state.prods = action.payload;
        console.log(state.prods);
        state.status = "succeeded";
      });
    },
  });
  
  export const prodsInfo = (state) => state.products.prods;
  export default prodSlice.reducer;
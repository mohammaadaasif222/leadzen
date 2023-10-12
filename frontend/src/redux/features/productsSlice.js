// productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API = `https://leadzen-ucdf.onrender.com/api/v1/currencies`;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(API);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    result: [],
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.result = action.payload;
    },
    searchProduct: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.result = searchTerm
        ? state.result.filter((coin) =>
            coin.id.toLowerCase().includes(searchTerm)
          )
        : state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const { searchProduct, setProducts } = productsSlice.actions;
export default productsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../services/apiService';

const initialState = {
  products: [], // Initialize as an empty array
  status: 'idle',
  error: null,
};

// Thunk to fetch products from API
export const loadProducts = createAsyncThunk('products/loadProducts', async () => {
  const response = await fetchProducts(); // Ensure this function works
  return response;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload; // Set products on successful fetch
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      state[action.payload.index] = action.payload.product;
    },
  },
});

export const { addProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
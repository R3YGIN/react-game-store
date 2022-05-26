import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products.push(action.payload);
    },
    reset: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, deleteProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;

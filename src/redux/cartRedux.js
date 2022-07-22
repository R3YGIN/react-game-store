import { createSlice } from "@reduxjs/toolkit";
import { calcDiscount } from "../data";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: "",
    products: [],
    info: [],
    discount: 0,
    quantity: 0,
    price: 0,
    subtotal: 0,
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get cart
    getCartStart: (state) => {
      state.isFetching = true;
    },
    getCartSuccess: (state, action) => {
      state.isFetching = false;
      state.products = [];
      state.discount = 0;
      state.quantity = 0;
      state.price = 0;
      state.subtotal = 0;
      state.info = action.payload.products;
      state.id = action.payload._id;
    },
    getCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    getCartDataStart: (state) => {
      state.isFetching = true;
    },
    getCartDataSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
      state.quantity = state.products.length;
      state.price += action.payload.price;
      state.subtotal += calcDiscount(action.payload.price, action.payload.sale);
      state.discount += Math.round(
        action.payload.price > 0 && action.payload.sale > 0
          ? (action.payload.price * action.payload.sale) / 100
          : action.payload.sale === 100
          ? action.payload.price
          : 0
      );
    },
    getCartDataFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateCartStart: (state) => {
      state.isFetching = true;
    },
    updateCartSuccess: (state, action) => {
      state.id = action.payload._id;
      state.isFetching = false;
      state.products = [];
      state.discount = 0;
      state.quantity = 0;
      state.price = 0;
      state.subtotal = 0;
    },
    updateCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    clearCart: (state) => {
      state.id = "";
      state.products = [];
      state.info = [];
      state.discount = 0;
      state.quantity = 0;
      state.price = 0;
      state.subtotal = 0;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  deleteProduct,
  clearCart,
  getCartStart,
  getCartSuccess,
  getCartId,
  getCartFailure,
  getCartDataStart,
  getCartDataSuccess,
  getCartDataFailure,
  updateCartStart,
  updateCartSuccess,
  updateCartFailure,
} = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    library: [],
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getUserOrdersStart: (state) => {
      state.isFetching = true;
    },
    getUserOrdersSuccess: (state, action) => {
      state.orders = action.payload;
      state.library = [];
    },
    getUserOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    purchaseStart: (state) => {
      state.isFetching = true;
    },
    purchaseSuccess: (state) => {
      state.orders = [];
      state.library = [];
      state.isFetching = false;
      state.error = false;
    },
    purchaseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    getUserProductsStart: (state) => {
      state.isFetching = true;
      state.library = [];
    },
    getUserProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.library.push(action.payload);
    },
    getUserProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    clearOrders: (state) => {
      state.orders = [];
      state.library = [];
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  getUserOrdersStart,
  getUserOrdersSuccess,
  getUserOrdersFailure,
  purchaseStart,
  purchaseSuccess,
  purchaseFailure,
  getUserProductsStart,
  getUserProductsSuccess,
  getUserProductsFailure,
  clearOrders,
} = orderSlice.actions;
export default orderSlice.reducer;

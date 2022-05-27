import { createSlice } from "@reduxjs/toolkit";
import { calcDiscount } from "../data";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    discount: 0,
    quantity: 0,
    price: 0,
    subtotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.price += action.payload.price;
      state.discount += Math.round(
        (action.payload.price * action.payload.sale) / 100
      );
      // state.subtotal +=
      //   action.payload.price -
      //   (action.payload.price * action.payload.sale) / 100;
      state.subtotal += calcDiscount(action.payload.price, action.payload.sale);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.productSlug !== action.payload.productSlug
      );
      state.quantity = state.quantity > 0 ? state.quantity - 1 : 0;
      state.price -= action.payload.price;
      state.discount -= Math.round(
        (action.payload.price * action.payload.sale) / 100
      );
      // state.subtotal -=
      //   action.payload.price -
      //   (action.payload.price * action.payload.sale) / 100;
      state.subtotal -= calcDiscount(action.payload.price, action.payload.sale);
    },
    reset: (state) => {
      state.products = [];
      state.discount = 0;
      state.quantity = 0;
      state.price = 0;
      state.subtotal = 0;
    },
  },
});

export const { addProduct, deleteProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;

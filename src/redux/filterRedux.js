import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    price: "",
    sale: false,
    genre: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setSale: (state, action) => {
      state.sale = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    resetFilters: (state) => {
      state.search = "";
      state.price = "";
      state.sale = false;
      state.genre = "";
    },
  },
});

export const { setSearch, setPrice, setSale, setGenre, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;

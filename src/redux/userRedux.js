import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: false,
    username: "",
    email: "",
    isFetching: false,
    error: false,
  },
  reducers: {
    //LOGIN
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = false;
      state.isFetching = false;
      state.error = false;
      state.username = "";
      state.email = "";
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;

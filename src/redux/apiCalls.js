import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "./registerRedux";
import {
  clearCart,
  getCartFailure,
  getCartId,
  getCartStart,
  getCartSuccess,
  updateCartFailure,
  updateCartStart,
  updateCartSuccess,
} from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    await dispatch(loginSuccess(res.data));
    //Get user cart
    await userCart(dispatch, res.data._id, res.data.accessToken);
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutFunc = async (dispatch) => {
  dispatch(logout());
  dispatch(clearCart());
};

export const register = async (dispatch, newUser) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post(`/auth/register/`, newUser);
    dispatch(registerSuccess(res.data));
    // AutoLogin
    login(dispatch, { username: newUser.username, password: newUser.password });
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const userCart = async (dispatch, userId, token) => {
  dispatch(getCartStart());
  try {
    const res = await publicRequest.get(`carts/find/${userId}`, {
      headers: { token: `Bearer ${token}` },
    });
    // Get full info
    try {
      res.data.products.length
        ? res.data.products.map((item) => {
            const dataMap = async () => {
              const resDetails = await publicRequest.get(
                `/products/find/${item.productSlug}`
              );
              dispatch(
                getCartSuccess(
                  resDetails.data
                    ? resDetails.data
                    : { title: "Товар недоступен" }
                )
              );
              dispatch(getCartId(res.data._id));
            };
            dataMap();
          })
        : dispatch(getCartSuccess()) && dispatch(getCartId(res.data._id));
    } catch (err) {
      dispatch(getCartFailure());
    }
    // ---
  } catch (err) {
    dispatch(getCartFailure());
  }
};

export const updateCart = async (
  dispatch,
  cartId,
  updatedCartData,
  currentUser
) => {
  dispatch(updateCartStart);
  try {
    const res = await userRequest.put(`carts/${cartId}`, updatedCartData);
    await dispatch(updateCartSuccess());
    //get Update cart
    await userCart(dispatch, currentUser._id, currentUser.accessToken);
  } catch (err) {
    dispatch(updateCartFailure());
  }
};

import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "./registerRedux";
import {
  clearCart,
  getCartDataFailure,
  getCartDataStart,
  getCartDataSuccess,
  getCartFailure,
  getCartStart,
  getCartSuccess,
  updateCartStart,
  updateCartSuccess,
} from "./cartRedux";
import {
  clearOrders,
  getUserOrdersFailure,
  getUserOrdersStart,
  getUserOrdersSuccess,
  getUserProductsStart,
  getUserProductsSuccess,
  purchaseFailure,
  purchaseStart,
  purchaseSuccess,
} from "./orderRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        _id: res.data._id,
        accessToken: res.data.accessToken,
        username: res.data.username,
      })
    );
    dispatch(loginSuccess(res.data));
    window.location.reload();
    //Get user cart
    userCart(dispatch, res.data._id, res.data.accessToken);
    //Get user orders
    userOrders(dispatch, res.data._id);
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutFunc = async (dispatch) => {
  dispatch(logout());
  dispatch(clearCart());
  dispatch(clearOrders());
  localStorage.removeItem("currentUser");
};

export const register = async (dispatch, newUser) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post(`/auth/register/`, newUser);
    console.log("REG---", res.data);
    // localStorage.setItem(
    //   "currentUser",
    //   JSON.stringify({
    //     _id: res.data._id,
    //     accessToken: res.data.accessToken,
    //     username: res.data.username,
    //   })
    // );
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
    dispatch(getCartSuccess(res.data));
    //Get cart data
    userCartData(dispatch, res.data);
  } catch (err) {
    dispatch(getCartFailure());
  }
};

export const userCartData = async (dispatch, info) => {
  dispatch(getCartDataStart());
  try {
    info?.products.length
      ? info.products.map((item) => {
          const dataMap = async () => {
            const res = await publicRequest.get(
              `/products/find/${item.productSlug}`
            );
            dispatch(
              getCartDataSuccess(
                res.data ? res.data : { title: "Товар недоступен" }
              )
            );
          };
          dataMap();
        })
      : dispatch(getCartDataSuccess());
  } catch (err) {
    //Если корзина пуста
    dispatch(getCartDataFailure());
  }
};

export const updateCart = async (
  dispatch,
  cartId,
  updatedCartData,
  currentUser
) => {
  dispatch(updateCartStart());
  try {
    const res = await userRequest.put(`carts/${cartId}`, updatedCartData);
    console.log("LOG---", res.data);
    dispatch(updateCartSuccess(res.data));
    //get Update cart
    userCart(dispatch, currentUser._id, currentUser.accessToken);
    userCartData(dispatch, res.data);
  } catch (err) {
    // dispatch(updateCartFailure());
    userCart(dispatch, currentUser._id, currentUser.accessToken);
  }
};

export const userOrders = async (dispatch, userId) => {
  dispatch(getUserOrdersStart());
  try {
    const res = await userRequest.get(`/orders/find/${userId}`);
    const arrayOrders = res.data.map((item) => item.products);
    const arrayObjects = arrayOrders.flat();
    // const arrayProductSlug = arrayObjects.map((item) => item.productSlug);
    // const arrayProductId = arrayObjects.map((item) => item.productId);
    console.log("MY ORDERS ---", arrayObjects);
    dispatch(getUserOrdersSuccess(arrayObjects));
    //Get user products
    await userOrdersData(dispatch, arrayObjects);
  } catch (err) {
    dispatch(getUserOrdersFailure());
  }
};

export const userOrdersData = async (dispatch, arrayObjects) => {
  dispatch(getUserProductsStart());
  try {
    arrayObjects?.length
      ? arrayObjects.map((item) => {
          const dataMap = async () => {
            const res = await publicRequest.get(
              `/products/find/${item.productSlug}`
            );
            console.log("USER products---", res.data);
            dispatch(
              getUserProductsSuccess(
                res.data ? res.data : { title: "Товар недоступен" }
              )
            );
          };
          dataMap();
        })
      : dispatch(getUserProductsSuccess());
  } catch (err) {
    //Нет купленных товаров
    dispatch(getCartDataFailure());
  }
};

export const purchase = async (dispatch, objOrderData, cart, currentUser) => {
  dispatch(purchaseStart());
  try {
    const res = await userRequest.post("orders", objOrderData);
    dispatch(purchaseSuccess(res.data));
    //Clear or update cart in db
    dispatch(clearCart());
    // userCart
    // Removing 1 purchased items from the cart
    const filteringCart = cart.info.filter(({ productSlug }) =>
      objOrderData.products.some((el) => productSlug !== el.productSlug)
    );

    updateCart(dispatch, cart.id, {
      userId: objOrderData.userId,
      products: objOrderData.products.length === 1 ? filteringCart : [],
    });
    //Get user orders -> array product id
    userOrders(dispatch, objOrderData.userId);
    userCart(dispatch, objOrderData.userId, currentUser.accessToken); //!
    // userOrders(dispatch, objOrderData.userId); //!
  } catch (err) {
    dispatch(purchaseFailure());
  }
};

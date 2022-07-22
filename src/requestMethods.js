import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://game-store-mern.herokuapp.com/api";

// const user = JSON.parse(localStorage.getItem("persist:game-store"))?.user;
// export const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser ? currentUser.accessToken : "";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

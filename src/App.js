import Layout from "./layout/Layout";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userCart, userOrders } from "./redux/apiCalls";
import Library from "./pages/Library";
import Account from "./pages/Account";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const order = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);
  if (
    user &&
    cart?.id &&
    !cart?.isFetching &&
    !order?.isFetching &&
    !JSON.parse(localStorage.getItem("currentUser"))
  )
    window.location.reload(); //Найти другой метод
  const dispatch = useDispatch();

  //Загрузка данных пользователя
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("currentUser"))?._id) {
      const getData = async () => {
        await userCart(
          dispatch,
          JSON.parse(localStorage.getItem("currentUser"))?._id,
          JSON.parse(localStorage.getItem("currentUser"))?.accessToken
        );
        await userOrders(
          dispatch,
          JSON.parse(localStorage.getItem("currentUser"))?._id,
          JSON.parse(localStorage.getItem("currentUser"))?.accessToken
        );
      };
      getData();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:category" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="library" element={<Library />} />
          <Route path="account" element={<Account />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>
        <Route
          path="login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Layout from "./layout/Layout";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import { currentUser } from "./requestMethods";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const order = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);
  if (user && cart.id && !cart.isFetching && !order.isFetching && !currentUser)
    window.location.reload(); //Найти другой метод

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:category" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
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

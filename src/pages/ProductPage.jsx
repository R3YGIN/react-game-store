import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ProductPageDetails from "../components/ProductPageDetails";
import PageTitle from "../components/UI/PageTitle";
import { userOrders } from "../redux/apiCalls";
import { clearOrders } from "../redux/orderRedux";
import { currentUser, publicRequest } from "../requestMethods";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productSlug = location.pathname.split("/")[2];
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const order = useSelector((state) => state.order);

  const [product, setProduct] = useState({
    title: "",
    genre: [],
    slider: [],
    requirements: {
      os: { min: "-", rec: "-" },
      processor: { min: "-", rec: "-" },
      memory: { min: "-", rec: "-" },
      storage: { min: "-", rec: "-" },
      direct: { min: "-", rec: "-" },
      graphics: { min: "-", rec: "-" },
      languages: "-",
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + productSlug);
        res.data ? setProduct(res.data) : navigate("/catalog");
      } catch (err) {}
    };
    getProduct();
  }, [productSlug]);

  useEffect(() => {
    user && !order.orders.length && userOrders(dispatch, currentUser._id);
  }, []);

  return (
    <section>
      <hr
        style={{
          backgroundColor: "#333",
          height: "1px",
          border: "none",
          marginBottom: "1%",
        }}
      />
      <PageTitle title={product.title} />
      <ProductPageDetails product={product} />
    </section>
  );
};

export default ProductPage;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductPageDetails from "../components/ProductPageDetails";
import PageTitle from "../components/UI/PageTitle";
import { productsData } from "../data";
import { addProduct } from "../redux/cartRedux";

const ProductPage = () => {
  const location = useLocation();
  const productSlug = location.pathname.split("/")[2];
  const [product, setProduct] = useState({
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
        const res = await productsData.find(
          (item) => item.productSlug === productSlug
        );
        setProduct(res);
      } catch (err) {}
    };
    getProduct();
  }, [productSlug]);

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

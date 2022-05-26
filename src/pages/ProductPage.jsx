import React from "react";
import ProductPageDetails from "../components/ProductPageDetails";
import PageTitle from "../components/UI/PageTitle";

const ProductPage = () => {
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
      <PageTitle title="Assassin's Creed Вальгалла" />
      <ProductPageDetails />
    </section>
  );
};

export default ProductPage;

import React from "react";
import ProductListSwiper from "../components/ProductListSwiper";
import FreeGamesBlock from "../components/FreeGamesBlock";
import BigSlider from "../components/BigSlider";
import InfoBlock from "../components/InfoBlock";

const Home = () => {
  return (
    <>
      <BigSlider />
      <ProductListSwiper title="Лучшее на МЕГАРАСПРОДАЖЕ" />
      <FreeGamesBlock />
      <ProductListSwiper title="Новинки" />
      <InfoBlock />
    </>
  );
};

export default Home;

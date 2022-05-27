import React from "react";
import ProductListSwiper from "../components/ProductListSwiper";
import FreeGamesBlock from "../components/FreeGamesBlock";
import BigSlider from "../components/BigSlider";
import InfoBlock from "../components/InfoBlock";
import { productsData, freeGame } from "../data";

const Home = () => {
  return (
    <>
      <BigSlider />
      <ProductListSwiper
        title="Лучшее на МЕГАРАСПРОДАЖЕ"
        products={productsData}
      />
      <FreeGamesBlock freeGame={freeGame} />
      <ProductListSwiper title="Новинки" products={productsData} />
      <InfoBlock />
    </>
  );
};

export default Home;

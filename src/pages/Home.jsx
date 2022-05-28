import React, { useEffect, useState } from "react";
import ProductListSwiper from "../components/ProductListSwiper";
import FreeGamesBlock from "../components/FreeGamesBlock";
import BigSlider from "../components/BigSlider";
import InfoBlock from "../components/InfoBlock";
import { publicRequest } from "../requestMethods";

const Home = () => {
  const [newGames, setNewGames] = useState([]);
  const [freeGame, setFreeGame] = useState({});
  const [gameWithSale, setGameWithSale] = useState([]);

  useEffect(() => {
    const getNewProducts = async () => {
      try {
        const resNew = await publicRequest.get("/products?new=true");
        const resSale = await publicRequest.get("/products?sale=true");
        const resFree = await publicRequest.get("/products?free=true");
        setNewGames(resNew.data);
        setGameWithSale(resSale.data);
        setFreeGame(resFree.data);
      } catch (err) {}
    };
    getNewProducts();
  }, []);

  console.log("render");

  return (
    <>
      <BigSlider />
      <ProductListSwiper
        title="Лучшее на МЕГАРАСПРОДАЖЕ"
        products={gameWithSale}
      />
      <FreeGamesBlock freeGame={freeGame} />
      <ProductListSwiper title="Новинки" products={newGames} />
      <InfoBlock />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Library.module.css";
import PageTitle from "../components/UI/PageTitle";
import ProductCard from "../components/ProductCard";
import SortingBlock from "../components/UI/SortingBlock";
import { sortingLibrary } from "../data";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Library = () => {
  const library = useSelector((state) => state.order.library);

  // Sort
  const [sort, setSort] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("FIL--", filteredProducts);

  useEffect(() => {
    if (sort === "alphabet") {
      setFilteredProducts(
        [...library].sort((a, b) => {
          const textA = a.title.toUpperCase();
          const textB = b.title.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        })
      );
    } else {
      setFilteredProducts([...library]);
    }
  }, [sort, library]);

  return (
    <section>
      <PageTitle title="Библиотека" />
      <SortingBlock sort={sort} setSort={setSort} sorting={sortingLibrary} />
      {library.length ? (
        <div className={styles.container}>
          {sort
            ? filteredProducts.map((item) => (
                <ProductCard item={item} key={item._id} library={true} />
              ))
            : library.map((item) => (
                <ProductCard item={item} key={item._id} library={true} />
              ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h3 className={styles.empry__title}>
            Вы еще не купили ни одной игры
          </h3>
          <Link to="/catalog" className={styles.empry__link}>
            Перейти к покупкам
          </Link>
        </div>
      )}
    </section>
  );
};

export default Library;

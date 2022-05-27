import React, { useEffect, useState } from "react";
import { filters, productsData } from "../data";
import FiltersBlock from "./FiltersBlock";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import SortingBlock from "./UI/SortingBlock";

const ProductList = () => {
  // Products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Sort
  const [sort, setSort] = useState("");

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(
        [...productsData].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "price") {
      // setFilteredProducts([...productsData].sort((a, b) => b.price - a.price));
      setFilteredProducts(
        [...productsData].sort(
          (a, b) =>
            (b.sale ? b.price - (b.price * b.sale) / 100 : b.price) -
            (a.sale ? a.price - (a.price * a.sale) / 100 : a.price)
        )
      );
    } else {
      setFilteredProducts(productsData);
    }
  }, [sort]);

  //Search
  const [search, setSearch] = useState("");
  console.log(search);

  //Filter
  const [filter, setFilter] = useState("");

  console.log("render");

  return (
    <div className={styles.container}>
      <section className={styles.catalog}>
        <SortingBlock sort={sort} setSort={setSort} />
        <div className={styles.products__container}>
          {filteredProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </section>

      <FiltersBlock
        filters={filters}
        search={search}
        setSearch={setSearch}
        setFilter={setFilter}
      />
    </div>
  );
};

export default ProductList;

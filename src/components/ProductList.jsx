import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { publicRequest } from "../requestMethods";
import FiltersBlock from "./FiltersBlock";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import SortingBlock from "./UI/SortingBlock";

const ProductList = () => {
  // Products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { search, price, sale, genre } = useSelector((state) => state.filter);
  console.log("FILTER--", "1-", search, "2-", price, "3-", sale, "4-", genre);

  // Sort
  const [sort, setSort] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const query =
        search && price && genre && sale
          ? "?genre=" +
            genre +
            "&price=" +
            price +
            "&search=" +
            search +
            "&sale=" +
            sale
          : search && price && genre
          ? "?genre=" + genre + "&price=" + price + "&search=" + search
          : search && price && sale
          ? "?sale=" + sale + "&price=" + price + "&search=" + search
          : search && sale && genre
          ? "?genre=" + genre + "&sale=" + sale + "&search=" + search
          : sale && price && genre
          ? "?genre=" + genre + "&price=" + price + "&sale=" + sale
          : search && genre
          ? "?genre=" + genre + "&search=" + search
          : search && price
          ? "?price=" + price + "&search=" + search
          : search && sale
          ? "?sale=" + sale + "&search=" + search
          : genre && price
          ? "?price=" + price + "&genre=" + genre
          : genre && sale
          ? "?sale=" + sale + "&genre=" + genre
          : price && sale
          ? "?sale=" + sale + "&price=" + price
          : search
          ? "?search=" + search
          : price
          ? "?price=" + price
          : genre
          ? "?genre=" + genre
          : sale
          ? "?sale=" + sale
          : "/";
      try {
        const res = await publicRequest.get(`/products${query}`);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [search, genre, price, sale]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(
        [...products].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "price") {
      setFilteredProducts(
        [...products].sort(
          (a, b) =>
            (b.sale ? b.price - (b.price * b.sale) / 100 : b.price) -
            (a.sale ? a.price - (a.price * a.sale) / 100 : a.price)
        )
      );
    } else {
      setFilteredProducts([...products]);
    }
  }, [products, sort]);

  return (
    <div className={styles.container}>
      <span className={styles.anchor} id="productList" />
      <section className={styles.catalog}>
        <SortingBlock sort={sort} setSort={setSort} />
        <div className={styles.products__container}>
          {sort
            ? filteredProducts.map((item) => (
                <ProductCard item={item} key={item._id} />
              ))
            : products.map((item) => (
                <ProductCard item={item} key={item._id} />
              ))}
        </div>
      </section>
      <FiltersBlock />
    </div>
  );
};

export default ProductList;

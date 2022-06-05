import React, { useEffect, useRef, useState } from "react";
import { filters } from "../data";
import { publicRequest } from "../requestMethods";
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

  //Price
  const [price, setPrice] = useState("");

  //Genre
  const [genre, setGenre] = useState("");

  //Search
  const [search, setSearch] = useState("");

  //Sale
  const [sale, setSale] = useState(false);

  //Reset filters
  const handleResetFilters = () => {
    setPrice("");
    setGenre("");
    setSearch("");
    setSale(false);
    const radioInputs = document.querySelectorAll("[data-filter-radio-input]");
    radioInputs.forEach((item) => (item.checked = false));
  };

  const radioInputs = useRef([]);

  const someFilters = price || genre || search || sale;

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
      setFilteredProducts(products);
    }
  }, [products, sort]);

  return (
    <div className={styles.container}>
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

      <FiltersBlock
        filters={filters}
        search={search}
        setSearch={setSearch}
        setPrice={setPrice}
        setGenre={setGenre}
        setSale={setSale}
        handleResetFilters={handleResetFilters}
        radioInputs={radioInputs}
        someFilters={someFilters}
      />
    </div>
  );
};

export default ProductList;

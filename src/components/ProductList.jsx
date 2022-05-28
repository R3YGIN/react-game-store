import React, { useEffect, useState } from "react";
import { filters, productsData } from "../data";
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

  //Filter
  const [filter, setFilter] = useState("");

  //Search
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [filter]);

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
        setFilter={setFilter}
      />
    </div>
  );
};

export default ProductList;

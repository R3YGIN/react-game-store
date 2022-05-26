import React, { useId, useState } from "react";
import FiltersBlock from "./FiltersBlock";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import SortingBlock from "./UI/SortingBlock";

const ProductList = () => {
  const accordions = [
    {
      id: useId(),
      name: "ЦЕНА",
      details: [
        "Бесплатно",
        "Ниже 300 руб",
        "Ниже 1000 руб",
        "Ниже 3000 руб",
        "3000 руб и выше",
        "Со скидкой",
      ],
    },
    {
      id: useId(),
      name: "ЖАНР",
      details: [
        "Викторина",
        "Выживание",
        "Головоломка",
        "Гонки",
        "Групповая",
        "Инди",
        "Исследования",
        "Казуальная",
        "От первого лица",
        "Открытый мир",
        "Приключения",
        "Ролевая",
        "Симулятор",
        "Стелс",
        "Стратегия",
        "Хоррор",
        "Шутер",
        "Экшен",
      ],
    },
  ];

  // Products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Sort
  const [sort, setSort] = useState("default");

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <FiltersBlock
        accordions={accordions}
        search={search}
        setSearch={setSearch}
        setFilter={setFilter}
      />
    </div>
  );
};

export default ProductList;

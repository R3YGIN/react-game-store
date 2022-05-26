import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.contaier}>
      <a href="#">
        <div className={styles.product}>
          <div className={styles.product__imgContainer}>
            <img
              src="http://unsplash.it/700/1200"
              alt="Product img"
              className={styles.product__img}
            />
          </div>
          <div className={styles.product__infoContainer}>
            <div className={styles.product__title}>Empire of Ember</div>
            <div className={styles.product__priceContainer}>
              <div className={styles.product__discount}>-80%</div>
              <div className={styles.product__oldPrice}>1000 руб.</div>
              <div className={styles.product__price}>200 руб.</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;

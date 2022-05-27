import React from "react";
import { Link } from "react-router-dom";
import { calcDiscount } from "../data";
import styles from "./ProductCard.module.css";
import Discount from "./UI/Discount";

const ProductCard = ({ item }) => {
  return (
    <div className={styles.contaier}>
      <Link to={`/product/${item.productSlug}`}>
        <div className={styles.product}>
          <div className={styles.product__imgContainer}>
            <img
              className={styles.product__img}
              src={item.img}
              loading="lazy"
              alt="Product img"
            />
          </div>
          <div className={styles.product__infoContainer}>
            <div className={styles.product__title}>{item.title}</div>
            <div className={styles.product__priceContainer}>
              {item.sale ? (
                <>
                  <Discount discount={item.sale} />
                  <div className={styles.product__oldPrice}>
                    {item.price} руб.
                  </div>
                </>
              ) : null}

              <div className={styles.product__price}>
                {item.price === 0
                  ? "Бесплатно"
                  : item.sale
                  ? // ? item.price - (item.price * item.sale) / 100
                    calcDiscount(item.price, item.sale)
                  : item.price}
                {item.price === 0 ? "" : " руб."}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

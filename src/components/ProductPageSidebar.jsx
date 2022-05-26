import { Apps } from "@mui/icons-material";
import React from "react";
import styles from "./ProductPageSidebar.module.css";
import Discount from "./UI/Discount";

const ProductPageSidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <img
          src="http://unsplash.it/500/500"
          alt="product img"
          className={styles.img}
        />
      </div>

      <div className={styles.type}>
        <span className={styles.type__text}>Базовая игра</span>
      </div>

      <div className={styles.price__container}>
        <Discount discount="50" />
        <div className={styles.old__price}>1000 руб.</div>
        <div className={styles.price}>500 руб.</div>
      </div>

      <div className={styles.btns}>
        <div className={styles.buy__now + " " + styles.btn}>Купить сейчас</div>
        <div className={styles.cart + " " + styles.btn}>Добавить в корзину</div>

        <div className={styles.library + " " + styles.btn}>
          <Apps
            style={{
              height: "1vw",
              width: "1vw",
            }}
          />
          <span>В библиотеке</span>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.info__line}>
          <span className={styles.info__title}>Разработчик</span>
          <span className={styles.info__value}>2</span>
        </div>

        <div className={styles.info__line}>
          <span className={styles.info__title}>Издатель</span>
          <span className={styles.info__value}>2</span>
        </div>

        <div className={styles.info__line}>
          <span className={styles.info__title}>Дата выхода</span>
          <span className={styles.info__value}>2</span>
        </div>

        <div className={styles.info__line}>
          <span className={styles.info__title}>Платформа</span>
          <span className={styles.info__value}>2</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSidebar;

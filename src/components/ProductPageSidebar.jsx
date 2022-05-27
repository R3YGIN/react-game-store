import { Apps } from "@mui/icons-material";
import React from "react";
import styles from "./ProductPageSidebar.module.css";
import Discount from "./UI/Discount";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import { calcDiscount } from "../data";

const ProductPageSidebar = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const handleAddToCart = () => {
    dispatch(addProduct(product));
  };

  const library = false;

  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <img
          src={product.img}
          loading="lazy"
          alt="product img"
          className={styles.img}
        />
      </div>

      <div className={styles.type}>
        <span className={styles.type__text}>Базовая игра</span>
      </div>

      <div className={styles.price__container}>
        {product.sale ? (
          <>
            <Discount discount={product.sale} />
            <div className={styles.old__price}>{product.price} руб.</div>
          </>
        ) : null}
        <div className={styles.price}>
          {product.price === 0
            ? "Бесплатно"
            : product.sale
            ? // ? product.price - (product.price * product.sale) / 100
              calcDiscount(product.price, product.sale)
            : product.price}
          {product.price === 0 ? "" : " руб."}
        </div>
      </div>

      <div className={styles.btns}>
        {/* {library ? ( */}
        <div className={styles.library + " " + styles.btn}>
          <Apps
            style={{
              height: "1vw",
              width: "1vw",
            }}
          />
          <span>В библиотеке</span>
        </div>
        {/* ) : ( */}
        <>
          <div className={styles.buy__now + " " + styles.btn}>
            Купить сейчас
          </div>

          {products.some((item) => item.productSlug === product.productSlug) ? (
            <Link to="/cart" className={styles.cart + " " + styles.btn}>
              Посмотреть в корзине
            </Link>
          ) : (
            <div
              className={styles.cart + " " + styles.btn}
              onClick={handleAddToCart}
            >
              Добавить в корзину
            </div>
          )}
        </>
        {/* )} */}
      </div>

      <div className={styles.info}>
        <div className={styles.info__line}>
          <span className={styles.info__title}>Разработчик</span>
          <span className={styles.info__value}>{product.developer}</span>
        </div>

        <div className={styles.info__line}>
          <span className={styles.info__title}>Издатель</span>
          <span className={styles.info__value}>{product.publisher}</span>
        </div>

        <div className={styles.info__line}>
          <span className={styles.info__title}>Дата выхода</span>
          <span className={styles.info__value}>{product.releaseDate}</span>
        </div>

        <div className={styles.info__line}>
          <span className={styles.info__title}>Платформа</span>
          <span className={styles.info__value}>{product.platform}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSidebar;

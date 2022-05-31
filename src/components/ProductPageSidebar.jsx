import { Apps } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styles from "./ProductPageSidebar.module.css";
import Discount from "./UI/Discount";
import { useDispatch, useSelector } from "react-redux";
import { purchase, updateCart, userOrders } from "../redux/apiCalls";
import { Link, useNavigate } from "react-router-dom";
import { calcDiscount } from "../data";
import { currentUser, userRequest } from "../requestMethods";
import { CircularProgress } from "@mui/material";
import StripeCheckout from "react-stripe-checkout";

const ProductPageSidebar = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.currentUser);
  const orders = useSelector((state) => state.order.orders);

  const cart = useSelector((state) => state.cart);
  const { isFetching } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  useEffect(() => {});

  //Add to cart
  const updatedCartData = {
    userId: currentUser?._id,
    products: [
      ...cart.products.map((item) => ({
        productId: item._id,
        productSlug: item.productSlug,
      })),
      {
        productId: product?._id,
        productSlug: product?.productSlug,
      },
    ],
  };
  const handleAddToCart = !isFetching
    ? () => {
        user
          ? updateCart(dispatch, cart.id, updatedCartData, currentUser)
          : navigate("/login");
      }
    : null;

  //Purchase
  const KEY = process.env.REACT_APP_STRIPE;
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = !isFetching
    ? (token) => {
        setStripeToken(token);
      }
    : null;

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: product.sale
            ? calcDiscount(product.price, product.sale) * 100
            : product.price * 100,
        });
        purchase(
          dispatch,
          {
            userId: currentUser._id,
            products: [
              {
                productId: product._id,
                productSlug: product.productSlug,
              },
            ],
            amount: product.sale
              ? calcDiscount(product.price, product.sale)
              : product.price,
          },
          cart,
          currentUser
        );
        setStripeToken(null);
        console.log("ОПЛАТА ПРОШЛА УСПЕШНО -", res.data);
      } catch (err) {
        console.log("ОШИБКА ОПЛАТЫ -", err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  // --

  // ---
  const library =
    orders.length &&
    orders.some((item) => item.productSlug === product.productSlug);

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
            ? calcDiscount(product.price, product.sale)
            : product.price}
          {product.price === 0 ? "" : " руб."}
        </div>
      </div>

      <div className={styles.btns}>
        {library ? (
          <div className={styles.library + " " + styles.btn}>
            <Apps
              style={{
                height: "1vw",
                width: "1vw",
              }}
            />
            <span>В библиотеке</span>
          </div>
        ) : (
          <>
            {user ? (
              <StripeCheckout
                name="GAME STORE"
                image="http://unsplash.it/375/375"
                currency="RUB"
                description={`Итого к оплате ${product.price}руб.`}
                amount={product.price * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button
                  className={styles.buy__now + " " + styles.btn}
                  disabled={isFetching}
                >
                  Купить сейчас
                </button>
              </StripeCheckout>
            ) : (
              <button
                className={styles.buy__now + " " + styles.btn}
                disabled={isFetching}
                onClick={() => navigate("/login")}
              >
                Купить сейчас
              </button>
            )}

            {products.some(
              (item) => item.productSlug === product.productSlug
            ) ? (
              <Link to="/cart" className={styles.cart + " " + styles.btn}>
                Посмотреть в корзине
              </Link>
            ) : (
              <button
                className={styles.cart + " " + styles.btn}
                disabled={isFetching}
                onClick={handleAddToCart}
              >
                {isFetching ? (
                  <CircularProgress
                    style={{ width: "1.5vw", height: "1.5vw" }}
                  />
                ) : (
                  "Добавить в корзину"
                )}
              </button>
            )}
          </>
        )}
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

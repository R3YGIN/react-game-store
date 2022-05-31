import React, { useEffect, useState } from "react";
import PageTitle from "../components/UI/PageTitle";
import styles from "./Cart.module.css";
import Discount from "../components/UI/Discount";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Check } from "@mui/icons-material";
import { calcDiscount } from "../data";
import { currentUser, userRequest } from "../requestMethods";
import { purchase, updateCart, userCart } from "../redux/apiCalls";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Удаление из карзины
  const updatedCartData = {
    userId: currentUser?._id,
    products: cart.products.length
      ? [
          ...cart.products.map((item) => ({
            productId: item._id,
            productSlug: item.productSlug,
          })),
        ]
      : [],
  };

  // Оплата
  const KEY = process.env.REACT_APP_STRIPE;
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.subtotal * 100,
        });
        purchase(
          dispatch,
          {
            userId: currentUser._id,
            products: [...cart.info], //В массив передаем инфу о продукте/продуктах
            amount: cart.subtotal,
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

  const handleDeleteFromCart = !cart.isFetching
    ? async (e) => {
        updatedCartData.products = await updatedCartData.products?.filter(
          (item) => item.productSlug !== e.target.dataset.product
        );
        console.log(updatedCartData);
        await updateCart(dispatch, cart.id, updatedCartData, currentUser);
      }
    : null;

  return (
    <section>
      <PageTitle title="Моя корзина" />
      <div className={styles.cart__main}>
        {cart.products.length ? (
          <>
            <div className={styles.cart__products}>
              {/* ----Product */}
              {cart.products.map((item) => (
                <div className={styles.cart__product} key={item._id}>
                  <Link
                    to={`/product/${item.productSlug}`}
                    className={styles.cart__imgContainer}
                  >
                    <img
                      className={styles.cart__img}
                      loading="lazy"
                      src={item.img}
                      alt="Product img"
                    />
                  </Link>

                  <div className={styles.cart__infoContainer}>
                    <div className={styles.cart__infoBlock}>
                      <div className={styles.cart__info}>
                        <div className={styles.cart__infoTypeContainer}>
                          <span className={styles.cart__infoType}>
                            Базовая игра
                          </span>
                        </div>
                        <div className={styles.cart__infoTitle}>
                          <Link to={`/product/${item.productSlug}`}>
                            {item.title}
                          </Link>
                        </div>
                      </div>

                      <div className={styles.cart__priceContainer}>
                        {item.sale ? (
                          <>
                            <Discount discount={item.sale} />
                            <div className={styles.cart__oldPrice}>
                              {item.price} руб.
                            </div>
                          </>
                        ) : null}
                        <div className={styles.cart__price}>
                          {item.price === 0
                            ? "Бесплатно"
                            : item.sale
                            ? calcDiscount(item.price, item.sale)
                            : item.price}
                          {item.price === 0 ? "" : " руб."}
                        </div>
                      </div>
                    </div>

                    <div className={styles.cart__infoBtns}>
                      <Link
                        to={`/product/${item.productSlug}`}
                        className={styles.cart__btn}
                      >
                        Просмотр
                      </Link>
                      <button
                        className={styles.cart__btn}
                        data-product={item.productSlug}
                        onClick={(e) => handleDeleteFromCart(e)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* ----Product */}
            </div>

            {/* aside */}
            <div className={styles.cart__summary}>
              <div className={styles.summary__title}>Все игры и приложения</div>

              <div className={styles.summary__info}>
                <div className={styles.summary__infoContainer}>
                  <div className={styles.summary__priceText}>Цена</div>
                  <div className={styles.summary__price}>
                    {cart.price ? `${cart.price} руб` : 0}
                  </div>
                </div>

                <div className={styles.summary__infoContainer}>
                  <div className={styles.summary__discountText}>Скидка</div>
                  <div className={styles.summary__discount}>
                    {cart.discount ? `${-cart.discount} руб.` : 0}
                  </div>
                </div>

                <div className={styles.summary__desc}>
                  <h3 className={styles.summary__descTitle}>
                    <Check
                      style={{ color: "#11CF59", width: "1vw", heigth: "1vw" }}
                    />
                    Text
                  </h3>
                  <p className={styles.summary__descText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Provident cupiditate vitae dolores doloribus nobis facilis.
                  </p>
                </div>
              </div>

              <hr
                style={{
                  backgroundColor: "#333",
                  height: "1px",
                  border: "none",
                  marginBottom: "10%",
                }}
              />

              <div className={styles.summary__total}>
                <div className={styles.summary__totalText}>
                  Промежуточный итог
                </div>
                <div className={styles.summary__totalPrice}>
                  {cart.subtotal} руб.
                </div>
              </div>

              <StripeCheckout
                name="GAME STORE"
                image="http://unsplash.it/375/375"
                currency="RUB"
                description={`Итого к оплате ${cart.subtotal}руб.`}
                amount={cart.subtotal * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button className={styles.summary__brn}>Оформить заказ</button>
              </StripeCheckout>
            </div>
            {/* aside */}
          </>
        ) : (
          <div className={styles.emptyCart__text}>Корзина пуста</div>
        )}
      </div>
    </section>
  );
};

export default Cart;

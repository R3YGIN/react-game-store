import React from "react";
import PageTitle from "../components/UI/PageTitle";
import styles from "./Cart.module.css";
import Discount from "../components/UI/Discount";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/cartRedux";
import { Check } from "@mui/icons-material";
import { calcDiscount } from "../data";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteFromCart = (item) => {
    dispatch(deleteProduct(item));
  };

  return (
    <section>
      <PageTitle title="Моя корзина" />
      <div className={styles.cart__main}>
        {cart.products.length ? (
          <>
            <div className={styles.cart__products}>
              {/* ----Product */}
              {cart.products.map((item) => (
                <div className={styles.cart__product} key={item.id}>
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
                        onClick={() => handleDeleteFromCart(item)}
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

              <button className={styles.summary__brn}>Оформить заказ</button>
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

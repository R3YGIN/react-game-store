import React from "react";
import PageTitle from "../components/UI/PageTitle";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <section>
      <PageTitle title="Моя корзина" />
      <div className={styles.cart__main}>
        <div className={styles.cart__products}>
          {/* ----Product */}
          <div className={styles.cart__product}>
            <div className={styles.cart__imgContainer}>
              <img
                src="http://unsplash.it/200/450"
                alt="Product img"
                className={styles.cart__img}
              />
            </div>

            <div className={styles.cart__infoContainer}>
              <div className={styles.cart__infoBlock}>
                <div className={styles.cart__info}>
                  <div className={styles.cart__infoTypeContainer}>
                    <span className={styles.cart__infoType}>Базовая игра</span>
                  </div>
                  <div className={styles.cart__infoTitle}>
                    <a href="#">Empire of Ember</a>
                  </div>
                </div>

                <div className={styles.cart__priceContainer}>
                  <div className={styles.cart__discount}>-20%</div>
                  <div className={styles.cart__oldPrice}>1500 руб.</div>
                  <div className={styles.cart__price}>1200 руб.</div>
                </div>
              </div>

              <div className={styles.cart__infoBtns}>
                <button className={styles.cart__btn}>Просмотр</button>
                <button className={styles.cart__btn}>Удалить</button>
              </div>
            </div>
          </div>
          {/* ----Product */}
        </div>

        {/* aside */}
        <div className={styles.cart__summary}>
          <div className={styles.summary__title}>Все игры и приложения</div>

          <div className={styles.summary__info}>
            <div className={styles.summary__infoContainer}>
              <div className={styles.summary__priceText}>Цена</div>
              <div className={styles.summary__price}>1000</div>
            </div>

            <div className={styles.summary__infoContainer}>
              <div className={styles.summary__discountText}>Скидка</div>
              <div className={styles.summary__discount}>-5000 руб.</div>
            </div>

            <div className={styles.summary__desc}>
              <h3 className={styles.summary__descTitle}>123123</h3>
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
            <div className={styles.summary__totalText}>Промежуточный итог</div>
            <div className={styles.summary__totalPrice}>5000 руб.</div>
          </div>

          <button className={styles.summary__brn}>Оформить заказ</button>
        </div>
        {/* aside */}
      </div>
    </section>
  );
};

export default Cart;

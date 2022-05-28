import { Search } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";

const Navigation = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <section className={styles.navigation}>
      <div className={styles.flex__group}>
        <div className={styles.search}>
          <div className={styles.search__group}>
            <button className={styles.search__btn}>
              <Search style={{ width: "1.1vw", height: "1.1vw" }} />
            </button>
            <input
              type="text"
              placeholder="Поиск"
              className={styles.search__input}
            />
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__list1}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.nav__link_active : styles.nav__link
                }
              >
                <p>Главная</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? styles.nav__link_active : styles.nav__link
                }
              >
                <p>Все игры</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? styles.nav__link_active : styles.nav__link
                }
              >
                <p>Новости</p>
              </NavLink>
            </li>
          </ul>
          <ul className={styles.nav__list2}>
            <li>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  isActive ? styles.nav__link_active : styles.nav__link
                }
              >
                <p>Список желаемого</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? styles.nav__link_active : styles.nav__link
                }
              >
                <p>Корзина</p>
                {cart.quantity > 0 ? (
                  <span className={styles.cart__quantity}>{cart.quantity}</span>
                ) : null}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;

import { Search } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userCart, userOrders } from "../redux/apiCalls";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { setSearch } from "../redux/filterRedux";

const Navigation = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetCartData =
    cart.id && !cart.isFetching
      ? () => {
          userCart(
            dispatch,
            JSON.parse(localStorage.getItem("currentUser"))?._id,
            JSON.parse(localStorage.getItem("currentUser"))?.accessToken
          );
        }
      : null;

  const handleGetOrderData =
    user && !cart.isFetching
      ? () => {
          userOrders(
            dispatch,
            JSON.parse(localStorage.getItem("currentUser"))?._id,
            JSON.parse(localStorage.getItem("currentUser"))?.accessToken
          );
        }
      : null;

  const handleClickSearch = (e) => {
    console.log("CHECK2--", resultRef.current.contains(e.target));
    dispatch(setSearch(searchNav));
    navigate("/catalog");
    setSearchNav("");
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter" && searchNav) {
      dispatch(setSearch(searchNav));
      navigate("/catalog");
      setSearchNav("");
    }
  };

  const handleUnFocus = (e) => {
    e.preventDefault();
  };

  const [searchNav, setSearchNav] = useState("");
  const [products, setProducts] = useState([]);

  const resultRef = useRef();

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const res = await publicRequest.get(`/products?searchNav=${searchNav}`);
        setProducts(res.data);
      } catch (err) {}
    };
    searchNav && searchProducts();
  }, [searchNav]);

  return (
    <section className={styles.navigation}>
      <div className={styles.flex__group}>
        <div className={styles.search}>
          <div className={styles.search__group}>
            <button className={styles.search__btn} onClick={handleClickSearch}>
              <Search style={{ width: "1.1vw", height: "1.1vw" }} />
            </button>
            <input
              type="text"
              placeholder="Поиск"
              value={searchNav}
              onChange={(e) => setSearchNav(e.target.value)}
              onKeyUp={handleEnterSearch}
              className={styles.search__input}
            />
            {searchNav && (
              <div className={styles.search__result} ref={resultRef}>
                <ul>
                  {products.length ? (
                    products.map((item) => (
                      <li
                        key={item.productSlug}
                        className={styles.search__resultName}
                      >
                        <Link
                          to={`/product/${item.productSlug}`}
                          onMouseDown={handleUnFocus}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>Не найдено</li>
                  )}
                  {products.length ? (
                    <button
                      className={styles.search__resultBtn}
                      onClick={handleClickSearch}
                      onMouseDown={handleUnFocus}
                    >
                      Показать все
                    </button>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            )}
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
            <li onClick={handleGetOrderData}>
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
            {/* <li>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  isActive ? styles.nav__link_active : styles.nav__link
                }
              >
                <p>Список желаемого</p>
              </NavLink>
            </li> */}
            <li onClick={handleGetCartData}>
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

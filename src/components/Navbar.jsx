import { Login, Logout, Person } from "@mui/icons-material";
import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutFunc } from "../redux/apiCalls";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logoutFunc(dispatch);
  };

  return (
    <header id="header" className={styles.header}>
      <div className={styles.top}>
        <div className={styles.top__left}>
          <div className={styles.logo}>
            <img
              src="http://unsplash.it/100/100"
              alt="logo"
              className={styles.logo__img}
            />
          </div>

          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__li}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.nav__link_active : styles.nav__link
                  }
                >
                  <p>МАГАЗИН</p>
                </NavLink>
              </li>

              <li className={styles.nav__li}>
                <NavLink
                  to="1"
                  className={({ isActive }) =>
                    isActive ? styles.nav__link_active : styles.nav__link
                  }
                >
                  <p>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>
                </NavLink>
              </li>

              <li className={styles.nav__li}>
                <NavLink
                  to="2"
                  className={({ isActive }) =>
                    isActive ? styles.nav__link_active : styles.nav__link
                  }
                >
                  <p>СПРАВКА</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.top__right}>
          {user ? (
            <div className={styles.account}>
              <Person
                style={{ color: "#e7e7e7", width: "1.5vw", height: "1.5vw" }}
              />
              <span className={styles.account__text}>{user.username}</span>
              <ul className={styles.account__list}>
                <li>
                  <a href="#" className={styles.account__link}>
                    <span>УЧЕТНАЯ ЗАПИСЬ</span>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.account__link}>
                    <span>БИБЛИОТЕКА</span>
                  </a>
                </li>
                <li>
                  <div className={styles.account__link} onClick={handleLogout}>
                    <Logout
                      style={{
                        width: "1.2vw",
                        height: "1.2vw",
                        marginRight: "0.3vw",
                      }}
                    />
                    <span>ВЫЙТИ</span>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div className={styles.login}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? styles.login__link_active : styles.login__link
                }
              >
                <Login
                  style={{
                    width: "1.2vw",
                    height: "1.2vw",
                    marginRight: "0.3vw",
                  }}
                />
                Войти
              </NavLink>
            </div>
          )}
          <div className={styles.launcher}>
            <a href="#" style={{ width: "100%" }}>
              <p className={styles.launcher__text}>ЗАГРУЗИТЬ LAUNCHER</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

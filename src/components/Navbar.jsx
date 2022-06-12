import { Login, Logout, Person } from "@mui/icons-material";
import React, { useRef } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutFunc } from "../redux/apiCalls";
import { lightMode, darkMode } from "../data";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const { username } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logoutFunc(dispatch);
  };

  const themeCheckbox = useRef();
  console.log(themeCheckbox.current);

  const handleSwitchTheme = () => {
    const light = () => {
      for (let key in lightMode) {
        // console.log(key, lightMode[key]);
        document.documentElement.style.setProperty(key, lightMode[key]);
      }
    };
    const dark = () => {
      for (let key in darkMode) {
        // console.log(key, darkMode[key]);
        document.documentElement.style.setProperty(key, darkMode[key]);
      }
    };
    themeCheckbox.current.checked ? light() : dark();
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
          <div className={styles.themeSwitch}>
            <input
              ref={themeCheckbox}
              type="checkbox"
              name="theme"
              id="theme"
              onChange={handleSwitchTheme}
              className={styles.themeSwitch__checkbox}
            />
            <label htmlFor="theme" className={styles.themeSwitch__container}>
              <div className={styles.themeSwitch__btn}></div>
            </label>
          </div>
          {user ? (
            <div className={styles.account}>
              <Person
                style={{
                  color: "var(--textHeader)",
                  width: "1.5vw",
                  height: "1.5vw",
                }}
              />
              <span className={styles.account__text}>{username}</span>
              <ul className={styles.account__list}>
                <li>
                  <Link to="/account" className={styles.account__link}>
                    <span>УЧЕТНАЯ ЗАПИСЬ</span>
                  </Link>
                </li>
                <li>
                  <Link to="/library" className={styles.account__link}>
                    <span>БИБЛИОТЕКА</span>
                  </Link>
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

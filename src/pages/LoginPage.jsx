import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  // CHANGE SECTION
  const [isSelected, setIsSelected] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <div
          className={`${styles.login__block} + ${
            isSelected ? styles.active : ""
          }`}
        >
          <div className={styles.box}>
            <h1 className={styles.title}>Войти в аккаунт</h1>
            <form
              className={`${styles.form} + ${isSelected ? styles.active : ""}`}
            >
              <input
                className={styles.input}
                placeholder="Имя пользователя"
                type="text"
              />
              <input
                className={styles.input}
                placeholder="Пароль"
                type="password"
              />
              <button className={styles.btn}>Войти</button>
              <span className={styles.error}>Ошибка</span>
            </form>
            <button
              className={`${styles.btn} + ${isSelected ? styles.active : ""}`}
              onClick={handleToggle}
            >
              Войти
            </button>
          </div>
        </div>
        <div
          className={`${styles.register__block} + ${
            isSelected ? "" : styles.active
          }`}
        >
          <div className={styles.box}>
            <h1 className={styles.title}>Регистрация</h1>
            <form
              className={`${styles.form} + ${isSelected ? "" : styles.active}`}
            >
              <input
                className={styles.input}
                placeholder="Имя пользователя"
                type="text"
              />
              <input
                className={styles.input}
                placeholder="Почта"
                type="email"
              />
              <input
                className={styles.input}
                placeholder="Пароль"
                type="password"
              />
              <button className={styles.btn}>Войти</button>
              <span className={styles.error}>Ошибка</span>
            </form>
            <button
              className={`${styles.btn} + ${isSelected ? "" : styles.active}`}
              onClick={handleToggle}
            >
              Создать аккаунт
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;

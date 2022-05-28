import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import styles from "./LoginPage.module.css";
import { login, register } from "../redux/apiCalls";

const LoginPage = () => {
  const dispatch = useDispatch();

  // CHANGE SECTION
  const [isSelected, setIsSelected] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  //ERROR
  const { isFetching, error } = useSelector(
    isSelected ? (state) => state.user : (state) => state.register
  );

  //LOGIN
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  //REGISTER
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClickRegister = async (e) => {
    e.preventDefault();
    const newUser = { ...inputs };
    await register(dispatch, newUser);
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
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className={styles.input}
                placeholder="Пароль"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className={styles.btn}
                onClick={handleClick}
                disabled={isFetching}
              >
                Войти
              </button>
              {error && (
                <span className={styles.error}>Ошибка авторизации</span>
              )}
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
                name="username"
                type="text"
                onChange={handleChange}
              />
              <input
                className={styles.input}
                placeholder="Почта"
                name="email"
                type="email"
                onChange={handleChange}
              />
              <input
                className={styles.input}
                placeholder="Пароль"
                name="password"
                type="password"
                onChange={handleChange}
              />
              <button
                className={styles.btn}
                onClick={handleClickRegister}
                disabled={isFetching}
              >
                Создать аккаунт
              </button>
              {error && (
                <span className={styles.error}>Ошибка регистрации</span>
              )}
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

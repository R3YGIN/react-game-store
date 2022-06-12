import React, { useState } from "react";
import PageTitle from "../components/UI/PageTitle";
import { userRequest } from "../requestMethods";
import styles from "./Account.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/userRedux";

const Account = () => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");

  const { username, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdateAcc = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.put(
        `/users/${JSON.parse(localStorage.getItem("currentUser"))?._id}`,
        inputs
      );
      dispatch(loginSuccess(res.data));
      setError("");
      console.log("RES--", res.data);
    } catch (err) {
      setError(`${err.response.data}`);
    }
  };

  return (
    <section>
      <PageTitle title="Учетная запись" />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleUpdateAcc}>
          <div className={styles.form__item}>
            <label className={styles.form__label} htmlFor="acc__username">
              Имя пользователя<span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={styles.form__input}
              type="text"
              name="username"
              id="acc__username"
              onChange={handleChange}
              required
              minLength={4}
              defaultValue={username}
              placeholder="username"
            />
          </div>
          <div className={styles.form__item}>
            <label className={styles.form__label} htmlFor="acc__email">
              Почта<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="acc__email"
              onChange={handleChange}
              required
              minLength={4}
              defaultValue={email}
              placeholder="email"
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__item}>
            <label className={styles.form__label} htmlFor="acc__oldPassword">
              Текущий пароль<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              name="oldPassword"
              id="acc__oldPassword"
              onChange={handleChange}
              placeholder="Текущий пароль"
              className={styles.form__input}
              required
            />
          </div>
          <div className={styles.form__item}>
            <label className={styles.form__label} htmlFor="acc__newPassword">
              Новый пароль
            </label>
            <input
              type="password"
              name="password"
              id="acc__newPassword"
              onChange={handleChange}
              placeholder="Новый пароль"
              className={styles.form__input}
              minLength={6}
            />
          </div>
          <div className={styles.form__item}>
            <button className={styles.form__btn}>Обновить</button>
          </div>
          {error && (
            <div className={styles.form__item}>
              <p className={styles.form__error}>{error}*</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Account;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./InfoBlock.module.css";

const InfoBlock = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info__container}>
        <Link to="catalog">
          <div className={styles.info__imgContainer}>
            <img
              className={styles.info__img}
              src="http://unsplash.it/1000/500"
              loading="lazy"
              alt="Info img"
            />
          </div>
        </Link>

        <div className={styles.info__textContainer}>
          <div className={styles.info__textTitle}>Исследуйте наш каталог</div>
          <div className={styles.info__textBlock}>
            <p className={styles.info__text}>
              Просматривайте игры, сортируя их по жанрам, функциям, цене и
              другим критериям, чтобы найти новые интересные проекты.
            </p>
          </div>
          <div className={styles.info__btnBlock}>
            <Link to="catalog">
              <span className={styles.info__btn}>УЗНАТЬ БОЛЬШЕ</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;

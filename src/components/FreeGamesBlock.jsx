import { CardGiftcard } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./FreeGamesBlock.module.css";

const FreeGamesBlock = ({ freeGame }) => {
  return (
    <section className={styles.free_block}>
      <div className={styles.title__block}>
        <div className={styles.title__container}>
          <span>
            <CardGiftcard fontSize="large" />
          </span>
          <span className={styles.title}>Бесплатные игры</span>
        </div>
        <div>
          <a className={styles.info} href="#">
            Подробнее
          </a>
        </div>
      </div>
      <div className={styles.game__block}>
        {/* freeGame */}
        <Link
          to={`product/${freeGame.productSlug}`}
          className={styles.free__game}
        >
          <div className={styles.game__img}>
            <img
              src={freeGame.img}
              className={styles.img}
              loading="lazy"
              alt="Free Game"
            />
            <div className={styles.game__message}>Сейчас бесплатно</div>
          </div>
          <div className={styles.game__info}>
            <div className={styles.game__title}>{freeGame.title}</div>
            <div className={styles.game__desc}>Бесплатно до 15 июня</div>
          </div>
        </Link>
        {/* freeGame */}
        <div className={styles.free__game}>
          <div className={styles.game__img}>
            <img
              src="http://unsplash.it/1920/450"
              alt="Free Game"
              loading="lazy"
              className={styles.img}
            />
            <div
              className={
                styles.game__message + " " + styles.game__message_secret
              }
            >
              Тайная игра
            </div>
          </div>
          <div className={styles.game__info}>
            <div className={styles.game__title + " " + styles.game__title_sec}>
              Доступно после 15 июня
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeGamesBlock;

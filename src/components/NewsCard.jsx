import React from "react";
import { Link } from "react-router-dom";
import styles from "./NewsCard.module.css";

const NewsCard = ({ newsData }) => {
  return (
    <div className={styles.card}>
      <hr className={styles.card__line} />
      <Link to={`/news/${newsData.newsSlug}`}>
        <div className={styles.card__container}>
          <div className={styles.card__imgContainer}>
            <img
              src={newsData.img}
              alt="News Img"
              className={styles.card__img}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.info__date}>
              {newsData.createdAt.slice(0, 10)}
            </div>
            <h2 className={styles.info__title}>{newsData.title}</h2>
            <div className={styles.info__details}>
              <span className={styles.info__detailsText}>Подробнее</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;

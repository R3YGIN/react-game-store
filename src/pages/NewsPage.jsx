import React, { useState } from "react";
import PageTitle from "../components/UI/PageTitle";
import styles from "./NewsPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";

const NewsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newsSlug = location.pathname.split("/")[2];

  const [news, setNews] = useState({});

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await publicRequest.get("/news/find/" + newsSlug);
        res.data ? setNews(res.data) : navigate("/news");
      } catch (err) {}
    };
    getNews();
  }, [newsSlug]);

  return (
    <section>
      <PageTitle title={news.title} />
      <div className={styles.content}>
        <div className={styles.content__imgContainer}>
          <img src={news.img} alt="News Img" className={styles.content__img} />
        </div>
        <div className={styles.content__textContainer}>
          <p className={styles.content__text}>{news.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;

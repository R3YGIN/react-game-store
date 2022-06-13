import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import PageTitle from "../components/UI/PageTitle";
import { publicRequest } from "../requestMethods";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await publicRequest.get("/news");
        if (res.data.length) {
          const sortedNews = res.data.sort((a, b) => {
            const DataA = new Date(a.createdAt);
            const DataB = new Date(b.createdAt);
            return DataA < DataB ? 1 : -1;
          });
          setNews(sortedNews);
        }
      } catch (err) {}
    };
    getNews();
  }, []);

  return (
    <section style={{ marginBottom: "10vw" }}>
      <PageTitle title="Новости" />
      {news.map((item) => (
        <NewsCard key={item._id} newsData={item} />
      ))}
    </section>
  );
};

export default NewsList;

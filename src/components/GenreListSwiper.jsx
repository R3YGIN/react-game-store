import React from "react";
import TopListSwiper from "./UI/TopListSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "./GenreListSwiper.module.css";
import { genreListSlides } from "../data";
import { Link } from "react-router-dom";

const GenreListSwiper = () => {
  return (
    <section className={styles.container}>
      <TopListSwiper title="Популярные жанры" />
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={{
          nextEl: `.navBtn__right`,
          prevEl: `.navBtn__left`,
        }}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        {genreListSlides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slide}>
              <Link to={item.link}>
                <div className={styles.slide__imgContainer}>
                  <img
                    src={item.img}
                    className={styles.slide__img}
                    loading="lazy"
                    alt="Genre img"
                  />
                </div>
                <div className={styles.slide__titleContainer}>
                  <span className={styles.slide__title}>{item.name}</span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GenreListSwiper;

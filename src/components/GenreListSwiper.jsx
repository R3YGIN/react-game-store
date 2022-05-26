import React from "react";
import TopListSwiper from "./UI/TopListSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "./GenreListSwiper.module.css";

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
        <SwiperSlide>
          <div className={styles.slide}>
            <a href="#">
              <div className={styles.slide__imgContainer}>
                <img
                  src="http://unsplash.it/500/300"
                  alt="Genre img"
                  className={styles.slide__img}
                />
              </div>
              <div className={styles.slide__titleContainer}>
                <span className={styles.slide__title}>Экшен</span>
              </div>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <a href="#">
              <div className={styles.slide__imgContainer}>
                <img
                  src="http://unsplash.it/500/300"
                  alt="Genre img"
                  className={styles.slide__img}
                />
              </div>
              <div className={styles.slide__titleContainer}>
                <div className={styles.slide__title}>Казуальная</div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <a href="#">
              <div className={styles.slide__imgContainer}>
                <img
                  src="http://unsplash.it/500/300"
                  alt="Genre img"
                  className={styles.slide__img}
                />
              </div>
              <div className={styles.slide__titleContainer}>
                <div className={styles.slide__title}>Хоррор</div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <a href="#">
              <div className={styles.slide__imgContainer}>
                <img
                  src="http://unsplash.it/500/300"
                  alt="Genre img"
                  className={styles.slide__img}
                />
              </div>
              <div className={styles.slide__titleContainer}>
                <div className={styles.slide__title}>Инди</div>
              </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default GenreListSwiper;

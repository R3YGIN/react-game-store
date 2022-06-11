import React from "react";
import { useDispatch } from "react-redux";
import TopListSwiper from "./UI/TopListSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "./GenreListSwiper.module.css";
import { genreListSlides } from "../data";
import { setGenre } from "../redux/filterRedux";

const GenreListSwiper = () => {
  const dispatch = useDispatch();

  const handleGenreClick = (value) => {
    dispatch(setGenre(value));
    const radioInputs = document.querySelectorAll("[data-filter-radio-input]");
    const genre = [...radioInputs].find((item) => item.value === value);
    genre.checked = true;
  };

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
              <a
                href="#productList"
                onClick={() => handleGenreClick(item.value)}
              >
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
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GenreListSwiper;

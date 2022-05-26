import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "./ProductListSwiper.module.css";
import TopListSwiper from "./UI/TopListSwiper";

const ProductListSwiper = ({ title }) => {
  return (
    <section className={styles.container}>
      <hr style={{ backgroundColor: "#333", height: "1px", border: "none" }} />
      <TopListSwiper title={title} />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={{
          // nextEl: `.${styles.navBtn__right}`,
          // prevEl: `.${styles.navBtn__left}`,
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
                  className={styles.slide__img}
                  src="http://unsplash.it/500/800"
                  alt="slide"
                />
              </div>
              <div className={styles.slide__titleContainer}>
                <span className={styles.slide__title}>
                  Far Cry 6 osidnfosidnvs77777777777777777
                </span>
              </div>
              <div className={styles.slide__priceContainer}>
                <div className={styles.slide__discount}>
                  <span>-50 %</span>
                </div>
                <div className={styles.slide__priceBlock}>
                  <div className={styles.slide__oldPrice}>2000 руб.</div>
                  <div className={styles.slide__price}>1000 руб.</div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <a href="#">
              <div className={styles.slide__imgContainer}>
                <img
                  className={styles.slide__img}
                  src="http://unsplash.it/500/800"
                  alt="slide"
                />
              </div>
              <div className={styles.slide__titleContainer}>
                <span className={styles.slide__title}>
                  Far Cry 6 osidnfosidnvs77777777777777777
                </span>
              </div>
              <div className={styles.slide__priceContainer}>
                <div className={styles.slide__discount}>
                  <span>-50 %</span>
                </div>
                <div className={styles.slide__priceBlock}>
                  <div className={styles.slide__oldPrice}>2000 руб.</div>
                  <div className={styles.slide__price}>1000 руб.</div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <a href="#">
              <div className={styles.slide__imgContainer}>
                <img
                  className={styles.slide__img}
                  src="http://unsplash.it/500/800"
                  alt="slide"
                />
              </div>
              <div className={styles.slide__titleContainer}>
                <span className={styles.slide__title}>
                  Far Cry 6 osidnfosidnvs77777777777777777
                </span>
              </div>
              <div className={styles.slide__priceContainer}>
                <div className={styles.slide__discount}>
                  <span>-50 %</span>
                </div>
                <div className={styles.slide__priceBlock}>
                  <div className={styles.slide__oldPrice}>2000 руб.</div>
                  <div className={styles.slide__price}>1000 руб.</div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <a href="#">
              <div className={styles.slide__imgContainer}>
                <img
                  className={styles.slide__img}
                  src="http://unsplash.it/500/800"
                  alt="slide"
                />
              </div>
              <div className={styles.slide__titleContainer}>
                <span className={styles.slide__title}>
                  Far Cry 6 osidnfosidnvs77777777777777777
                </span>
              </div>
              <div className={styles.slide__priceContainer}>
                <div className={styles.slide__discount}>
                  <span>-50 %</span>
                </div>
                <div className={styles.slide__priceBlock}>
                  <div className={styles.slide__oldPrice}>2000 руб.</div>
                  <div className={styles.slide__price}>1000 руб.</div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <a href="#">
              <div className={styles.slide__imgContainer}>
                <img
                  className={styles.slide__img}
                  src="http://unsplash.it/500/800"
                  alt="slide"
                />
              </div>
              <div className={styles.slide__titleContainer}>
                <span className={styles.slide__title}>
                  Far Cry 6 osidnfosidnvs77777777777777777
                </span>
              </div>
              <div className={styles.slide__priceContainer}>
                <div className={styles.slide__discount}>
                  <span>-50 %</span>
                </div>
                <div className={styles.slide__priceBlock}>
                  <div className={styles.slide__oldPrice}>2000 руб.</div>
                  <div className={styles.slide__price}>1000 руб.</div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductListSwiper;

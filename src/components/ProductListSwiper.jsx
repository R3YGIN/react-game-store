import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "./ProductListSwiper.module.css";
import TopListSwiper from "./UI/TopListSwiper";
import Discount from "./UI/Discount";
import { Link } from "react-router-dom";
import { calcDiscount } from "../data";

const ProductListSwiper = ({ title, products }) => {
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
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slide}>
              <Link to={`product/${item.productSlug}`}>
                <div className={styles.slide__imgContainer}>
                  <img
                    className={styles.slide__img}
                    src={item.img}
                    loading="lazy"
                    alt="slide"
                  />
                </div>
                <div className={styles.slide__titleContainer}>
                  <span className={styles.slide__title}>{item.title}</span>
                </div>
                <div className={styles.slide__priceContainer}>
                  {item.sale ? <Discount discount={item.sale} /> : null}
                  <div className={styles.slide__priceBlock}>
                    {item.sale ? (
                      <div className={styles.slide__oldPrice}>
                        {item.price} руб.
                      </div>
                    ) : null}
                    <div className={styles.slide__price}>
                      {item.price === 0
                        ? "Бесплатно"
                        : item.sale
                        ? calcDiscount(item.price, item.sale)
                        : item.price}
                      {item.price === 0 ? "" : " руб."}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductListSwiper;

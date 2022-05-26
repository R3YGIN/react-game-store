import React from "react";
import styles from "./ProductPageSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import SwiperBtn from "./UI/SwiperBtn";

const ProductPageSlider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        grabCursor
        // thumbs={{ swiper: thumbsSwiper }}
        navigation={{
          nextEl: ".productPageRight",
          prevEl: ".productPageLeft",
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.slider__containerBig}
      >
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__big}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="slide"
          />
        </SwiperSlide>
        {/* slide */}
      </Swiper>

      <Swiper
        // onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        navigation={{
          nextEl: ".productPageRight",
          prevEl: ".productPageLeft",
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.slider__containerThumb}
      >
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
        {/* slide */}
        <SwiperSlide className={styles.slide__thumb}>
          <img
            className={styles.slider__img}
            src="http://unsplash.it/1400/800"
            alt="thumb"
          />
        </SwiperSlide>
        {/* slide */}
      </Swiper>

      <div className={styles.leftBtn}>
        <SwiperBtn
          className="productPageLeft"
          style={{ width: "3vw", height: "3vw", marginBottom: "1.1vw" }}
        />
      </div>
      <div className={styles.rightBtn}>
        <SwiperBtn
          className="productPageRight"
          style={{
            transform: "rotate(180deg)",
            width: "3vw",
            height: "3vw",
            marginBottom: "1.1vw",
          }}
        />
      </div>
    </div>
  );
};

export default ProductPageSlider;

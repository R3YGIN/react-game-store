import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel, Autoplay } from "swiper";
import styles from "./BigSlider.module.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { mainSlider } from "../data.js";

const BigSlider = () => {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
    <section className={styles.slider}>
      <div className={styles.slider__flex}>
        <div className={styles.slider__images}>
          <Swiper
            thumbs={{ swiper: imagesNavSlider }}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={32}
            autoplay
            loop={true}
            grabCursor
            effect="creative"
            navigation={{
              nextEl: `.${styles.slider__next}`,
              prevEl: `.${styles.slider__prev}`,
            }}
            breakpoints={{
              0: {
                direction: "horizontal",
              },
              768: {
                direction: "horizontal",
              },
            }}
            className={styles.swiper__container2}
            modules={[Navigation, Thumbs, Autoplay]}
          >
            {mainSlider.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.slider__image}>
                    <img src={slide} loading="lazy" alt="slide" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className={styles.slider__col}>
          <div className={styles.slider__prev}>
            <KeyboardArrowUp fontSize="large" />
          </div>

          <div className={styles.slider__thumbs}>
            <Swiper
              // onSwiper={setImagesNavSlider}
              direction="vertical"
              spaceBetween={10}
              slidesPerView={3}
              autoplay
              loop={true}
              mousewheel={true}
              navigation={{
                nextEl: `.${styles.slider__next}`,
                prevEl: `.${styles.slider__prev}`,
              }}
              className={styles.swiper__container1}
              breakpoints={{
                0: {
                  direction: "horizontal",
                },
                768: {
                  direction: "vertical",
                },
              }}
              modules={[Navigation, Thumbs, Autoplay, Mousewheel]}
            >
              {mainSlider.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={styles.slider__image}>
                      <img src={slide} loading="lazy" alt="slide" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className={styles.slider__next}>
            <KeyboardArrowDown fontSize="large" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigSlider;

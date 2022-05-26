import React from "react";
import SwiperBtn from "./SwiperBtn";
import "./topListSwiper.css";

const TopListSwiper = ({ title }) => {
  return (
    <div className="top__block">
      <div className="top__title">{title}</div>
      <div className="top__nav">
        <SwiperBtn
          className="navBtn__left"
          style={{ width: "35px", height: "35px" }}
        />
        <SwiperBtn
          className="navBtn__right"
          style={{
            transform: "rotate(180deg)",
            marginLeft: "15px",
            width: "35px",
            height: "35px",
          }}
        />
      </div>
    </div>
  );
};

export default TopListSwiper;

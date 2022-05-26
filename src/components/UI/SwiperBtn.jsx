import { ArrowBackIos } from "@mui/icons-material";
import React from "react";
import "./swiperBtn.css";

const SwiperBtn = ({ className, style }) => {
  return (
    <button className={"top__navBtn" + " " + className} style={style}>
      <ArrowBackIos fontSize="small" style={{ paddingLeft: "4px" }} />
    </button>
  );
};

export default SwiperBtn;

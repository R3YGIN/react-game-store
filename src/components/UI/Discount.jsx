import React from "react";
import styles from "./Discount.module.css";

const Discount = ({ discount }) => {
  return (
    <div className={styles.container}>
      <span className={styles.discount}>- {discount} %</span>
    </div>
  );
};

export default Discount;

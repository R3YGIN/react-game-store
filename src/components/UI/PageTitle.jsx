import React from "react";
import styles from "./PageTitle.module.css";

const PageTitle = ({ title }) => {
  return (
    <div className={styles.title__container}>
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;

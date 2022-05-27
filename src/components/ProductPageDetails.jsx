import React from "react";
import styles from "./ProductPageDetails.module.css";
import ProductPageSidebar from "./ProductPageSidebar";
import ProductPageSlider from "./ProductPageSlider";
import SysRequBlock from "./SysRequBlock";

const ProductPageDetails = ({ product }) => {
  const { genre } = product;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ProductPageSlider product={product} />

        <div className={styles.about}>
          <p>{product.about}</p>
        </div>

        <div className={styles.cat}>
          <div className={styles.cat__block}>
            <div className={styles.cat__title}>Жанры</div>
            <div className={styles.cat__textContainer}>
              {/*  */}
              {genre.map((item, i, arr) => (
                <span key={item + i} className={styles.cat__text}>
                  {item}
                  {arr.length === i + 1 ? " " : ", "}
                </span>
              ))}
              {/*  */}
            </div>
          </div>
          <div className={styles.cat__block}>
            <div className={styles.cat__title}>Особенности</div>
            <div className={styles.cat__textContainer}>-</div>
          </div>
        </div>

        <div className={styles.desc}>
          <div className={styles.desc__title}>{product.title}</div>
          <div className={styles.desc__img}>
            <img src={product.wideImg} loading="lazy" alt="desc img" />
          </div>
          <div className={styles.desc__text}>
            <p>{product.desc}</p>
          </div>
        </div>

        <SysRequBlock product={product} />
      </div>

      <aside className={styles.sidebar}>
        <ProductPageSidebar product={product} />
      </aside>
    </div>
  );
};

export default ProductPageDetails;

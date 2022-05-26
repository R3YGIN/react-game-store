import React from "react";
import styles from "./ProductPageDetails.module.css";
import ProductPageSidebar from "./ProductPageSidebar";
import ProductPageSlider from "./ProductPageSlider";
import SysRequBlock from "./SysRequBlock";

const ProductPageDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ProductPageSlider />

        <div className={styles.about}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            excepturi placeat odit doloremque facere perferendis?
          </p>
        </div>

        <div className={styles.cat}>
          <div className={styles.cat__block}>
            <div className={styles.cat__blockTitle}>Жанры</div>
            <div className={styles.cat__blockText}>
              {/*  */}
              <span>Экшен</span>, <span>Ролевая</span>,{" "}
              <span>Открытый мир</span>
              {/*  */}
            </div>
          </div>
          <div className={styles.cat__block}>
            <div className={styles.cat__blockTitle}>Особенности</div>
            <div className={styles.cat__blockText}>-</div>
          </div>
        </div>

        <div className={styles.desc}>
          <div className={styles.desc__title}>Assassin's Creed Вальгалла</div>
          <div className={styles.desc__img}>
            <img src="http://unsplash.it/1200/300" alt="desc img" />
          </div>
          <div className={styles.desc__text}>
            <p>
              В Assassin's Creed Вальгалла вам предстоит пройти путь к славе,
              играя за легендарного викинга по имени Эйвор. Исследуйте мир,
              сражайтесь, развивайте селение и усиливайте влияние. – Совершайте
              набеги на крепости саксов. – Сражайтесь двумя видами оружия
              одновременно. – Испытайте себя в битвах против самых разных
              противников. – С каждым выбором определяйте путь развития
              персонажа и селения клана. – Исследуйте открытый мир от берегов
              Норвегии до королевств Англии. – Развивайте селение клана.
            </p>
          </div>
        </div>

        <SysRequBlock />
      </div>

      <aside className={styles.sidebar}>
        <ProductPageSidebar />
      </aside>
    </div>
  );
};

export default ProductPageDetails;

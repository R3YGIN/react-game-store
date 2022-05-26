import React from "react";
import styles from "./SysRequBlock.module.css";

const SysRequBlock = () => {
  const z = [
    {
      minTitle: "jc",
      minValue: "13",
      requTitle: "ff",
      requValue: "gg",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title__block}>Системные требования</div>
      <div className={styles.requ__block}>
        <div className={styles.requ__os}>
          <span>Windows</span>
        </div>
        <div className={styles.requ__colName}>
          <div className={styles.requ__head}>Минимальные</div>
          <div className={styles.requ__head}>Рекомендуется</div>
        </div>

        {/* render */}
        <div className={styles.requ__col}>
          <div className={styles.col}>
            <div className={styles.col__name}>DirectX</div>
            <div className={styles.col__value}>
              DirectX 12 Lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__name}>DirectX</div>
            <div className={styles.col__value}>DirectX 12</div>
          </div>
        </div>
        {/* render */}

        {/* lang */}
        <div className={styles.languages}>
          <div className={styles.lang__title}>Поддерживаемые языки</div>
          <p className={styles.lang__list}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil,
            placeat perspiciatis autem incidunt obcaecati necessitatibus earum,
            ducimus quaerat quos quasi ut culpa quia veritatis nobis?
            Reprehenderit fugiat commodi corrupti.
          </p>
        </div>
        {/* lang */}

        <div className="privacy"></div>
      </div>
    </div>
  );
};

export default SysRequBlock;

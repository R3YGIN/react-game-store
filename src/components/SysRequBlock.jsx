import React from "react";
import styles from "./SysRequBlock.module.css";

const SysRequBlock = ({ product }) => {
  const { requirements } = product;

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

        {/* block */}
        <div className={styles.requ__col}>
          <div className={styles.col}>
            <div className={styles.col__name}>ОС</div>
            <div className={styles.col__value}>{requirements.os.min}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__name}>ОС</div>
            <div className={styles.col__value}>{requirements.os.rec}</div>
          </div>
        </div>
        {/* block */}
        {/* block */}
        <div className={styles.requ__col}>
          <div className={styles.col}>
            <div className={styles.col__name}>Процессор</div>
            <div className={styles.col__value}>
              {requirements.processor.min}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__name}>Процессор</div>
            <div className={styles.col__value}>
              {requirements.processor.rec}
            </div>
          </div>
        </div>
        {/* block */}
        {/* block */}
        <div className={styles.requ__col}>
          <div className={styles.col}>
            <div className={styles.col__name}>Оперативная память</div>
            <div className={styles.col__value}>{requirements.memory.min}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__name}>Оперативная память</div>
            <div className={styles.col__value}>{requirements.memory.rec}</div>
          </div>
        </div>
        {/* block */}
        {/* block */}
        <div className={styles.requ__col}>
          <div className={styles.col}>
            <div className={styles.col__name}>Место на диске</div>
            <div className={styles.col__value}>{requirements.storage.min}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__name}>Место на диске</div>
            <div className={styles.col__value}>{requirements.storage.rec}</div>
          </div>
        </div>
        {/* block */}
        {/* block */}
        <div className={styles.requ__col}>
          <div className={styles.col}>
            <div className={styles.col__name}>DirectX</div>
            <div className={styles.col__value}>{requirements.direct.min}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__name}>DirectX</div>
            <div className={styles.col__value}>{requirements.direct.rec}</div>
          </div>
        </div>
        {/* block */}
        {/* block */}
        <div className={styles.requ__col}>
          <div className={styles.col}>
            <div className={styles.col__name}>Видеокарта</div>
            <div className={styles.col__value}>{requirements.graphics.min}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__name}>Видеокарта</div>
            <div className={styles.col__value}>{requirements.graphics.rec}</div>
          </div>
        </div>
        {/* block */}

        {/* lang */}
        <div className={styles.languages}>
          <div className={styles.lang__title}>Поддерживаемые языки</div>
          <p className={styles.lang__list}>{requirements.languages}</p>
        </div>
        {/* lang */}

        <div className="privacy"></div>
      </div>
    </div>
  );
};

export default SysRequBlock;

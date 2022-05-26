import { KeyboardArrowDown, Search } from "@mui/icons-material";
import React from "react";
import styles from "./FiltersBlock.module.css";

const FiltersBlock = ({ accordions, search, setSearch, setFilter }) => {
  return (
    <aside className={styles.filter__block}>
      <div className={styles.filter__title}>Фильтры</div>
      <div className={styles.filter__search}>
        <button className={styles.filter__searchBtn}>
          <Search style={{ width: "1vw", height: "1vw" }} />
        </button>
        <input
          type="text"
          placeholder="Ключевые слова"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.filter__searchInput}
        />
      </div>

      {accordions?.map((item) => (
        <div className={styles.accordion} key={item.id}>
          <hr className={styles.accordion__line} />
          <input
            type="checkbox"
            name="accordion"
            id={item.id}
            className={styles.accordion__check}
            style={{ display: "none" }}
            defaultChecked
          />
          <label htmlFor={item.id} className={styles.accordion__summary}>
            <div className={styles.summary__title}>{item.name}</div>
            <div className={styles.summary__icon}>
              <KeyboardArrowDown
                style={{ width: "1.25vw", height: "1.25vw" }}
              />
            </div>
          </label>
          <div className={styles.accordion__details}>
            {item.details.map((detail, index) => (
              <div className={styles.accordion__btn} key={item.id + index}>
                {detail}
              </div>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default FiltersBlock;

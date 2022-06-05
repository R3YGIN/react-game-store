import { KeyboardArrowDown, Search } from "@mui/icons-material";
import React from "react";
import styles from "./FiltersBlock.module.css";

const FiltersBlock = ({
  filters,
  search,
  setSearch,
  setGenre,
  setPrice,
  setSale,
  handleResetFilters,
  radioInputs,
  someFilters,
}) => {
  return (
    <aside className={styles.filter__block}>
      <div className={styles.filter__titleContainer}>
        <div className={styles.filter__title}>Фильтры</div>
        {someFilters && (
          <div
            className={styles.filter__title + " " + styles.filter__title_reset}
            onClick={handleResetFilters}
          >
            Сбросить
          </div>
        )}
      </div>
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
      {filters?.map((item) => (
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
            <div className={styles.summary__title}>{item.title}</div>
            <div className={styles.summary__icon}>
              <KeyboardArrowDown
                style={{ width: "1.25vw", height: "1.25vw" }}
              />
            </div>
          </label>
          <div className={styles.accordion__details}>
            {item.details.map((detail, index) => (
              <div key={item.id + index}>
                <input
                  type="radio"
                  ref={radioInputs}
                  data-filter-radio-input="filter-radio-input"
                  name={detail?.type}
                  id={detail?.name}
                  value={detail?.value}
                  onChange={(e) =>
                    detail?.type === "genre"
                      ? setGenre(e.target.value)
                      : detail?.type === "price"
                      ? setPrice(e.target.value)
                      : detail?.type === "sale"
                      ? setSale(true)
                      : console.log("Неизвестный блок")
                  }
                  className={styles.accordion__btnCheck}
                />
                <label htmlFor={detail?.name} className={styles.accordion__btn}>
                  {detail?.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default FiltersBlock;

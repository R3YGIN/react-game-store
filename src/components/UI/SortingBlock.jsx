import { KeyboardArrowDown } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import styles from "./SortingBlock.module.css";

const SortingBlock = ({ sort, setSort, sorting }) => {
  console.log(sort);
  const [currentSort, setCurrentSort] = useState("По умолчанию");

  const handlerChangeSort = (e) => {
    setSort(e.target.value);
    const sortName = sorting.find((item) => item.value === e.target.value);
    setCurrentSort(sortName.name);
    refSortCheck.current.checked = false;
  };

  const refSortCheck = useRef();
  const refSortBlock = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (refSortCheck.current.checked === false) return;
      if (
        !refSortBlock.current.contains(e.target) &&
        !refSortCheck.current.contains(e.target)
      ) {
        refSortCheck.current.checked = false;
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.sort__container}>
      <input
        type="checkbox"
        name=""
        id="13"
        style={{ display: "none" }}
        className={styles.sort__check}
        ref={refSortCheck}
      />
      <label htmlFor="13" className={styles.sort__select} ref={refSortBlock}>
        <div className={styles.sort__title}>Сортировка:</div>
        <div className={styles.sort__value}>
          <div className={styles.sort__valueName}>{currentSort}</div>
          <div className={styles.sort__valueIcon}>
            <KeyboardArrowDown />
          </div>
        </div>
      </label>
      <div className={styles.sort__drop}>
        {sorting.map((item) => (
          <label
            className={styles.sort__dropItem}
            htmlFor={item.value}
            key={item.id}
          >
            <input
              type="radio"
              name="sort"
              id={item.value}
              value={item.value}
              checked={sort === `${item.value}`}
              className={styles.sort__dropItemCheck}
              onChange={handlerChangeSort}
              style={{ display: "none" }}
            />
            <span className={styles.sort__dropItemName}>{item.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SortingBlock;

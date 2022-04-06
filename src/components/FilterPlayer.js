import React from "react";

import styles from "./FilterPlayer.module.css";

const FilterPlayer = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <label className={styles.label}>Filter by Session</label>
        <select className={styles.select} onChange={dropdownChangeHandler}>
          <option className={styles.option} value="All">All</option>
          <option className={styles.option} value="Black Rain">Black Rain</option>
          <option className={styles.option} value="One Last Riddle">One Last Riddle</option>
          <option className={styles.option} value="The Burning Plague">The Burning Plague</option>
          <option className={styles.option} value="The Sea Witch">The Sea Witch</option>
          <option className={styles.option} value="Tomb of Horrors">Tomb of Horrors</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPlayer;

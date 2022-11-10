import React from "react";
import styles from "../../styles/common/arrow.module.css";

function arrow() {
  return (
    <div className={styles.container}>
      <hr className={styles.arrow} />
      <span>책 덮기</span>
    </div>
  );
}

export default arrow;

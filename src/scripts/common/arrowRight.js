import React from "react";
import styles from "../../styles/common/arrow.module.css";

function arrow(props) {
  return (
    <div className={styles.container}>
      <span>{props.props}</span>
      <hr className={[styles.arrow, styles.right].join(" ")} />
    </div>
  );
}

export default arrow;

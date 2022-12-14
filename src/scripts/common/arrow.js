import React from "react";
import styles from "../../styles/common/arrow.module.css";

function arrow(props) {
  return (
    <div className={styles.container}>
      <hr className={styles.arrow} />
      <span>{props.props}</span>
    </div>
  );
}

export default arrow;

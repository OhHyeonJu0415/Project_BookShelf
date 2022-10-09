import stylesJunior from "../styles/junior.module.css";
import styles from "../styles/bookShelf.module.css";

const Junior = () => {
  return (
    <div className={styles.book}>
      <div className={styles.front}>
        <div className={[styles.cover, stylesJunior.cover].join(" ")}>
          {/* <div className="coverBox"> */}
          <span>Junior</span>
          <span>2018</span>
          {/* </div> */}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={[styles.leftSide, stylesJunior.leftSide].join(" ")}>
        {/* <h2> */}
        <div>
          <span>Junior</span>
          <span>오현주 지음</span>
        </div>
        {/* </h2> */}
      </div>
    </div>
  );
};

export default Junior;

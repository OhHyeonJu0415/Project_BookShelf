import styles from "../styles/bookShelf.module.css";
import stylesSenior from "../styles/senior.module.css";

const Senior = () => {
  return (
    <div className={styles.book}>
      <div className={styles.front}>
        <div className={[styles.cover, stylesSenior.cover].join(" ")}>
          {/* <div className="coverBox"> */}
          <span>Senior</span>
          <span>2018</span>
          {/* </div> */}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={[styles.leftSide, stylesSenior.leftSide].join(" ")}>
        {/* <h2> */}
        <div>
          <span>Senior</span>
          <span>오현주 지음</span>
        </div>
        {/* </h2> */}
      </div>
    </div>
  );
};

export default Senior;

import styles from "../styles/bookShelf.module.css";
import stylesSoph from "../styles/sophomore.module.css";

const Sophomore = () => {
  return (
    <div className={styles.book}>
      <div className={styles.front}>
        <div className={[styles.cover, stylesSoph.cover].join(" ")}>
          {/* <div className="coverBox"> */}
          <span>Sophomore</span>
          <span>2018</span>
          {/* </div> */}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={[styles.leftSide, stylesSoph.leftSide].join(" ")}>
        {/* <h2> */}
        <div>
          <span>Sophomore</span>
          <span>오현주 지음</span>
        </div>
        {/* </h2> */}
      </div>
    </div>
  );
};

export default Sophomore;

// import "../styles/prologue.css";
import styles from "../styles/bookShelf.module.css";

const Prologue = () => {
  return (
    <div className={styles.book}>
      <div className={styles.front}>
        <div className={styles.cover}>
          {/* <div className="coverBox"> */}
          <span>Prologue</span>
          <span>2018</span>
          {/* </div> */}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.leftSide}>
        {/* <h2> */}
        <div>
          <span>Prologue</span>
          <span>오현주 지음</span>
        </div>
        {/* </h2> */}
      </div>
    </div>
  );
};

export default Prologue;

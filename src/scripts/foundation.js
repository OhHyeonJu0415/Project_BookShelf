import stylesFound from "../styles/foundation.module.css";
import styles from "../styles/bookShelf.module.css";
import { setBook } from "../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const Foundation = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  return (
    <div
      className={styles.book}
      onClick={() => {
        dispatch(setBook("foundation"));
      }}
    >
      <div className={styles.front}>
        <div className={[styles.cover, stylesFound.cover].join(" ")}>
          {/* <div className="coverBox"> */}
          <span>Foundation</span>
          <span>2021</span>
          {/* </div> */}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={[styles.leftSide, stylesFound.leftSide].join(" ")}>
        {/* <h2> */}
        <div>
          <span>Foundation</span>
          <span>오현주 지음</span>
        </div>
        {/* </h2> */}
      </div>

      {/* 뒷 표지 */}
      {/* <div className={styles.back}>
        <div className={[styles.cover].join(" ")}></div>
      </div> */}
    </div>
  );
};

export default Foundation;

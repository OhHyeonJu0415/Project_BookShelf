import stylesFound from "../../styles/books/foundation.module.css";
import styles from "../../styles/books/bookShelf.module.css";
import { setBook } from "../../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const Foundation = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const checkState = () => {
    //redux 값 변경
    dispatch(setBook("foundation"));

    //책 올리기
    let element = document.getElementById("foundation");
    element.style.cssText = "transform:scale(1.3)";
    //나머지 책 내리기
    document.getElementById("sophomore").style.transform = "translateY(100vw)";
    document.getElementById("junior").style.transform = "translateY(100vw)";
    document.getElementById("prologue").style.transform = "translateY(100vw)";
    document.getElementById("senior").style.transform = "translateY(100vw)";
  };

  return (
    <div
      id="foundation"
      className={[styles.book, stylesFound.container].join(" ")}
      onClick={(event) => {
        checkState(event);
      }}
    >
      <div className={styles.contents}>
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

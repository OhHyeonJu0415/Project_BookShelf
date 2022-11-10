import React from "react";
import stylesJunior from "../../styles/books/junior.module.css";
import styles from "../../styles/books/bookShelf.module.css";
import { setBook } from "../../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const Junior = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  return (
    <div
      id="junior"
      className={styles.book}
      onClick={() => {
        dispatch(setBook("junior"));
      }}
    >
      <div className={styles.front}>
        <div className={[styles.cover, stylesJunior.cover].join(" ")}>
          {/* <div className="coverBox"> */}
          <span>Junior</span>
          <span>2020</span>
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

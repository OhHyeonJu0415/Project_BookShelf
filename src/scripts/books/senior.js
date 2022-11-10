import React from "react";
import styles from "../../styles/books/bookShelf.module.css";
import stylesSenior from "../../styles/books/senior.module.css";
import { setBook } from "../../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const Senior = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  return (
    <div
      id="senior"
      className={styles.book}
      onClick={() => {
        dispatch(setBook("senior"));
      }}
    >
      <div className={styles.front}>
        <div className={[styles.cover, stylesSenior.cover].join(" ")}>
          {/* <div className="coverBox"> */}
          <span>Senior</span>
          <span>2022</span>
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

import React, { useEffect } from "react";
// import "../styles/prologue.css";
import styles from "../styles/bookShelf.module.css";
import { setBook } from "../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const Prologue = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  return (
    <div
      className={styles.book}
      onClick={() => {
        dispatch(setBook("prologe"));
      }}
    >
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

      {/* 뒷 표지 */}
      {/* <div className={styles.back}>
        <div className={[styles.cover].join(" ")}></div>
      </div> */}
    </div>
  );
};

export default Prologue;

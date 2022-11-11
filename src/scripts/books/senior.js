import React from "react";
import styles from "../../styles/books/bookShelf.module.css";
import stylesSenior from "../../styles/books/senior.module.css";
import { setBook } from "../../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const Senior = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const checkState = () => {
    //redux 값 변경
    dispatch(setBook("senior"));

    //프롤로그 책 올리기
    let element = document.getElementById("senior");
    element.style.cssText = "transform:scale(1.3)translateX(-50%)";
    //나머지 책 내리기
    document.getElementById("sophomore").style.transform = "translateY(100vw)";
    document.getElementById("junior").style.transform = "translateY(100vw)";
    document.getElementById("foundation").style.transform = "translateY(100vw)";
    document.getElementById("prologue").style.transform = "translateY(100vw)";
  };

  return (
    <div
      id="senior"
      className={[styles.book, stylesSenior.container].join(" ")}
      onClick={(event) => {
        checkState(event);
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

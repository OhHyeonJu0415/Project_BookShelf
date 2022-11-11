import React from "react";
import stylesJunior from "../../styles/books/junior.module.css";
import styles from "../../styles/books/bookShelf.module.css";
import { setBook } from "../../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const Junior = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const checkState = () => {
    //redux 값 변경
    dispatch(setBook("junior"));

    //프롤로그 책 올리기
    let element = document.getElementById("junior");
    element.style.cssText = "transform:scale(1.3)translateX(50%)";
    //나머지 책 내리기
    document.getElementById("sophomore").style.transform = "translateY(100vw)";
    document.getElementById("prologue").style.transform = "translateY(100vw)";
    document.getElementById("foundation").style.transform = "translateY(100vw)";
    document.getElementById("senior").style.transform = "translateY(100vw)";
  };

  return (
    <div
      id="junior"
      className={[styles.book, stylesJunior.container].join(" ")}
      onClick={(event) => {
        checkState(event);
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

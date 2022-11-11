import React, { useEffect } from "react";
import stylesPro from "../../styles/books/prologue.module.css";
import styles from "../../styles/books/bookShelf.module.css";
import { setBook } from "../../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

// window.onload = function () {
//   document
//     .getElementById("prologueArrow")
//     .addEventListener("click", function (event) {
//       event.preventDefault();
//       event.stopPropagation(); // 이벤트 차단
//       alert("three");
//     });
// };

const Prologue = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const checkState = () => {
    //redux 값 변경
    dispatch(setBook("prologue"));

    //프롤로그 책 올리기
    let element = document.getElementById("prologue");
    element.style.cssText = "transform:scale(1.3)translateX(150%)";
    //나머지 책 내리기
    document.getElementById("sophomore").style.transform = "translateY(100vw)";
    document.getElementById("junior").style.transform = "translateY(100vw)";
    document.getElementById("foundation").style.transform = "translateY(100vw)";
    document.getElementById("senior").style.transform = "translateY(100vw)";
  };

  return (
    // <div className={styles.book}>
    <div
      id="prologue"
      className={[styles.book, stylesPro.container].join(" ")}
      onClick={(event) => {
        checkState(event);
      }}
    >
      {/* {book.book === "prologue" ? ( //책 덮기
        <div
          id="prologueArrow"
          className={styles.arrow}
          onClick={(e) => {
            //이벤트 버블링/캡쳐링 막기
            e.preventDefault();
            e.stopPropagation();

            //리덕스 값 변경
            dispatch(setBook("default"));

            //책 복구하기
            //프롤로그 책 올리기
            document
              .getElementById("prologue")
              .style.removeProperty("transform");

            //나머지 책 내리기
            document
              .getElementById("sophomore")
              .style.removeProperty("transform");
            document.getElementById("junior").style.removeProperty("transform");
            document
              .getElementById("foundation")
              .style.removeProperty("transform");
            document.getElementById("senior").style.removeProperty("transform");
          }}
        >
          <Arrow />
        </div>
      ) : (
        <></>
      )} */}
      <div className={styles.front}>
        <div
          className={[
            styles.cover,
            book.book === "prologue" ? styles.coverRotate : "",
          ].join(" ")}
        >
          <span>Prologue</span>
          <span>2018</span>
        </div>
        {book.book === "prologue" ? (
          <div className={styles.coverBack} />
        ) : (
          <></>
        )}
        <div className={styles.page0}></div>
        <div className={styles.page1}></div>
        <div className={styles.page2}></div>
        <div className={styles.page3}></div>
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
    // </div>
  );
};

export default Prologue;

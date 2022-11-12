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
    element.style.cssText =
      "transform:scale(1.3)translateX(150%)rotateX(20deg)";
    //나머지 책 내리기
    document.getElementById("sophomore").style.transform = "translateY(100vw)";
    document.getElementById("junior").style.transform = "translateY(100vw)";
    document.getElementById("foundation").style.transform = "translateY(100vw)";
    document.getElementById("senior").style.transform = "translateY(100vw)";
  };

  return (
    <div
      id="prologue"
      className={[styles.book, stylesPro.container].join(" ")}
      onClick={(event) => {
        checkState(event);
      }}
    >
      {/* 책 */}
      <div className={styles.contents}>
        {/* 뒷표지 + 옆 부분 뒷면 */}
        {book.book === "prologue" ? (
          <>
            {/* 뒷 표지 */}
            <div className={styles.back} />

            {/* 옆 부분 뒷면 */}
            <div>
              <div
                className={[styles.sideCircle, styles.sideCircleUp].join(" ")}
              />
              <div className={styles.sideBack}>
                <div
                  className={[styles.sideCircle, styles.sideCircleDown].join(
                    " "
                  )}
                />
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {/* 앞 표지 뒷면 + 왼쪽 베이스 페이지 */}
        {book.book === "prologue" ? (
          <>
            {/* 앞 표지 뒷면 */}
            <div className={styles.coverBack} />

            {/* 처음에 같이 넘어가는 페이지 */}
            <div className={styles.flipBasePage}>
              <div className={[styles.basePage, styles.basePage4].join(" ")} />
              <div className={[styles.basePage, styles.basePage3].join(" ")} />
              <div className={[styles.basePage, styles.basePage2].join(" ")} />
              <div className={[styles.basePage, styles.basePage1].join(" ")} />
              <div className={[styles.basePage, styles.basePage0].join(" ")} />
              <div
                className={[styles.basePage, styles.basepageDeg].join(" ")}
              />
            </div>
          </>
        ) : (
          <></>
        )}

        <div className={styles.page0}></div>
        <div className={styles.page1}></div>
        <div className={styles.page2}></div>
        <div className={styles.page3}></div>

        {/* 오른쪽 베이스 페이지 */}
        {book.book === "prologue" ? (
          <div
            className={[styles.flipBasePage, styles.flipBasePageOpen].join(" ")}
          >
            <div
              className={[
                styles.basePage,
                styles.basePage3,
                styles.basePage3Light,
                styles.aniNone,
              ].join(" ")}
            />
            <div
              className={[
                styles.basePage,
                styles.basePage2,
                styles.basePage2Light,
                styles.aniNone,
              ].join(" ")}
            />
            <div
              className={[
                styles.basePage,
                styles.basePage1,
                styles.basePage1Light,
                styles.aniNone,
              ].join(" ")}
            />
            <div
              className={[
                styles.basePage,
                styles.basePage0,
                styles.basePage0Light,
                styles.aniNone,
              ].join(" ")}
            />
            {/* <div className={[styles.basePage, styles.basePage2].join(" ")} /> */}
            {/* <div className={[styles.basePage, styles.basePage3].join(" ")} /> */}
            {/* <div className={[styles.basePage, styles.basePage4].join(" ")} /> */}
          </div>
        ) : (
          <></>
        )}

        {/* 표지 */}
        <div
          className={[
            styles.cover,
            book.book === "prologue" ? styles.coverRotate : "",
          ].join(" ")}
        >
          <span>Prologue</span>
          <span>2018</span>
        </div>
      </div>

      {/* 옆 부분 */}
      <div className={styles.leftSide}>
        <div>
          <span>Prologue</span>
          <span>오현주 지음</span>
        </div>
      </div>
    </div>
  );
};

export default Prologue;

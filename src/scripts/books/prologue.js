import React, { useState } from "react";
import stylesPro from "../../styles/books/prologue.module.css";
import styles from "../../styles/books/bookShelf.module.css";
import Arrow from "../common/arrow";
import ArrowRight from "../common/arrowRight";
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
  const [closeBook, setCloseBook] = useState("prologue");
  const [page, setPage] = useState(0);
  const [page2, setPage2] = useState(0);
  const [page4, setPage4] = useState(0);
  const [page6, setPage6] = useState(0);
  const [ending, setEnding] = useState(0);
  const dispatch = useDispatch();

  // 책 덮기
  const cloBook = () => {
    setCloseBook("default");

    //화살표 없애기
    document.getElementById("arrow").style.display = "none";
    document.getElementById("arrowLight").style.display = "none";

    //3초 뒤 디폴트로 변경
    setTimeout(function () {
      dispatch(setBook("default"));
      setPage(0);
      setEnding(0);
      document.getElementById("prologue").style.removeProperty("transform");

      // 나머지 책 내리기 속성 삭제
      document.getElementById("sophomore").style.removeProperty("transform");
      document.getElementById("junior").style.removeProperty("transform");
      document.getElementById("foundation").style.removeProperty("transform");
      document.getElementById("senior").style.removeProperty("transform");
    }, 3000);
  };

  // 프롤로그 책 선택
  const checkState = () => {
    //redux 값 변경
    dispatch(setBook("prologue"));
    setCloseBook("prologue");
    // checkCloseBook = "prologue";

    //프롤로그 책 올리기
    let element = document.getElementById("prologue");
    element.style.cssText =
      "transform:scale(1.3)translateX(150%)rotateX(20deg)";
    //나머지 책 내리기
    document.getElementById("sophomore").style.transform = "translateY(100vw)";
    document.getElementById("junior").style.transform = "translateY(100vw)";
    document.getElementById("foundation").style.transform = "translateY(100vw)";
    document.getElementById("senior").style.transform = "translateY(100vw)";

    //3초 뒤 화살표 나타내기
    setTimeout(function () {
      document.getElementById("arrow").style.display = "flex";
      document.getElementById("arrowLight").style.display = "flex";
    }, 3000);
  };

  return (
    <>
      {/* 왼쪽 화살표 */}
      <div className={styles.arrow} id="arrow">
        {page === 0 ? (
          <div
            onClick={() => {
              cloBook();
            }}
          >
            <Arrow props={"책 덮기"} />
          </div>
        ) : (
          <div
            onClick={() => {
              setPage(page - 2);
            }}
          >
            <Arrow props={"이전 페이지"} />
          </div>
        )}
      </div>

      {/* 책 */}
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
              <div
                className={[
                  styles.back,
                  closeBook === "default" ? styles.closeCoverBack : "",
                ].join(" ")}
              />

              {/* 옆 부분 뒷면 */}
              <div
                className={closeBook === "default" ? styles.closeLeftSide : ""}
              >
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
              <div
                className={[
                  styles.coverBack,
                  closeBook === "default" ? styles.closeCover : "",
                ].join(" ")}
              />

              {/* 왼쪽 베이스 페이지 */}
              <div className={styles.flipBasePage}>
                <div
                  className={[
                    styles.basePage,
                    styles.basePage4,
                    closeBook === "default" ? styles.closeCover : "",
                  ].join(" ")}
                />

                <div
                  className={[
                    styles.basePage,
                    styles.basePage3,
                    closeBook === "default" ? styles.closeCover : "",
                  ].join(" ")}
                />
                <div
                  className={[
                    styles.basePage,
                    styles.basePage2,
                    closeBook === "default" ? styles.closeCover : "",
                  ].join(" ")}
                />
                <div
                  className={[
                    styles.basePage,
                    styles.basePage1,
                    closeBook === "default" ? styles.closeCover : "",
                  ].join(" ")}
                />
                <div
                  className={[
                    styles.basePage,
                    styles.basePage0,
                    closeBook === "default" ? styles.closeCover : "",
                  ].join(" ")}
                />
                {/* 0번째 페이지 */}
                <div
                  className={[
                    styles.basePage,
                    closeBook === "default" ? styles.closePageLeft : "",
                  ].join(" ")}
                >
                  <div className={styles.pageRotate}>
                    <span className={styles.test}>0</span>
                  </div>
                </div>
                <div
                  className={[
                    styles.basePage,
                    styles.page1Next,
                    closeBook === "default" ? styles.closePageLeft : "",
                  ].join(" ")}
                ></div>
              </div>
            </>
          ) : (
            <></>
          )}

          {/* 오른쪽 베이스 페이지 */}
          {book.book === "prologue" ? (
            <div
              className={[
                styles.flipBasePage,
                styles.flipBasePageOpen,
                closeBook === "default" ? styles.closePageRight : "",
              ].join(" ")}
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

          {/* 메인 컨텐츠 */}
          <div
            className={[
              styles.pages,
              closeBook === "default" ? styles.mainPage : "",
            ].join(" ")}
          >
            <div className={styles.page7}>
              <span className={styles.test}>7</span>
            </div>
            <div
              className={
                ending
                  ? styles.ending6
                  : page6
                  ? page < 6
                    ? styles.pageBefore
                    : styles.page6Next
                  : ""
              }
            >
              <div className={styles.pageRotate}>
                <span className={styles.test}>6</span>
              </div>
            </div>
            <div
              className={
                ending
                  ? [styles.ending6, styles.page5Next].join(" ")
                  : page6
                  ? page < 6
                    ? [styles.page5Next, styles.pageBefore].join(" ")
                    : styles.page5Next
                  : ""
              }
            >
              <span className={styles.test}>5</span>
            </div>
            <div
              className={
                ending
                  ? styles.ending4
                  : page4
                  ? page < 4
                    ? styles.pageBefore
                    : [styles.page4Next, styles.backHidden_1].join(" ")
                  : ""
              }
            >
              <div className={styles.pageRotate}>
                <span className={styles.test}>4</span>
              </div>
            </div>
            <div
              className={
                ending
                  ? [styles.ending4, styles.page3Next].join(" ")
                  : page4
                  ? page < 4
                    ? [styles.page3Next, styles.pageBefore].join(" ")
                    : styles.page3Next
                  : ""
              }
            >
              <span className={styles.test}>3</span>
            </div>
            <div
              className={
                ending
                  ? styles.ending2
                  : page2
                  ? page < 2
                    ? styles.pageBefore
                    : [styles.page2Next, styles.backHidden_2].join(" ")
                  : ""
              }
            >
              <div className={styles.pageRotate}>
                <span className={styles.test}>2</span>
              </div>
            </div>
            <div
              className={
                ending
                  ? [styles.ending2, styles.page1Next].join(" ")
                  : page2
                  ? page < 2
                    ? [styles.pageBefore, styles.page1Next].join(" ")
                    : styles.page1Next
                  : ""
              }
            >
              <span className={styles.test}>1</span>
            </div>
          </div>

          {/* 표지 */}
          <div
            className={[
              styles.cover,
              book.book === "prologue" ? styles.coverRotate : "",
              closeBook === "default" ? styles.closeCover : "",
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

      {/* 오른쪽 화살표 */}
      <div className={styles.arrowLight} id="arrowLight">
        {page === 6 ? (
          <div
            onClick={() => {
              cloBook();
              setEnding(1);
            }}
          >
            <ArrowRight props={"책 덮기"} />
          </div>
        ) : (
          <div
            onClick={() => {
              setPage(page + 2);
              page + 2 === 6 ? (
                setPage6(1)
              ) : page + 2 === 4 ? (
                setPage4(1)
              ) : page + 2 === 2 ? (
                setPage2(1)
              ) : (
                <></>
              );
            }}
          >
            <ArrowRight props={"다음 페이지"} />
          </div>
        )}
      </div>
    </>
  );
};

export default Prologue;

import React from "react";
import styles from "./App.module.css";
import Prologue from "./scripts/books/prologue.js";
import Sophomore from "./scripts/books/sophomore.js";
import Junior from "./scripts/books/junior.js";
import Foundation from "./scripts/books/foundation";
import Senior from "./scripts/books/senior.js";
import { setBook } from "./store/modules/book";
import { useDispatch, useSelector } from "react-redux";
import Arrow from "./scripts/common/arrow";

const App = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {/* {console.log(book)}
      {book.book !== "default" ? ( //책 덮기
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
            //책 올리기 속성 삭제
            // document
            //   .getElementById("prologue")
            //   .style.removeProperty("transform");

            //나머지 책 내리기 속성 삭제
            // document
            //   .getElementById("sophomore")
            //   .style.removeProperty("transform");
            // document.getElementById("junior").style.removeProperty("transform");
            // document
            //   .getElementById("foundation")
            //   .style.removeProperty("transform");
            // document.getElementById("senior").style.removeProperty("transform");
          }}
        >
          <Arrow />
        </div>
      ) : (
        <></>
      )} */}
      <Prologue />
      <Sophomore />
      <Junior />
      <Foundation />
      <Senior />
    </div>
  );
};

export default App;

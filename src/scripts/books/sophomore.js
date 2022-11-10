import React, { useEffect } from "react";
import styles from "../../styles/books/bookShelf.module.css";
import stylesSoph from "../../styles/books/sophomore.module.css";
import { setBook } from "../../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const Sophomore = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();
  // console.log(book.book);

  // useEffect(() => {
  //   console.log(book);
  // }, [book]);

  const checkState = () => {
    dispatch(setBook("sophomore"));
    console.log(book);

    //프롤로그 책 올리기
    let element = document.getElementById("sophomore");
    element.style.transform = "scale(1.3)";

    //나머지 책 내리기
    document.getElementById("prologue").style.transform = "translateY(100vw)";
    document.getElementById("junior").style.transform = "translateY(100vw)";
    document.getElementById("foundation").style.transform = "translateY(100vw)";
    document.getElementById("senior").style.transform = "translateY(100vw)";
  };

  return (
    <div
      id="sophomore"
      className={styles.book}
      onClick={() => {
        checkState();
      }}
    >
      <div
        className={styles.front}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          alert("hi");
        }}
      >
        <div className={[styles.cover, stylesSoph.cover].join(" ")}>
          {/* <div className="coverBox"> */}
          <span>Sophomore</span>
          <span>2019</span>
          {/* </div> */}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={[styles.leftSide, stylesSoph.leftSide].join(" ")}>
        {/* <h2> */}
        <div>
          <span>Sophomore</span>
          <span>오현주 지음</span>
        </div>
        {/* </h2> */}
      </div>
    </div>
  );
};

export default Sophomore;

import React, { useEffect } from "react";
import styles from "../styles/bookShelf.module.css";
import stylesSoph from "../styles/sophomore.module.css";
import { setBook } from "../store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const Sophomore = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();
  // console.log(book.book);

  useEffect(() => {
    console.log(book);
  }, [book]);

  return (
    <div
      className={styles.book}
      onClick={() => {
        dispatch(setBook("sophomore"));
      }}
    >
      <div className={styles.front}>
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

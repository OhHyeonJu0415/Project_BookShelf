import React from "react";
import styles from "./App.module.css";
import Prologue from "./scripts/books/prologue.js";
import Sophomore from "./scripts/books/sophomore.js";
import Junior from "./scripts/books/junior.js";
import Foundation from "./scripts/books/foundation";
import Senior from "./scripts/books/senior.js";
import { setBook } from "./store/modules/book";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const book = useSelector((state) => state.book);
  // const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {console.log(book)}
      <Prologue />
      <Sophomore />
      <Junior />
      <Foundation />
      <Senior />
    </div>
  );
};

export default App;

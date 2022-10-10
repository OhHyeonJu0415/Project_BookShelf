import React from "react";
import styles from "./App.module.css";
import Prologue from "./scripts/books/prologue.js";
import Sophomore from "./scripts/books/sophomore.js";
import Junior from "./scripts/books/junior.js";
import Foundation from "./scripts/books/foundation";
import Senior from "./scripts/books/senior.js";
import LeftArrow from "./scripts/common/arrow";

const App = () => {
  return (
    <div className={styles.container}>
      <LeftArrow />
      <Prologue />
      <Sophomore />
      <Junior />
      <Foundation />
      <Senior />
    </div>
  );
};

export default App;

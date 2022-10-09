import styles from "./App.module.css";
import Prologue from "./scripts/prologue.js";
import Sophomore from "./scripts/sophomore.js";
import Junior from "./scripts/junior.js";
import Foundation from "./scripts/foundation";
import Senior from "./scripts/senior.js";

const App = () => {
  return (
    <div className={styles.container}>
      <Prologue />
      <Sophomore />
      <Junior />
      <Foundation />
      <Senior />
    </div>
  );
};

export default App;

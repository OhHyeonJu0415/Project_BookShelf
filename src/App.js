import styles from "./App.module.css";
import Prologue from "./scripts/prologue.js";
import Sophomore from "./scripts/sophomore.js";
import Junior from "./scripts/junior.js";
import Senior from "./scripts/senior.js";

const App = () => {
  return (
    <div className={styles.container}>
      {/* <div> */}
      <Prologue />
      {/* </div>
      <div> */}
      <Sophomore />
      {/* </div>
      <div> */}
      <Junior />
      {/* </div>
      <div> */}
      <Senior />
      {/* </div> */}
    </div>
  );
};

export default App;

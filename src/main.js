import React from "react";
import ReactDOM from "react-dom";
import styles from "./main.less";
import react from "./react.png";

const App = () => {
  return <p className={styles.hello}>Hello!</p>;
};

ReactDOM.render(<App />, document.getElementById("app"));

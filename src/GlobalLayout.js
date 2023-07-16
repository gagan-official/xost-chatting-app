import React from "react";
import styles from "./App.module.css";

const GlobalLayout = (props) => {
  return (
    <div
      className={`${styles.mainCont} ${props.bgChange ? styles.mainCont2 : ""}`}
    >
      <div className={styles.leftCont}>{props.insideLeftContainer}</div>
      <div className={styles.rightCont}>
        <div className={styles.rightInnerCont}>
          {props.insideRightContainer}
        </div>
      </div>
    </div>
  );
};

export default GlobalLayout;

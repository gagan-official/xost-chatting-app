import React from "react";
import styles from "./App.module.css";
import { useLocation } from "react-router-dom";

export const username = "Gagandeep Singh";

const GlobalLayout = (props) => {
  const location = useLocation();
  return (
    <div
      className={`${styles.mainCont} ${location.pathname === "/chats" ? styles.mainCont2 : ""}`}
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

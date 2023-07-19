import React from "react";
import styles from "./App.module.css";
// import { useLocation } from "react-router-dom";
// import XostContext from "./context/XostContext";

export const username = "Gagandeep Singh";

const GlobalLayout = (props) => {
  // const { tempLoggedIn } = useContext(XostContext);
  // const location = useLocation();
  return (
    <div
      // className={`${styles.mainCont} ${location.pathname === "/chats" ? styles.mainCont2 : ""}`}
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

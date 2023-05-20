import React from 'react';
import styles from './App.module.css';

function GlobalLayout({
  insideLeftContainer,
  insideRightContainer,
  bgChange
}) {
  return (
    <div className={`${styles.mainCont} ${bgChange ? styles.mainCont2 : ""}`}>
      <div className={styles.leftCont}>
        {insideLeftContainer}
      </div>
      <div className={styles.rightCont}>
        <div className={styles.rightInnerCont}>
          {insideRightContainer}
        </div>
      </div>
    </div>
  );
}

export default GlobalLayout;

import React from 'react';
import styles from './App.module.css';

function GlobalLayout({
  insideLeftContainer,
  insideRightContainer,
}) {
  return (
    <div className={styles.mainCont}>
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

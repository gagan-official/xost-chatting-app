import styles from './App.module.css';

function App() {
  return (
    <div 
      style={{
        // backgroundImage: `url("public/chatbg1.svg")`
      }}
      className={styles.mainCont}
    >
      <div className={styles.leftCont}>
        <image />
      </div>
      <div className={styles.rightCont}></div>
    </div>
  );
}

export default App;

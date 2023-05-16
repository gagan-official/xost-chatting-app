import styles from './App.module.css';
import { SiGoogle } from 'react-icons/si';
// import Image1 from './assets/XOSTLogo.svg';

function App() {
  // console.log("images/XOSTLogo.svg")
  return (
    <div 
      style={{
        // backgroundImage: `url("public/chatbg1.svg")`
      }}
      className={styles.mainCont}
    >
      <div className={styles.leftCont}>
        <span className={styles.shade1}/>
        <span className={styles.shade2}/>
        <span className={styles.circle}/>
        <span className={styles.logo}>
          <p className={styles.para}>To connect with your DOST!</p>
        </span>
        {/* <img 
          src={"../public/assets/XOSTLogo.svg"}
          alt="Xost Logo"
          className={styles.logo}
        /> */}
      </div>
      <div className={styles.rightCont}>
        <div className={styles.rightInnerCont}>
          <h2 className={styles.heading}>Login</h2>
          <span className={styles.loginImg}/>
          <button className={styles.googleBtn}><SiGoogle size={"1.5rem"}/> Login with Google</button>
        </div>
      </div>
    </div>
  );
}

export default App;

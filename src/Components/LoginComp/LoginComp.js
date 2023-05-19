import React, { useState } from 'react';
import { Button } from '@mui/material';
import styles from './LoginComp.module.css';
import { SiGoogle } from 'react-icons/si';

export function LeftLoginComp() {
  return (
    <>
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
    </>
  );
}

export function RightLoginComp(props) {

  const [state, setState] = useState(false);

  props.setStateFun(state);

  return (
    <div className={styles.rightLoginCont}>
      <h1 className={styles.heading}>Login</h1>
      <span className={styles.loginImg}/>
      <Button 
        variant="contained" 
        style={{borderRadius: "10rem"}} 
        className={styles.googleBtn}
        onClick={()=>setState(true)}
      >
        <SiGoogle size={"1.5rem"}/> Login with Google
      </Button>
    </div>
  );
}
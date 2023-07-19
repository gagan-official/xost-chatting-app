import React, { useState } from "react";
import { Button } from "@mui/material";
import styles from "./LoginComp.module.css";
// import { SiGoogle } from "react-icons/si";
// import { Link } from "react-router-dom";
// import XostContext from "../../context/XostContext";
import { avtars } from "../../GlobalLayout";

export function LeftLoginComp() {
  return (
    <>
      <span className={styles.shade1} />
      <span className={styles.shade2} />
      <span className={styles.circle} />
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
      <span className={styles.loginImg} />
      <Button
        variant="contained"
        className={styles.googleBtn}
        onClick={() => setState(true)}
      >
        {/* <SiGoogle size={"1.5rem"} /> Login with Google */}
        {avtars.map((item,index)=>{
          return(
            <div key={index} className="forAvtar">
              <div className="forvector">{item.vector}</div>
              <h4 className="forName">{item.name}</h4>
            </div>
          );
        })
        }
      </Button>
      {/* <Link to="/chats">
        <Button variant="contained" className={styles.googleBtn}>
          <SiGoogle size={"1.5rem"} /> Login with Google
        </Button>
      </Link> */}
    </div>
  );
}

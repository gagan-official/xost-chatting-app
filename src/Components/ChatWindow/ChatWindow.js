import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import styles from './ChatWindow.module.css';
import { SiGoogle } from 'react-icons/si';

export function LeftChatWindow() {
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

export function RightChatWindow() {
  return (
    <div className={styles.rightLoginCont}>
      <div className={styles.topCont}>
      </div>
      <div className={styles.midCont}>
      </div>
      <div className={styles.chatHeads}>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            // bgcolor: 'background.paper',
          }}
        >
          <Divider variant="inset" component="li" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <SiGoogle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </div>
      <h1 className={styles.heading}>Login</h1>
      <span className={styles.loginImg}/>
      <Button variant="contained" style={{borderRadius: "10rem"}} className={styles.googleBtn}><SiGoogle size={"1.5rem"}/> Login with Google</Button>
    </div>
  );
}
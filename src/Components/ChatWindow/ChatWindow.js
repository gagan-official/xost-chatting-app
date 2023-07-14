import React, { useRef, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
  Tooltip,
} from "@mui/material";
import styles from "./ChatWindow.module.css";
// import { CgProfile } from "react-icons/cg";
import { RxExit } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";

export function LeftChatWindow(props) {
  // const [active, setActive] = useState({
  //   bool: false,
  //   arrIndex: null,
  // });

  const { bool, arrIndex } = props.active;

  return (
    <>
      {bool ? (
        <AppBar
          position="static"
          sx={{ width: "120%", background: "#353535CC",
              flexDirection: "row",
              paddingRight: "11rem",
              alignItems: "center"
           }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Profile Photo">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      alt={chatData[arrIndex].name}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              &nbsp;&nbsp;&nbsp;{chatData[arrIndex].name}
            </Toolbar>
          </Container>
          <span
            className={styles.exitIcon} 
            onClick={() => props.sendActive({ bool: false, arrIndex: null })}
          >
          <RxExit
          />
          </span>
        </AppBar>
      ) : (
        <>
          <span className={styles.shade1} />
          <span className={styles.shade2} />
          <span className={styles.circle1} />
          <span className={styles.circle2} />
          <span className={styles.logo}>
            <p className={styles.para}>Welcome to XOST!</p>
            <p className={styles.subpara}>
              Click on any contact to start chatting.
            </p>
          </span>
          {/* <img 
        src={"../public/assets/XOSTLogo.svg"}
        alt="Xost Logo"
        className={styles.logo}
      /> */}
        </>
      )}
    </>
  );
}

export const chatData = [
  {
    name: "Nitin Batra",
    date: "May 14, 2023",
    status: "active",
  },
  {
    name: "Gagandeep Singh",
    date: "May 14, 2023",
    status: "active",
  },
  {
    name: "Pankaj",
    date: "May 14, 2023",
    status: "offline",
  },
  {
    name: "Ex",
    date: "May 14, 2023",
    status: "active",
  },
  {
    name: "Mom",
    date: "May 14, 2023",
    status: "offline",
  },
  {
    name: "Dad",
    date: "May 14, 2023",
    status: "offline",
  },
  {
    name: "Kullu",
    date: "May 14, 2023",
    status: "offline",
  },
  {
    name: "Mohan",
    date: "May 14, 2023",
    status: "offline",
  },
  {
    name: "Crush Mam",
    date: "May 14, 2023",
    status: "offline",
  },
  {
    name: "Ex 2",
    date: "May 14, 2023",
    status: "offline",
  },
  {
    name: "Crushhhhhhh",
    date: "May 13, 2023",
    status: "active",
  },
];

export function RightChatWindow(props) {
  const [active, setActive] = useState({
    bool: false,
    arrIndex: null,
  });

  props.sendActive(active);

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.style.borderColor = "#fff";
  };
  const handleBlur = () => {
    inputRef.current.style.borderColor = "#8C8C8C";
  };

  return (
    <div className={styles.rightChatWindowCont}>
      <div className={styles.topCont}>
        <span className={styles.logoSmall}>
          <p className={styles.version}>v1.0</p>
        </span>
        <span className={styles.userName}>Welcome Gagandeep!</span>
      </div>
      <div className={styles.midCont}>
        <span className={styles.inputCont} ref={inputRef}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="search"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search or start a new chat"
          />
        </span>
      </div>
      <div className={styles.chatHeads}>
        <List sx={{ width: "100%", padding: "0" }} className={styles.listClass}>
          {chatData.map((chats, index) => {
            return (
              <>
                <Divider
                  key={index}
                  component="li"
                  style={{ backgroundColor: "#B4B4B4" }}
                />
                <ListItem
                  key={index}
                  button
                  style={{
                    background:
                      active.bool &&
                      active.arrIndex === index &&
                      "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.13) 49.93%, rgba(255, 255, 255, 0) 100%)",
                  }}
                  className={styles.listItemClass}
                  onClick={() => setActive({ bool: true, arrIndex: index })}
                >
                  <BsChevronLeft
                    size="2rem"
                    className={`${styles.leftIcon} 
                        ${
                          active.bool && active.arrIndex === index
                            ? styles.active
                            : ""
                        }`}
                  />
                  <ListItemAvatar style={{ position: "relative" }}>
                    <Avatar alt={chats.name} src="/static/images/avatar/2.jpg">
                      {/* <CgProfile /> */}
                    </Avatar>
                    {chats.status === "active" && (
                      <span className={styles.status} />
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={chats.name}
                    secondary={chats.date}
                    primaryTypographyProps={{
                      style: { color: "white", fontFamily: "Inter" },
                    }}
                    secondaryTypographyProps={{
                      style: { color: "#B4B4B4", fontFamily: "Inter" },
                    }}
                  />
                </ListItem>
              </>
            );
          })}
        </List>
      </div>
    </div>
  );
}

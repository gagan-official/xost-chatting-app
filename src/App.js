import React, { useEffect, useState } from 'react';
import GlobalLayout from './GlobalLayout';
import { LeftLoginComp, RightLoginComp } from './Components/LoginComp/LoginComp';
import { LeftChatWindow, RightChatWindow } from './Components/ChatWindow/ChatWindow';
import { XostContextProvider } from './context/XostContext';

import io from "socket.io-client"

const socket = io.connect("http://localhost:3001");

function App() {
  const [state, setState] = useState(false);

  // const [activeApp, setActiveApp] = useState({
  //   bool: false,
  //   arrIndex: null,
  // });

  const leftContainerComp = state? <LeftChatWindow/> : <LeftLoginComp/>;
  const rightContainerComp = state? <RightChatWindow/> : <RightLoginComp setStateFun={(bool)=>setState(bool)}/>;

  // useEffect(() => {
  //   setState(true);
  // }, [])
  
  return (
    <XostContextProvider>
      <GlobalLayout
        insideLeftContainer={leftContainerComp}
        insideRightContainer={rightContainerComp}
        bgChange={state}
      />
    </XostContextProvider>
  );
}

export default App;

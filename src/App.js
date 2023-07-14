import React, { useEffect, useState } from 'react';
import GlobalLayout from './GlobalLayout';
import { LeftLoginComp, RightLoginComp } from './Components/LoginComp/LoginComp';
import { LeftChatWindow, RightChatWindow } from './Components/ChatWindow/ChatWindow';

function App() {
  const [state, setState] = useState(false);

  const [activeApp, setActiveApp] = useState({
    bool: false,
    arrIndex: null,
  });

  const leftContainerComp = state? <LeftChatWindow active={activeApp} sendActive={(active)=>setActiveApp(active)}/> : <LeftLoginComp/>;
  const rightContainerComp = state? <RightChatWindow sendActive={(active)=>setActiveApp(active)}/> : <RightLoginComp setStateFun={(bool)=>setState(bool)}/>;

  // useEffect(() => {
  //   setState(true);
  // }, [])
  
  return (
    <GlobalLayout
      insideLeftContainer={leftContainerComp}
      insideRightContainer={rightContainerComp}
      bgChange={state}
    />
  );
}

export default App;

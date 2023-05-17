import React, { useEffect, useState } from 'react';
import GlobalLayout from './GlobalLayout';
import { LeftLoginComp, RightLoginComp } from './Components/LoginComp';

function App() {
  const [state, setState] = useState(false);

  const leftContainerComp = state? <LeftLoginComp/> : null;
  const rightContainerComp = state? <RightLoginComp/> : null;

  useEffect(() => {
    setState(true);
  }, [])
  
  return (
    <GlobalLayout
      insideLeftContainer={leftContainerComp}
      insideRightContainer={rightContainerComp}
    />
  );
}

export default App;

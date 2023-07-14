import { useState } from "react";
import { createContext } from "react";

const XostContext = createContext({
  setActiveApp: () => {},
  activeApp: {
    bool: false,
    arrIndex: null,
  },
});

export function XostContextProvider(props) {
  const [activeApp, setActiveApp] = useState({
    bool: false,
    arrIndex: null,
  });

  const context = {
    setActiveApp,
    activeApp,
  };

  return (
    <XostContext.Provider value={context}>
      {props.children}
    </XostContext.Provider>
  );
}

export default XostContext;

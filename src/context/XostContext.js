import { useState } from "react";
import { createContext } from "react";

const XostContext = createContext({
  setActive: () => {},
  active: {
    bool: false,
    arrIndex: null,
  },
});

export function XostContextProvider(props) {
  const [active, setActive] = useState({
    bool: false,
    arrIndex: null,
  });

  const context = {
    setActive,
    active,
  };

  return (
    <XostContext.Provider value={context}>
      {props.children}
    </XostContext.Provider>
  );
}

export default XostContext;

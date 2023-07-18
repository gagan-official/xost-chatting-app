import React from "react";
import GlobalLayout from "./GlobalLayout";
import {
  LeftLoginComp,
  RightLoginComp,
} from "./Components/LoginComp/LoginComp";
import {
  LeftChatWindow,
  RightChatWindow,
} from "./Components/ChatWindow/ChatWindow";
import { XostContextProvider } from "./context/XostContext";

import io from "socket.io-client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const socket = io.connect("http://localhost:3001");

function App() {

  return (
    <XostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <GlobalLayout
                insideLeftContainer={<LeftLoginComp />}
                insideRightContainer={<RightLoginComp />}
              />
            }
          />
          <Route
            path="/chats"
            element={
              <GlobalLayout
                insideLeftContainer={<LeftChatWindow />}
                insideRightContainer={<RightChatWindow />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </XostContextProvider>
  );
}

export default App;

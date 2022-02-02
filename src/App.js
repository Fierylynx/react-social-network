import React from "react";
import "./App.css";
import "./common/reset.css";
import "./common/global.css";

import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Chat from "./components/Chat/Chat.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Nav />
        <Chat />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

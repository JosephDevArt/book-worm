import React from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;

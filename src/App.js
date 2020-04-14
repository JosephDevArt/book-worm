import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingAnimation from "react-circle-loading-animation";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";

import { initializeApp } from "./actions/appActions";

function App() {
  const dispatch = useDispatch();

  const isInitialized = useSelector((state) => state.app.isInitialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (isInitialized) {
    return (
      //using HashRouter for gh-pages
      <HashRouter>
        <div className="App">
          <Nav />
          <Header />
          <Main />
        </div>
      </HashRouter>
    );
  } else {
    return <LoadingAnimation isLoading={true} />;
  }
}

export default App;

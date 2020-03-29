import React, { useEffect } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, batch } from "react-redux";
import { getUsers } from "./actions/homeActions";
import { getPosts } from "./actions/postsActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    batch(() => {
      dispatch(getUsers());
      dispatch(getPosts());
    });
  }, []);
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

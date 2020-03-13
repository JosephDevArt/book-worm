import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";

function Home() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleClick = e => {
    setText(input);
  };
  return (
    <div>
      <input onChange={handleChange} value={input} />
      <button onClick={handleClick}>Print</button>
      <h2>{text}</h2>
    </div>
  );
}

export default Home;

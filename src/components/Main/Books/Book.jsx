import React from "react";

function Book(props) {
  return (
    <div className="box">
      <img src={props.items.volumeInfo.imageLinks.thumbnail} alt="" />
      <p>{props.items.volumeInfo.title}</p>
    </div>
  );
}

export default Book;

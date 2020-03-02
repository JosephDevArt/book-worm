import React from "react";
import BookInnerInfo from "../BookInnerInfo/BookInnerInfo";
import "./Book.scss";
function Book(props) {
  const {
    title,
    imageLinks: { smallThumbnail: image }
  } = props.items.volumeInfo;

  return (
    <div className="book">
      <BookInnerInfo info={props.items.volumeInfo} />
      <img src={image} alt="Book Image" />
      <p className="title-outer">{title}</p>
    </div>
  );
}

export default Book;

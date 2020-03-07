import React from "react";
import BookInnerInfo from "../BookInnerInfo/BookInnerInfo";
import "./Book.scss";
import noImg from "./noImg.jpg";
function Book(props) {
  const {
    title = "no title",
    imageLinks: { smallThumbnail: image } = ""
  } = props.items.volumeInfo;

  return (
    <li className="book">
      <BookInnerInfo info={props.items.volumeInfo} />
      <img src={image ? image : noImg} alt="Book" />
      <p className="title-outer">{title}</p>
    </li>
  );
}

export default Book;

import React, { memo } from "react";
import InnerInfo from "./InnerInfo/InnerInfo";
import noImg from "./noImg.jpg";
function Book(props) {
  const {
    title = "no title",
    imageLinks: { smallThumbnail: image } = ""
  } = props.book.volumeInfo;

  return (
    <li className="book">
      <InnerInfo scope={props.scope} info={props.book} />
      <img src={image ? image : noImg} alt="Book" />
      <p className="title-outer">{title}</p>
    </li>
  );
}

export default memo(Book);

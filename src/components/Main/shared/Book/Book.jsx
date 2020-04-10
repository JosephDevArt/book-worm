import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToReadLater,
  removeFromReadLater,
} from "./../../../../actions/readLaterActions";

import InnerInfo from "./InnerInfo/InnerInfo";
import noImg from "./noImg.jpg";

function Book(props) {
  const dispatch = useDispatch();

  const isAuthorized = useSelector((state) => state.user.isAuthorized);

  const {
    title = "no title",
    imageLinks: { smallThumbnail: image } = "",
  } = props.book.volumeInfo;

  const [active, setActive] = useState(false);

  const addBtnClick = () => {
    if (isAuthorized) {
      dispatch(addToReadLater(props.book));
    } else {
      //add warning ('log in to add') if not Authorized and clicked on Read Later btn
      setActive(true);
    }
  };

  const removeBtnClick = () => {
    dispatch(removeFromReadLater(props.book));
  };

  return (
    <li className="book">
      <InnerInfo
        isAuthorized={isAuthorized}
        active={active}
        removeBtnClick={removeBtnClick}
        addBtnClick={addBtnClick}
        scope={props.scope}
        info={props.book}
      />
      <img src={image ? image : noImg} alt="Book" />
      <p className="title-outer">{title}</p>
    </li>
  );
}

export default memo(Book);

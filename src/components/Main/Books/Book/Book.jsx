import React, { memo, useState } from "react";
import InnerInfo from "./InnerInfo/InnerInfo";
import noImg from "./noImg.jpg";
import {
  addToReadLater,
  removeFromReadLater,
} from "./../../../../actions/readLaterActions";
import { useDispatch, useSelector } from "react-redux";

function Book(props) {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.user.isAuthorized);
  const {
    title = "no title",
    imageLinks: { smallThumbnail: image } = "",
  } = props.book.volumeInfo;
  const [activeClass, setActiveClass] = useState(false);

  const addBtnClick = () => {
    if (isAuthorized) {
      dispatch(addToReadLater(props.book));
    } else {
      //add warning ('log in to add') if not Authorized and clicked on Read Later btn
      setActiveClass(true);
    }
  };

  const removeBtnClick = () => {
    dispatch(removeFromReadLater(props.book));
  };

  return (
    <li className="book">
      <InnerInfo
        isAuthorized={isAuthorized}
        activeClass={activeClass}
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

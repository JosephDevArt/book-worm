import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  addToReadLater,
  removeFromReadLater
} from "../../../../../actions/readLaterActions";
function InnerInfo(props) {
  const isAuthorized = useSelector(state => state.userReducer.isAuthorized);
  const {
    title = "no title",
    description = "This book doesn't have a description",
    pageCount = "unknown num. of",
    categories = "no category",
    authors,
    averageRating,
    publishedDate,
    previewLink
  } = props.info.volumeInfo;
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  const buttonClick = () => {
    setActive(true);
    console.log("log in ");
  };
  return (
    <div className="book-info-inner">
      <h3 className="title-inner">{title}</h3>
      <p className="author-inner">
        {authors
          ? authors.length === 1
            ? `author: ${authors}`
            : `authors: ${authors.join(", ")}`
          : "unknown"}
      </p>
      <div className="category-and-rate-inner">
        <h4 className="category-inner">{categories}</h4>
        <span className="rate-inner">
          {averageRating ? `${averageRating} / 5` : "no rating"}
        </span>
      </div>

      <div className="pages-and-year-inner">
        <p className="pages-inner">
          <i className="far fa-file"></i>
          {pageCount} pages.
        </p>
        <p className="year-inner">
          {/* slicing to extract 'year' only */}
          {publishedDate ? `${publishedDate.slice(0, 4)}` : "unknown"} year.
        </p>
      </div>
      <p className="description-inner">{description.slice(0, 200)}...</p>
      <div className="book-btns-inner">
        {props.scope === "books" ? (
          <button
            type="button"
            onClick={
              isAuthorized
                ? () => dispatch(addToReadLater(props.info))
                : buttonClick
            }
            className={`btn-add ${
              //add warning ('log in to add') if not Authorized and clicked on Read Later btn
              isAuthorized ? null : active ? "log-in-warning" : null
            }`}
            title="add to read later"
          >
            Read Later
          </button>
        ) : (
          <button
            title="remove from read later"
            type="button"
            className="btn-remove"
            onClick={() => dispatch(removeFromReadLater(props.info))}
          >
            Remove
          </button>
        )}
        <a
          className="btn-preview"
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Preview
        </a>
      </div>
    </div>
  );
}

export default InnerInfo;

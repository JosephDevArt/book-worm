import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  addToReadLater,
  removeFromReadLater
} from "../../../../../actions/booksActions";
function InnerInfo(props) {
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
  const dispatch = useDispatch();
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
        {/* slicing to extract 'year' only */}
        <p className="year-inner">
          {publishedDate ? `${publishedDate.slice(0, 4)}` : "unknown"} year.
        </p>
      </div>
      <p className="description-inner">{description.slice(0, 200)}...</p>
      <div className="book-btns-inner">
        {props.scope === "books" ? (
          <button
            type="button"
            onClick={() => dispatch(addToReadLater(props.info))}
            className="btn-add"
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

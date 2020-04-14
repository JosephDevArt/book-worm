import React from "react";

function InnerInfo(props) {
  const {
    title,
    description = "This book doesn't have a description",
    pageCount = "unknown num. of",
    categories = "no category",
    authors,
    averageRating,
    publishedDate,
    previewLink,
  } = props.info.volumeInfo;

  const { isAuthorized, active, removeBtnClick, addBtnClick } = props;

  let button;

  if (props.scope === "books") {
    button = (
      <button type="button" onClick={addBtnClick} className="btn-add">
        {isAuthorized ? null : active ? (
          <span className="log-in-warning">Log in to add</span>
        ) : null}
        Read Later
      </button>
    );
  } else {
    button = (
      <button type="button" onClick={removeBtnClick} className="btn-remove">
        Remove
      </button>
    );
  }

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

      <p className="description-inner">{description}</p>

      <div className="book-btns-inner">
        {/* btn ReadLater or Remove (depends on the scope) */}
        {button}
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

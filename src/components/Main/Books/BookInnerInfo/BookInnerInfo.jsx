import React from "react";
import "./BookInnerInfo.scss";
function BookInnerInfo(props) {
  const {
    title,
    authors = "unknown",
    pageCount = "unknown num. of",
    categories = "unknown",
    averageRating = "no rating",
    publishedDate = "unknown",
    description = "This book doesn't have a description",
    previewLink
  } = props.info;
  return (
    <div className="book-inner-info">
      <h2 className="title-inner">{title}</h2>
      <p className="author-inner">
        {authors.length === 1
          ? `author: ${authors}`
          : `authors: ${authors.join(", ")}`}
      </p>
      <div className="category-inner-and-rate">
        <h3 className="category-inner">{categories}</h3>
        <span className="rate">
          {averageRating === "no rating" ? "no rating" : `${averageRating} / 5`}
        </span>
      </div>

      <div className="pages-and-year">
        <p className="pages">
          <i className="far fa-file"></i>
          {pageCount} pages.
        </p>
        {/* extract 'year' only */}
        <p className="year">
          {publishedDate === "unknown"
            ? "unknown year."
            : `${publishedDate.slice(0, 4)} year.`}
        </p>
      </div>
      <p className="description">{description.slice(0, 200)}...</p>
      <div className="book-btns">
        <button>Read Later</button>
        <a href={previewLink} target="_blank">
          Preview
        </a>
      </div>
    </div>
  );
}

export default BookInnerInfo;

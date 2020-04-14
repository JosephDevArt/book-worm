import React from "react";

function Pagination(props) {
  const {
    postsPerPage,
    totalPosts,
    paginate,
    firstPage,
    lastPage,
    nextPagesBtnClick,
    prevPagesBtnClick,
    currentPage,
    pages,
  } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {/* show/hide prevBtn */}
        {firstPage !== 1 && (
          <button className="prevBtn" onClick={() => prevPagesBtnClick()}>
            Prev
          </button>
        )}

        {pageNumbers
          // show pages that are between first and last pages (including)
          .filter((number) => number <= lastPage && number >= firstPage)
          .map((number) => (
            <li key={number}>
              <button
                className={`numBtn ${currentPage === number ? "active" : ""}`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}

        {/* show/hide nextBtn */}
        {lastPage < pages && (
          <button className="nextBtn" onClick={() => nextPagesBtnClick()}>
            Next
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;

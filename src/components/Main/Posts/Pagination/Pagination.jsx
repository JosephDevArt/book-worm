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
        {firstPage != 1 && (
          <button onClick={() => prevPagesBtnClick()}>Prev</button>
        )}

        {pageNumbers
          // show pages that are between first and last pages (including)
          .filter((number) => number <= lastPage && number >= firstPage)
          .map((number) => (
            <li key={number}>
              <a
                className={currentPage == number ? "active" : ""}
                onClick={() => paginate(number)}
                href="#"
              >
                {number}
              </a>
            </li>
          ))}

        {/* show/hide nextBtn */}
        {lastPage < pages && (
          <button onClick={() => nextPagesBtnClick()}>Next</button>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;

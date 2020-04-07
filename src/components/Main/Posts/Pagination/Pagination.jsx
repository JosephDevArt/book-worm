import React from "react";

function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  firstPage,
  lastPage,
  nextPagesBtnClick,
  prevPagesBtnClick,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul>
        {firstPage != 1 && (
          <button onClick={() => prevPagesBtnClick()}>Prev</button>
        )}
        {pageNumbers
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
        {lastPage != 25 && (
          <button onClick={() => nextPagesBtnClick()}>Next</button>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;

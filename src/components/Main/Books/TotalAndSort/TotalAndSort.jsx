import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import sortIcon from "../iconfinder-icon.svg";
import { loadBooks } from "./../../../../actions/booksActions";
import { loadReadLaterBooks } from "./../../../../actions/readLaterActions";
import {
  rotateSortIcon,
  setSelectValue,
} from "./../../../../actions/sortActions";
const TotalAndSort = ({ scope }) => {
  const dispatch = useDispatch();
  const {
    selectedValue,
    sortIconRotated,
    books,
    readLaterBooks,
    totalFetchedBooks,
    isFetching,
  } = useSelector(
    (state) => ({
      readLaterBooks: state.readLater.readLaterBooks,
      selectedValue: state.sort.selectedValue,
      sortIconRotated: state.sort.sortIconRotated,
      books: state.books.books,
      totalFetchedBooks: state.books.totalFetchedBooks,
      isFetching: state.books.isFetching,
    }),
    shallowEqual
  );

  const sortBooks = () => {
    //Sorting by selected value(scope is where this component is rendered(books-section or readLater-section))
    if (scope === "books" ? books.length : readLaterBooks.length) {
      // console.log("sort");
      let newItems = scope === "books" ? books.slice() : readLaterBooks.slice();
      newItems.sort(function (a, b) {
        //---BELOW---Checking for undefined(if 'selectedValue' is missing) => put in the end
        if (
          a.volumeInfo[selectedValue] == null ||
          b.volumeInfo[selectedValue] == null
        ) {
          if (
            a.volumeInfo[selectedValue] == null &&
            b.volumeInfo[selectedValue] == null
          ) {
            return 0;
          } else if (a.volumeInfo[selectedValue] == null) {
            return 1;
          } else {
            return -1;
          }
        }
        //---ABOVE---Checking for undefined(if 'selectedValue' is missing) => put in the end
        if (a.volumeInfo[selectedValue] < b.volumeInfo[selectedValue]) {
          return 1;
        } else {
          return -1;
        }
      });
      // Sort by Descending/Ascending order
      if (sortIconRotated) {
        newItems.reverse();
      }
      scope === "books"
        ? dispatch(loadBooks(newItems))
        : dispatch(loadReadLaterBooks(newItems));
    }
  };

  useEffect(() => {
    if (isFetching == true) {
      //run sort only after books have been fetched
      return;
    }
    sortBooks();
  }, [selectedValue, isFetching, sortIconRotated]);

  return (
    <div className="total-and-sort">
      <div className="total-books">
        <p className="total-text">Total</p>
        <h3 className="num-books">
          {scope === "books" ? totalFetchedBooks : readLaterBooks.length} Books
        </h3>
      </div>
      <div className="sort-by">
        <p className="sort-text">Sort by</p>
        <div className="sort-options">
          <img
            onClick={() => dispatch(rotateSortIcon())}
            className={`icon-sort ${sortIconRotated ? "rotate" : ""}`}
            src={sortIcon}
            alt="sort"
          />
          <select
            value={selectedValue}
            className="sort-select"
            onChange={(e) => dispatch(setSelectValue(e.target.value))}
          >
            <option value="publishedDate">Published date</option>
            <option value="pageCount">Page Count</option>
            <option value="averageRating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TotalAndSort;

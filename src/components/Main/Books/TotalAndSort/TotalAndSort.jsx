import React, { memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import sortIcon from "../iconfinder-icon.svg";
import {
  rotateSortIcon,
  setSelectValue,
  loadBooks,
  sortReadLaterBooks
} from "./../../../../actions/booksActions";

const TotalAndSort = ({ scope }) => {
  const dispatch = useDispatch();
  const {
    selectedValue,
    sortIconRotated,
    books,
    readLaterBooks,
    totalFetchedBooks
  } = useSelector(
    state => ({
      readLaterBooks: state.readLaterBooks,
      selectedValue: state.selectedValue,
      sortIconRotated: state.sortIconRotated,
      books: state.books,
      totalFetchedBooks: state.totalFetchedBooks
    }),
    shallowEqual
  );
  useEffect(() => {
    //Sorting by selected value(scope is where this component is rendered(books-section or readLater-section))
    if (scope === "books" ? books.length : readLaterBooks.length) {
      let newItems = scope === "books" ? books.slice() : readLaterBooks.slice();
      newItems.sort(function(a, b) {
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
        : dispatch(sortReadLaterBooks(newItems));
    }
  }, [selectedValue, books.length, sortIconRotated]);
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
          <object type="image/sbf+xml" data={sortIcon}>
            <img
              onClick={() => dispatch(rotateSortIcon())}
              className={`icon-sort ${sortIconRotated ? "rotate" : ""}`}
              src={sortIcon}
              alt="sort"
            />
          </object>
          <select
            value={selectedValue}
            className="sort-select"
            onChange={e => dispatch(setSelectValue(e.target.value))}
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

export default memo(TotalAndSort);

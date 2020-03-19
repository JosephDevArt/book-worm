import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import "./Books.scss";
import Book from "./Book/Book";
import TotalAndSort from "./TotalAndSort/TotalAndSort";
import { debounce, throttle } from "lodash";
import {
  loadBooks,
  loadBooksOnScroll,
  setTotalFetchedBooks,
  setUserInput,
  setSubmittedInput,
  setErrorMessage,
  sortReadLaterBooks
} from "../../../actions/booksActions";
function Books(props) {
  const dispatch = useDispatch();
  const {
    books,
    userInput,
    submittedInput, //store first userInput so that on scroll appropriate books will be loaded
    errorMessage,
    readLaterBooks
  } = useSelector(
    state => ({
      books: state.books,
      readLaterBooks: state.readLaterBooks,
      userInput: state.userInput,
      submittedInput: state.submittedInput,
      errorMessage: state.errorMessage
    }),
    shallowEqual
  );

  const [fetching, setFetching] = useState(false);

  const handleFetchError = response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json(); //we only get here if there is no error
  };
  const handleFetch = (input, startIndex) => {
    //startIndex equals to books.length(so same books won't be loaded)
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=20&startIndex=${startIndex}`,
      { method: "GET" }
    ).then(handleFetchError);
  };

  const searchBtnClick = debounce(() => {
    dispatch(setSubmittedInput(userInput)); //store first userInput so that on scroll appropriate books will be loaded
    setFetching(true);
    handleFetch(userInput, 0)
      .then(data => {
        if (data.totalItems === 0) {
          setFetching(false);
          dispatch(setErrorMessage("No Books Found."));
          dispatch(setTotalFetchedBooks(0));
          dispatch(loadBooks([]));
        } else {
          setFetching(false);
          errorMessage && dispatch(setErrorMessage(""));
          dispatch(setTotalFetchedBooks(data.totalItems));
          dispatch(loadBooks(data.items));
        }
      })
      .catch(err => {
        setFetching(false);
        console.log(err);
      });
  }, 200);
  const handleScroll = throttle(() => {
    // Load more books on scroll
    if (books.length >= 20) {
      // If first load < 20 books => prevent load on scroll
      let lastLi = document.querySelector(".books li:last-child");
      let lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
      let pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastLiOffset) {
        setFetching(true);
        handleFetch(submittedInput, books.length).then(data => {
          dispatch(loadBooksOnScroll(data.items)); //load first 20 books + 20 books each time when scrolled to the bottom
          setFetching(false);
        });
      }
    }
  }, 700);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [books.length]);
  return (
    <section className="books-section">
      <form
        onSubmit={e => e.preventDefault()}
        style={{ marginTop: books.length ? 50 : 200 }}
        className="search-books"
      >
        <input
          type="text"
          value={userInput}
          className="input-search-books"
          onChange={e => dispatch(setUserInput(e.target.value))}
          placeholder="Search books..."
          required
        ></input>
        <button
          type="submit"
          onClick={searchBtnClick}
          disabled={!userInput || userInput[0] == " "}
          className="btn-search"
        >
          Search {fetching && <i className="fa fa-refresh fa-spin"></i>}
          {/*Add spinner animation on loading books */}
        </button>
      </form>

      <p className="error-message">{errorMessage}</p>

      <div className="search-results">
        <TotalAndSort scope="books" />
        <ul className="books">
          {books.map(item => (
            <Book key={item.id} scope="books" book={item} />
          ))}
        </ul>
        <div className="more-content-load-text">
          {fetching && "Loading more books..."}
        </div>
      </div>
    </section>
  );
}
export default Books;

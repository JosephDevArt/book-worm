import React, { useEffect, useState, useCallback } from "react";
import "./Books.scss";
import sortIcon from "./iconfinder-icon.svg";
import Book from "./Book/Book";
import { debounce, throttle } from "lodash";

function Books() {
  const [fetching, setFetching] = useState(false);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [booksLoaded, setBooksLoaded] = useState(0); //add 20 books on scroll
  const [selectValue, setSelectValue] = useState("averageRating");
  const [rotateSortIcon, setRotateSortIcon] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [initialUserInput, setInitialSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const searchInputChange = debounce(text => {
    setUserInput(text);
  }, 200);

  const handleFetchError = response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json(); //we only get here if there is no error
  };
  const handleFetch = (input, startIndex) => {
    //startIndex equals to booksLoaded
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=20&startIndex=${startIndex}`,
      { method: "GET" }
    ).then(handleFetchError);
  };

  const searchBtnClick = debounce(() => {
    setInitialSearch(userInput); //store first userInput so that on scroll appropriate books will be loaded
    setFetching(true);
    handleFetch(userInput, 0)
      .then(data => {
        if (data.totalItems === 0) {
          setErrorMessage("No Books Found.");
          setFetching(false);
          setItems([]);
          setTotalItems(0);
          setBooksLoaded(0);
        } else {
          setErrorMessage("");
          setItems(data.items);
          setTotalItems(data.totalItems);
          setBooksLoaded(20);
          setFetching(false);
        }
      })
      .catch(err => {
        setFetching(false);
        console.log(err);
      });
  }, 200);
  const handleScroll = throttle(() => {
    // Load more books on scroll
    if (items.length >= 20) {
      // If first load < 20 books => prevent load on scroll
      let lastLi = document.querySelector(".books li:last-child");
      let lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
      let pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastLiOffset) {
        setFetching(true);
        handleFetch(initialUserInput, booksLoaded).then(data => {
          setBooksLoaded(booksLoaded + 20);
          setItems([...items, ...data.items]);
          setFetching(false);
        });
      }
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [booksLoaded]);

  const handleChange = e => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    //Sorting by selected value
    let newItems = items.slice();
    newItems.sort(function(a, b) {
      //---BELOW---Checking for undefined(if 'selectValue' is missing) => put in the end
      if (
        a.volumeInfo[selectValue] == null ||
        b.volumeInfo[selectValue] == null
      ) {
        if (
          a.volumeInfo[selectValue] == null &&
          b.volumeInfo[selectValue] == null
        ) {
          return 0;
        } else if (a.volumeInfo[selectValue] == null) {
          return 1;
        } else {
          return -1;
        }
      }
      //---ABOVE---Checking for undefined(if 'selectValue' is missing) => put in the end
      if (a.volumeInfo[selectValue] < b.volumeInfo[selectValue]) {
        return 1;
      } else {
        return -1;
      }
    });
    // Sort by Descending/Ascending order
    if (rotateSortIcon) {
      newItems.reverse();
    }
    setItems(newItems);
  }, [selectValue, booksLoaded, rotateSortIcon]);

  const rotateIconClick = () => {
    setRotateSortIcon(!rotateSortIcon);
  };
  return (
    <section className="books-section">
      <form
        onSubmit={e => e.preventDefault()}
        style={{ marginTop: items.length ? 50 : 200 }}
        className="search-books"
      >
        <input
          type="text"
          className="input-search-books"
          onChange={e => searchInputChange(e.target.value)}
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
          {/*Add spinner animation on loading data */}
        </button>
      </form>
      <p className="error-message">{errorMessage}</p>

      <div className="search-results">
        <div className="total-and-sort">
          <div className="total-books">
            <p className="total-text">Total</p>
            <h3 className="num-books">{totalItems} Books</h3>
          </div>
          <div className="sort-by">
            <p className="sort-text">Sort by</p>
            <div className="sort-options">
              <object type="image/sbf+xml" data={sortIcon}>
                <img
                  onClick={rotateIconClick}
                  className={`icon-sort ${rotateSortIcon ? "rotate" : ""}`}
                  src={sortIcon}
                  alt="sort"
                />
              </object>
              <select
                value={selectValue}
                className="sort-select"
                onChange={handleChange}
              >
                <option value="publishedDate">Published date</option>
                <option value="pageCount">Page Count</option>
                <option value="averageRating">Rating</option>
              </select>
            </div>
          </div>
        </div>
        <ul className="books">
          {items.map(item => (
            <Book key={item.id} items={item} />
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

import React, { useEffect, useState } from "react";
import "./Books.scss";
import sortIcon from "./iconfinder-icon.svg";
import Book from "./Book/Book";
function Books() {
  const [fetching, setFetching] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [booksLoaded, setBooksLoaded] = useState(0); //add 20 books on scroll
  const [selectValue, setSelectValue] = useState("averageRating");
  const [rotateSortIcon, setRotateSortIcon] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [initialUserInput, setInitialSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const searchInputChange = e => {
    setUserInput(e.target.value);
  };

  const searchBtnClick = e => {
    e.preventDefault();
    setInitialSearch(userInput); //store first userInput so that on scroll appropriate books will be loaded
    setFetching(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${userInput}&maxResults=20&startIndex=0`,
      { method: "GET" }
    )
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json(); //we only get here if there is no error
      })
      .then(data => {
        if (data.totalItems === 0) {
          setErrorMessage("No Books Found.");
          setFetching(false);
          setItems([]);
          setTotalItems(0);
          setBooksLoaded(0);
          setLoaded(false);
        } else {
          setErrorMessage("");
          setItems(data.items);
          setTotalItems(data.totalItems);
          setBooksLoaded(20);
          setFetching(false);
          setLoaded(true);
        }
      })
      .catch(err => console.log(err));
  };

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
  }, [selectValue, items.length, rotateSortIcon]);

  const rotateIconClick = () => {
    setRotateSortIcon(!rotateSortIcon);
  };

  function handleScroll() {
    /*
    Load more books on scroll
    If first load < 20 books => prevent load on scroll
    */
    if (items.length >= 20) {
      let lastLi = document.querySelector(".books li:last-child");
      let lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
      let pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastLiOffset) {
        fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${initialUserInput}&maxResults=20&startIndex=${booksLoaded}`,
          { method: "GET" }
        )
          .then(response => response.json())
          .then(data => {
            setBooksLoaded(booksLoaded + 20);
            setItems([...items, ...data.items]);
          });
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className="books-section">
      <form
        onSubmit={searchBtnClick}
        style={{ marginTop: loaded ? 50 : 200 }}
        className="search-books"
      >
        <input
          type="text"
          className="input-search-books"
          onChange={searchInputChange}
          placeholder="Search books..."
          required
        ></input>
        <button
          type="submit"
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
      </div>
    </section>
  );
}

export default Books;

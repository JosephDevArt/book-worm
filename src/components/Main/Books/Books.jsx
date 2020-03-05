import React, { useEffect, useState } from "react";
import "./Books.scss";
import sortIcon from "./iconfinder-icon.svg";
import Book from "./Book/Book";

function Books() {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [booksLoaded, setBooksLoaded] = useState(0);
  const [selectValue, setSelectValue] = useState("publishedDate");
  const [rotateSortIcon, setRotateSortIcon] = useState(false);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=python&maxResults=20&startIndex=0`,
      { method: "GET" }
    )
      .then(response => response.json())
      .then(data => {
        setItems(data.items);
        setTotalItems(data.totalItems);
        setBooksLoaded(20);
        setLoaded(true);
      })
      .catch(err => console.log(err));
    // window.addEventListener("scroll", this.hanldeClick);
  }, []);

  useEffect(() => {
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

  function handleClick(e) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=python&maxResults=20&startIndex=${booksLoaded}`,
      { method: "GET" }
    )
      .then(response => response.json())
      .then(data => {
        setBooksLoaded(booksLoaded + 20);
        setItems([...items, ...data.items]);
      });
  }
  const handleChange = e => {
    setSelectValue(e.target.value);
  };

  const imageClick = () => {
    setRotateSortIcon(!rotateSortIcon);
  };

  if (loaded) {
    return (
      <section className="books-section">
        <button type="button" onClick={handleClick}>
          Click here
        </button>
        <div className="total-and-sort">
          <div className="total-books">
            <p className="total-text">Total</p>
            <h3 className="num-books">{totalItems} Books</h3>
          </div>

          <div className="sort-by">
            <p className="sort-text">Sort by</p>
            <div className="sort-boxes">
              <object type="image/sbf+xml" data={sortIcon}>
                <img
                  onClick={imageClick}
                  className={`icon-sort + ${rotateSortIcon ? "rotate" : ""}`}
                  src={sortIcon}
                  alt=""
                />
              </object>
              <select
                value={selectValue}
                className="sort-select"
                onChange={handleChange}
              >
                <option value="averageRating">Rating</option>
                <option value="pageCount">Page Count</option>
                <option value="publishedDate">Published date</option>
              </select>
            </div>
          </div>
        </div>
        <div className="books">
          {items.map(item => (
            <Book key={item.id} items={item} />
          ))}
        </div>
      </section>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Books;

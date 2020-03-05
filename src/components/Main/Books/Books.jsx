import React, { useEffect, useState } from "react";
import "./Books.scss";
import sortIcon from "./iconfinder-icon.svg";
import Book from "./Book/Book";

function Books() {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [booksLoaded, setBooksLoaded] = useState(0);
  const [selectValue, setSelectValue] = useState("pageCount");
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=python&maxResults=5&startIndex=0`,
      { method: "GET" }
    )
      .then(response => response.json())
      .then(data => {
        setItems(data.items);
        setTotalItems(data.totalItems);
        setBooksLoaded(5);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    let newItems = items.slice();
    switch (selectValue) {
      case "pageCount":
        newItems
          .sort(function(a, b) {
            //---- BELOW ---- Checking for undefind(if 'pageCount' property is missing) => put in the end
            const pageCountUndefinedA = a.volumeInfo.pageCount == null;
            const pageCountUndefinedB = b.volumeInfo.pageCount == null;
            if (pageCountUndefinedA || pageCountUndefinedB) {
              if (pageCountUndefinedA && pageCountUndefinedB) {
                return 0;
              } else if (pageCountUndefinedA) {
                return -1;
              } else {
                return 1;
              }
            }
            //---- ABOVE ---- Checking for undefind(if 'pageCount' property is missing) => put in the end
            if (a.volumeInfo.pageCount > b.volumeInfo.pageCount) {
              return 1;
            } else if (a.volumeInfo.pageCount < b.volumeInfo.pageCount) {
              return -1;
            }
          })
          .reverse();

        break;
      case "publishedDate":
        newItems
          .sort((a, b) => {
            //---- BELOW ---- Checking for undefind(if 'publishedDate' property is missing) => put in the end
            let publishedDateUndefinedA = a.volumeInfo.publishedDate == null;
            let publishedDateUndefinedB = b.volumeInfo.publishedDate == null;
            if (publishedDateUndefinedA || publishedDateUndefinedB) {
              if (publishedDateUndefinedA && publishedDateUndefinedB) {
                return 0;
              } else if (publishedDateUndefinedA) {
                return -1;
              } else {
                return 1;
              }
            }
            //---- ABOVE ---- Checking for undefind(if 'publishedDate' property is missing) => put in the end
            if (
              parseInt(a.volumeInfo.publishedDate) >
              parseInt(b.volumeInfo.publishedDate)
            ) {
              return 1;
            } else {
              return -1;
            }
          })
          .reverse();
        break;
      case "rating":
        newItems
          .sort((a, b) => {
            //---- BELOW ---- Checking for undefind(if 'averageRating' property is missing) => put in the end
            let averageRatingUndefinedA = a.volumeInfo.averageRating == null;
            let averageRatingUndefinedB = b.volumeInfo.averageRating == null;
            if (averageRatingUndefinedA || averageRatingUndefinedB) {
              if (averageRatingUndefinedA && averageRatingUndefinedB) {
                return 0;
              } else if (averageRatingUndefinedA) {
                return -1;
              } else {
                return 1;
              }
            }
            //---- ABOVE ---- Checking for undefind(if 'averageRating' property is missing) => put in the end
            if (a.volumeInfo.averageRating > b.volumeInfo.averageRating) {
              return 1;
            } else {
              return -1;
            }
          })
          .reverse();
        break;
      default:
        newItems = items;
    }
    setItems(newItems);
  }, [selectValue, items.length]);

  function handleClick(e) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=python&maxResults=5&startIndex=${booksLoaded}`,
      { method: "GET" }
    )
      .then(response => response.json())
      .then(data => {
        setBooksLoaded(booksLoaded + 5);
        setItems([...items, ...data.items]);
      });
  }
  const handleChange = e => {
    setSelectValue(e.target.value);
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
                <img className="icon-sort" src={sortIcon} alt="" />
              </object>
              <select
                value={selectValue}
                className="sort-select"
                onChange={handleChange}
              >
                <option value="rating">Rating</option>
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

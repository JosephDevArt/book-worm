import React, { useEffect, useState } from "react";
import "./Books.scss";

import sortIcon from "./iconfinder-icon.svg";
import Book from "./Book/Book";
function Books() {
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [pagination, setPagination] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=python&maxResults=5&startIndex=0`,
      { method: "GET" }
    )
      .then(response => response.json())
      .then(data => {
        setItems(data.items);
        setTotalItems(data.totalItems);
        setPagination(5);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  function handleClick(e) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=python&maxResults=5&startIndex=${pagination}`,
      { method: "GET" }
    )
      .then(response => response.json())
      .then(data => {
        setItems([...items, ...data.items]);
        setPagination(pagination + 5);
      });
  }

  if (loaded) {
    // console.log(items);
    return (
      <div className="books-section">
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
              <select className="sort-select">
                <option value="rate">Rate</option>
                <option value="year">Popularity</option>
              </select>
            </div>
          </div>
        </div>
        <div className="books">
          {items.map(item => (
            <Book key={item.id} items={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Books;

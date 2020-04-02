import React from "react";
import Book from "../Books/Book/Book";
import TotalAndSort from "../Books/TotalAndSort/TotalAndSort";
import { useSelector } from "react-redux";
function ReadLater() {
  const readLaterBooks = useSelector(
    state => state.readLaterReducer.readLaterBooks
  );

  return (
    <section className="read-later-section">
      <div className="search-results">
        <TotalAndSort scope="readLater" />
        <ul className="books">
          {readLaterBooks.map(item => (
            <Book key={item.id} scope="readLater" book={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ReadLater;

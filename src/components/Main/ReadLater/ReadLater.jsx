import React from "react";
import Book from "../Books/Book/Book";
import TotalAndSort from "../Books/TotalAndSort/TotalAndSort";
import { useSelector, shallowEqual } from "react-redux";
function ReadLater(props) {
  const { readLaterBooks } = useSelector(
    state => ({
      readLaterBooks: state.readLaterReducer.readLaterBooks
    }),
    shallowEqual
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

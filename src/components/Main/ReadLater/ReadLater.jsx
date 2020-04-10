import React from "react";
import { useSelector } from "react-redux";

import Book from "../shared/Book/Book";
import TotalAndSort from "../shared/TotalAndSort/TotalAndSort";

function ReadLater() {
  const readLaterBooks = useSelector((state) => state.readLater.readLaterBooks);

  return (
    <section className="read-later-section">
      <div className="search-results">
        <TotalAndSort scope="readLater" />
        <ul className="books">
          {readLaterBooks.map((item) => (
            <Book key={item.id} scope="readLater" book={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ReadLater;

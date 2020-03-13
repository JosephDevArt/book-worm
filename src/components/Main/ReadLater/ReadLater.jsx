import React, { useEffect, useState, useCallback } from "react";
import "./ReadLater.scss";
import sortIcon from "../Books/iconfinder-icon.svg";
import Book from "../Books/Book/Book";
import { connect } from "react-redux";
import { rotateSortIcon } from "../../../actions/booksActions";
function ReadLater(props) {
  console.log(props);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [selectValue, setSelectValue] = useState("averageRating");
  // const [rotateSortIcon, setRotateSortIcon] = useState(false);
  // const rotateIconClick = () => {
  //   setRotateSortIcon(!rotateSortIcon);
  // };
  const handleChange = e => {
    setSelectValue(e.target.value);
  };
  return (
    <section className="read-later-section">
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
                  onClick={props.rotateSortIcon}
                  className={`icon-sort ${
                    props.sortIconRotated ? "rotate" : ""
                  }`}
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

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    rotateSortIcon: () => dispatch(rotateSortIcon())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadLater);

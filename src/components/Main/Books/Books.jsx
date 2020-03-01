import React from "react";
import "./Books.scss";

import sortIcon from "./iconfinder-icon.svg";
import Book from "./Book";
class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      totalItems: 0,
      pagination: 0,
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=python&maxResults=5&startIndex=0`,
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data.items,
          totalItems: data.totalItems,
          isLoaded: true,
          pagination: 5
        });
        // console.log(this.state.items[0].volumeInfo.title);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleClick() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=python&maxResults=5&startIndex=${this.state.pagination}`,
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => {
          prevState.items = [...prevState.items, ...data.items];
          prevState.pagination = prevState.pagination + 5;
          // Hey checking merge of branches
          const chekcingMerge = 1;
          return prevState;
        });
      });
  }

  render() {
    console.log(this.state.pagination);
    if (this.state.isLoaded) {
      return (
        <div className="books-section">
          <button type="button" onClick={this.handleClick.bind(this)}>
            Click here
          </button>
          <div className="total-and-sort">
            <div className="total-books">
              <p>Total</p>
              <h3>{this.state.totalItems} Books</h3>
            </div>
            <div className="sort-by">
              <p>Sort by</p>
              <div className="sort">
                <object type="image/sbf+xml" data={sortIcon}>
                  <img className="icon" src={sortIcon} alt="" />
                </object>

                <select>
                  <option value="rate">Rate</option>
                  <option value="year">Popularity</option>
                </select>
              </div>
            </div>
          </div>
          <div className="books-boxes">
            {this.state.items.map(item => (
              <Book key={item.id} items={item} />
            ))}

            {/* <Book items={this.state.items[0]} />
            <Book items={this.state.items[0]} />
            <Book items={this.state.items[0]} />
            <Book items={this.state.items[0]} />
            <Book items={this.state.items[0]} />
            <Book items={this.state.items[0]} /> */}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Books;

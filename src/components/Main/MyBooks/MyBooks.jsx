import React from "react";
import classes from "./MyBooks.module.css";
class MyBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=harrypotter", {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data,
          isLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(this.state);
  }

  render() {
    console.log(this.state);
    return <div>My Books Content</div>;
  }
}

export default MyBooks;

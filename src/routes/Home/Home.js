import React, { Component } from "react";
import Header from "./../../components/Header/Header";
import Books from "./../../components/Books/Books";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Books />
      </div>
    );
  }
}

export default Home;

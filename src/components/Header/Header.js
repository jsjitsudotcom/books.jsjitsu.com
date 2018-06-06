import React, { PureComponent } from "react";
import Style from "./Header.scss";
import Search from "./../Search/Search";

export default class Header extends PureComponent {
  render() {
    return (
      <header className={Style.container}>
        <Search />
      </header>
    );
  }
}

Header.propTypes = {};

import React, { PureComponent } from "react";
import Style from "./Search.scss";
import PropTypes from "prop-types";
import Connect from "./containers/Search";

import searchIcon from "./../../assets/material-icons/search.svg";

class Search extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <label className={Style.icon} htmlFor="search">
          <img src={searchIcon} alt="search" />
        </label>
        <input
          id="search"
          placeholder="Quel livre recherchez vous ?"
          value={this.props.value}
          className={Style.input}
          onChange={(e) => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

Search.defaultProps = {
  value: "",
  onChange: /* istanbul ignore next */ () => false
};

export default Connect(Search);
export const Component = Search;

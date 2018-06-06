import React, { PureComponent } from "react";
import Style from "./Search.scss";
import PropTypes from "prop-types";

import searchIcon from "./../../assets/material-icons/search.svg";

export default class Search extends PureComponent {
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
          onChange={this.props.onChange}
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

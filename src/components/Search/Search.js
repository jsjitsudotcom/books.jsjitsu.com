import React, { PureComponent } from "react";
import Style from "./Search.scss";
import PropTypes from "prop-types";

export default class Search extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.icon}>search</div>
        <input
          placeholder="Quel livre recherchez vous ?"
          value={this.props.value}
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

import React, { PureComponent } from "react";
import Style from "./Book.scss";
import PropTypes from "prop-types";

const Loading = () => (
  <div className={Style.container}>
    <div className={Style.loading} />
  </div>
);

export default class Book extends PureComponent {
  render() {
    if (this.props.loading) return <Loading />;

    return (
      <div onClick={this.props.onClick} className={Style.container}>
        <div
          className={Style.cover}
          style={{ backgroundImage: `url(${this.props.cover})` }}
        >
          <div className={Style.coverSize} />
        </div>
        <div className={Style.info}>
          <div className={Style.title}>{this.props.title}</div>
          <div className={Style.author}>{this.props.author}</div>
          <div className={Style.date}>{this.props.date}</div>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  date: PropTypes.number,
  onClick: PropTypes.func
};

Book.defaultProps = {
  title: "Default title",
  date: 2022,
  author: "John Doe",
  cover:
    "http://ia802702.us.archive.org/zipview.php?zip=/30/items/olcovers25/olcovers25.zip&file=258027.jpg",
  onClick: /* istanbul ignore next */ () => false
};

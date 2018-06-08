import React, { PureComponent } from "react";
import Style from "./Book.scss";
import PropTypes from "prop-types";
import Cover from "./components/Cover/Cover";

const Loading = () => (
  <div className={Style.container}>
    <div className={Style.loadingWrapper}>
      <div className={Style.loading} />
    </div>
  </div>
);

export default class Book extends PureComponent {
  render() {
    if (this.props.loading) return <Loading />;

    return (
      <div onClick={this.props.onClick} className={Style.container}>
        <Cover cover={this.props.cover} />

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
  onClick: /* istanbul ignore next */ () => false
};

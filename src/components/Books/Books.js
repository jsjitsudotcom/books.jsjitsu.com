import React, { PureComponent } from "react";
import Style from "./Books.scss";
import PropTypes from "prop-types";

import Connect from "./containers/Books";

import Book from "./../Book/Book";

const Loading = Array.from(new Array(4)).map((e, i) => (
  <Book key={i + "/loading"} loading />
));

class Books extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        {this.props.books.length === 0 &&
          !this.props.loading && (
            <div className={Style.message}>
              Aucun livre trouvé, veuillez changer votre recherche
            </div>
          )}
        <div className={Style.books}>
          {this.props.books
            .map((book, i) => (
              <div className={Style.book} key={i}>
                <Book
                  title={book.title}
                  date={book.date}
                  author={book.author}
                  cover={book.cover}
                />
              </div>
            ))
            .concat(this.props.loading ? Loading : [])}
        </div>

        {this.props.books.length !== 0 &&
          !this.props.loading && (
            <div className={Style.moreWrapper}>
              <div className={Style.more} onClick={this.props.onMore}>
                Charger plus de livre
              </div>
            </div>
          )}
      </div>
    );
  }
}

Books.propTypes = {
  books: PropTypes.array,
  onMore: PropTypes.func
};

Books.defaultProps = {
  books: [],
  onMore: /* istanbul ignore next */ () => false
};

export default Connect(Books);
export const Component = Books;

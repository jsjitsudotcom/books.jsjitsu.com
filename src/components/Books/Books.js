import React, { PureComponent } from "react";
import Style from "./Books.scss";
import PropTypes from "prop-types";

import Connect from "./containers/Books";

import Book from "./../Book/Book";

const Loading = Array.from(new Array(4)).map(i => <Book key={i} loading />);

class Books extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.books}>
          {this.props.books
            .map(book => (
              <div className={Style.book}>
                <Book
                  title={book.title}
                  date={book.first_publish_year}
                  author={book.author_name}
                  cover={`http://covers.openlibrary.org/b/id/${
                    book.cover_i
                  }.jpg`}
                />
              </div>
            ))
            .concat(this.props.loading ? Loading : [])}
        </div>
      </div>
    );
  }
}

Books.propTypes = {
  books: PropTypes.array
};

Books.defaultProps = {
  books: []
};

export default Connect(Books);
export const Component = Books;

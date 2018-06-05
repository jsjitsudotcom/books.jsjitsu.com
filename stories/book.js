import React from "react";

import Book from "./../src/components/Book/Book";

import book from "./__data__/book.json";

export default (storiesOf, addons) => {
  storiesOf("Book", module).add("Le livre seul", () => (
    <Book
      date={book.first_publish_year}
      title={book.title}
      author={book.author_name[0]}
    />
  ));
};

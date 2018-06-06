import React from "react";

import Book from "./../src/components/Book/Book";
import Books from "./../src/components/Books/Books";

import book from "./__data__/book.json";
import booksData from "./../__fixtures__/books.json";

export default (storiesOf, addons) => {
  storiesOf("Book", module)
    .add("Le livre seul", () => (
      <Book
        date={book.first_publish_year}
        title={book.title}
        author={book.author_name[0]}
      />
    ))
    .add("Le livre en mode chargement", () => <Book loading />)
    .add("Plusieurs livres", () => <Books books={booksData} />);
};

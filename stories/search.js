import React from "react";
import Search from "./../src/components/Search/Search";
import Header from "./../src/components/Header/Header";

export default (storiesOf, addons) => {
  storiesOf("Search", module)
    .add("La barre de recherche", () => <Search />)
    .add("La barre de recherche dans le header", () => <Header />);
};

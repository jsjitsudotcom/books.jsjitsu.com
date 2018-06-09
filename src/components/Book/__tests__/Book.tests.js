import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import Book from "./../Book";

describe("<Book />", () => {
  it("Le componsant doit être rendu", () => {
    shallow(<Book />);
  });

  describe("Suite de tests de l'affichage", () => {
    test("Le composant doit bien s'afficher", () => {
      const title = "title";
      const author = "author";
      const date = 1546;
      const cover = "cover";

      const wrapper = shallow(
        <Book title={title} author={author} date={date} cover={cover} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});

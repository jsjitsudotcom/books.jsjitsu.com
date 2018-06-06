import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import {Component as Books} from "./../Books";

import booksData from "./../../../../__fixtures__/books.json";

describe("<Books />", () => {
  it("Le componsant doit être rendu", () => {
    shallow(<Books />);
  });

  describe("Suite de tests de l'affichage", () => {
    test("Les livres doivent bien s'afficher", () => {
      const wrapper = shallow(<Books books={booksData} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import { Component as Books } from "./../Books";

import booksData from "./../../../../__fixtures__/books-normalized.json";

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

  describe("Suite de tests des methodes", () => {
    test("La méthode onMore doit être appelée", () => {
      const spy = sinon.spy();
      const wrapper = shallow(<Books books={booksData} onMore={spy} />);

      wrapper.find(".more").simulate("click");
      expect(spy.called).toEqual(true);
    });
  });
});

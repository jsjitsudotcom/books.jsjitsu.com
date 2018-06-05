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

  describe("Suite test des methodes", () => {
    test("La propriété onClick doit être appelée lorsqu'on clique le container", () => {
      const onClick = sinon.spy();

      const wrapper = shallow(<Book onClick={onClick} />);

      wrapper.find(".container").simulate("click");

      expect(onClick.calledOnce).toEqual(true);
    });
  });
});

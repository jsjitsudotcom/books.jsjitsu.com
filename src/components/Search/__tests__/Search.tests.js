import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import Search from "./../Search";

describe("<Search />", () => {
  it("Le componsant doit être rendu", () => {
    shallow(<Search />);
  });

  describe.skip("Suite de tests de l'affichage", () => {
    test("Le composant doit bien s'afficher", () => {
      const title = "title";
      const author = "author";
      const date = 1546;
      const cover = "cover";

      const wrapper = shallow(
        <Search title={title} author={author} date={date} cover={cover} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe.skip("Suite test des methodes", () => {
    test("La propriété onClick doit être appelée lorsqu'on clique le container", () => {
      const onClick = sinon.spy();

      const wrapper = shallow(<Search onClick={onClick} />);

      wrapper.find(".container").simulate("click");

      expect(onClick.calledOnce).toEqual(true);
    });
  });
});

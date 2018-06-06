import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import Search from "./../Search";

describe("<Search />", () => {
  it("Le componsant doit être rendu", () => {
    shallow(<Search />);
  });

  describe("Suite de tests de l'affichage", () => {
    test("Le composant doit bien s'afficher", () => {
      const value = "value";

      const wrapper = shallow(
        <Search value={value} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Suite test des methodes", () => {
    test("La propriété onChange doit être appelée", () => {
      const onChange = sinon.spy();

      const wrapper = shallow(<Search onChange={onChange} />);

      wrapper.find(".input").prop("onChange")();

      expect(onChange.calledOnce).toEqual(true);
    });
  });
});

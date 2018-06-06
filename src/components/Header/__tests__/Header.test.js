import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";
import Header from "./../Header";

describe("<Header />", () => {
  it("Le componsant doit être rendu", () => {
    shallow(<Header />);
  });
});

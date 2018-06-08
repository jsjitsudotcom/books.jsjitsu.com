import React from "react";
import { expect } from "chai";
import { Provider } from "react-redux";
import fetchMock from "fetch-mock";
import sinon from "sinon";
import { mount } from "enzyme";

import createStore from "./../../../../stores";
import actions from "./../../.../../../../actions";
import booksData from "./../../.../../../../../__fixtures__/search.json";

import Container from "./../Books";

import mountWithProvider from "./../../../../tests-utils/mount-provider";

const $Mount = mountWithProvider(Container);

describe("<Search.Container />", () => {
  let store = null;

  beforeEach(async () => {
    fetchMock.restore();
    fetchMock.get("*", booksData);
    store = createStore();
    await store.dispatch(actions.books.changeSearchAndFetch("lords"));
    fetchMock.restore();
  });

  it("Le composant doit être rendu avec mount", () => {
    $Mount(createStore());
  });

  it("La méthode onMore doit aller récupérer de nouveaux livres", async () => {
    fetchMock.get("*", booksData);

    const wrapper = $Mount(store);

    await wrapper.$().prop("onMore")();

    expect(store.getState().books.page).to.eq(2);
    expect(wrapper.$().prop("books").length).to.eq(170);
  });

  it("La méthode onMore doit faire la requete avec la bonne page", async () => {
    fetchMock.get(url => {
      if (url.indexOf("page=2") >= 0) return true;
      throw new Error("La page n'est pas égale à 2");
    }, booksData);

    const wrapper = $Mount(store);

    await wrapper.$().prop("onMore")();
  });
});

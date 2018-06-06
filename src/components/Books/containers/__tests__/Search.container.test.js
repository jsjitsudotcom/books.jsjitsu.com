import React from "react";
import { expect } from "chai";
import { Provider } from "react-redux";
import fetchMock from "fetch-mock";
import sinon from "sinon";
import { mount } from "enzyme";

import createStore from "./../../../../stores";
import actions from "./../../.../../../../actions";
import booksData from "./../../.../../../../../__fixtures__/search.json";

import Container from "./../Search";

const mountWithProvider = (store, props = {}) => {
  const Tester = props => <div />;
  const Connected = Container(Tester);

  const mounted = mount(
    <Provider store={store}>
      <Connected {...props} />
    </Provider>
  );

  mounted.$ = () => mounted.update().find("Tester");

  return mounted;
};

describe("<Search.Container />", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it("Le composant doit être rendu avec mount", () => {
    mountWithProvider(createStore());
  });

  it("La valeur de l'input doit changer", async () => {
    fetchMock.get("*", booksData);

    const store = createStore();
    const wrapper = mountWithProvider(store);
    const value = "value";

    await wrapper.$().prop("onChange")(value);

    expect(wrapper.$().prop("value")).to.eq(value);
  });

  it("Les livres doivent être stockés", async () => {
    fetchMock.get("*", booksData);
    
    const store = createStore();
    const wrapper = mountWithProvider(store);
    const value = "value";

    await wrapper.$().prop("onChange")(value);

    expect(store.getState().books.books.length).to.eq(booksData.docs.length);
  });

  describe("Lorsque l'utilisateur fait plusieurs recherches", () => {
    it("Seulement les livres de la dernière recherche doivent être stockés", async () => {
      const booksLord = { ...booksData, docs: booksData.docs.slice(0, 2) };
      const delay = value =>
        new Promise(resolve => setTimeout(() => resolve(value), 100));

      fetchMock.get(url => url.indexOf("lord") >= 0, booksLord);
      fetchMock.get("*", () => delay(booksData));

      const store = createStore();
      const wrapper = mountWithProvider(store);
      
      return Promise.all([
        wrapper.$().prop("onChange")("value"),
        wrapper.$().prop("onChange")("hello"),
        wrapper.$().prop("onChange")("lord of the ring"),
        store.getState().books.fetching
      ]).then((promises) => {
          expect(promises[3]).to.eq(true, "Fetching doit bien être modifié");
          expect(store.getState().books.books.length).to.eq(booksLord.docs.length);
          expect(store.getState().books.fetching).to.eq(false);
      });

    });
  });
});

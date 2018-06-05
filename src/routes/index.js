import React from "react";
import Home from "./Home/Home";
import { Provider } from "react-redux";
import createStore from "./../stores";

const store = createStore();

export default (
  <Provider store={store}>
    <Home />
  </Provider>
);

import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

export default Container => (store, props = {}) => {
  const Tester = () => <div />;
  const Connected = Container(Tester);

  const mounted = mount(
    <Provider store={store}>
      <Connected {...props} />
    </Provider>
  );

  mounted.$ = () => mounted.update().find("Tester");

  return mounted;
};

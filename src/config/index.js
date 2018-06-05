import defaultData from "./default";
import production from "./production";
import development from "./development";
import test from "./test";

const config = {
  production: production,
  development: development,
  test: test
};

export default Object.freeze(Object.assign({}, defaultData, config[process.env.NODE_ENV]));

import Raven from "raven-js";

export default () => {
  Raven.config("https://bea8e76eebe1483db19c01d8ed64dd1e@sentry.io/1220256", {
    release: process.env.VERSION
  }).install();
};

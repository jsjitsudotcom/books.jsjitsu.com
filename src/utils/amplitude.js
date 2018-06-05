import Amplitude from "amplitude-js/amplitude";

const key = "6443f7b011cd5aa3e90fcc6bc40c5c31";

const getInstance = () => {
  let instance = Amplitude.getInstance();
  instance.init(key);
  instance.setVersionName(process.env.VERSION);
  return instance;
};

const getFakeInstance = () => {
  return {
    setVersionName() {
      return this;
    },
    logEvent() {
      return this;
    }
  };
};

export default (process.env.NODE_ENV === "production"
  ? getInstance()
  : getFakeInstance());

export const reduxMiddleware = instance => store => next => action => {
  const { meta, type } = action;
  if (meta && meta.amplitude && instance.logEvent)
    instance.logEvent(type, meta.amplitude);
  return next(action);
};

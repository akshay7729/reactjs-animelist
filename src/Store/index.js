import { createStore, compose } from "redux";
import rootReducer from "../Redux/Reducers";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = () => {
  const store = createStore(rootReducer, compose(composeEnhancers()));
  return store;
};

export default configureStore;

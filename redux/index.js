import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { checkForToken } from "./actions/authentication";

import rootReducer from "./reducers";
import { getCategories } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkForToken());
store.dispatch(getCategories());

export default store;

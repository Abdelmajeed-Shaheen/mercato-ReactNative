import { combineReducers } from "redux";

import user from "./user";
import categoriesState from "./categories";
import itemState from "./items";
import cart from "./cart";

export default combineReducers({ user, categoriesState, itemState, cart });

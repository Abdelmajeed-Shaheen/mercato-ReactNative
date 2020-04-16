import { combineReducers } from "redux";

import user from "./user";
import categoriesState from "./categories";
import itemState from "./items";

export default combineReducers({ user, categoriesState, itemState });

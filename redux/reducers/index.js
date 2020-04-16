import { combineReducers } from "redux";

import userState from "./user";
import categoriesState from "./categories";
import itemState from "./items";

export default combineReducers({ userState, categoriesState, itemState });

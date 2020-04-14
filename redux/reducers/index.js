import { combineReducers } from "redux";

import user from "./user";
import categoriesState from "./categories";

export default combineReducers({ user, categoriesState });

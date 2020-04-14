import { SET_CATEGORIES } from "../actions/actionTypes";

const initialState = { categories: [] };
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};

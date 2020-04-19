import { SET_ITEMS, CLEAR_ITEMS } from "../actions/actionTypes";

const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ITEMS:
      return { ...state, items: payload };

    case CLEAR_ITEMS:
      return { ...state, items: [] };

    default:
      return state;
  }
};

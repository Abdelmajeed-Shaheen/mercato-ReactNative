import { REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";

export default (items = [], { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      const newItem = payload;
      return [...items, { ...newItem, quantity: newItem.quantity }];

    case REMOVE_ITEM:
      return items.filter((item) => item !== payload);

    case CHECKOUT:
      return [];

    default:
      return items;
  }
};

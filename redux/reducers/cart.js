import {
  REMOVE_ITEM,
  CHECKOUT,
  ADD_ITEM,
  REMOVE_ALL_ITEMS,
} from "../actions/actionTypes";

export default (items = [], { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      const newItem = payload;
      const foundItem = items.find((item) => item.item.id === newItem.item.id);

      if (foundItem) {
        return items.map((item) =>
          item === foundItem
            ? {
                ...item,

                quantity: item.quantity + newItem.quantity,
              }
            : item
        );
      } else return [...items, newItem];

    case REMOVE_ITEM:
      return items.filter((item) => item !== payload);

    case REMOVE_ALL_ITEMS:
      return [];

    case CHECKOUT:
      return [];

    default:
      return items;
  }
};

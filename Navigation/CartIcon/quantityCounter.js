export const quantityCounter = (items) =>
  items.reduce((quantity, item) => quantity + item.quantity, 0);

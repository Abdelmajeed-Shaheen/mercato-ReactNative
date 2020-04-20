import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHECKOUT,
  REMOVE_ALL_ITEMS,
} from "./actionTypes";
import { instance } from "./instance";

export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const checkoutCart = (cart) => async (dispatch) => {
  try {
    const cartObj = { cart: JSON.stringify(cart) };
    const repsonse = await instance.post("api/addorder/", cartObj);
    dispatch(removeAllItemsFromCart());
  } catch (error) {
    console.error(error);
  }
};
export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeAllItemsFromCart = () => ({
  type: REMOVE_ALL_ITEMS,
});

import { SET_ITEMS, CLEAR_ITEMS } from "./actionTypes";

import { instance } from "./instance";

export const getItems = (categoryID) => async (dispatch) => {
  try {
    const response = await instance.get(`api/categories/${categoryID}`);
    const items = response.data;
    dispatch({
      type: SET_ITEMS,
      payload: items,
    });
  } catch (error) {
    console.error(error);
  }
};

export const clearItems = () => ({
  type: CLEAR_ITEMS,
});

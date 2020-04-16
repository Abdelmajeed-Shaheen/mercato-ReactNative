import { SET_CATEGORIES } from "./actionTypes";
import instance from "./instance";

export const getCategories = () => async (dispatch) => {
  try {
    const response = await instance.get("api/categories");
    const categories = response.data;

    dispatch({
      type: SET_CATEGORIES,
      payload: categories,
    });
  } catch (error) {
    console.error(error);
  }
};

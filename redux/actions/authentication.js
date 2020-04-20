import { instance } from "./instance";

import decode from "jwt-decode";

import { AsyncStorage } from "react-native";

import { SET_CURRENT_USER } from "./actionTypes";

const setCurrentUser = (token) => (dispatch) => {
  setAuthToken(token);
  dispatch({
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  });
};

const setAuthToken = async (token) => {
  if (token) {
    await AsyncStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    await AsyncStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

export const login = (userData, redirect) => async (dispatch) => {
  try {
    const response = await instance.post(`api/login`, userData);
    const token = response.data.access;
    dispatch(setCurrentUser(token));
    redirect();
  } catch (error) {
    console.error(error);
  }
};
export const register = (userData, redirect) => async (dispatch) => {
  try {
    const response = await instance.post(`api/register`, userData);
    const token = response.data.tokens.access;
    dispatch(setCurrentUser(token));
    redirect();
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => setCurrentUser();

export const checkForToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("token");

  if (token && decode(token).exp >= currentTimeInSeconds)
    dispatch(setCurrentUser(token));
  else {
    dispatch(setCurrentUser());
    return setAuthToken();
  }
};

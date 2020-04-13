import instance from "./instance";

import decode from "jwt-decode";

import { AsyncStorage } from "react-native";

import { SET_CURRENT_USER } from "../actions/actionTypes";

const setCurrentUser = (token) => {
  return {
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  };
};

const setAuthToken = (token) => {
  if (token) {
    AsyncStorage.setItems("token", token);
    instance.defaults.headers.Authorization = `jwt ${token}`;
  } else {
    AsyncStorage.removeItem("token");
    delete instance.defaults.headers.Authorization;
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const response = await instance.post(`login`, userData);
    const { token } = response.data;
    dispatch(setCurrentUser(token));
  } catch (error) {
    console.error("ERROR while logging in", error);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    await instance.post(`register`, userData);
    dispatch(login(userData));
  } catch (error) {
    console.error("ERROR while signing up", error);
  }
};

export const logout = () => setCurrentUser();

export const checkForToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("token");

  if (token && decode(token).exp >= currentTimeInSeconds)
    return dispatch(setCurrentUser(token));
  else return setAuthToken();
};

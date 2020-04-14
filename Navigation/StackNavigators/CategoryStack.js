import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import screenOptions from "../screenOptions";
import { CATEGORY } from "../screenNames";
import CategoryList from "../../Components/CategoryList/index";

const { Navigator, Screen } = createStackNavigator();

const CategoryStack = () => (
  <Navigator initialRouteName={CATEGORY} screenOptions={screenOptions}>
    <Screen
      name={CATEGORY}
      component={CategoryList}
      options={{ headerShown: false }}
    />
  </Navigator>
);

export default CategoryStack;

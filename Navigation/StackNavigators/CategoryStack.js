import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import screenOptions from "../screenOptions";
import { CATEGORY, ITEMS, ITEM } from "../screenNames";
import CategoryList from "../../Components/CategoryList/index";
import ItemsList from "../../Components/ItemsList/index";
import ItemDetail from "../../Components/ItemDetail/index";

const { Navigator, Screen } = createStackNavigator();

const CategoryStack = () => (
  <Navigator initialRouteName={CATEGORY} screenOptions={screenOptions}>
    <Screen name={CATEGORY} component={CategoryList} />
    <Screen name={ITEMS} component={ItemsList} />
    <Screen name={ITEM} component={ItemDetail} />
  </Navigator>
);

export default CategoryStack;

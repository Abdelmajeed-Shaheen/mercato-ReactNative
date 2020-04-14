import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER, CATEGORY } from "./screenNames";

//UserStack
import UserStack from "./StackNavigators/UserStack";
import Category from "../Components/CategoryList/CategoryItem";
import CategoryStack from "./StackNavigators/CategoryStack";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator>
      <Screen name={USER} component={UserStack} />
      <Screen name={CATEGORY} component={CategoryStack} />
    </Navigator>
  );
}
export default RootNavigator;

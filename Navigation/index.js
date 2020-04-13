import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER } from "./screenNames";

//UserStack
import UserStack from "./StackNavigators/UserStack";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator>
      <Screen name={USER} component={UserStack} />
    </Navigator>
  );
}
export default RootNavigator;

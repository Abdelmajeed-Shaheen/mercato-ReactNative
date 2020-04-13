import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SIGNUP } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator>
      <Screen name={SIGNUP} component={UserStack} />
    </Navigator>
  );
}
export default RootNavigator;

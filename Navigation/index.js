import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SIGNUP } from "./screenNames";
import Signup from "../Components/Authentication/Signup";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator initialRouteName={SIGNUP}>
      <Screen name={SIGNUP} component={Signup} />
    </Navigator>
  );
}
export default RootNavigator;

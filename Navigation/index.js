import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER } from "./screenNames";

//UserStack
import UserStack from "./StackNavigators/UserStack";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator>
      {/* I'm guessing you're planning for more screens? Will this still be a StackNav? */}
      <Screen name={USER} component={UserStack} />
    </Navigator>
  );
}
export default RootNavigator;

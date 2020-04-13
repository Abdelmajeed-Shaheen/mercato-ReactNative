import React from "react";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { SIGNUP } from "../screenNames";

//Components
import Signup from "../../Components/Authentication/Signup";

const { Navigator, Screen } = createStackNavigator();

const UserStack = () => (
  <Navigator>
    <Screen name={USER} component={UserStack} />
  </Navigator>
);

export default UserStack;

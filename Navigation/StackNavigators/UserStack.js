import React from "react";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { USER, SIGNUP } from "../screenNames";

//Components
import Signup from "../../Components/Authentication/Signup";

const { Navigator, Screen } = createStackNavigator();

const UserStack = () => (
  <Navigator>
    <Screen name={SIGNUP} component={Signup} options={{ headerShown: false }} />
  </Navigator>
);

export default UserStack;

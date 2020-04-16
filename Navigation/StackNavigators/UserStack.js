import React from "react";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { SIGNUP, LOGIN, PROFILE } from "../screenNames";
import screenOptions from "../screenOptions";

//Components
import Signup from "../../Components/Authentication/Signup";
import Login from "../../Components/Authentication/Login";

const { Navigator, Screen } = createStackNavigator();

const UserStack = () => (
  <Navigator initialRouteName={LOGIN}>
    <Screen name={SIGNUP} component={Signup} options={{ headerShown: false }} />
    <Screen name={LOGIN} component={Login} options={{ headerShown: false }} />
    <Screen
      name={PROFILE}
      component={Profile}
      options={{ headerShown: false }}
    />
  </Navigator>
);

export default UserStack;

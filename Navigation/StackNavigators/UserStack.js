import React from "react";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { SIGNUP, LOGIN, PROFILE } from "../screenNames";
import screenOptions from "../screenOptions";

//Components
import Signup from "../../Components/Authentication/Signup";
import Login from "../../Components/Authentication/Login";
import Profile from "../../Components/Profile/index";

import { connect } from "react-redux";

const { Navigator, Screen } = createStackNavigator();

const UserStack = ({ user }) => (
  <Navigator initialRouteName={PROFILE}>
    {user ? (
      <Screen
        name={PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
    ) : (
      <>
        <Screen
          name={LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen
          name={SIGNUP}
          component={Signup}
          options={{ headerShown: false }}
        />
      </>
    )}
  </Navigator>
);
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(UserStack);

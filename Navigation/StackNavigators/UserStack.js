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
  <Navigator screenOptions={screenOptions} initialRouteName={PROFILE}>
    {user ? (
      <Screen name={PROFILE} component={Profile} />
    ) : (
      <>
        <Screen name={LOGIN} component={Login} />
        <Screen name={SIGNUP} component={Signup} />
      </>
    )}
  </Navigator>
);
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(UserStack);

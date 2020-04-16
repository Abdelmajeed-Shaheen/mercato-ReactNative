import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { CART } from "../screenNames";
import ItemCart from "../../Components/ItemCart";

// Config
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function CartStack() {
  return (
    <Navigator initialRouteName={CART} screenOptions={screenOptions}>
      <Screen name={CART} component={ItemCart} />
    </Navigator>
  );
}

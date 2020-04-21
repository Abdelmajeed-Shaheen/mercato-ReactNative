import React from "react";
import { USER, CATEGORY, CART } from "./screenNames";
import screenOptions from "./screenOptions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";

//UserStack
import UserStack from "./StackNavigators/UserStack";
import CategoryStack from "./StackNavigators/CategoryStack";
import CartStack from "./StackNavigators/CartStack";

import CartIcon from "./CartIcon/index";

const { Navigator, Screen } = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName={CATEGORY}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "rgb(254, 241, 5)",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "rgb(70,144,69)",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";
          switch (route.name) {
            case USER:
              iconName = "account";
              break;

            case CATEGORY:
              iconName = "basket";
              break;

            default:
              return <CartIcon color={color} />;
          }
          return (
            <Icon
              name={iconName}
              type="MaterialCommunityIcons"
              style={{ color }}
            />
          );
        },
      })}
    >
      <Screen name={USER} component={UserStack} screenOptions={screenOptions} />
      <Screen
        name={CATEGORY}
        component={CategoryStack}
        screenOptions={screenOptions}
      />
      <Screen name={CART} component={CartStack} screenOptions={screenOptions} />
    </Navigator>
  );
}

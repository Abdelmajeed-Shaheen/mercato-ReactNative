import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER, CATEGORY } from "./screenNames";

//UserStack
import UserStack from "./StackNavigators/UserStack";
import Category from "../Components/CategoryList/CategoryItem";
import CategoryStack from "./StackNavigators/CategoryStack";

import CartIcon from "./CartIcon/index";

const { Navigator, Screen } = createStackNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";
          switch (route.name) {
            case USER:
              iconName = "account";
              break;

            case CATEGORY:
              iconName = "store";
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
      <Screen name={USER} component={UserStack} />
      <Screen name={CATEGORY} component={CategoryStack} />
    </Navigator>
  );
}

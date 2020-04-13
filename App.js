import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";

//Redux
import RootNavigator from "./Navigation/index";
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Navigation/index";

//Redux
import store from "./redux";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
}

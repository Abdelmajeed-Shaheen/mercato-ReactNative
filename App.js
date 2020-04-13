import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Navigation/index";

//Redux
import store from "./redux";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

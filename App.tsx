import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import BaseNavigator from "./src/navigation/BaseNavigator";
import toastConfig from './src/config/toastConfig';
import store, { persistor } from "./src/redux/store";


const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <BaseNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <Toast config={toastConfig} />
    </>
  )
}

export default App


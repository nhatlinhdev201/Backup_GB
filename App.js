import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Store } from "./src/Redux";
import { LogBox, View, Text } from "react-native";
import RootNavigator from "./src/Navigation/RootNavigation";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import Toast from "react-native-toast-message";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const App = () => {
  // useEffect(() => {
  //   LogBox.ignoreAllLogs(true);
  // }, []);
  return (
    <Provider store={Store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <BottomSheetModalProvider>
          <RootNavigator />
        </BottomSheetModalProvider>
        <Toast />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;

import { StatusBar } from "expo-status-bar";
import React from "react";

import ColoredButtonsScreen from "./src/screens/ColoredButtonsScreen";

export default function App() {
  return (
    <>
      <ColoredButtonsScreen />
      <StatusBar style="auto" />
    </>
  );
}

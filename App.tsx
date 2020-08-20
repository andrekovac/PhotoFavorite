import { StatusBar } from "expo-status-bar";
import React from "react";

import Pictorio from "./src/screens/Pictorio";

export default function App() {
  return (
    <>
      <Pictorio />
      <StatusBar style="auto" />
    </>
  );
}

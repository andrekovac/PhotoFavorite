import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";

const Pictorio = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#1c5cad" }}>
      <Header>Photos</Header>
    </SafeAreaView>
  );
};

export default Pictorio;

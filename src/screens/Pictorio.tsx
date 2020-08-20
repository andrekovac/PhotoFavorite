import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import PhotoList from "../components/PhotoList";

const Pictorio = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#1c5cad" }}>
      <Header>Photos</Header>
      <ListWrapper>
        <PhotoList />
      </ListWrapper>
    </SafeAreaView>
  );
};

const ListWrapper = styled.View`
  background-color: white;

  /* children */
  align-items: center;
`;

export default Pictorio;

import * as React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

import { ModalScreenProps } from "../types";
import PhotoDetail from "../components/PhotoDetail";

const ModalScreen = (props: ModalScreenProps) => (
  <Wrapper>
    <PhotoDetail {...props} />
    <Button onPress={() => props.navigation.goBack()} title="Dismiss" />
  </Wrapper>
);

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export default ModalScreen;

import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const PhotosScreen = () => {
  return (
    <Wrapper>
      <Text>Photos Screen</Text>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;

  /* children */
  justify-content: center;
  align-items: center;
`;

export default PhotosScreen;

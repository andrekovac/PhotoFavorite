import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

import { ModalScreenProps } from "../types";

const PhotoDetail = ({ route }: ModalScreenProps) => {
  const { item } = route.params;

  return (
    <Wrapper>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: item.download_url }}
      />
      <AuthorText>by {item.author}</AuthorText>
    </Wrapper>
  );
};

const AuthorText = styled.Text`
  padding: 20px 0;
  font-weight: 100;
  font-size: 26px;
`;

const Wrapper = styled.View`
  align-items: center;
`;

export default PhotoDetail;

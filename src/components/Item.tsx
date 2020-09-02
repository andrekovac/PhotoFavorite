import React from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

import Icon from "./Icon";
import useFavorites from "../hooks/redux/useFavorites";

export type ItemT = {
  id: string;
  author: string;
  download_url: string;
  isFavorite: boolean;
};

/**
 * A single image
 */
const Item = ({ id, author, download_url, isFavorite }: ItemT) => {
  const [_, toggleFavorite] = useFavorites();

  return (
    <Wrapper
      onPress={() => {
        Alert.alert("Photographer", author, [{ text: "OK" }], {
          cancelable: false,
        });
      }}
    >
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: download_url }}
      />
      <FavoriteButton onPress={() => toggleFavorite(id)}>
        <Icon name={`md-star${isFavorite ? "" : "-outline"}`} />
      </FavoriteButton>
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.TouchableOpacity`
  margin: 8px 16px;
`;

const Image = styled.Image`
  width: 300px;
  height: 300px;
`;

const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 10px;
`;

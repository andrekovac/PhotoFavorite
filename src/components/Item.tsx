import React from "react";
import { Alert, Image } from "react-native";
import styled from 'styled-components/native';

import useFavorites from "../hooks/redux/useFavorites";
import Icon from "./Icon";

export type ItemT = {
  id: string;
  author: string;
  download_url: string;
  isFavorite: boolean;
  onPress?: () => void;
}

/**
 * A single image
 */
const Item = ({ id, author, download_url, isFavorite, onPress }: ItemT) => {
  const [_, toggleFavorite] = useFavorites();

  const handleWrapperPress = () => {
    if (onPress) {
      onPress();
    } else {
      Alert.alert("Photographer", author, [{ text: "OK" }], { cancelable: false });
    }
  }

  return (
    <Wrapper
      onPress={handleWrapperPress}
    >
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: download_url }}
      />
      <FavoriteButton
        onPress={() => toggleFavorite(id)}
      >
        <Icon name={`md-star${isFavorite ? "" : "-outline"}`} />
      </FavoriteButton>
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.TouchableOpacity`
  margin: 8px 16px;
`;

const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 10px;
`;
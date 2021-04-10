import React, { useCallback } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

import useFavorites from "../hooks/redux/useFavorites";
import Icon from "./Icon";
import SwipeableElement from "./SwipeableElement";

const SIZE = 300;

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
  const [_, updateFavorite] = useFavorites();
  const handleSwipeEnd = (direction: "left" | "right") => {
    updateFavorite(id, direction === "right");
  };

  return (
    <SwipeableElement
      threshold={SIZE / 2}
      onSwipeEndOverThreshold={handleSwipeEnd}
    >
      <Wrapper
        onPress={() => {
          Alert.alert("Photographer", author, [{ text: "OK" }], {
            cancelable: false,
          });
        }}
      >
        <Image source={{ uri: download_url }} />
        <FavoriteButton onPress={() => updateFavorite(id, !isFavorite)}>
          <Icon name={isFavorite ? "md-star" : "md-star-outline"} />
        </FavoriteButton>
      </Wrapper>
    </SwipeableElement>
  );
};

export default Item;

const Wrapper = styled.TouchableOpacity`
  margin: 8px 16px;
`;

const Image = styled.Image`
  width: ${SIZE}px;
  height: ${SIZE}px;
`;

const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 10px;
`;

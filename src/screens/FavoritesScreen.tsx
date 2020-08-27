import React, { FunctionComponent, useContext } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

import PhotoList from "../components/PhotoList";
import { ItemT } from "../components/Item";

import { PhotosContext } from "../context";

/**
 * Display picked favorites
 */
const FavoritesScreen: FunctionComponent<ItemT> = () => {
  const { photos, isLoading } = useContext(PhotosContext);

  return (
    <ListWrapper>
      {photos.length > 0 ? (
        <PhotoList
          isLoading={isLoading}
          photos={photos.filter((photo) => photo.isFavorite)}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>No favorites yet</Text>
        </View>
      )}
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  /* children */
  align-items: center;
`;

export default FavoritesScreen;

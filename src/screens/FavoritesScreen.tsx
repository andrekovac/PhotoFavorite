import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import PhotoList from "../components/PhotoList";

import { ItemT } from "../components/Item";
import { StoreT } from "../store/reducer";

/**
 * Fetch and display random photos
 */
const FavoritesScreen: FunctionComponent<ItemT> = () => {
  const favorites = useSelector<StoreT, ReadonlyArray<ItemT>>(
    state => state.photos.data.filter(photo => photo.isFavorite)
  );

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
          <PhotoList data={favorites} />
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>No favorites yet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
});

export default FavoritesScreen;

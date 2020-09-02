import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

import PhotoList from "../components/PhotoList";
import { ItemT } from "../components/Item";

/**
 * Fetch and display random photos
 */
const FavoritesScreen: FunctionComponent<ItemT> = () => {
  const favorites: ReadonlyArray<ItemT> = [];

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

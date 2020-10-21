import React, { FunctionComponent } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Item, { ItemT } from "./Item";
import { PhotosDataT } from "../store/slices/photos";
import { RootStackParamList } from "../types";

interface PhotoListPropsT {
  data: PhotosDataT;
  isLoading?: boolean;
  navigation?: NavigationProp<RootStackParamList>;
}

const PhotoList: FunctionComponent<PhotoListPropsT> = ({
  data,
  isLoading = false,
  navigation,
}) => {
  const handlePress = (item: ItemT) => {
    // Use of non-null assertion operator
    navigation!.navigate("Modal", {
      item,
    });
  };

  const renderItem: FunctionComponent<{ item: ItemT }> = ({ item }) => (
    <Item
      id={item.id}
      download_url={item.download_url}
      author={item.author}
      isFavorite={item.isFavorite}
      onPress={navigation && (() => handlePress(item))}
    />
  );

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
    />
  );
};

export default PhotoList;

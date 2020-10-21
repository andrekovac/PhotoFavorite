import React, { FunctionComponent } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import Item, { ItemT } from "./Item";
import { PhotosDataT } from "../store/slices/photos";

interface PhotoListPropsT {
  data: PhotosDataT;
  isLoading?: boolean;
  onItemPress?: (item: ItemT) => void;
}

const PhotoList: FunctionComponent<PhotoListPropsT> = ({
  data,
  isLoading = false,
  onItemPress,
}) => {
  const renderItem: FunctionComponent<{ item: ItemT }> = ({ item }) => (
    <Item
      id={item.id}
      download_url={item.download_url}
      author={item.author}
      isFavorite={item.isFavorite}
      onPress={onItemPress && (() => onItemPress(item))}
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

import React, { FunctionComponent } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import Item, { ItemT } from "./Item";
import { PhotosDataT } from "../store/slices/photos";

interface PhotoListPropsT {
  data: PhotosDataT;
  isLoading?: boolean;
  onRefresh: () => void;
  refreshing: boolean;
}

const PhotoList: FunctionComponent<PhotoListPropsT> = ({
  data,
  isLoading = false,
  onRefresh,
  refreshing,
}) => {
  const renderItem: FunctionComponent<{ item: ItemT }> = ({ item }) => (
    <Item
      id={item.id}
      download_url={item.download_url}
      author={item.author}
      isFavorite={item.isFavorite}
    />
  );

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default PhotoList;

import React, { FunctionComponent } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import Item, { ItemT } from "./Item";

type PhotoListPropsT = {
  isLoading: boolean;
  photos: Array<ItemT>;
}

const PhotoList: FunctionComponent<PhotoListPropsT> = ({ isLoading, photos }) => {
  const renderItem = ({ item }: { item: ItemT }) => (
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
      data={photos}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
    />
  );
};

export default PhotoList;

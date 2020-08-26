import React, { FunctionComponent } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import Item, { ItemT } from "./Item";
import useDataApi from "../hooks/useDataApi";

const PhotoList = () => {
  const [{ data, isLoading }] = useDataApi(
    [],
    "https://picsum.photos/v2/list?page=3&limit=100"
  );

  const renderItem: FunctionComponent<{ item: ItemT }> = ({ item }) => (
    <Item
      id={item.id}
      download_url={item.download_url}
      author={item.author}
      isFavorite={false}
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

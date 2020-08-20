import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, FlatList } from "react-native";

type ItemT = {
  id: string;
  author: string;
  download_url: string;
};

const Item = ({ download_url }: Pick<ItemT, "download_url">) => (
  <ItemImage source={{ uri: download_url }} />
);

const PhotoList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=3&limit=100"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: ItemT }) => (
    <Item download_url={item.download_url} />
  );

  return isLoading ? <ActivityIndicator/> : (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
    />
  );
};

const ItemImage = styled.Image`
  margin: 5px 0;
  height: 300px;
  width: 300px;
`;

export default PhotoList;

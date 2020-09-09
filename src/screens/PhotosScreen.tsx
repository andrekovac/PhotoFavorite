import React, { useEffect, useState, FC } from "react";
import styled from "styled-components/native";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";

type ItemT = {
  id: string;
  author: string;
  download_url: string;
};

const Item = ({ download_url, author }: Omit<ItemT, "id">) => (
  <TouchableOpacity
    onPress={() => {
      Alert.alert("Artist", author, [{ text: "OK" }], { cancelable: false });
    }}
  >
    <ItemImage source={{ uri: download_url }} />
  </TouchableOpacity>
);

const PhotosScreen = () => {
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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: ItemT }) => (
    <Item download_url={item.download_url} author={item.author} />
  );

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <Wrapper>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;

  /* children */
  justify-content: center;
  align-items: center;
`;

const ItemImage = styled.Image`
  margin: 5px 0;
  height: 300px;
  width: 300px;
`;

export default PhotosScreen;

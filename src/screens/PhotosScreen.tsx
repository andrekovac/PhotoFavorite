import React from "react";
import styled from "styled-components/native";
import { FlatList, ListRenderItem } from "react-native";
import { useLayout } from "@react-native-community/hooks";

type ItemT = {
  id: string;
  title: string;
};

const Item = ({ title }: { title: string }) => {
  const { onLayout, ...layout } = useLayout();

  // Log Layout values
  // console.log("layout: ", layout);

  return (
    <ItemWrapper onLayout={onLayout} style={{ height: layout.width }}>
      <ItemText>{title}</ItemText>
    </ItemWrapper>
  );
};

const PhotosScreen = () => {
  const placeholderList: ItemT[] = Array(100)
    .fill(0)
    .map((_, i) => ({ id: String(i + 1), title: `Title ${i + 1}` }));

  const renderItem: ListRenderItem<ItemT> = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <Wrapper>
      <FlatList
        style={{ width: "100%" }}
        data={placeholderList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  padding: 0 20px;

  /* children */
  justify-content: center;
  align-items: center;
`;

const ItemWrapper = styled.View`
  background-color: #3f87f5;
  margin: 5px 0;

  /* children */
  justify-content: center;
  align-items: center;
`;

const ItemText = styled.Text`
  color: white;
  font-size: 22px;
`;

export default PhotosScreen;

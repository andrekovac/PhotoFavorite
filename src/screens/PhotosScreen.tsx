import React from "react";
import styled from "styled-components/native";

import PhotoList from "../components/PhotoList";
import useDataApi from "../hooks/useDataApi";

const PhotosScreen = () => {
  const [{ data, isLoading }] = useDataApi(
    [],
    "https://picsum.photos/v2/list?page=3&limit=100"
  );

  return (
    <>
      <ListWrapper>
        <PhotoList data={data} isLoading={isLoading} />
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.View`
  background-color: white;

  /* children */
  align-items: center;
`;

export default PhotosScreen;

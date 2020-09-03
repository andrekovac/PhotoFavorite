import React from "react";
import styled from "styled-components/native";

import usePhotos from '../hooks/redux/usePhotos';
import PhotoList from "../components/PhotoList";

const PhotosScreen = () => {
  const { data, isLoading } = usePhotos();

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

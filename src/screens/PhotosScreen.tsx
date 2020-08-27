import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";

import PhotoList from "../components/PhotoList";

import { PhotosContext } from "../context";

/**
 * Display all fetched photos
 */
const PhotosScreen = () => {
  const { photos, isLoading } = useContext(PhotosContext);

  return (
    <>
      <ListWrapper>
        <PhotoList isLoading={isLoading} photos={photos} />
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.View`
  /* children */
  align-items: center;
`;

export default PhotosScreen;

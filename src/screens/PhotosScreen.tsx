import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";

import PhotoList from "../components/PhotoList";

import { PhotosContext } from "../context";

/**
 * Display all fetched photos
 */
const PhotosScreen = () => {
  const { photos, fetchPhotos, isLoading } = useContext(PhotosContext);

  useEffect(() => {
    fetchPhotos("https://picsum.photos/v2/list?page=3&limit=100");
  }, []);

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

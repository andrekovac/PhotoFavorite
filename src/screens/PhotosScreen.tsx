import React from "react";
import styled from "styled-components/native";

import PhotoList from "../components/PhotoList";

const PhotosScreen = () => {
  return (
    <>
      <ListWrapper>
        <PhotoList />
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

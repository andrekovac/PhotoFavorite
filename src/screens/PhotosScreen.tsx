import React from "react";
import styled from "styled-components/native";

import usePhotos from "../hooks/redux/usePhotos";
import PhotoList from "../components/PhotoList";

import { ModalScreenProps } from "../types";

const PhotosScreen = ({ navigation }: ModalScreenProps) => {
  const { data, isLoading } = usePhotos();

  return (
    <ListWrapper>
      <PhotoList
        data={data}
        isLoading={isLoading}
        navigation={navigation}
      />
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  background-color: white;

  /* children */
  align-items: center;
`;

export default PhotosScreen;

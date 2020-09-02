import React, { useEffect, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import { fetchPhotosStart, photosSelector, PhotosT } from "../store/slices/photos";
import { RootStateT } from "../store/slices";

import PhotoList from "../components/PhotoList";

const PhotosScreen = () => {
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(fetchPhotosStart());
  }, []);

  const { data, isLoading } = useSelector<RootStateT, PhotosT>(photosSelector);

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

import React, { useEffect, Dispatch } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";

import { fetchPhotos } from "../store/actionCreators/photos";
import { ThunkResult } from "../store/actionCreators";
import { StoreT } from "../store/reducer";
import { PhotosT } from "../store/reducer/photos";

import PhotoList from "../components/PhotoList";

const PhotosScreen = () => {
  const dispatch = useDispatch<Dispatch<ThunkResult>>();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const photos = useSelector<StoreT, PhotosT>(
    state => state.photos
  );

  return (
    <>
      <ListWrapper>
        <PhotoList data={photos.data} isLoading={photos.isLoading} />
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

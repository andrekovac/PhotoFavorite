import React, { useEffect, Dispatch } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";

import { fetchPhotos } from "../store/actionCreators/photos";
import { ThunkResult } from "../store/actionCreators";
import { StoreT } from "../store/reducer";
import { selectPhotosByCounterValue } from '../store/selectors';

import PhotoList from "../components/PhotoList";
import { ItemT } from "../components/Item";

const PhotosScreen = () => {
  const dispatch = useDispatch<Dispatch<ThunkResult>>();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const isLoading = useSelector<StoreT, boolean>(
    state => !!state.photos.isLoading
  );

  const data = useSelector<StoreT, ReadonlyArray<ItemT>>(
    selectPhotosByCounterValue
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

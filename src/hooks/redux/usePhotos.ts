import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import { RootStateT } from "../../store/slices/index";
import {
  photosSelector,
  fetchPhotos,
  PhotosDataT,
  PhotosT,
} from "../../store/slices/photos";

const usePhotos = (): [{
  data: PhotosDataT;
  isLoading: boolean;
}, () => void] => {
  const dispatch = useDispatch<Dispatch<any>>();
  const { data, isLoading } = useSelector<RootStateT, PhotosT>(photosSelector);

  const getPhotos = () => {
    dispatch(fetchPhotos());
  }

  return [{ data, isLoading }, getPhotos];
};

export default usePhotos;

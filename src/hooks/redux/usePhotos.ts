import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import { RootStateT } from "../../store/slices/index";
import {
  photosSelector,
  fetchPhotos,
  addPhoto,
  PhotosDataT,
  PhotosT,
} from "../../store/slices/photos";
import { ItemT } from "../../components/Item";

type UsePhotosTuple = [
  {
    data: PhotosDataT;
    isLoading: boolean;
  },
  () => void,
  (photo: ItemT) => void
];

const usePhotos = (): UsePhotosTuple => {
  const dispatch = useDispatch<Dispatch<any>>();
  const { data, isLoading } = useSelector<RootStateT, PhotosT>(photosSelector);

  const getPhotos = () => {
    dispatch(fetchPhotos());
  };

  const addPhotoToPhotosList = (photo: ItemT) => dispatch(addPhoto(photo));

  return [{ data, isLoading }, getPhotos, addPhotoToPhotosList];
};

export default usePhotos;

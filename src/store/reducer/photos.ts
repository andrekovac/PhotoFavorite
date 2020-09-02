import { ItemT } from "../../components/Item";

import { PhotosActionT, FavoriteActionT } from "../actionCreators/photos";
import {
  PHOTOS_FETCH_START,
  PHOTOS_FETCH_ERROR,
  PHOTOS_FETCH_SUCCESS,
} from "../actionTypes/photos";

export type PhotosT = {
  data: ReadonlyArray<ItemT>;
  error?: Error;
  isLoading?: boolean;
};

const defaultState: PhotosT = {
  data: [],
  error: undefined,
  isLoading: undefined,
};

const photosReducer = (
  state = defaultState,
  action: PhotosActionT
) => {
  switch (action.type) {
    case PHOTOS_FETCH_START:
      state.isLoading = true;
      break;
    case PHOTOS_FETCH_SUCCESS:
      state.data = action.photos.map((photo) => ({
        ...photo,
        isFavorite: false,
      }));
      state.isLoading = false;
      break;
    case PHOTOS_FETCH_ERROR:
      state.error = action.error;
      break;
  }
  return state;
};

export default photosReducer;

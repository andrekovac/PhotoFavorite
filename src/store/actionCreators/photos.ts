import { ItemT } from "../../components/Item";

import {
  FAVORITE_TOGGLE,
  PHOTOS_FETCH_ERROR,
  PHOTOS_FETCH_START,
  PHOTOS_FETCH_SUCCESS,
} from "../actionTypes/photos";
import { ThunkResult } from "./index";

import { fetchPhotoList } from "../../api/photos";

// ------
// Photos
// ------

export const fetchPhotosStart = () => {
  return {
    type: PHOTOS_FETCH_START,
  };
};

export type PhotosActionT =
  | {
      type: typeof PHOTOS_FETCH_SUCCESS;
      photos: ReadonlyArray<ItemT>;
    }
  | {
      type: typeof PHOTOS_FETCH_START;
    }
  | {
      type: typeof PHOTOS_FETCH_ERROR;
      error: Error;
    };

export const fetchPhotosSuccess = (
  photos: ReadonlyArray<ItemT>
): PhotosActionT => {
  return {
    type: PHOTOS_FETCH_SUCCESS,
    photos,
  };
};

export const fetchPhotosError = (error: Error) => {
  return {
    type: PHOTOS_FETCH_ERROR,
    error,
  };
};

export const fetchPhotos = (): ThunkResult => {
  return async (dispatch) => {
    dispatch(fetchPhotosStart());
    try {
      const photos = await fetchPhotoList(
        "https://picsum.photos/v2/list?page=3&limit=100"
      );
      dispatch(fetchPhotosSuccess(photos));
    } catch (error) {
      dispatch(fetchPhotosError(error));
    }
  };
};

// ---------
// Favorites
// ---------

export type FavoriteActionT = {
  type: typeof FAVORITE_TOGGLE;
  id: string;
};

export const toggleFavorite = (id: string): FavoriteActionT => {
  return {
    type: FAVORITE_TOGGLE,
    id,
  };
};

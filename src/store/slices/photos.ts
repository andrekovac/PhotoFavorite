import {
  createSelector,
  createSlice,
  PayloadAction,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";

import { RootStateT } from "./index";
import { ItemT } from "../../components/Item";

export type PhotosDataT = ReadonlyArray<ItemT>;
export type PhotosT = {
  data: PhotosDataT;
  error?: Error;
  isLoading: boolean;
};
export type FetchPhotosSuccessAction = PayloadAction<PhotosDataT>;
export type ToggleFavoritesAction = PayloadAction<string>;
export type PhotosThunkAction = ThunkAction<
  Promise<void>,
  RootStateT,
  undefined,
  FetchPhotosSuccessAction
>;
export type PhotosThunkDispatch = ThunkDispatch<
  RootStateT,
  undefined,
  FetchPhotosSuccessAction | PayloadAction<Error | undefined>
>;

const initialState: PhotosT = {
  data: [],
  error: undefined,
  isLoading: false,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    fetchPhotosSuccess: (state, { payload }: FetchPhotosSuccessAction) => {
      state.data = payload.map((photo) => ({
        ...photo,
        isFavorite: false,
      }));
      state.isLoading = false;
    },
    fetchPhotosStart: (state) => {
      state.isLoading = true;
    },
    fetchPhotosError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    addPhoto: (state, { payload }) => {
      state.data = [payload, ...state.data];
    },
    toggleFavorite: (state, { payload }: ToggleFavoritesAction) => {
      state.data = state.data.map((photo) =>
        photo.id === payload
          ? {
              ...photo,
              isFavorite: !photo.isFavorite,
            }
          : photo
      );
    },
  },
});

// Two actions generated from the slice
export const {
  fetchPhotosSuccess,
  toggleFavorite,
  fetchPhotosStart,
  fetchPhotosError,
  addPhoto,
} = photosSlice.actions;

const fetchData = async (): Promise<PhotosDataT> => {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=3&limit=100"
  );
  return response.json();
};

export const fetchPhotos = (): PhotosThunkAction => {
  return async (dispatch: PhotosThunkDispatch, getState) => {
    try {
      const {
        photos: { data },
      } = getState();

      if (data !== initialState.data) {
        // Don't fetch data if it is already persisted in the Redux store.
        return;
      }

      dispatch(fetchPhotosStart());
      const photos = await fetchData();
      dispatch(fetchPhotosSuccess(photos));
    } catch (error) {
      console.error("Error fetching photos", error);
      dispatch(fetchPhotosError(error));
    }
  };
};

// Photos selector
export const photosSelector = (state: RootStateT): PhotosT => state.photos;

// Favorites selector which uses reselect (where selector composition is supported)
export const favoritesSelector = createSelector([photosSelector], (photos) => {
  return photos.data.filter((photo) => photo.isFavorite);
});

// The reducer
export default photosSlice.reducer;

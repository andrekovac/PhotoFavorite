import { useDispatch, useSelector } from "react-redux";

import { RootStateT } from "../../store/slices/index";
import {
  favoritesSelector,
  updateFavorite as updateFavoriteAction,
  PhotosDataT,
} from "../../store/slices/photos";

const useFavorites = (): [
  PhotosDataT,
  (id: string, isFavorite: boolean) => void
] => {
  const dispatch = useDispatch();

  const favorites = useSelector<RootStateT, PhotosDataT>(favoritesSelector);
  const updateFavorite = (id: string, isFavorite: boolean) => {
    dispatch(updateFavoriteAction({ id, isFavorite }));
  };

  return [favorites, updateFavorite];
};

export default useFavorites;

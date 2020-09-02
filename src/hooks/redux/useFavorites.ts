import { useDispatch, useSelector } from "react-redux";

import { RootStateT } from "../../store/slices/index";
import {
  favoritesSelector,
  toggleFavorite as toggleFavoriteAction,
  ToggleFavoritesAction,
  PhotosDataT,
} from "../../store/slices/photos";

const useFavorites = (): [
  PhotosDataT,
  (id: string) => ToggleFavoritesAction
] => {
  const dispatch = useDispatch();

  const favorites = useSelector<RootStateT, PhotosDataT>(favoritesSelector);
  const toggleFavorite = (id: string) => dispatch(toggleFavoriteAction(id));

  return [favorites, toggleFavorite];
};

export default useFavorites;

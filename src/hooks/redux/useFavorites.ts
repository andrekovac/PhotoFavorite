import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemT } from "../../components/Item";

import { StoreT } from "../../store/reducer";
import { toggleFavorite, FavoriteActionT } from "../../store/actionCreators/photos";

/**
 * Fetches favorites from internal photos state
 *
 * This hook encapsulates the state management library from the screens and components which use it.
 * Hence, the underlying state management mechanism may be swapped.
 *
 * It's declarative API provides the data and a setter. There's no more burden on the side of the developer to call state-management library related functions.
 */
const useFavorites = () => {
  const dispatch = useDispatch<Dispatch<FavoriteActionT>>();

  const favorites = useSelector<StoreT, ReadonlyArray<ItemT>>(
    state => state.photos.data.filter(photo => photo.isFavorite)
  );

  const setToggleFavorite = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  // Note: `as const` is freezing the type with a const assertion.
  // See https://fettblog.eu/typescript-react-typeing-custom-hooks/#option-2%3A-as-const for more information
  return [favorites, setToggleFavorite] as const;
};

export default useFavorites;

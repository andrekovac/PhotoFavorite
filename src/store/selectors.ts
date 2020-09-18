import { RootStateT } from "./slices";

export const selectFavoritesCount = (state: RootStateT) => {
    const favorites = state.photos.data.filter(photo => photo.isFavorite);

    return favorites.length;
}

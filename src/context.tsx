import React from "react";

import { ItemT } from "./components/Item";

export const CounterContext = React.createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

type PhotosContextProps = {
  fetchedData: ReadonlyArray<ItemT>;
  isLoading: boolean;
  isError: boolean;
  fetchPhotos: (url: string) => void;
  photos: Array<ItemT>;
  toggleFavorite: (id: string) => void;
};

/**
 * Context with default values
 */
export const PhotosContext = React.createContext<PhotosContextProps>({
  fetchedData: [],
  isLoading: false,
  isError: false,
  fetchPhotos: _url => {},
  photos: [],
  toggleFavorite: _id => {},
});

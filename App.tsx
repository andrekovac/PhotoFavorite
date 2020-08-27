import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

import { PhotosContext } from "./src/context";
import useDataApi from "./src/hooks/useDataApi";
import { ItemT } from "./src/components/Item";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    [],
    "https://picsum.photos/v2/list?page=3&limit=100"
  );
  const [photos, setPhotos] = useState<Array<ItemT>>([]);

  useEffect(() => {
    setPhotos(data.map((photo) => ({ ...photo, isFavorite: false })));
  }, [data]);

  const photosContextValue = {
    fetchedData: data,
    isLoading: isLoading,
    isError: isError,
    fetchPhotos: doFetch,
    photos: photos,
    toggleFavorite: (id: string) => {
      setPhotos((prevPhotos) => {
        if (prevPhotos.length > 0) {
          return prevPhotos.map((photo) =>
            photo.id === id
              ? { ...photo, isFavorite: !photo.isFavorite }
              : photo
          );
        }
        return [];
      });
    },
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PhotosContext.Provider
          value={photosContextValue}
        >
          <Navigation colorScheme={colorScheme} />
        </PhotosContext.Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

import { StackScreenProps } from "@react-navigation/stack";

import { ItemT } from "./components/Item";

export type RootStackParamList = {
  Root: undefined;
  Modal: { item: ItemT };
  NotFound: undefined;
};

export type BottomTabParamList = {
  Photos: undefined;
  Favorites: undefined;
  Counter: undefined;
};

export type TabOneParamList = {
  PhotosScreen: undefined;
};

export type TabTwoParamList = {
  FavoritesScreen: undefined;
};

export type ModalScreenProps = StackScreenProps<RootStackParamList, "Modal">;

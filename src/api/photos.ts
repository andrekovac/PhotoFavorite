import { ItemT } from "./components/Pictorio/Item";

export const fetchPhotos = async (): Promise<ReadonlyArray<ItemT>> => {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=3&limit=100"
  );
  return response.json();
};

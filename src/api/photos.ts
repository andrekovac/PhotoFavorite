import { ItemT } from "../components/Item";

export const fetchPhotoList = async (
  url: string
): Promise<ReadonlyArray<ItemT>> => {
  const response = await fetch(url);
  return response.json();
};

import { StoreT } from "./reducer";

export const selectPhotosByCounterValue = ({ count, photos }: StoreT) => {
    return photos.data.slice(0, count);
};

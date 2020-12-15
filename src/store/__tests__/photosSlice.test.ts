import photos, {
  initialState,
  fetchPhotosSuccess,
  fetchPhotosError,
  fetchPhotosStart,
} from "../slices/photos";

const dataMock = [
  {
    id: "117",
    author: "Daniel Ebersole",
    width: 1544,
    height: 1024,
    url: "https://unsplash.com/photos/Q14J2k8VE3U",
    download_url: "https://picsum.photos/id/117/1544/1024",
  },
  {
    id: "118",
    author: "Rick Waalders",
    width: 1500,
    height: 1000,
    url: "https://unsplash.com/photos/d-Cr8MEW5Uc",
    download_url: "https://picsum.photos/id/118/1500/1000",
  },
];

describe("Photos reducer", () => {
  it("should return the initial state", () => {
    expect(photos(undefined, { type: undefined })).toEqual(initialState);
  });

  it("should handle fetchPhotosSuccess action", () => {
    expect(
      photos(initialState, {
        type: fetchPhotosSuccess.type,
        payload: dataMock,
      })
    ).toEqual({
      data: dataMock.map(photo => ({
          ...photo,
          isFavorite: false,
      })),
      isLoading: false,
      error: undefined,
    });
  });

  it("should handle fetchPhotosError action", () => {
    const error = new Error("This is an error");

    expect(
      photos(initialState, {
        type: fetchPhotosError.type,
        payload: error,
      })
    ).toEqual({
      data: [],
      isLoading: false,
      error,
    });
  });

  it("should handle fetchPhotosStart action", () => {
    expect(
      photos(initialState, {
        type: fetchPhotosStart.type,
      })
    ).toEqual({
      data: [],
      isLoading: true,
      error: undefined,
    });
  });
});

import React, { useState, useEffect, useRef } from "react";
import { Text } from "react-native";
import { Camera, CameraCapturedPicture } from "expo-camera";
import * as ImageManipulator from "expo-image-manipulator";
import styled from "styled-components/native";

import usePhotos from "../hooks/redux/usePhotos";
import CameraPreview from "../components/CameraPreview";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<CameraCapturedPicture>();

  const [, , addPhoto] = usePhotos();

  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    requestPermission();
  }, []);

  if (hasPermission === null) {
    return <Text>No camera permission granted.</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }

  const handlePhotoTake = async () => {
    if (cameraRef.current) {
      try {
        let photo = await cameraRef?.current?.takePictureAsync();
        if (photo) {
          setPreviewVisible(true);
          setCapturedImage(photo);
        }
        return photo;
      } catch (error) {
        console.error("handlePhotoTake error", error);
      }
    }
  };

  return previewVisible && capturedImage ? (
    <CameraPreview
      photo={capturedImage}
      onRemove={() => setPreviewVisible(false)}
      onSave={async () => {
        const resizedImage = await ImageManipulator.manipulateAsync(
          capturedImage.uri,
          [{ resize: { width: 300, height: 300 } }],
          { compress: 0.5 }
        );
        addPhoto({
          id: Date.now().toString(),
          author: "Me",
          download_url: resizedImage.uri,
          isFavorite: false,
        });
      }}
    />
  ) : (
    <Container>
      <Camera
        style={{ flex: 1, alignItems: "center" }}
        type={type}
        ref={cameraRef}
      >
        <CameraInner />
        <TakeButton onPress={handlePhotoTake} />
      </Camera>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const CameraInner = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
`;

const TakeButton = styled.TouchableOpacity`
  background-color: #bbc976;
  border: 5px solid #404330;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 20px;
`;

export default CameraScreen;

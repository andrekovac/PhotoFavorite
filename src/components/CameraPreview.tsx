import { CameraCapturedPicture } from "expo-camera";
import React, { FC } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

type CameraPreview = {
  photo: CameraCapturedPicture;
  onRemove: () => void;
  onSave: () => void;
};

const CameraPreview: FC<CameraPreview> = ({ photo, onRemove, onSave }) => {
  return (
    <Wrapper>
      <CapturedImage source={{ uri: photo && photo.uri }} />
      <Button title="Take another" onPress={onRemove} />
      <Button title="Save" onPress={onSave} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: transparent;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const CapturedImage = styled.ImageBackground`
  flex: 1;
`;

export default CameraPreview;

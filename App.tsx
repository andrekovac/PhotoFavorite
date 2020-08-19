import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import React from "react";

import leapYearText from './src/util/leapYear';

type Props = {
  backgroundColor?: string;
  title?: string;
};
const Box = ({ backgroundColor = "red", title = "No title" }: Props) => (
  <Wrapper
    backgroundColor={backgroundColor}
    onPress={() => console.log(`Box with title "${title}" was tapped.`)}
  >
    <Title>{title}</Title>
  </Wrapper>
);

export default function App() {
  return (
    <Container>
      <Box backgroundColor={"#ee1d1d"} title={leapYearText(2020)} />
      <Box backgroundColor={"#309930"} title={"two"} />
      <Box backgroundColor={"#3d3dcc"} title={"three"} />
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

type WrapperProps = { backgroundColor?: string };
const Wrapper = styled.TouchableOpacity<WrapperProps>`
  background-color: ${(props) => props.backgroundColor || "blue"};
  border-radius: 5px;
  margin: 10px;
  flex: 0.25;

  /* children */
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

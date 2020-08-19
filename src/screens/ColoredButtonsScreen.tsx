import React from "react";
import styled from "styled-components/native";

import leapYearText from "../util/leapYear";
import Box from "../components/Box";

const ColoredButtonsScreen = () => {
  return (
    <Container>
      <Box backgroundColor={"#ee1d1d"} title={leapYearText(2020)} />
      <Box backgroundColor={"#309930"} title={"two"} />
      <Box backgroundColor={"#3d3dcc"} title={"three"} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default ColoredButtonsScreen;

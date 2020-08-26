import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const CounterScreen = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev: number) => prev + 1);

  return (
    <Container>
      <ClickedText>Clicked {count} times</ClickedText>
      <Button onPress={increment}>
        <Text>Increment</Text>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #74e685;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const ClickedText = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default CounterScreen;

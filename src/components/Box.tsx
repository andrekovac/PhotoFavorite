import React from "react";
import styled from "styled-components/native";

type Props = {
  backgroundColor?: string,
  title?: string,
}
const Box = ({ backgroundColor = "red", title = "No title" }: Props) => (
  <Wrapper
    backgroundColor={backgroundColor}
    onPress={() => console.log(`Box with title "${title}" was tapped.`)}
  >
    <Title>{title}</Title>
  </Wrapper>
);

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


export default Box;

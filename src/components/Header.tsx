import React from "react";
import styled from "styled-components/native";

const Header = ({ children }: { children: React.ReactChild }) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  align-items: center;
  background-color: #1c5cad;
  padding: 10px 0;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export default Header;

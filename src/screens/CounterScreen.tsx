import React, { useState, FunctionComponent } from "react";
import styled from "styled-components/native";
import { StyleProvider, Badge, Button, Text } from "native-base";
import { Row, Grid } from "react-native-easy-grid";

// @ts-ignore
import getTheme from "../native-base-theme/components";
// @ts-ignore
import material from "../native-base-theme/variables/material";

const CounterButton: FunctionComponent<{ onPress: () => void }> = ({
  onPress,
  children,
}) => (
  <CenteredHorizontally>
    <Button rounded onPress={onPress}>
      <Text>{children}</Text>
    </Button>
  </CenteredHorizontally>
);

const CounterScreen = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev: number) => prev + 1);

  return (
    <StyleProvider style={getTheme(material)}>
      <Grid>
        <Row size={25}>
          <Wrapper row>
            <Text>{`Clicked `}</Text>
            <CenteredHorizontally>
              <Badge primary>
                <Text>{count}</Text>
              </Badge>
            </CenteredHorizontally>
            <Text>{` times`}</Text>
          </Wrapper>
        </Row>
        <Row size={75}>
          <Wrapper>
            <CounterButton onPress={increment}>Increment</CounterButton>
          </Wrapper>
        </Row>
      </Grid>
    </StyleProvider>
  );
};

/**
 * This Wrapper around `Button` and `Badge` is necessary to align it horizontally
 */
const CenteredHorizontally = styled.View`
  align-items: center;
`;

const Wrapper = styled.View<{ row?: boolean }>`
  flex: 1;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: center;
  justify-content: center;
`;

export default CounterScreen;

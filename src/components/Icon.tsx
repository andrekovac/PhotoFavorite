import React, { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

type IconPropsT = {
  name: string;
};

const Icon: FunctionComponent<IconPropsT> = ({
  name
}: IconPropsT) => {
  const theme = useColorScheme();

  return <Ionicons name={name} size={30} color={Colors[theme].background} />;
};

export default Icon;

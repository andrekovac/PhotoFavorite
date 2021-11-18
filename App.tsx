import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

import { CounterContext } from "./src/context/counterContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [count, setCount] = useState(0);

  const counter = {
    count: count,
    increment: () => {
      setCount((prevCount) => prevCount + 1);
    },
    decrement: () => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    },
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CounterContext.Provider value={counter}>
          <Navigation colorScheme={colorScheme} />
        </CounterContext.Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

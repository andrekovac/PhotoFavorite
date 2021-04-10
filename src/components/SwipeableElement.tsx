import React from "react";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const springConfig = {
  // check https://reactnative.dev/docs/animated#spring
  damping: 15,
  tension: 40,
  mass: 1,
  stiffness: 90,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
  overshootClamping: false,
};

const log = console.log;

interface SwipeableElementT {
  children: React.ReactElement;
  threshold: number;
  onSwipeEndOverThreshold: (direction: "right" | "left") => void;
}
const SwipeableElement = ({
  children,
  threshold,
  onSwipeEndOverThreshold,
}: SwipeableElementT) => {
  const translateX = useSharedValue(0);

  const panHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, ctx) => {
      // if we start the gesture again while the element is not yet back to 0, we store the current offset
      ctx.x = translateX.value;
    },
    onActive: (event, ctx) => {
      // apply the offset if not yet 0
      translateX.value = ctx.x + event.translationX;
    },
    onEnd: () => {
      if (translateX.value > threshold) {
        runOnJS(onSwipeEndOverThreshold)("right");
      } else if (translateX.value < -threshold) {
        runOnJS(onSwipeEndOverThreshold)("left");
      }
      translateX.value = withSpring(0, springConfig);
    },
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panHandler} activeOffsetX={[-5, 5]}>
      <Animated.View style={containerStyle}>{children}</Animated.View>
    </PanGestureHandler>
  );
};

export default SwipeableElement;

import React from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

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

interface SwipeableElementT {
  children: React.ReactElement;
  threshold: number;
  onSwipeEndOverThreshold: (direction: 'right' | 'left') => void;
}
const SwipeableElement = ({
  children,
  threshold,
  onSwipeEndOverThreshold,
}: SwipeableElementT) => {
  // shared value holding current translation
  const translateX = useSharedValue(0);

  // create event-handler for the respective gesture states
  const panHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, ctx) => {
      // if we start the gesture again while the element is not yet back to 0, we store the current offset
      ctx.x = translateX.value;
    },
    onActive: (event, ctx) => {
      // apply the offset if gesture got interupted and started again while not yet back at 0
      translateX.value = ctx.x + event.translationX;
    },
    onEnd: () => {
      if (translateX.value > threshold) {
        // execute callback `onSwipeEndOverThreshold` with `"right"` as argument
        runOnJS(onSwipeEndOverThreshold)('right');
      } else if (translateX.value < -threshold) {
        runOnJS(onSwipeEndOverThreshold)('left');
      }
      // the next line triggers the actual animation of the component including `translateX` in its style declaration
      // translateX.value = 0;
      // translateX.value = withTiming(0);
      translateX.value = withSpring(0, springConfig);
    },
  });

  // compute animated style based on the current value of the transition;
  // "static" styles should be declared via the standard StyleSheet-API
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        {
          scale: interpolate(
            translateX.value, // input value
            [-threshold, 0, threshold], // input range
            [0.95, 1, 1.05], // output range
            Extrapolate.CLAMP // handling of input value outside input range
          ),
        },
        {
          rotate: `${interpolate(
            translateX.value,
            [-threshold * 2, 0, threshold * 2],
            [-5, 0, 5],
            Extrapolate.CLAMP
          )}deg`,
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panHandler} activeOffsetX={[-5, 5]}>
      <Animated.View style={containerStyle}>{children}</Animated.View>
    </PanGestureHandler>
  );
};

export default SwipeableElement;

# Animations with React Native Reanimated v2

## Run the example

Install react-native-reanimated v2 following the documentation from Expo: [https://docs.expo.io/versions/latest/sdk/reanimated/#experimental-support-for-v2](https://docs.expo.io/versions/latest/sdk/reanimated/#experimental-support-for-v2):

```sh
yarn add react-native-reanimated@2.0.0-rc.0
```

Add the required babel plugin:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin', // has to be the last one in the list!
    ],
  };
};
```

Restart the Expo bundler (optionally, clear the cache in case you run into any issues):

```sh
# same as `expo start -c`
yarn start -c
```

### Comments on performance compared to React Natives built-in animation support

In the best case, all animations can be run on the native thread.
This avoids that each frame gets calculated in the JS-thread and must be communicated over the “bridge” (in the current architecture) to the native thread.

The animations API from React Native does not allow to animate all properties natively:

> Not everything you can do with Animated is currently supported by the native driver. The main limitation is that you can only animate non-layout properties: things like transform and opacity will work, but Flexbox and position properties will not. When using Animated.event, it will only work with direct events and not bubbling events. This means it does not work with PanResponder but does work with things like ScrollView#onScroll.

_(see [https://reactnative.dev/docs/animations#caveats](https://reactnative.dev/docs/animations#caveats))_

Reanimated is not limited to which properties can be animated on the native thread: [“Reanimated supports all native view properties. [...]”](https://github.com/software-mansion/react-native-reanimated/issues/376#issuecomment-582292525)
One needs to keep in mind, “[...] that for layout related props there is an additional layout step which needs to be performed in native.”.
A list linked in the comments shows which properties can be updated directly in the UI thread and might therefore be more performant to get animated: [https://github.com/software-mansion/react-native-reanimated/blob/82f6608799a2ea1667bb8c801e3bf9cf6ee1a144/src/ConfigHelper.js](https://github.com/software-mansion/react-native-reanimated/blob/82f6608799a2ea1667bb8c801e3bf9cf6ee1a144/src/ConfigHelper.js)

## Gesture-based Animations

RN Reanimated works well for gesture-based animations, e.g. flipping a component of the screen after a swipe-gesture or closing an image pop-up after a pinch gesture.
[react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/) is a re-implementation of the basic gesture handlers exposed by React Native, which aims to improve working with gestures and reacting to them:

> With this library gestures are no longer controlled by the JS responder system, but instead are recognized and tracked in the UI thread. It makes touch interactions and gesture tracking not only smooth, but also dependable and deterministic.

_(see [README.md](https://github.com/software-mansion/react-native-gesture-handler/blob/d0b8f0c3d1aaae2f70ea29aa5a530e5390db0195/README.md))_

The gesture handlers can easily be installed via the Expo-CLI:

```sh
expo install react-native-gesture-handler
```

The library exposes specific gesture handlers, like a `PanGestureHandler` or a `RotationGestureHandler`.
In addition, the “Touchables” from React Native are exposed as well with a native implementation not relying on the JS responder system.
They should work as a drop-in replacement for e.g. `TouchableOpacity`.

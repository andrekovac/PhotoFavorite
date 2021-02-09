<p align="center">
  <a href="https://expo.io/@andrusch/PhotoFavorite">
    <img alt="Photo Favorite Logo" src="./assets/images/PhotoFavoriteCamera.svg" width="100" />
  </a>
</p>

<h1 align="center">
  Photo Favorite
</h1>

Example App as part of the React Native Workshops of André Kovac.

<p align="center">
    <img alt="App Preview" src="./docs/AppPreview.gif" width="200" />
</p>

- Tap on Photos to see the Authors and tap on the Star to favorite photos.

## Run locally

These instructions use the `yarn` package manager (default for expo projects). You can also use `npm` instead.

Run the following in a console window:

1. Install dependencies

```
yarn
```

2. Start packager

```
yarn start
```

The Expo Dev Tools should open in a browser window. There you find a QR Code to scan with your phone and buttons to run the App in an Android emulator or iOS simulator.

## Test the app with the Expo client App

Go to <https://expo.io/@andrusch/PhotoFavorite> and scan the QR code.

## Notable Branches

### State management

Switch to the following branches for different state management implementations of the local state to display the numbers on `CounterScreen.tsx`, the photos on `PhotosScreen.tsx` and the favorites on `FavoritesScreen.tsx`:

- `react-context`: Using React's build-in Context API

  Relevant files:

  - Both contexts are defined with default values in `src/context.ts`.
  - Context values are implemented and wrapped around the entire navigation in `App.tsx`.

- `vanilla-redux`: Using Redux in it's pure form

  - All redux related code is inside the `src/store` folder.

- `redux-toolkit`: Using Redux with `redux-toolkit`

  - All redux related code is inside the `src/store` folder.
  - redux-toolkit uses a concept of slices which reduce the amount of necessary boiler

- `redux-saga`: Using Redux in it's pure form with [redux-saga](https://redux-saga.js.org/) instead of [redux-thunk](https://github.com/reduxjs/redux-thunk) for asynchronous actions.

  - The saga is implemented in `src/store/saga.ts`.
  - `src/api/photos.ts` contains an async function to fetch photos which is used inside the saga.
  - `redux-saga` uses [JavaScript generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) (`function*`) and has some handy "effects" like `put` (dispatches a Redux action) or `call` (calls anything - a JS function, Promise or generator)
  - Redux saga is very powerful in implementing sophisticated asynchronous logic where execution of actions is dependent on others. The `takeLatest` effect (listens for a dispatched action) is used inside `src/store/saga.ts`.

### Other

- `extra-component-library-native-base`: See how a component library is used in React Native. As an example the React Native (and Vue Native) component library [NativeBase](https://nativebase.io/) is used.

  - Example usage of [NativeBase](https://nativebase.io/) components.
  - Relevant files: `CounterScreen.tsx`

- `eject`: View the project after `expo eject` was run.

  - Note the two new folders `ios/` and `android/` which contain the native `iOS` and `Android` Apps, respectively.
# Run locally

Follow these steps to run the PhotoFavorite App:

1. Open a console window and run the following command to install the dependencies of this project

  ```bash
  yarn
  ```

2. Start the React native packager and expo development tools via this command:

  ```bash
  yarn start
  ```

3. Expo Dev Tools

  - The Expo Dev Tools should open in a browser window.
  - There on the left-hand side change the **Connection** to `Tunnel`.

4. Run on Device

  - Download the [Expo Go App](https://expo.io/tools#client) and **scan the QR Code** with your iPhone Camera (iOS) or from within the Expo Go App by tapping on **Scan QR Code** (Android)
  - Alternatively, if you have Simulators and emulators installed, hit the `Run on iOS simulator` or `Run on Android device/emulator` button on the left hand side.

5. Run on Web

  - Hit the `Run in web browser` button. This will open a new browser window and run the App in your browser.

  **Note**: This app was not optimized for browser usage and the list of photos will for example not be scrollable.

These instructions use the `yarn` package manager (default for expo projects). You can also use `npm` instead.

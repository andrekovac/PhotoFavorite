# React Native Development Setup

Choose the setup instructions which suit you best:

1. If you don't want to setup much in the beginning, follow the [section about setup for in-browser development](#necessary-tools-for-development-in-the-browser)
2. To develop locally on your machine, follow the steps in [section to setup local development](#necessary-tools-for-local-development) including the [section to start a test run](#test-run-of-a-basic-expo-app)
3. Further below there's an advanced [section to setup more tools](#advanced). This should be first avoided when you're new to React Native development.


## Necessary Tools for development in the browser

**1. Expo Go App on your smartphone**

Download the [Expo Client App](https://expo.io/tools#client) on your Smartphone (iOS or Android).

**2. Install current version of the Chrome browser**

- Firefox (and other browsers) work as well. The Chrome browser is just more reliable at times.
- Download the installer from [the chrome website](https://www.google.com/intl/en/chrome/browser/).

**3. Open Online React Native Editor**

Open <https://snack.expo.io/@andrusch/simple-app> in your browser.

What you'll see is some default code of a so-called **Expo snack** - that is some small Expo App written in Expo's online code editor.

**4. Run App on your device**

1. On the right-hand side, make sure `My Device` is selected and a big QR code is visible.

2. Scan the QR Code with your Smartphone:

   - **iPhone**: Just use your normal Camera App and hold your phone up so you can see the QR Code in the screen.
   - **Android**: Scan the QR Code by opening the **Expo Go App** and tapping on **Scan QR Code**.

3. Well done! You should see a super basic App with a temporary screen from Expo on your device 🎉.

**Troubleshooting**: If your app doesn't start, try to change the **Connection** to `Tunnel` on the left-hand side menu in the Expo Dev Tools.

## Operating System

**MacOS** is preferable but **Windows** and **Linux** also work (only the iOS Simulator is not available and the Expo experience might be a bit buggy at times).

## Necessary Tools for local development

**1. Expo Go App on your smartphone**

Download the [Expo Client App](https://expo.io/tools#client) on your Smartphone (iOS or Android).

**2. Install current version of the Chrome browser**

- Firefox (and other browsers) work as well. The Chrome browser is just more reliable at times.
- Download the installer from [the chrome website](https://www.google.com/intl/en/chrome/browser/).

**3. Install current version of Node.js (version >= 12) (which comes with `npm`)**

- Download the installer here: <http://nodejs.org/download/>

**4. Global `npm` installs**

Run the following to install Expo (Framework to create React Native Apps) globally:

```bash
npm i -g expo-cli
```

**5. Check your settings**

The **node** version should be `v12.0.0` (or higher) Please run the following commands in the terminal:

```bash
node -v
```

The **npm** version should be `6.0.0` (or higher):

```bash
npm -v
```

**4. IDE / Editor**

Install an IDE or editor. Recommendations:

- [Visual Studio Code](https://code.visualstudio.com/) is a great free and open-source option.
  - In this case install the `React Native Tools` and `vscode-styled-components` extensions.
- [WebStorm](https://www.jetbrains.com/webstorm/) is a commercial option.

### Test run of a basic Expo App

1. In any folder you want, initialize a new expo project (for example with the name `LocalDining`): `expo init LocalDining`
2. Choose the managed workflow `blank (TypeScript)` and hit enter.
3. After all dependencies have been installed, run: `cd LocalDining`
4. Run `yarn start`

    **What should happen?**: A browser tab of your default browser should open up with the expo devtools inside. We will talk about it in the workshop.

5. In the console window and in the browser tab you should see a QR Code. Scan the QR Code with your Smartphone.

    - **iPhone**: Just use your normal Camera App and hold your phone up so you can see the QR Code in the screen.
    - **Android**: Scan the QR Code via the Expo Go App.

6. Well done! You should see a super basic App with temporary screens from Expo on your device 🎉.

**Troubleshooting**: If your app doesn't start, try to change the **Connection** to `Tunnel` on the left-hand side menu in the Expo Dev Tools.

## Advanced

The following things are tools for advanced development and not necessary initially. The installation and setup of these tools is more work and not helpful in the beginning.

### react-native-debugger

Install [react-native-debugger](https://github.com/jhen0409/react-native-debugger).

**Installation**:

- ***OSX***: The easiest way to install it on **OSX** is to use [Homebrew](https://brew.sh/). In this case run

	```bash
	brew update && brew cask install react-native-debugger
	```

- ***Windows***: Go to https://github.com/jhen0409/react-native-debugger/releases and download the latest `rn-debugger-windows-x64.zip` file. Install as usual.

## Local simulators and emulators

Note for **Windows** users: **iOS** Simulator doesn't work on Windows. Only install the Android emulator.

Follow the instructions for [installing the iOS Simulator](https://docs.expo.io/workflow/ios-simulator/) and [installing the Android emulator](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/)

Another handy tool to install is [Android Debug Bridge (adb)](https://developer.android.com/studio/command-line/adb) for Android. With [Homebrew](https://brew.sh/) you can install it via the following command in your console:

```bash
brew cask install android-platform-tools
```

## React Native End-2-end tests with Detox

After "ejecting" an Expo App (in fact, leaving the Expo managed environment) you have to install some more tools to be able to run end-2-end tests.

According to my experience end-2-end tests run more reliably on an iOS Simulator (as compared to an Android emulator). Hence, here I describe how to install the tools necessary to run Detox end-2-end tests on an **iOS** Simulator:

1. When following the instructions to setup the iOS Simulator (ad described in the section above), `XCode` and `XCode Command line` tools are installed. If you haven't yet installed an iOS Simulator then please do it now.
2. Run the following commands to install some more tools necessary to run Detox tests on an iOS Simulator. Here again [HomeBrew](https://brew.sh/) is used. Run the following three commands, one after the other:

    ```
    xcode-select --install
    brew tap wix/brew
    brew install applesimutils
    ```

3. Install `watchman`. On a mac with [HomeBrew](https://brew.sh/) installed, run `brew install watchman`
4. Install `cocoapods`. It's built with Ruby and the [React Native docs setup guide](https://reactnative.dev/docs/environment-setup) recommends to use the built-in Ruby version. Using that you should run the following to install Cocoapods:

    ```
    sudo gem install cocoapods
    ```

5. Lastly install the [Detox CLI](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md#install-detox-command-line-tools-detox-cli) (End-2-end testing framework) globally:

  ```bash
  npm i -g detox-cli
  ```

See the [React Native docs setup guide](https://reactnative.dev/docs/environment-setup) for more information.

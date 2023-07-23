---
title: Building
sidebar_position: 2
---

<!-- :::caution -->
<!-- This page is currently under development. -->
<!-- ::: -->

Clone the repo - [astrysk-packages](https://github.com/abayomi185/astrysk-packages)

```bash
git clone https://github.com/abayomi185/astrysk-packages
```
Navigate to the runner directory and install all dependencies

```bash
cd runner && yarn install
```

### iOS Simulator
To run on the iOS Simulator
```bash
yarn prebuild:clean # Ejects the expo app
yarn ios
```

The commands above should start the Expo dev client. It can also be started manually by running:
```bash
npx expo start --dev-client --clear
```

### Physical device
To run on a physical device, ensure that Xcode is fully setup and run `prebuild:clean` to eject the expo app
:::caution
Prebuild only needs to be run once if no other native modules are installed.
:::
```bash
yarn prebuild:clean
```
The runner can then be installed by selecting the target device in Xcode, building the app and running it.

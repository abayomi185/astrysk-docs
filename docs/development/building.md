---
title: Building
sidebar_position: 2
---

:::caution
This page is currently under development.
:::

Clone the repo - [astrysk-packages](https://github.com/abayomi185/astrysk-packages)

```bash
git clone https://github.com/abayomi185/astrysk-packages
```
Navigate to the runner directory and install all dependencies
:::note
Setup of the test runner is partially complete.
:::
```bash
cd runner && yarn install
```

Run on the iOS Simulator
```bash
npx expo run:ios
```

This should start the `dev-client` server. If not, it can be started with
```bash
npx expo start --dev-client --clear
```

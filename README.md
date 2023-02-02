# Perlego Mobile Developer Assessment

# Task
For the challenge, we would like you render some HTML content inside a WebView in React Native.
There should be a next and a previous button which would allow you to navigate to items in the
page. This will require you to utilise both React and traditional Javascript from inside the Webview.

# Requirements
1. HTML content must be loaded into a Webview.
2. Upon clicking on the Next button, the device should navigate to the next heading tag in the
page. (This should trigger a scroll to occur inside the web view.)
3. Upon clicking on the Previous button, the device should navigate to the previous Heading
tag. (This should trigger a scroll to occur inside the web view.)
3. A readme should be provided to explain how to run the application.
4. The Next and Previous buttons must not be within the Webview; they should be in React
Native.

## Dependencies
- Expo Go
- Jest Expo
- React
- React Native
- React Native WebView

# Getting started
1. Clone this repository
2. Run 
```npm install```

## Emulators 
This app can be run on your mobile phone through an emulator on your computer. 
- For iOS we recommend using Xcode
- For Android we recommend using Android studio

## Running the App
Run `npx expo start` to run the project.
You can run this app by downloading the Expo Go app on through your phone's app store, then connecting it to the QR code shown in the command line.
If you have emulators installed, you can press `a` or `i` to run the app through the android and iOS emulators respectively.

## How to use the app
By default the app will run using the HTML content given in assets/index.js. If you would like to use a different source, here is a guide that you will need to follow:

### Changing source in WebView 
Before changing it, please check that the link you are trying to use has heading tags in its HTML, such as h1, h2, etc. Here is an example: `https://reactnative.dev/docs/getting-started`

1. In App.js look for the `<WebView />` component.
2. In its props look for `source` and delete the following: `{{html: require('../../assets/index')()}}`.
3. You will end up with: `source=`.
4. Copy and paste this: `{{ uri: }}` after step 3.
5. You will end up with: `source={{ uri: }}`.
6. This is where you are going to add your link, after step 4.
7. You will end up with: `source={{ uri: YOUR_LINK }}`.
8. Run `r` in the terminal where you are already running `Expo` to reload the app.


# Testing
In a different terminal or after stopping the server, to test with Jest, run `npm test`.
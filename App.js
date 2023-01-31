import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import html from './index.html'
import styles from "./Styles.js";
import NextButton from './NextButton';
import PrevButton from './PrevButton'

const App = () => {

  const webviewRef = useRef();

  const [pageHeading, setPageHeading] = useState(0);

  const onMessage = (event) => {
    const data = event.nativeEvent.data;
    console.log(data);
      setPageHeading(JSON.parse(data.split(',')))
  };

  const injectedjs = `const headings = JSON.stringify(Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(heading => ({
      top: heading.offsetTop
    })));
    window.ReactNativeWebView.postMessage(headings);
  `

  return (
    <View style = {styles.container}>
      <WebView
        style = {styles.webview}
        source={html}
        ref = {webviewRef}
        onMessage={onMessage}
        javaScriptEnabled={true}
        injectedJavaScript={injectedjs}
      />
      <View style = {styles.touchableOpacityContainer}>
      <PrevButton 
        webviewRef={webviewRef} 
        pageHeading={pageHeading} 
      />
      <NextButton 
        webviewRef={webviewRef} 
        pageHeading={pageHeading}
      />
      </View>
    </View>
  )
}

export default App;
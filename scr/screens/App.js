import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from "../components/style/Styles";
import NextButton from '../components/buttons/NextButton';
import PrevButton from '../components/buttons/PrevButton'

const App = () => {

  const webviewRef = useRef();

  const [currentHeading, setCurrentHeading] = useState(0);
  const [pageHeading, setPageHeading] = useState(0);

  const onMessage = (event) => {
    const data = event.nativeEvent.data;
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
        allowFileAccess={true}
        originWhitelist={['*']}
        source={{html: require('../../assets/index')()}}
        ref = {webviewRef}
        onMessage={onMessage}
        javaScriptEnabled={true}
        injectedJavaScript={injectedjs}
      />
      <View style = {styles.touchableOpacityContainer}>
      <PrevButton 
        webviewRef={webviewRef} 
        currentHeading={currentHeading}
        pageHeading={pageHeading} 
      />
      <NextButton 
        webviewRef={webviewRef} 
        currentHeading={currentHeading}
        pageHeading={pageHeading}
      />
      </View>
    </View>
  )
}

export default App;
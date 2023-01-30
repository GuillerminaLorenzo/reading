import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import html from './index.html'
import styles from "./styles.js";

const App = () => {

  const webviewRef = useRef();

  const [currentHeading, setCurrentHeading] = useState(0);
  const [pageHeading, setPageHeading] = useState(0);

  const handleNextPress = () => {
    if (currentHeading < pageHeading.length - 1) {
      setCurrentHeading(currentHeading + 1);
     console.log(pageHeading[currentHeading + 1].top)
      webviewRef.current.injectJavaScript(`
        window.scrollTo(0, ${pageHeading[currentHeading + 1].top});
      `);
    }
  };

  const handlePrevPress = () => {
    if (currentHeading > 0) {
      setCurrentHeading(currentHeading - 1);
      console.log(pageHeading[currentHeading - 1].top)
      webviewRef.current.injectJavaScript(`
        window.scrollTo(0, ${pageHeading[currentHeading - 1].top});
      `);
    }
  };

  function onMessage(event) {
    if (event.nativeEvent.data === 'goback'){
      console.log('prev works');
      handlePrevPress();
    } else if (event.nativeEvent.data === 'onnext') {
      console.log('next works')
      handleNextPress();
    } else {
      console.log(JSON.parse(event.nativeEvent.data.split(',')))
      setPageHeading(JSON.parse(event.nativeEvent.data.split(',')));
    }
   } 

  function goBack() {
    webviewRef.current.postMessage('goback');
  }

  function onNext() {
    webviewRef.current.postMessage('onnext');
  }

  const injectedjs = `const headings = JSON.stringify(Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(heading => ({
      top: heading.offsetTop
    })));
    window.ReactNativeWebView.postMessage(headings);
    true;
  `

  return (
    <View style = {styles.container}>
      <WebView
        source={html}
        ref = {webviewRef}
        onMessage={onMessage}
        javaScriptEnabled={true}
        injectedJavaScript={injectedjs}
        scrollEnabled={true}
      />

      <View 
        style = {styles.touchableOpacityContainer}>
        <TouchableOpacity
          onPress={() => goBack()}
          style = {styles.touchableOpacityRight}>
          <Text 
            style = {styles.touchableOpacityText}>
            Prev
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onNext()}
          style = {styles.touchableOpacityLeft}>
          <Text style = {styles.touchableOpacityText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default App;
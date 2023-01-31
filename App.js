import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import html from './index.html'
import styles from "./Styles.js";

const App = () => {

  const webviewRef = useRef();

  const [currentHeading, setCurrentHeading] = useState(0);
  const [pageHeading, setPageHeading] = useState(0);

  const handleNextPress = () => {
    if (currentHeading < pageHeading.length - 1) {
      setCurrentHeading(currentHeading + 1);
      scrollToHeadings(pageHeading[currentHeading + 1].top)
    } 
    handleNextPressLastHeading();
  };

  const handleNextPressLastHeading = () => {
    if (currentHeading === pageHeading.length - 1) {
      setCurrentHeading(0);
      scrollToHeadings(pageHeading[0].top)
    } 
  }

  const handlePrevPress = () => {
    if (currentHeading > 0) {
      setCurrentHeading(currentHeading - 1);
      scrollToHeadings(pageHeading[currentHeading - 1].top)
    }
    handlePrevPressLastHeading();
  };

  const handlePrevPressLastHeading = () => {
    if (currentHeading === 0){
      setCurrentHeading(pageHeading.length - 1);
      scrollToHeadings(pageHeading[pageHeading.length - 1].top)
    }
  }

  const scrollToHeadings = (heading) => {
    webviewRef.current.injectJavaScript(`
      window.scrollTo(0, ${heading});
    `); 
  }

  function onMessage(event) {
    const data = event.nativeEvent.data;
    if (data === 'goback'){
      handlePrevPress();
    } else if (data === 'onnext') {
      handleNextPress();
    } else {
      setPageHeading(JSON.parse(data.split(',')));
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
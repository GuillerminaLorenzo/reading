import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import html from './index.html'
import styles from "./styles.js";


const App = () => {

  const webview = useRef();

  function onMessage(data) {
    if (data.nativeEvent.data === 'goback'){
      console.log('prev works');
    } else {
      console.log('next works')
    }
   } 

  function goBack() {
    webview.current.postMessage('goback');
  }

  function onNext() {
    webview.current.postMessage('onnext');
  }

  return (
    <View style = {styles.container}>
      <WebView
        source={html}
        ref = {webview}
        onMessage={onMessage}
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
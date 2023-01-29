import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {

  onNavigationStateChange = (navState) => {
    console.log('navState', navState)
  }

  render() {
    return (
      <View style = {{flex:1}}>
        <WebView
          source={{uri: 'https://www.google.com/'}} 
          ref = {'webview'}
          onNavigationStateChange = {this.onNavigationStateChange}
        />

      </View>
    )
  }
}

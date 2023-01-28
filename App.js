import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import html from './index.html';

class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        style={{flex: 1}}
        originWhitelist={['*']}
        source={html}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        
      />
    );
  }
}

export default MyInlineWeb;
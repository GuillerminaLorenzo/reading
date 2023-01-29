import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {

  onNavigationStateChange = (navState) => {
    console.log('navState', navState)
  }

  goBack = () => {
    this.refs.webview.goBack()
  }

  render() {
    return (
      <View style = {{flex:1}}>
        <WebView
          source={{uri: 'https://www.google.com/'}} 
          ref = {'webview'}
          onNavigationStateChange = {this.onNavigationStateChange}
        />

        <View 
          style = {{position:'absolute', bottom:0, width:'100%',
            height:80, backgroundColor:'#886', justifyContent:'center', 
            alignItems:'center', flexDirection:'row'}}>
          <TouchableOpacity
            onPress={this.goBack}
            style = {{marginRight:10}}>
            <Text 
              style = {{color:'#fff', fontSize:16, fontWeight:'bold'}}>
              Prev
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = {{marginLeft:10}}>
            <Text style = {{color:'#fff', fontSize:16, fontWeight:'bold'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

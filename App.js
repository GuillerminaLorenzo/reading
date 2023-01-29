import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';


const App = () => {

  const webview = useRef();

  function onMessage(data) {
    alert(data.nativeEvent.data);
  }

  function goBack() {
    webview.current.postMessage('goback');
  }
  function onNext() {
    webview.current.postMessage('onnext');
  }
    return (
      <View style = {{flex:1}}>
        <WebView
          source={{html: ` 
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body
            style="
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
            "
          >
            <script>
              window.addEventListener("message", message => {
                alert(message.data) 
              });
            </script>
          </body>
        </html>        
`,}} 
          ref = {webview}
          onMessage={onMessage}
          

        />

        <View 
          style = {{position:'absolute', bottom:0, width:'100%',
            height:80, backgroundColor:'#886', justifyContent:'center', 
            alignItems:'center', flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() => goBack()}
            style = {{marginRight:10}}>
            <Text 
              style = {{color:'#fff', fontSize:16, fontWeight:'bold'}}>
              Prev
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onNext()}
            style = {{marginLeft:10}}>
            <Text style = {{color:'#fff', fontSize:16, fontWeight:'bold'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  export default App;
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./Styles.js";

const PrevButton = ({webviewRef, pageHeading}) => {
  const [newCurrentHeading, setNewCurrentHeading] = useState(0);

  const secondToLastHeading = pageHeading.length - 1;
  const prevHeading = newCurrentHeading - 1;

  const handlePrevPress = () => {
    if (newCurrentHeading > 0) {
      setNewCurrentHeading(prevHeading);
      console.log(prevHeading)
      scrollToHeadings(pageHeading[prevHeading].top);
    }
    handlePrevPressLastHeading();
  };

  const handlePrevPressLastHeading = () => {
    if (newCurrentHeading === 0){
      setNewCurrentHeading(secondToLastHeading);
      scrollToHeadings(pageHeading[secondToLastHeading].top);
    }
  };

  const scrollToHeadings = (heading) => {
    webviewRef.current.injectJavaScript(`
      window.scrollTo(0, ${heading});
    `); 
  };

  return (
    <TouchableOpacity
      style={styles.touchableOpacityRight}
      onPress={() => handlePrevPress()}
    >
      <Text 
      style={styles.touchableOpacityText}>
      Prev
      </Text>
    </TouchableOpacity>
  );
};

export default PrevButton;

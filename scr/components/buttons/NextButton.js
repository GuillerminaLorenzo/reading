import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "../style/Styles";

const NextButton = ({webviewRef, currentHeading, pageHeading}) => {
  const [newCurrentHeading, setNewCurrentHeading] = useState(currentHeading);

  const secondToLastHeading = pageHeading.length - 1;
  const nextHeading = newCurrentHeading + 1;
  const firstHeading = pageHeading[0];

  const handleNextPress = () => {
    if (newCurrentHeading < secondToLastHeading) {
      setNewCurrentHeading(nextHeading);
      console.log(newCurrentHeading)
      console.log(pageHeading[nextHeading].top)
      scrollToHeadings(pageHeading[nextHeading].top)
    } 
    handleNextPressLastHeading();
  };

  const handleNextPressLastHeading = () => {
    if (newCurrentHeading === secondToLastHeading) {
      setNewCurrentHeading(0);
      scrollToHeadings(firstHeading.top)
    } 
  }

  const scrollToHeadings = (heading) => {
    webviewRef.current.injectJavaScript(`
      window.scrollTo(0, ${heading});
    `); 
  };

  return (
    <TouchableOpacity
      style={styles.touchableOpacityLeft}
      onPress={() => handleNextPress()}
    >
      <Text style={styles.touchableOpacityText}>Next</Text>
    </TouchableOpacity>
  );
};

export default NextButton;

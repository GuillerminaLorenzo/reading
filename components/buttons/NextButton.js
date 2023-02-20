import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "../style/Styles";

const NextButton = ({webviewRef, currentHeading, pageHeading, setCurrentHeading}) => {
  const secondToLastHeading = pageHeading.length - 1;
  const nextHeading = currentHeading + 1;
  const firstHeading = pageHeading[0];

  const handleNextPress = () => {
    if (currentHeading < secondToLastHeading) {
      setCurrentHeading(nextHeading);
      scrollToHeadings(pageHeading[nextHeading].top)
    } 
    handleNextPressLastHeading();
  };

  const handleNextPressLastHeading = () => {
    if (currentHeading === secondToLastHeading) {
      setCurrentHeading(0);
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
      testID={'next'} 
    >
      <Text style={styles.touchableOpacityText}>Next</Text>
    </TouchableOpacity>
  );
};

export default NextButton;

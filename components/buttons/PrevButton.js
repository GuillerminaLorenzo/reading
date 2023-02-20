import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "../style/Styles";

const PrevButton = ({webviewRef, currentHeading, pageHeading, setCurrentHeading}) => {
  const secondToLastHeading = pageHeading.length - 1;
  const prevHeading = currentHeading - 1;

  const handlePrevPress = () => {
    if (currentHeading > 0) {
      setCurrentHeading(prevHeading);
      scrollToHeadings(pageHeading[prevHeading].top);
    }
    handlePrevPressLastHeading();
  };

  const handlePrevPressLastHeading = () => {
    if (currentHeading === 0){
      setCurrentHeading(secondToLastHeading);
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
      testID={'prev'} 
    >
      <Text style={styles.touchableOpacityText}>Previous</Text>
    </TouchableOpacity>
  );
};

export default PrevButton;

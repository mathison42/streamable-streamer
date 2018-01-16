import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const RightArrow = (props) => {
  return (
    <View style={styles.slider}>
        <Image source={require('../pics/slider-right-arrow.svg')} />
    </View>
  );
}

export default RightArrow;

const styles = StyleSheet.create({
  slider: {
    height: 50,
    width: 50,
  }
});

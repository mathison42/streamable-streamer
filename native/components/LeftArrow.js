import React from 'react';
import { View, Image } from 'react-native';

const LeftArrow = (props) => {
  return (
    <View onClick={props.previousSlide} className="slider-left-arrow">
        <Image source={require('../pics/slider-left-arrow.svg')} />
    </View>
  );
}

export default LeftArrow;

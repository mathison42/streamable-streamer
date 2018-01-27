import React from 'react';
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native';

const StreamButton = (props) => {
  return (
    <View style={props.style}>
      <TouchableHighlight style={styles.addButton} underlayColor='#ff8080' onPress={props.onPress}>
        <Text style={{fontSize: 50, color: 'black'}}>{props.text}</Text>
      </TouchableHighlight>
    </View>
  );
}

export default StreamButton;

const styles = StyleSheet.create({
  addButton: {
      height: 100,
      width: 50,
      borderRadius: 75,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
          height: 1,
          width: 0
      }
  }
});

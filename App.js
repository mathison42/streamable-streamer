import React from 'react';
import PopUp from './native/components/PopUp';
import StreamButton from './native/components/StreamButton';
import { StyleSheet, Text, View, WebView, Modal, TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
        <View style={styles.container}>

          {/* Video */}
          <WebView source={{uri: 'https://streamable.com/s/t8x2h/yexfin'}} />

          {/* Arrows */}
          <StreamButton text={'<'} style={[styles.arrow, styles.left_arrow]}/>
          <StreamButton text={'>'} style={[styles.arrow, styles.right_arrow]}/>

          {/* Description */}
          <PopUp text="this is textthis is textthis is textthis is textthis is textthis is textthis is textthis is textthis is textthis is textthis is text" />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  arrow: {
    position: 'absolute',
    marginTop: 90,
    zIndex: 1,
    height: 100,
    width: 50
  },
  left_arrow: {
    left: 0,
    marginLeft: 10,
  },
  right_arrow: {
    right: 0,
    marginRight: 10,
  }
});

import React from 'react';
import PopUp from './native/components/PopUp';
import LeftArrow from './native/components/LeftArrow';
import RightArrow from './native/components/RightArrow';
import { StyleSheet, Text, View, WebView, Button, Modal } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <WebView
            source={{uri: 'https://streamable.com/s/t8x2h/yexfin'}}
          />

          {/* Arrow Functionality */}
          {/* <View>
          //   <LeftArrow />
          //   <RightArrow />
          // </View>*/}

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
});

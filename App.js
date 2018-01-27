import React from 'react';
import PopUp from './native/components/PopUp';
import StreamButton from './native/components/StreamButton';
import { StyleSheet, Text, View, WebView, Modal, TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        clipNum: Math.floor(Math.random() * clips.length)
    }

  }

  nextClip = () => {
    let newNum = this.state.clipNum + 1;
    if (newNum >= clips.length) {
      newNum = 0;
    }
    this.setState({ clipNum: newNum })
  }

  prevClip = () => {
    let newNum = this.state.clipNum - 1;
    if (newNum < 0) {
      newNum = clips.length - 1;
    }
    this.setState({ clipNum: newNum })
  }

  render() {
    return (
        <View style={styles.container}>

          {/* Video */}
          <WebView source={{uri: clips[this.state.clipNum].streamable}} />

          {/* Arrows */}
          <StreamButton text={'<'} style={[styles.arrow, styles.left_arrow]} onPress={this.prevClip} />
          <StreamButton text={'>'} style={[styles.arrow, styles.right_arrow]} onPress={this.nextClip} />

          {/* Description */}
          <PopUp text={clips[this.state.clipNum].description} />

        </View>
    );
  }
}

const clips = [
  {
    streamable: 'https://streamable.com/s/t8x2h/yexfin',
    description: 'Lost at orbiting. The initial angle is far better than where she orbits.'
  },
  {
    streamable: 'https://streamable.com/s/rkofc/zpjkyr',
    description: 'Fakes - Flick Shimmy!'
  },
]

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

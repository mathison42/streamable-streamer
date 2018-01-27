import React from 'react';
import PopUp from './PopUp';
import StreamButton from './StreamButton';
import { NavigationActions } from 'react-navigation'
import { Dimensions, StyleSheet, Text, View, WebView, Modal, TouchableHighlight, FlatList, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    const {width, height} = Dimensions.get('window')
    this.state = {
        clipNum: Math.floor(Math.random() * this.props.clips.length),
        vertical: height > width ? true : false
    }

  }

  onLayout(e) {
    const {width, height} = Dimensions.get('window')
    console.log(width, height)
    if (height >= width) {
      this.setState({ vertical: true })
    } else {
      this.setState({ vertical: false })
    }
  }

  nextClip = () => {
    let newNum = this.state.clipNum + 1;
    if (newNum >= this.props.clips.length) {
      newNum = 0;
    }
    this.setState({ clipNum: newNum });
  }

  prevClip = () => {
    let newNum = this.state.clipNum - 1;
    if (newNum < 0) {
      newNum = this.props.clips.length - 1;
    }
    this.setState({ clipNum: newNum });
  }

  render() {
    return (
        <View onLayout={this.onLayout.bind(this)} style={styles.container}>
          { this.state.vertical
            ?
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
              <TouchableHighlight
                underlayColor='#ff8080'
                onPress={()=> this.props.navigation.dispatch(NavigationActions.back())}
                 style={{flex: 1}}
              >
                <Text style={{fontSize: 50, color: 'black', textAlign: 'center' }}>{'<-'}</Text>
              </TouchableHighlight>
              <Text style={[styles.titleText, {flex: 2}]} >{this.props.title}</Text>
            </View>
            :
            null
          }

          <View style={styles.container}>
            {/* Video */}
            <WebView source={{uri: this.props.clips[this.state.clipNum].streamable}} />

            {/* Arrows */}
            <StreamButton text={'<'} style={[styles.arrow, styles.left_arrow]} onPress={this.prevClip} />
            <StreamButton text={'>'} style={[styles.arrow, styles.right_arrow]} onPress={this.nextClip} />
          </View>

          {/* Description */}
          <PopUp text={this.props.clips[this.state.clipNum].description} />

          { this.state.vertical
            ?
            /* Clip List */
            <View style={styles.container_list}>
              <FlatList
                data={this.props.clips}
                renderItem={({item}) =>
                  <Button
                    style={ styles.item }
                    title={ item.streamable }
                    onPress={()=>this.setState({ clipNum: this.props.clips.indexOf(item) })}>
                  </Button>}
              />
            </View>
            :
            null
          }

        </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  container_list: {
    flex: 1.5,
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

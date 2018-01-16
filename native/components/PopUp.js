import React, {Component } from 'react';
import { Button, Modal, View, Text, StyleSheet } from 'react-native';



export default class PopUp extends Component {
  state = {
    modalVisible: false,
    text: this.props.text,
  };


  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
        <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
              transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>{this.props.text}</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close"
                >
                </Button>
              </View>
            </View>
          </Modal>
          <Button
              onPress={() => this.openModal()}
              title="Description"
              color="#ff8080"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});

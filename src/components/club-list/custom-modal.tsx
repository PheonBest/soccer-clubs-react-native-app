{
  /*blurRadius is initially 0 and 4 when modal active more the blurradius more is blur effect of image*/
}

import React, { Component } from 'react'

import {
  Modal,
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native'

export default class App extends Component {
  state = {
    isVisible: false,
  }
  render() {
    return (
      <ImageBackground
        style={styles.container}
        blurRadius={this.state.isVisible ? 4 : 0}
        source={require('./bgimage.jpeg')}
      >
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.')
          }}
        >
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
            <Button
              title="Click To Close Modal"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible })
              }}
            />
          </View>
        </Modal>

        <Button
          title="Click To Open Modal"
          onPress={() => {
            this.setState({ isVisible: true })
          }}
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#606070',
    margin: 50,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
})

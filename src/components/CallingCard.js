import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity } from 'react-native';


export default class CallingCard extends Component {

  makeCall = (number) => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={() => {this.makeCall(this.props.number)}} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.TextStyle}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },
    touchableButton: {
      width: '80%',
      padding: 20,
      backgroundColor: '#00BCD4',
    },
    TextStyle: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
    }

  });

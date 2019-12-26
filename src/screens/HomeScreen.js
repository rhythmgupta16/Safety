import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
    <Text style = {styles.text} > Hi there! < /Text>
    <Button title="Go to Emergency Call Screen"
    onPress={() => props.navigation.navigate('Call') }
    />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center'
  }
});

export default HomeScreen;

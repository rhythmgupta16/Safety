import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
    <Text style = {styles.text} > Hi there! < /Text>
    <Button title="Go to Emergency Call Screen"
    onPress={() => props.navigation.navigate('Call') }
    />
    <Button title="Find me"
    onPress={() => props.navigation.navigate('FindMe') }
    />
    <Button title="Click/Upload Image"
    onPress={() => props.navigation.navigate('ImageUpload') }
    />
    <Button title="Open Safety Tips"
    onPress={() => props.navigation.navigate('Tips') }
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

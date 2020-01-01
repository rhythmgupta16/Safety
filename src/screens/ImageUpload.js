import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ImageUpload = (props) => {
  return (
    <View>
    <Text style = {styles.text} > Click or Upload Image! < /Text>
    <Button title="Click Image"
    onPress={() => props.navigation.navigate('ClickImage') }
    />
    <Button title="Upload Image"
    onPress={() => props.navigation.navigate('GalleryImage') }
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

export default ImageUpload;

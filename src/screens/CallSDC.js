import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CallingCard from '../components/CallingCard';

const ImageScreen = () => {
  return (
    <ScrollView>
    <Text style = {styles.text}>Emergency Numbers</Text>
    <CallingCard name = "Disaster Management Services" number = "108" />
    <CallingCard name = "National Emergency Number" number = "112" />
    <CallingCard name = "Police" number = "100" />
    <CallingCard name = "Fire Brigade" number = "101" />
    <CallingCard name = "Ambulance" number = "102" />
    <CallingCard name = "Road Accident" number = "1073" />
    <CallingCard name = "Railway Accident" number = "1072" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0097A7',
    padding: 20,
  },

});

export default ImageScreen;

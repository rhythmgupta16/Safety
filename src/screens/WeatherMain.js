import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class WeatherMain extends React.Component {

    render() {
        const { navigation } = this.props;
        const located = navigation.getParam('located', 'null');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ marginTop: 16,fontSize: 20,}}>
                    This is Weather Screen and we receive value from Home Screen
                </Text>
                <Text style={styles.textStyle}>User Name: {JSON.stringify(located)}</Text>
                <View style={styles.buttonStyle}>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 23,
        textAlign: 'center',
        color: '#f00',
    },

    buttonStyle:{
        width: "93%",
        marginTop: 50,
        backgroundColor: "red",
    }
});

import React from 'react';
import {View, StyleSheet, Text, StatusBar, Platform} from 'react-native';

const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <Text style={styles.appBarTitle}>Bocagram</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    }, appBarTitle: {
        fontSize: 25,
        fontWeight: '900',
        textAlign: 'center',
        paddingVertical: 10,
    }
})

export default AppBar;
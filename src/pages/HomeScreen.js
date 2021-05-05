import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const HomeScreen = (props) => {
    return (
        <View style={styles.root}>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});
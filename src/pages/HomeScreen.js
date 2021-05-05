import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Helo ini halaman HomeScreen</Text>
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
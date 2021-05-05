import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingScreen = () => {
    return (
        <View style={styles.root}>
            <Text>SettingScreen</Text>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});
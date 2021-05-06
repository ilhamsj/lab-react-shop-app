import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const HistoryScreen = () => {
    return (
        <View style={styles.root}>
            <View>
                <Text h4>History</Text>
            </View>
        </View>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});
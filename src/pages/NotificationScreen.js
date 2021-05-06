import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const NotificationScreen = () => {
    return (
        <View style={styles.root}>
            <View>
                <Text h4>Notification</Text>
            </View>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});
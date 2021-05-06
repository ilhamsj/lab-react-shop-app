import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const OrderScreen = () => {
    return (
        <View style={styles.root}>
            <View>
                <Text h4 style={styles.title}>Order</Text>
            </View>
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    title: {
        fontFamily: 'roboto'
    },
});
import React, { useState } from 'react'
import { View, StyleSheet, Button, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Text, Icon } from 'react-native-elements'

const { width, height } = Dimensions.get("screen")

const HomeScreen = (props) => {

    const [banner, setBanner] = useState([
        "http://tutofox.com/foodapp//banner/banner-1.jpg",
        "http://tutofox.com/foodapp//banner/banner-2.jpg",
        "http://tutofox.com/foodapp//banner/banner-3.png",
        "http://tutofox.com/foodapp//banner/banner-1.jpg",
        "http://tutofox.com/foodapp//banner/banner-2.jpg",
        "http://tutofox.com/foodapp//banner/banner-3.png",
    ])

    const getBanner = async () => {
        try {
            console.log('Get banner')
        } catch (error) {
            console.log('Failed to get banner')
        } finally {
            console.log('Get banner done')
        }
    }

    return (
        <ScrollView>
            <View style={{
                height: height / 4,
                backgroundColor: 'black',
                padding: 28,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }}>
                <View>
                    <Text h3 style={{ color: 'white' }}>Hi, Ilham Saputra Jati</Text>
                </View>
                <View>
                    <View>
                        <Text style={{ color: 'white' }}>Alamat : The Prime Office Suites </Text>
                    </View>
                </View>
            </View>
            <View style={styles.root}>
                <Text h4 style={{ color: 'black', marginBottom: 20 }}>Valuable</Text>
                {
                    banner.map((value, key) => {
                        return (
                            <TouchableOpacity key={key}>
                                <Image style={styles.banner} resizeMode="contain" source={{ uri: value }} />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        padding: 20
    },
    banner: {
        height: width / 2,
        borderRadius: 10,
        marginBottom: 20
    }
});
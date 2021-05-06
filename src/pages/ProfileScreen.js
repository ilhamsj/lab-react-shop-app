import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text, Avatar, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {

    const [profileData, setProfileData] = useState([
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
    ])

    return (
        <View style={styles.root}>
            <View style={{ paddingHorizontal: 18 }}>
                <Text h4 style={styles.title}>Profile</Text>
            </View>
            <View>
                {
                    profileData.map((value, id) => {
                        return (
                            <ListItem key={id} bottomDivider>
                                <Avatar source={{ uri: value.avatar_url }} />
                                <ListItem.Content>
                                    <ListItem.Title>{value.name}</ListItem.Title>
                                    <ListItem.Subtitle>{value.subtitle}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    root: {
        paddingVertical: 10,
        backgroundColor: 'white'
    },
    title: {
        fontFamily: 'roboto'
    },
    subTitle: {
        // fontFamily: 'montserrat'
    },
});
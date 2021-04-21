import React, { useState } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../shared/Pending_Orders_Button';
import { View, Text, Animated, Image, Dimensions, ImageBackground, TextInput, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StarRating from 'react-native-star-rating';
const DATA = [
    {
        key: '1',
        Name: 'Daniyal Ahmed Khan',
        Location: 'DHA Phase-5',
        Order_Details: 'Need an electrician.',
        Picture: require('../images/Categories_List/1.png'),
    },
    {
        key: '2',
        Name: 'Ahsan Iqbal',
        Location: 'DHA Phase-5',
        Order_Details: 'My AC is not working. Please help.',
        Picture: require('../images/Categories_List/2.png')
    },
    {
        key: '3',
        Name: 'Saad',
        Location: 'DHA Phase-5',
        Order_Details: 'Fix my microwave.',
        Picture: require('../images/Categories_List/3.png')
    },
    {
        key: '4',
        Name: 'Ramish',
        Location: 'DHA Phase-5',
        Order_Details: 'My heater just short circuited. Need help.',
        Picture: require('../images/Categories_List/4.png')
    },
    {
        key: '5',
        Name: 'Imran Khan',
        Location: 'DHA Phase-5',
        Order_Details: 'Need someone to say aapne ghabrana nahi.',
        Picture: require('../images/Categories_List/5.png')
    },
    {
        key: '6',
        Name: 'Nawaz Sharif',
        Location: 'DHA Phase-5',
        Order_Details: 'Need an electrician.',
        Picture: require('../images/Categories_List/6.png')
    },
    {
        key: '7',
        Name: 'Abdul Ghafoor',
        Location: 'DHA Phase-5',
        Order_Details: 'Need help with LED TV.',
        Picture: require('../images/Categories_List/4.png')
    },
    {
        key: '8',
        Name: 'Momin',
        Location: 'DHA Phase-5',
        Order_Details: 'My tubelight isn`t working properly.',
        Picture: require('../images/Categories_List/6.png')
    }
]
const SPACING = 20;
const AVATAR_SIZE = 90;
const ITEM_SIZE = AVATAR_SIZE + (SPACING * 3);
//const BigImage = require('../images/Categories_List/P.jpeg') 
export default function App({ navigation }) {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    // const [rating, setRating] = React.useStatse(0)
    // const setTheRating = (Passedrating)=> {
    //     return (
    //         <StarRating
    //         disabled={false}
    //         emptyStar={'ios-star-outline'}
    //         fullStar={'ios-star'}
    //         halfStar={'ios-star-half'}
    //         iconSet={'Ionicons'}
    //         starSize = {15}
    //         display={3.67}
    //         maxStars={5}
    //         rating={Passedrating}
    //         fullStarColor={'blue'}
    // />
    //     ) 
    //     }
    return (<View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Animated.FlatList
            data={DATA}
            keyExtractor={item => item.key}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )
            }
            contentContainerStyle={{
                padding: SPACING,
                paddingTop: StatusBar.currentHeight || 42
            }}
            renderItem={({ item, index }) => {
                const inputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 2),
                ]
                const opacityInputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 0.5),
                ]
                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1, 0]
                })
                const opacity = scrollY.interpolate({
                    inputRange: opacityInputRange,
                    outputRange: [1, 1, 1, 0]
                })
                return (
                    <Animated.View style={{
                        flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'rgba(255,255,255,1)', borderRadius: 12,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.9,
                        shadowRadius: 20,
                        elevation: 10,
                        // opacity,
                        // transform: [{ scale }]
                    }}>
                        <Image
                            source={item.Picture}
                            style={{
                                width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                marginRight: SPACING / 2
                            }}
                        />
                        <View style={{width: 200}}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>{item.Name}</Text>
                            <Text style={{ fontSize: 18, opacity: .7 }}>Location: {item.Location}</Text>
                            <Text style={{ fontSize: 16, opacity: .8}}>Order Details: {item.Order_Details}</Text>
                            <TouchableOpacity>
                                <Button>Proceed</Button>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                )
            }}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    },
    SPHomeButton: {
        marginTop: 3.5,
        marginLeft: 15
    }
})


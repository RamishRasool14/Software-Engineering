import React, { useState,useEffect } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../shared/Pending_Orders_Button';
import { View, Text, Animated, Image, Dimensions, ImageBackground, TextInput, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StarRating from 'react-native-star-rating';
import firebase from "./firebase";

// const DATA = [
//     {
//         key: '1',
//         Name: 'Daniyal Khan',
//         Location: 'DHA Phase-5',
//         Reviews: 'Good service!',
//         Picture: require('../images/Categories_List/1.png'),
//     },
//     {
//         key: '2',
//         Name: 'Ahsan Iqbal',
//         Location: 'DHA Phase-5',
//         Reviews: 'Punctual peformer.',
//         Picture: require('../images/Categories_List/2.png')
//     },
//     {
//         key: '3',
//         Name: 'Saad',
//         Location: 'DHA Phase-5',
//         Reviews: 'Skillful labour.',
//         Picture: require('../images/Categories_List/3.png')
//     },
//     {
//         key: '4',
//         Name: 'Ramish',
//         Location: 'DHA Phase-5',
//         Reviews: 'Great job!',
//         Picture: require('../images/Categories_List/4.png')
//     },
//     {
//         key: '5',
//         Name: 'Imran Khan',
//         Location: 'DHA Phase-5',
//         Reviews: 'Ghabrana nahi hai!',
//         Picture: require('../images/Categories_List/5.png')
//     },
//     {
//         key: '6',
//         Name: 'Nawaz Sharif',
//         Location: 'DHA Phase-5',
//         Reviews: 'Muje kyon nikala?',
//         Picture: require('../images/Categories_List/6.png')
//     },
//     {
//         key: '7',
//         Name: 'Abdul Ghafoor',
//         Location: 'DHA Phase-5',
//         Reviews: 'Excellent work.',
//         Picture: require('../images/Categories_List/4.png')
//     },
//     {
//         key: '8',
//         Name: 'Momin',
//         Location: 'DHA Phase-5',
//         Reviews: 'Could have used a new tool.',
//         Picture: require('../images/Categories_List/6.png')
//     }
// ]
const SPACING = 20;
const AVATAR_SIZE = 90;
const ITEM_SIZE = AVATAR_SIZE + (SPACING * 3);
//const BigImage = require('../images/Categories_List/P.jpeg') 
export default function App({ route,  navigation }) {
    const [DATA, UpdateData]= useState([])
    const fetchData = () => {
        firebase
            .database()
            .ref("/InProgressOrders")
            .on("value", snapshot => {
                if (snapshot.val()!=null){
                const data = Object.values(snapshot.val())
                const InProcessOrders = []
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    if (element.chosenSP.Name == route.params){
                        InProcessOrders.push(element)
                    }
                }
                    
                UpdateData(InProcessOrders) 
            }
            else 
            {
                {const InProcessOrders = []
                UpdateData(InProcessOrders) }
                <Text style = {{fontSize: 16}}> No Orders to show.</Text>
            }
                
        })

    }
    useEffect(() => 
    fetchData(), []);
    
    const scrollY = React.useRef(new Animated.Value(0)).current;
    
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
                    <TouchableOpacity onPress = {() => navigation.navigate('SPInProgressOrderDetail', item)}>
                    <Animated.View style={{
                        key : index,
                        flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'rgba(255,255,255,1)', borderRadius: 12,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.9,
                        shadowRadius: 20,
                        elevation: 10,
                       
                    }}>
                        <Image
                            source={{uri : item.ProfileP}}
                            style={{
                                width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                marginRight: SPACING / 2
                            }}
                        />
                        <View style={{width: 200}}>
                            <Text style={{ fontSize: 16, opacity: .8}}>Order Title: {item.OrderDetails.title}</Text>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Client: {item.ClientName}</Text>
                            <Text style={{ fontSize: 16, opacity: .7 }}>Budget: {item.OrderDetails.budget}</Text>
                            <Text style={{ fontSize: 16, opacity: .8, fontWeight: '700'}}>Tap to View Details</Text>
                        </View>
                    </Animated.View>
                    </TouchableOpacity>

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

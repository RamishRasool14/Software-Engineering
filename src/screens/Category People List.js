import React , { useState }from 'react';
import  { useEffect }from 'react';
import firebase from './firebase';


import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../shared/Button';
import {View, Text, Animated,Image,Dimensions ,ImageBackground,TextInput, StyleSheet, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StarRating from 'react-native-star-rating';






const SPACING = 20;
const AVATAR_SIZE = 90;
const ITEM_SIZE = AVATAR_SIZE + SPACING*3;
const BigImage = require('../images/Categories_List/P.jpeg') 

export default function App ({route, navigation}) {

    const [DATA, UpdateData]= useState([])

    const fetchData = () => {
        firebase
            .database()
            .ref("/users")
            .on("value", snapshot => {
                const data = snapshot.val()
                UpdateData(Object.values(data))
        })

    }

    
    
    useEffect(() => 
    fetchData(), []);
        





        console.log(route.params)

    

        const scrollY = React.useRef( new Animated.Value(0)).current;

        const setTheRating = (Passedrating)=> {

            return (
                <StarRating
                
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                starSize = {15}
                display={3.67}
                maxStars={5}
                rating={Passedrating}
                fullStarColor={'blue'}


        />
            )
            
          }


          

        return( <View style = {{flex: 1, backgroundColor : '#fff'}}> 



        <Animated.FlatList

        data = {DATA}
        keyExtractor = {item => item.key}
        onScroll = {Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true}
        )

        }
        contentContainerStyle = {{


            padding: SPACING,
            paddingTop: StatusBar.currentHeight || 42
        }}
        renderItem = {({item, index}) => {

            const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index+2),

            ]
            const opacityInputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index+0.5),

            ]
            const scale = scrollY.interpolate({
                inputRange,
                outputRange: [1,1,1,0]
            })

            const opacity = scrollY.interpolate({
                inputRange: opacityInputRange,
                outputRange: [1,1,1,0]
            })

            return (

                <TouchableOpacity onPress = {()=> navigation.navigate('ViewProfile')}>
                
                <Animated.View style = {{flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'rgba(255,255,255,1)', borderRadius: 12,
                
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.9,
                shadowRadius: 20,
                elevation: 10,
                opacity,
                transform: [{scale}]                
                }}>
                    <Image
                    
                    source = {{uri : item.Picture}}
                    style = {{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                    
                        marginRight: SPACING/2
                    }}
                    
                    />
                    <View>
                        <Text style = {{fontSize: 22, fontWeight: '700'}}>{item.Name}</Text>
                        <Text style = {{fontSize: 18, opacity: .7}}>Location: {item.Location}</Text>
                        <Text style = {{fontSize: 16, opacity: .8}}>Rating: {

                            setTheRating(item.Rating )



                        }</Text>
                        <Text style =  {{fontSize: 16, opacity: 1, color: '#1a237e'}}>Cost: {item.Cost}</Text>
                    </View>

                </Animated.View>

                </TouchableOpacity>
            )




        }}
        
        
        
        
        />


            
            </View>

        )

    }



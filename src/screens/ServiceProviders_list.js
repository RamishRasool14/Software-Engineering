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
var data1 = []
// var data2 = []
var data_emails = []
export default function App ({route, navigation}) {

    // const [DATA, UpdateData]= useState([])
    const [data2, Updatedata]= useState([])
    // const processPress = (object) => {

    //     const data = route.params
    //     data ['chosenSP'] = object
    //     // navigation.navigate('ViewProfile', data)
    
    // }
    


        

    const fetchData = () => {

        firebase
            .database()
            .ref("/registeredUsers")
            .on("value", snapshot => {
                const var_ = snapshot.val()
                const var2 = Object.values(var_) 
                data1 = var2
                //  console.log(data1)
                // UpdateData(Object.values(data))
        })
        firebase
        .database()
        .ref("/users")
        .on("value", snapshot => {
            const var1_ = snapshot.val()
            const var12 = Object.values(var1_) 
            data_emails = var12
            //  console.log(data1)
            // UpdateData(Object.values(data))
    })
    var data_ = [];
    var i;
    for (i = 0; i < data1.length; i++) {
        const element = data1[i];
        // console.log(element)
        
        if (element.type == "sp") 
        {
            // console.log(element)
            for (let j = 0; j < data_emails.length; j++) {
                const element1 = data_emails[j];
                if(element1.email == element.email)
                {
                    element["Picture"] = element1.Picture
                }
                
            }
            data_.push(element)


        }
        
        
    }

        // console.log(data2)
        // console.log(data_)
        // data2 = Object.values(data_)
        Updatedata(data_)
        // console.log(data2)
        // DATA = data2
        
    }


    useEffect(() => 
    fetchData(), []);
    

        const scrollY = React.useRef( new Animated.Value(0)).current;



          

        return( <View style = {{flex: 1, backgroundColor : '#fff'}}>
            
             <View style = {{marginTop: 40,marginLeft: 70,flexDirection:'row'}} >
                <TouchableOpacity>
                <Text style = {{fontSize: 22,fontWeight: 'bold',textDecorationLine: 'underline'}}>Workers</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=> navigation.navigate('ClientsList')}>
                <Text style = {{fontSize: 22,marginLeft: 130,fontWeight: 'bold',opacity:0.7}}>Clients</Text>
                </TouchableOpacity>
            </View>



        <Animated.FlatList

        data = {data2}
        keyExtractor = {(item,index) => index.toString()}
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

                <TouchableOpacity onPress = {()=> processPress(item)}>
                
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
                        <Text style = {{fontSize: 18, opacity: .7}}>Email: {item.email}</Text>
                        <Text style = {{fontSize: 18, opacity: .7}}>Location: {item.location}</Text>
                        
                        
                    </View>

                </Animated.View>

                </TouchableOpacity>
            )




        }}
        
        
        
        
        />


            
            </View>

        )

    }



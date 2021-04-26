import React , { useState }from 'react';
import  { useEffect }from 'react';
import firebase from './firebase';


import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../shared/Button';
import {View, Text, Animated,Image,Dimensions ,ImageBackground,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StarRating from 'react-native-star-rating';
import TransCard from '../shared/TransCard'
import Card from '../shared/card'


const SPACING = 20;
const AVATAR_SIZE = 90;
const ITEM_SIZE = AVATAR_SIZE + SPACING*3;
const BigImage = require('../images/Categories_List/P.jpeg') 
var totalEarnings = 0
var data_emails = []
var data2 = []

export default function App ({route, navigation}) {

    const [DATA, UpdateData]= useState([])
    const processPress = (object) => {

        const data = route.params
        data ['chosenSP'] = object
        navigation.navigate('ViewProfile', data)
    
    }


        

    const fetchData = () => {
        firebase
            .database()
            .ref("/orders")
            .on("value", snapshot => {
                const data = snapshot.val()
                UpdateData(Object.values(data))
        })

            firebase
            .database()
            .ref("/users")
            .on("value", snapshot => {
                const data = snapshot.val()
                data2 = Object.values(data)})

                for (let j = 0; j < DATA.length; j++) {
                    const element = DATA[j];
                    if(element.status == "completed")
                    {
                        totalEarnings = parseInt(element.payment) + totalEarnings
                        var name = ""
                        
                        for (let k = 0; k < data2.length; k++) {
                            const element2 = data2[k];
                            if ( element2.email == element.sp_email)
                            {
                                element["sp_name"] = element2.Name
                            }
                            if ( element2.email == element.client_email)
                            {
                                element["client_name"] = element2.Name
                            }
                        }
                        data_emails.push(element)
                    }
                    
                }
                // console.log(data_emails)
                // console.log(data_emails)
            

    }


    
    
    useEffect(() => 
    fetchData(), []);
    

        const scrollY = React.useRef( new Animated.Value(0)).current;



        return( 
            <View style = {{flex: 1, backgroundColor : '#fff'}}>
            <ImageBackground
            source = {require('../images/Transactions.png')}
          // source = {require('../images/Trans1.png')}
            style = {styles.backgroundImage}>
        <View >
        <View style = {{alignItems: 'center'}}>
        <Text style = {{fontSize:26,marginTop : 60,marginLeft: 25,letterSpacing: 0.75,color: '#fff',fontWeight:'bold' }}>Total Revenue Generated</Text>
        <Text style = {{fontSize:52,alignItems: 'center',marginTop: 15,letterSpacing: 0.75,color: '#fff',fontWeight:'bold' }}>{totalEarnings}</Text>
        </View>
        <Text style = {{fontSize:26, paddingLeft: 65,marginTop : 40,marginLeft: -20,letterSpacing: 0.75,color: '#000000',fontWeight:'bold' }}>Transactions</Text>  
            
                       



        <Animated.FlatList

        data = {data_emails}
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

                    <View>
                        <Text style = {{fontSize: 18}}>Client: {item.client_name}</Text>
                        <Text style = {{fontSize: 18}}>Serivice Provider: {item.sp_name}</Text>
                        <Text style = {{fontSize: 18}}>Payment: {item.payment}</Text>
                    </View>

                </Animated.View>

                </TouchableOpacity>
            )




        }}
        
        
        
        
        />


            
            </View>
            </ImageBackground>
            </View>

        )

    }
    const styles = StyleSheet.create({


        backgroundImage: {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          position: "absolute",
          top: -24,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }
      
      
      })



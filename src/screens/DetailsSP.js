import React, {useState} from 'react';
import {StyleSheet,Text, View, Image,Animated, ImageBackground, ScrollView, TouchableOpacity, Flatlist} from 'react-native';
import {Feather} from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import StarRating from 'react-native-star-rating';
import { Entypo } from '@expo/vector-icons';


const SPACING = 20;

const DATA = 

    {
        key : '1',
        Name: 'Daniyal Ahmed Khan',
        Expertise: 'Electrician',
        Location: 'DHA Phase-5',
        Rating: 4.5,
        Cost : '800 PKR per hour',
        
        
    }

    


const Post = ({navigation}) =>  {

    const scrollY = React.useRef( new Animated.Value(0)).current;

    const setTheRating = (Passedrating)=> {

        return (
            <StarRating
            
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            starSize = {20}
            display={10}
            maxStars={5}
            rating={Passedrating}
            fullStarColor={'yellow'}


    />
        )
        
      }


    return (

        <View style = {{backgroundColor: 'white', flex: 1}}>
            <ImageBackground
            source = {require('../images/sher.png')}
            style = {styles.image}
            imageStyle = {{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            >
                {/* <TouchableOpacity style = {{position: 'absolute', left: 20, top: 30, 
                
                backgroundColor: '#2E305F', padding: 10, borderRadius: 40}}
                onPress={() => navigation.goBack()}>
                <Feather name = 'arrow-left' size = {22} color = '#fff'/>
                </TouchableOpacity> */}
            </ImageBackground>

            <TouchableOpacity style = {styles.bookBtn}> 
            <Text style = {styles.bookTxt}>Book Now </Text>
            </TouchableOpacity>


            <Text style = {{padding: 14, fontSize: 28, fontWeight: 'bold', color: '#2E305F'}}>About</Text>



                <ScrollView>
            <Animated.View style = {{flexDirection: 'row', padding: SPACING, marginLeft:4,marginRight:4, backgroundColor: 'rgba(255,255,255,1)', borderRadius: 12,
                    
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.9,
                    shadowRadius: 20,
                    elevation: 10,
                    }}>
                        <View>
                            <Text style = {{fontSize: 22, fontWeight: '700', marginBottom: 4, fontWeight: 'bold', color: '#2E305F'}}>{DATA.Name}</Text>
                            <Text style = {{fontSize: 20, opacity: .7, marginBottom: 4}}>Location: {DATA.Location}</Text>
                            <Text style = {{fontSize: 20, opacity: .8, marginBottom: 4}}>Rating: {

                                setTheRating(DATA.Rating )



                            }</Text>
                            <Text style =  {{fontSize: 20, opacity: 0.7, color: 'black',marginBottom: 4}}>Expertise: {DATA.Expertise}</Text>

                            <Text style =  {{fontSize: 20, opacity: 0.6, color: '#2E305F',marginBottom: 15}}>Cost: {DATA.Cost}</Text>
                            <View style = {{flexDirection: 'row' , marginTop: 5}}> 
                            <Entypo name="old-phone" size={30} color="#2E305F"/>

                            <Text style =  {{fontSize: 20, opacity: 0.7, color: 'purple'}}>   +44 7700 900077</Text>
                            </View>
                        </View>

                    </Animated.View>

                    </ScrollView>



















    
             </View>

    )




}
const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},


image : {

    // marginTop: 1,
    // marginLeft: 1,
    // marginRight: 1,
    height: 300,
    justifyContent: 'flex-end'
},

Placename: {

    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 10,

},
bookBtn:{

    position: 'absolute',
    right: 12,
    top: 290,
    backgroundColor: '#2E305F',
    padding: 13,
    borderRadius: 15,


},
bookTxt: {
    color: 'white',
    fontSize: 14,



}





})
export default Post
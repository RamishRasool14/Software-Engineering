import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, TextInput, Image, View, TouchableOpacity ,Text, Dimensions} from "react-native";
import SubmitOrderSvg from "../Icons/SubmitOrderSvg";
import firebase from './firebase'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/SPIcons/titleCard'
import { cos } from "react-native-reanimated";

import StepIndicator from 'react-native-step-indicator';

const {width , height} = Dimensions.get("window");
const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#2E305F',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#2E305F',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#2E305F',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#2E305F',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#2E305F',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#2E305F'
}

const DATA = [
    {
        label: 'Arrival',
        Description : 'Have you arived at the work place?',
        time : new Date() .toString()
       
    },
    {
        label: 'Meeting Client',
        Description : 'Meeting with client was safe?',
        time : new Date() .toString()

    },
    {
        label: 'Job In Progress',
        Description : 'The assigned job is in Progress',
        time : new Date() .toString()

    },
    {
        label: 'Job Complete',
        Description : 'Job has been accomplished',
        time : new Date() .toString()

    },
    {
        label: 'Payment',
        Description : 'Payment has been received',
        time : new Date() .toString()

    }
]

const timestamps = ['','','','','']
export default function App({route, navigation}){
    const [currentPosition, setcurrentPosition ] = useState(0);
 
    const handlePress = () => {
        if (currentPosition<5){
            timestamps[currentPosition] = new Date() .toString()


        setcurrentPosition(currentPosition + 1)
        }
        else
        {
            navigation.navigate('SPReview', route.params)
        }
}
    
return (


    <SafeAreaView> 

    <View style = {styles.indicatorContainer}>

    <StepIndicator
         customStyles={customStyles}
         currentPosition={currentPosition}
         labels={labels}
         direction = "vertical"
         renderLabel = {({position, stepStaus, label, crntPosition} ) => {
             return (

                <View style = {styles.lblContainer}>
                    <Text style = {styles.lblText}>{DATA[position].label}</Text>
                    <Text style = {styles.status}>{DATA[position].Description}</Text>
                    <Text style = {styles.status}>{timestamps[position]}</Text>
                    

                </View>
             )


         }}
    />
    <TouchableOpacity onPress = {() => handlePress()}>
        <Text style = {{color : '#2E305F', alignSelf: 'flex-end', fontSize: 16, fontWeight: 'bold'}}>Next</Text>
    </TouchableOpacity>
    </View>


    </SafeAreaView>    



)}

const styles = StyleSheet.create({

    indicatorContainer : {

        height : height -100,
        width : width -10,
        marginRight: 4,
        padding : 20,
        paddingTop : 0,
        marginLeft : 4,
        elevation : 1,
        borderRadius : 20,
        backgroundColor : "#ffff"


    }, 
    lblContainer : {
        marginTop : 25,
        paddingLeft : 5,
        width : width - 100,


    },
    lblText : {
        fontSize : 18,
        color : '#2E305F',
        fontWeight : 'bold'

    },
    status : {
        opacity : 0.6,
        color: '#2E305F'

    }





})
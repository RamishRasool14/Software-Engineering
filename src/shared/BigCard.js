import React from 'react';
import {StyleSheet, View} from 'react-native';


export default function Card(props){

return (


<View style = {styles.card}>

    <View style = {styles.cardContent}>
     {props.children}
    </View>


</View> 

)}

const styles = StyleSheet.create({


card : {

    borderRadius: 15,
    height: 270,
    width: 320,
    // justifyContent: 'center',

    marginTop: 30,
    marginBottom: 30,
    // alignItems: 'center',

    backgroundColor: '#fff',
    marginLeft: 25,
    marginRight: 25,

    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 6,
    },
shadowOpacity: 0.9,
shadowRadius: 8.30,
borderColor: 'black',
    borderWidth: 0.5,

elevation: 8,


},

cardContent: {



},

linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
    

}
})
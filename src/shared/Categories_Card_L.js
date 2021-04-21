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
    height: 120.75,
    width: 120,

    backgroundColor: '#fff',
    marginLeft: 30,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    shadowRadius: 20,


    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 6,
    },
shadowOpacity: 0.9,
shadowRadius: 8.30,
borderColor: 'black',
borderWidth: 0.5,
elevation: 10,


},

cardContent: {


}

})
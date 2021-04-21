import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


export default function Card(props){

return (

<View style = {styles.card}>

    <View style = {styles.cardContent}>

        <Text style = {{fontWeight: 'bold', fontSize:18, textAlign: 'center', color: '#fff', paddingTop: 7}} >Categories</Text>
    </View>


</View>

)}

const styles = StyleSheet.create({


card : {

    borderRadius: 5,
    height: 45,
    width: 140,
    backgroundColor: '#2E305F',
    marginLeft: 15,

    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 6,
    },
shadowOpacity: 0.9,
shadowRadius: 8.30,

elevation: 8,


},


})
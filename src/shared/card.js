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
    height: 80,
    width: 80,


    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,


    backgroundColor: '#fff',
    marginLeft: 32,
    borderWidth: 0.5,
    borderColor: 'black',


elevation: 5,


},

cardContent: {


}

})
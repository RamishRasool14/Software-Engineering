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
    height: 90,
    width: 120,

    marginTop: 20,


    shadowColor: "#fff",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 60,


    backgroundColor: '#2E305F',
    marginLeft: 32,
    // borderWidth: 0.5,
    borderColor: 'black',


elevation: 5,


},

cardContent: {


}

})
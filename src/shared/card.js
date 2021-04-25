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
    height: 75,
    width: 75,


    shadowColor: "#ffff",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,


    // backgroundColor: '#fff',
    marginLeft: 32,
    // borderWidth: 0.5,
    // borderColor: 'black',


elevation: 2


},

cardContent: {


}

})
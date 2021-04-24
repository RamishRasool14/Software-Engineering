import React from 'react';
import {StyleSheet, View} from 'react-native';


export default function Card(props){
    const Data = props.children

return (

<View style = {styles.card}>

    <View style = {styles.cardContent}>
     {props.children}
    </View>


</View>

)}

const styles = StyleSheet.create({


card : {

    borderRadius: 35,
    // height: 60,
    height : 400,
    width: '100%',
    marginTop : 30,
    marginLeft: 2,
    marginRight: 2,



    shadowColor: "#ffff",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,


    backgroundColor: '#fff',
    opacity: 0.9,


elevation: 1.5


},

cardContent: {


}

})
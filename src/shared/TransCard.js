import React from 'react';
import {StyleSheet, View} from 'react-native';


export default function TransCard(props){

return (

<View style = {styles.card}>

    <View style = {styles.cardContent}>
     {props.children}
    </View>


</View>

)}

const styles = StyleSheet.create({


card : {

    borderRadius: 6,
    height: 62,
    width: 400,

    backgroundColor: '#fff',
    marginLeft: 6,
    marginTop: 1.5,

    shadowColor: "#000",
    // shadowOffset: {
	// width: 0,
	// height: 6,
    // },
shadowOpacity: 0.9,
shadowRadius: 8.30,

elevation: 8,


},

cardContent: {


}

})
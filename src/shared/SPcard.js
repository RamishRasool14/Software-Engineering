import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function Card(props) {

    return (

        <View style={styles.card}>

            <View style={styles.cardContent}>
                {props.children}
            </View>


        </View>

    )
}

const styles = StyleSheet.create({


    card: {

        borderRadius: 50,
        height: 59,
        width: 64,

        backgroundColor: '#fff',
        left: 25,
        top: 12,

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
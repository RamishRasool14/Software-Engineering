import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function AdminBCard(props) {

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

        borderRadius: 15,
        height: 90,
        width: 85,

        backgroundColor: '#fff',
        marginLeft: 25,
        marginTop: 10,

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
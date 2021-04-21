import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


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

        borderRadius: 5,
        height: 30,
        width: 56,
        backgroundColor: '#2E305F',
        elevation: 8,
        marginTop: 0,
        marginLeft: 45
    },


})
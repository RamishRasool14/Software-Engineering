import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default function Card(props) {

    return (

        <View style={styles.card}>

            <View style={styles.cardContent}>

                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#fff', paddingTop:0 }} >Proceed</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        height: 30,
        width: 90,
        backgroundColor: '#2E305F',
        marginLeft: 50,
        marginTop: 10,
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
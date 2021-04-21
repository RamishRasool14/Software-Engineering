import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SPbutton from '../shared/SPButtonsCard';
import { View, Text, Image, Dimensions, ImageBackground, TextInput, StyleSheet } from 'react-native';
import SPHomeButton from '../Icons/SPHomeButton'
import { Actions } from 'react-native-router-flux';

export default class Pending_Orders_List extends React.Component {
    state = {
        isFontLoaded: false
    }

    home() {
        Actions.service_provider_dashboard()
    }

    render() {
        return (
            <ImageBackground source={require('../images/SPdashboard.png')} style={styles.backgroundImage}>
                <Text style={{ position: 'absolute', textAlign: 'center', fontStyle: 'normal', fontWeight: 'bold', top: 30, left: 50, fontSize: 25, color: '#FFFFFF' }}>Pending Orders</Text>
                <Text style={{ position: 'absolute', textAlign: 'center', fontStyle: 'normal', fontWeight: 'bold', top: 270, left: 15, fontSize: 18, color: '#000000' }}>No pending orders! Better start working :)</Text>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 107,
                    marginTop: 560,
                }}>
                    <TouchableOpacity onPress={this.home}>
                        <SPbutton>
                            <SPHomeButton style={styles.SPHomeButton} />
                        </SPbutton>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    },
    SPHomeButton: {
        marginTop: 3.5,
        marginLeft: 15
    }
})
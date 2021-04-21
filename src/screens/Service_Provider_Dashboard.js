import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
// import { SearchBar } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/SPcard';
import SPSmallCard from '../shared/SPsmallCard';
import SPbutton from '../shared/SPButtonsCard';
import { View, Text, Image, Dimensions, ImageBackground, TextInput, StyleSheet } from 'react-native';
import CompletedOrders from '../Icons/CompletedOrders'
import PendingOrders from '../Icons/PendingOrders'
import Reviews from '../Icons/Reviews'
import SPGraph from '../Icons/SPGraphStats'
import SPHomeButton from '../Icons/SPHomeButton'
import SPMsgButton from '../Icons/SPMsgButton'
import SPNotificationButton from '../Icons/SPNotificationButton'
import SPProfileButton from '../Icons/SPProfileButton'
// import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {

    // checkCompletedOrders()
    // {
    //     Actions.completed_orders_list()
    // }
    // checkPendingOrders()
    // {
    //     Actions.pending_orders_list()
    // }
    // checkReviews()
    // {
    //     Actions.reviews_list()
    // }
    // reload()
    // {
    //     Actions.service_provider_dashboard()
    // }


    state = {
        isFontLoaded: false
    }
    render() {

        return (
            <ImageBackground
                source={require('../images/SPdashboard.png')}
                style={styles.backgroundImage}>
                
                <View style={{
                    flexDirection: "row",
                    marginTop: 35,
                    marginLeft: 10,
                }}>
                    <Card>
                    </Card>
                    <Text style={{position: 'absolute', width: 169, height: 37, left: 115,top: 23,fontStyle: 'normal', fontWeight: 'bold',fontSize: 22,lineHeight: 25,letterSpacing: 0.075, color: '#FFFFFF'}}>Hi, Rana!</Text>
                    
                </View>
                {/* <View>
                    <Text style={{ position: 'absolute', width: 69, height: 69, left: 60, top: 38, fontStyle: 'normal', fontWeight: 'bold', fontSize: 17, lineHeight: 19, letterSpacing: 0.075, color: '#2E305F' }}>Orders</Text>
                </View> */}
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 4,
                    marginTop: 60,
                }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('SPCompleted')}>
                        <SPSmallCard>
                            <CompletedOrders style = {styles.CompletedOrders}/>
                            <Text style={{ fontSize: 11, paddingLeft: 16, marginTop: 9, letterSpacing: 0.075, color: '#2E305F', fontWeight: 'bold' }}>Completed</Text>
                        </SPSmallCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('SPPending')}>
                        <SPSmallCard>
                            <PendingOrders style = {styles.PendingOrders}/>
                            <Text style={{ fontSize: 11, paddingLeft: 24, marginTop: 11, letterSpacing: 0.075, color: '#2E305F', fontWeight: 'bold' }}>Pending</Text>
                        </SPSmallCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('SPReviews')}>
                        <SPSmallCard>
                            <Reviews style = {styles.Reviews}/>
                            <Text style={{ fontSize: 11, paddingLeft: 24, marginTop: 14, letterSpacing: 0.075, color: '#2E305F', fontWeight: 'bold' }}>Reviews</Text>
                        </SPSmallCard>
                    </TouchableOpacity>
                </View>
                <ImageBackground source={require('../images/SPStats.png')}
                style={styles.StatsImage}>
                    <View>
                        <Text style={{ position: 'absolute', width: 93.7, height: 69, left: 15, top: 12, fontStyle: 'normal', fontWeight: 'bold', fontSize: 17, lineHeight: 19, letterSpacing: 0.075, color: '#FFFFFF' }}>Earnings</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginLeft: 10,
                    }}>
                        <Text style={{ position: 'absolute', width: 100.83, height: 19.57, left: 15, top: 12, fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 17, letterSpacing: 0.075, color: '#FFFFFF' }}>Total Balance :</Text>
                        <Text style={{ position: 'absolute', width: 55, height: 20.79, left: 250, top: 12, fontStyle: 'normal', fontWeight: 'bold', fontSize: 14, lineHeight: 17, letterSpacing: 0.075, color: '#FFFFFF' }}>$5,289</Text>
                    </View>
                    <ImageBackground source={require('../images/GraphBackGround.png')}
                        style={styles.GraphBackG}>
                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 0,
                            marginTop: 0,
                        }}>
                            <View style={{
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Text style={{ position: 'absolute', width: 116.1, height: 34.25, left: 12, top: 12, fontStyle: 'normal', fontWeight: 'normal', fontSize: 12, lineHeight: 14, letterSpacing: 0.075, color: '#2E305F' }}>Earnings in March :</Text>
                                <Text style={{ position: 'absolute', width: 52.96, height: 20.79, left: 12, top: 40, fontStyle: 'normal', fontWeight: 'bold', fontSize: 15, lineHeight: 17, letterSpacing: 0.075, color: '#2E305F' }}>$1,289</Text>
                            </View>
                            <SPGraph style={styles.SPGraph}/>
                        </View>
                    </ImageBackground>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 120,
                        marginLeft: 10,
                    }}>
                        <Text style={{ position: 'absolute', width: 138.51, height: 19.57, left: 15, top: 12, fontStyle: 'normal', fontWeight: 'normal', fontSize: 14, lineHeight: 16, letterSpacing: 0.075, color: '#FFFFFF' }}>Pending Clearance :</Text>
                        <Text style={{ position: 'absolute', width: 55, height: 20.79, left: 250, top: 12, fontStyle: 'normal', fontWeight: 'bold', fontSize: 14, lineHeight: 17, letterSpacing: 0.075, color: '#FFFFFF' }}>$1,200</Text>
                    </View>
                    <View>
                        <Text style={{ position: 'absolute', width: 93.7, height: 22.02, left: 15, top: 45, fontStyle: 'normal', fontWeight: 'bold', fontSize: 17, lineHeight: 19, letterSpacing: 0.075, color: '#FFFFFF' }}>To-Dos</Text>
                    </View>
                    <View>
                        <Text style={{ position: 'absolute', width: 201, height: 18, left: 25, top: 75, fontStyle: 'normal', fontWeight: '500', fontSize: 12, lineHeight: 18, letterSpacing: 0.075, color: '#FFFFFF' }}>You have 2 Unread Messages</Text>
                    </View>
                    <View>
                        <Text style={{ position: 'absolute', width: 201, height: 18, left: 25, top: 95, fontStyle: 'normal', fontWeight: '500', fontSize: 12, lineHeight: 18, letterSpacing: 0.075, color: '#FFFFFF' }}>You have a new order!</Text>
                    </View>
                </ImageBackground>
                {/* <View style={{
                    flexDirection: "row",
                    marginTop: 330,
                    marginLeft: 10,
                }}>
                    <TouchableOpacity onPress={this.reload}>
                        <SPbutton>
                            <SPHomeButton style={styles.SPHomeButton}/>
                        </SPbutton>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SPbutton>
                            <SPMsgButton style={styles.SPMsgButton}/>
                        </SPbutton>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SPbutton>
                            <SPNotificationButton style={styles.SPNotificationButton} />
                        </SPbutton>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SPbutton>
                            <SPProfileButton style={styles.SPProfileButton} />
                        </SPbutton>
                    </TouchableOpacity>
                </View> */}
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        top: -24,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    },
    StatsImage: {
        position: "absolute",
        width: 331,
        height: 308,
        top: 270,
        left: 18,
        zIndex: -0.5
    },
    GraphBackG: {
        position: 'absolute',
        width: 302.48,
        height: 84.4,
        top: 70,
        left: 15,
        zIndex: -0.4
    },
    container: {
        width: '83%',
        height: 47,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 40,
        marginTop: 70,
        shadowColor: "#000",
        marginBottom: 30,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.81,
        shadowRadius: 9.11,
        elevation: 14,
    },
    PendingOrders: {
        marginTop: 10,
        marginLeft: 25
    },
    CompletedOrders: {
        marginTop: 10,
        marginLeft: 25
    },
    Reviews: {
        marginTop: 10,
        marginLeft: 20
    },
    SPGraph: {
        marginTop: 0,
        marginLeft: 180
    },
    // SPHomeButton: {
    //     marginTop: 3.5,
    //     marginLeft: 15
    // },
    SPMsgButton: {
        marginTop: 3.5,
        marginLeft: 16
    },
    SPNotificationButton: {
        marginTop: 5,
        marginLeft: 18.5
    },
    SPProfileButton: {
        marginTop: 4,
        marginLeft: 16.5
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 12,
        fontSize: 16
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '40%'
    }
})
import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SPSmallCard from '../shared/SPsmallCard';
import { View, Text, Image, Dimensions, ImageBackground, TextInput, StyleSheet } from 'react-native';
import CompletedOrders from '../Icons/CompletedOrders'
import PendingOrders from '../Icons/PendingOrders'
import Reviews from '../Icons/Reviews'
import SPGraph from '../Icons/SPGraphStats'
import firebase from './firebase'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isFontLoaded : false,
          username : '' ,
          ProfileP: null,
    
        };
    
    
      }

    SetScreen (){
        firebase
          .database()
          .ref("/usernames/user2")
          .on("value", snapshot => {
            const name = snapshot.val().name
            const Profile = snapshot.val().PP
            this.setState(prevstate => ({
              username:name,
              ProfileP: Profile,
            })
            )})
    
    }
    componentDidMount () {
      this.SetScreen()
     
    }
    

   
    render() {

        return (
            <View style = {styles.backgroundImage}>

             <View style = {styles.image}> 

             <View style = {{flexDirection:'row'}}>

            
              <Text style = {{fontSize : 28, color: "white" , marginTop: 55,  marginLeft:30}}>{this.state.username} {'\n'}  <Text style = {{fontSize : 18,color: "white", marginTop: 0}}>It's time to make money</Text></Text> 
              <TouchableOpacity onPress = {() => this.props.navigation.navigate('ViewSPProfile', this.state.data)}>
             
              <Image
                    
                    source = {{uri : this.state.ProfileP}}
                    style = {{width: 65, height: 65, marginTop: 60, marginLeft:55, borderRadius: 2,
                    
                  }}
              />
              </TouchableOpacity>

              

                </View>
             </View>

                <View style={{
                    flexDirection: 'row',
                    marginLeft: 4,
                    marginTop: 10
                }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('SPCompleted', this.state.username)}>
                        <SPSmallCard>
                            <CompletedOrders style = {styles.CompletedOrders}/>
                            <Text style={{ fontSize: 11, paddingLeft: 16, marginTop: 9, letterSpacing: 0.075, color: '#2E305F', fontWeight: 'bold' }}>Completed</Text>
                        </SPSmallCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('SPPending',this.state.username)}>
                        <SPSmallCard>
                            <PendingOrders style = {styles.PendingOrders}/>
                            <Text style={{ fontSize: 11, paddingLeft: 24, marginTop: 11, letterSpacing: 0.075, color: '#2E305F', fontWeight: 'bold' }}>Pending</Text>
                        </SPSmallCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('SPInProgress', this.state.username)}>
                        <SPSmallCard>
                            <Reviews style = {styles.Reviews}/>
                            <Text style={{ fontSize: 11, paddingLeft: 24, marginTop: 10, letterSpacing: 0.075, color: '#2E305F', fontWeight: 'bold' }}>In Progress</Text>
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
                
            </View>

        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        top: -10,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundColor: 'white'
    },
    StatsImage: {
        position: "absolute",
        width: 331,
        height: 308,
        marginTop: 300,
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
        marginTop: 15,
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
    },
    image : {
        height: 160,
        borderBottomLeftRadius: 30,
        backgroundColor: '#2E305F'
    }
})
import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
// import { SearchBar } from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../shared/card';
import BigCard from '../shared/BigCard';
import AdminBCard from '../shared/AdminBCard';
import AdminSCard from '../shared/AdminSCard';
import Button from '../shared/Button';
import {View, Text, Image,Dimensions ,ImageBackground,TextInput, StyleSheet} from 'react-native';
import AdminImage from '../Icons/AdminImage';
import TransactionsSVG from '../Icons/TransactionSVG' 
import AdminComplaints from '../Icons/AdminComplaints' 
import Users from '../Icons/Users';


export default class Home extends React.Component {

  state = {
    isFontLoaded : false
  }
    render(){

        return (
          <ImageBackground
          source = {require('../images/Adminpic2.png')}
          style = {styles.backgroundImage}>


                {/* <View style = {styles.container}>

                <TextInput placeholder = 'Search by Username.. ' style = {styles.searchInput}/>

                </View> */}
                <View style = {{
                  flexDirection : "row",
                  marginTop : 50,
                  marginLeft:5,}}>
                    <Icon name = "menu" size = {50} color = "#ffffff" style = {{marginLeft:10,marginTop:-15, paddingBottom: 15}}/>
                <Text style = {{fontSize:22, paddingLeft: 65,textShadowColor:'rgba(255, 255,255,0.5)',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : -10,letterSpacing: 0.75,color: '#ffffff',fontWeight:'bold' }}>Daniyal Ahmad</Text>
                <Card>
                  {/* <AdminImage style = {{
                  marginTop : 5,
                  marginLeft:0,
                  }}></AdminImage> */}
                </Card>
                </View>
                <Text style = {{fontSize:12,textShadowColor:'rgba(255, 255,255,0.50)',textShadowOffset:{width: -1, height: 1}, paddingLeft: 140,marginTop : -35,letterSpacing: 0.75,color: '#ffffff',fontWeight:'bold' }}>Operational Manager</Text>

                <View style = {{
                  marginTop : 20,
                  marginLeft:25,

                //   alignItems : "center",
                //   paddingHorizontal: 40 
              }}>

                  <TouchableOpacity>
                    <AdminBCard>
                    <Text style = {{fontSize:22, paddingLeft: 90,letterSpacing: 0.75,color: '#214F94',fontWeight:'bold' }}>Transactions</Text>
                    <TransactionsSVG style = {styles.TransactionsSVG}/>
                    <Text style = {{fontSize:14, paddingLeft: 115,letterSpacing: 0.75,color: '#000000',fontWeight:'bold' }}>Tap to view</Text>
                    </AdminBCard>
                    
                  </TouchableOpacity>
                </View>
                <View style = {{
                  flexDirection : "row",
                  marginTop : 22,
                  marginLeft:35,

                //   alignItems : "center",
                //   paddingHorizontal: 40 
              }}>


                  <TouchableOpacity>
                    <AdminSCard>

                      
                      <AdminComplaints style = {styles.AdminComplaints}/>
                      <Text style = {{fontSize:16, paddingLeft: 25,marginTop : 10,letterSpacing: 0.75,color: '#214F94',fontWeight:'bold' }}>Complaints</Text>
                      <Text style = {{fontSize:12, paddingLeft: 35,letterSpacing: 0.75,color: '#000000',fontWeight:'bold' }}>Tap to view</Text>
                      </AdminSCard>
                  </TouchableOpacity>
                 
                  <TouchableOpacity>
                    <AdminSCard>

                    <Users style = {styles.Users}/>
                    <Text style = {{fontSize:16, paddingLeft: 45,marginTop : -20,letterSpacing: 0.75,color: '#214F94',fontWeight:'bold' }}>Users</Text>
                    <Text style = {{fontSize:12, paddingLeft: 35,letterSpacing: 0.75,color: '#000000',fontWeight:'bold' }}>Tap to view</Text>
                    </AdminSCard>
                  </TouchableOpacity>
                  
                  
                  
                </View>
                {/* <Text style = {{fontSize:26,textShadowColor:'rgba(255, 255,255,0.50)',textShadowOffset:{width: -1, height: 1}, paddingLeft: 140,marginTop : 80,letterSpacing: 0.75,color: '#000000',fontWeight:'bold' }}>Dashboard</Text> */}

                
                
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
    container : {

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
    TransactionsSVG : {
      marginLeft: 40,
      marginTop: 25,

    },
    BigCardSVG : {

      marginTop: 0,
      marginLeft: 130 

    },
    AdminComplaints : {
      marginLeft: 15,
      marginTop: 25,

    },
    Users : {
      marginLeft: 0,
      marginTop: -90,

    },
    searchInput : {
      width: '100%',
      height: '100%',
      paddingLeft: 12,
      fontSize: 16
    },
    column : {

      flexDirection: 'column',
      alignItems: 'center',
      width: '40%'

    }



})
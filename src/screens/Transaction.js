import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
// import { SearchBar } from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, Image,Dimensions ,ImageBackground,TextInput, StyleSheet} from 'react-native';

import {Actions} from 'react-native-router-flux';
import TransCard from '../shared/TransCard'
import Card from '../shared/card'

export default class Home extends React.Component {

  state = {
    isFontLoaded : false
  }
    render(){

        return (
          <ImageBackground
          source = {require('../images/Transactions.png')}
        // source = {require('../images/Trans1.png')}
          style = {styles.backgroundImage}>


                {/* <View style = {styles.container}>

                <TextInput placeholder = 'Search by Username.. ' style = {styles.searchInput}/>

                </View> */}
                <View style = {{
                  flexDirection : "row",
                  marginTop : 50,
                  marginLeft:5,}}>
                <Icon name = "menu" size = {50} color = "#ffffff" style = {{marginLeft:10,marginTop:-15, paddingBottom: 15}}/>
                <Text style = {{fontSize:22, paddingLeft: 65,textShadowColor:'rgba(255, 255,255,0.5)',textAlign:'center',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : -10,letterSpacing: 0.75,color: '#ffffff',fontWeight:'bold' }}>Transactions</Text>
                
                </View>
                <View style = {{ marginLeft: 290,
                marginTop: -70,

                }}>
                <Card>
                </Card>
                </View>

                <View style = {{
                  marginTop : 20,
                  marginLeft:25,
                  
                  

                //   alignItems : "center",
                //   paddingHorizontal: 40 
              }}>
                  <Text style = {{fontSize:18,fontWeight: 'bold' ,marginLeft: 50,letterSpacing: 0.75,color: '#ffffff' }}>Total</Text>
                  <Text style = {{fontSize:48,fontWeight: 'bold' , textAlign: 'center',letterSpacing: 0.75,color: '#ffffff' }}>$232,222</Text>
                  <Text style = {{fontSize:18,fontWeight: 'bold' ,marginLeft: 50,letterSpacing: 0.75,color: '#ffffff' }}>August</Text>
                  <Text style = {{fontSize:12,fontWeight: 'bold' ,marginLeft: 50,letterSpacing: 0.75,color: '#ffffff' }}>Profit Percentage: </Text>



                </View>
                <View style = {{
                  marginTop : 102,
                  marginLeft:45,

                //   alignItems : "center",
                //   paddingHorizontal: 40 
              }}>
                  <Text style = {{fontSize:30,fontWeight: 'bold' , letterSpacing: 0.75,color: '#23344E' }}>Transactions</Text>
                  




                  
                  
                  
                </View>
                <View style = {{marginTop: 20}}>
                    <TransCard>
                    <View style = {{flexDirection: 'row',marginTop: 18,marginLeft: 12}}>
                    <Text style = {{fontSize:16,fontWeight: 'bold' ,textAlign:'center', letterSpacing: 0.75,color: '#23344E' }}>Ahmed Faraz</Text>
                    <Text style = {{fontSize:14,marginTop:2.3,letterSpacing: 0.75,color: '#23344E' }}>  paid $200 to Waheed Murad</Text>
                    </View>
                    </TransCard>
                    <TransCard>
                    <View style = {{flexDirection: 'row',marginTop: 18,marginLeft: 12}}>
                    <Text style = {{fontSize:16,fontWeight: 'bold' ,textAlign:'center', letterSpacing: 0.75,color: '#23344E' }}>Ahmed Faraz</Text>
                    <Text style = {{fontSize:14,marginTop:2.3,letterSpacing: 0.75,color: '#23344E' }}>  paid $200 to Waheed Murad</Text>
                    </View>
                        
                    </TransCard>
                    <TransCard>
                    <View style = {{flexDirection: 'row',marginTop: 18,marginLeft: 12}}>
                    <Text style = {{fontSize:16,fontWeight: 'bold' ,textAlign:'center', letterSpacing: 0.75,color: '#23344E' }}>Ahmed Faraz</Text>
                    <Text style = {{fontSize:14,marginTop:2.3,letterSpacing: 0.75,color: '#23344E' }}>  paid $200 to Waheed Murad</Text>
                    </View>
                        
                    </TransCard>

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
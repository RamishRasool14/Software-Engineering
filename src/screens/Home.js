import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../shared/card';
import BigCard from '../shared/BigCard';
import Button from '../shared/Button';
import {View, Text, Image,Dimensions ,ImageBackground,TextInput, StyleSheet} from 'react-native';
import Cloud from '../Icons/cloud';
import History from '../Icons/History';
import InProcess from '../Icons/InProcess';
import BigCardSVG from '../Icons/BigCardIcon';
import Search from '../Icons/search';
import {Feather} from '@expo/vector-icons'

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
    container : {

      width: '83%',
      height: 47,
      backgroundColor: 'white',
      borderRadius: 10,
      marginLeft: 40,
      flexDirection:'row',

      marginTop: 50,
      shadowColor: "#000",
      marginBottom: 30,
      shadowOffset: {
	    width: 0,
	    height: 7,
      },
    shadowOpacity: 0.81,
    shadowRadius: 9.11,
    borderColor: 'black',
    borderWidth: 0.5,

    elevation: 14,


    },
    image : {
      height: 210,
      borderBottomLeftRadius: 30,
      backgroundColor: '#2E305F'
  },
    cloud : {
      marginLeft: 17,
      marginTop: 15,

    },
    BigCardSVG : {

      marginTop: 0,
      marginLeft: 90 

    },
    history : {
      marginLeft: 17,
      marginTop: 19,

    },
    InProcess : {
      marginLeft: 17,
      marginTop: 19,

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

    },
    ProfileIcon : {

      width: 10,
      height: 10
    }



})

export default class Home extends React.Component {

  state = {
    isFontLoaded : false
  }
    render(){

        return (
          <View style = {{backgroundColor: 'white'}}>
              <View style = {styles.image}>   

                <View style = {{flexDirection:'row'}}>

              <Text style = {{fontSize : 28, color: "white" , marginTop: 50,  marginLeft:20}}> Robert Williamson</Text> 
              

                </View>
            <Text style = {{fontSize : 18,color: "white", marginLeft:27, marginTop: 10}}>We're glad that you are here!</Text>

                      
              <View style = {styles.container}>

              <View style = {{marginLeft: 10, marginTop: 12}}>
              <Feather  name = 'search' size = {22} color = '#2E305F'/>
              </View>

              <TextInput placeholder = 'Search by Username.. ' style = {styles.searchInput}/> 



              </View>

                
            </View>
          


                <View style = {{flexDirection:'row', marginTop: 40}}>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('CompletedOrders')}>
                    <Card>

                    <Cloud style = {styles.cloud}/>
                    </Card>
                    
                  </TouchableOpacity>




                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('ViewProfile')}>
                    <Card>

                      
                      <History style = {styles.history}/>
                      


                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>

                    <InProcess style = {styles.InProcess}/>


                    </Card>
                  </TouchableOpacity>

                </View>

                <View style = {{flexDirection:'row'}}>

                  
                <Text style = {{fontSize:17, paddingLeft: 40, paddingTop:10}}>Completed</Text>
                <Text style = {{fontSize:17, paddingLeft: 30, paddingTop:10}}>Order History</Text>
                <Text style = {{fontSize:17, paddingLeft: 25, paddingTop:10}}>In Process</Text>
                  

                </View>
                <BigCard>
                
                <View style = {{flexDirection:'row'}}>
                    <View  style = {styles.column}>
                    <Text style = {{fontSize: 27, fontWeight: 'bold', paddingLeft: 22, paddingTop: 10, lineHeight: 40,
}}>Looking for a Service Provider?</Text>
                    </View>

                    <View style = {{paddingTop: 15}}>
                    <BigCardSVG />

                    </View>

                </View>

                <View>                
                  
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Detail')}>

                  <Button />
                </TouchableOpacity>

                </View>

                
                </BigCard>

                </View>
            

        

        );

    }


}
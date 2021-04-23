import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Cardl from '../shared/Categories_Card_L';
import Cardr from '../shared/Categories_Card_R';
import BigCard from '../shared/BigCard';
import Button from '../shared/Button';
import {View, Text, Image,Dimensions ,ImageBackground,TextInput, StyleSheet} from 'react-native';
import Gardener from '../images/gardener.jpg'
import Electrican from '../images/Electrician.jpg'
import Mechanic from '../images/Mechanic.jpg'
import Plumber from '../images/Pl.jpg'
import Labor from '../images/Labor.jpg'
import CarWasher from '../images/CarWasher.jpg'
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
      flexDirection:'row',

      backgroundColor: 'white',
      borderRadius: 10,
      marginLeft: 40,
      marginTop: 12,
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
    
    cloud : {
      marginLeft: 25,
      marginTop: 25,

    },
    BigCardSVG : {

      marginTop: 0,
      marginLeft: 130 

    },
    history : {
      marginLeft: 25,
      marginTop: 25,

    },
    InProcess : {
      marginLeft: 25,
      marginTop: 25,

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

export default class Home extends React.Component {
  constructor(props){
    super(props);
  }

  state = {
    isFontLoaded : false,
    data : this.props.route.params,
    chosenCategory : ''
    
  }

  processPress = (categoryName,id) => {

    this.setState(prevstate => ({
      data : {
        ...prevstate.data,
        chosenCategory : id
      }
    }), () => {
      this.props.navigation.navigate(categoryName, this.state.data)
      // console.log(this.state.data)
    }
    )
  }

  
  
    render(){

        return (
          <View>
          


                {/* <View>
                    <Text style = {{fontSize: 27, fontWeight: 'bold', paddingLeft: 22, paddingTop:20, lineHeight: 40, color: 'white'
                }}>Service Provider</Text>
                <Text style = {{fontSize: 27, fontWeight: 'bold', paddingLeft: 22, lineHeight: 40, color: 'white'
                }}>Categories</Text>
                </View> */}


                
                

                <View style = {styles.container}>
                <View style = {{marginLeft: 10, marginTop: 12}}>
                <Feather  name = 'search' size = {22} color = '#2E305F'/>
                </View>
                <TextInput placeholder = "Search Categories.."
 style = {styles.searchInput}/> 
                

                </View>

                <ScrollView> 

                <View style = {{flexDirection:'row'}}>

                <TouchableOpacity  onPress = {() => this.processPress('CompletedOrders','Gardener')} >

                    <Cardl>
                  <Image source={Gardener} alt="Logo" style = {{width: 100, height : 110, paddingLeft: 70}} />
                    </Cardl>
                  </TouchableOpacity>



                  <TouchableOpacity onPress = {() => this.processPress('CompletedOrders' , 'Electrician')}>
                    <Cardr>
                  <Image source={Electrican} alt="Logo" style = {{width: 80, height :110 , paddingLeft: 70}} />
                    </Cardr>
                  </TouchableOpacity>


                </View>

                <View style = {{flexDirection:'row'}}>

                  
<Text style = {{fontSize:17, paddingLeft: 60, paddingTop:10, paddingBottom: 20}}>Gardener</Text>
<Text style = {{fontSize:17, paddingLeft: 80, paddingTop:10,  paddingBottom: 20}}>Electrican</Text>
  
                </View>



                <View style = {{flexDirection:'row'}}>

                <TouchableOpacity onPress = {() => this.processPress('CompletedOrders' , 'Mechanic')}>

                <Cardl>
              <Image source={Mechanic} alt="Logo" style = {{width: 100, height : 100, paddingLeft: 70}} />

                </Cardl>

                </TouchableOpacity>



                <TouchableOpacity onPress = {() => this.processPress('CompletedOrders' , 'Plumber')}>

                  <Cardr>

                <Image source={Plumber} alt="Logo" style = {{width: 60, height :100 , paddingLeft: 80, paddingBottom: 80}} />



                  </Cardr>
                </TouchableOpacity>


</View>

<View style = {{flexDirection:'row'}}>


<Text style = {{fontSize:17, paddingLeft: 60, paddingTop:8, paddingBottom: 20}}>Mechanic</Text>
<Text style = {{fontSize:17, paddingLeft: 80, paddingTop:8, paddingBottom: 20}}>Plumber</Text>

</View>





              <View style = {{flexDirection:'row'}}>

              <TouchableOpacity onPress = {() => this.processPress('CompletedOrders' , 'Labor')}>
                    <Cardl>
                  <Image source={Labor} alt="Logo" style = {{width: 100, height : 110, paddingLeft: 70}} />

                    </Cardl>
                  
                  </TouchableOpacity>



                  <TouchableOpacity onPress = {() => this.processPress('CompletedOrders' , 'CarWasher')}>

                    <Cardr>

                  <Image source={CarWasher} alt="Logo" style = {{width: 80, height :110 , paddingLeft: 70}} />



                    </Cardr>
                  </TouchableOpacity>


                </View>

                <View style = {{flexDirection:'row'}}>

                  
<Text style = {{fontSize:17, paddingLeft: 60, paddingTop:10,paddingBottom: 20}}>Labor</Text>
<Text style = {{fontSize:17, paddingLeft: 100, paddingTop:5,paddingBottom: 20}}>Car Washer</Text>
  
                </View>


                </ScrollView>

           </View>
            

        

        );

    }


}
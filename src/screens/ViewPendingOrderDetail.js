import React from "react";
import { Alert, SafeAreaView, StyleSheet, TextInput, Image, View, TouchableOpacity ,Text} from "react-native";
import SubmitOrderSvg from "../Icons/SubmitOrderSvg";
import firebase from './firebase'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/SPIcons/titleCard'
import { cos } from "react-native-reanimated";
class AutoExpandingTextInput extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      
      PassedData: {},
    
    
    };
  }

  processPressAccept(){

    const FinalOrder = this.props.route.params

    
    firebase
      .database()
      .ref('InProgressOrders')
      .push()
      .set(FinalOrder)
    .then(()=> {

      var KeysOfOrders = []
    var FinalPath = ''
    const title = this.props.route.params.OrderDetails.title


    firebase.database().ref('Orders').on("value", function(snapshot) {      
      snapshot.forEach(function(data) {
        KeysOfOrders.push(data.key)
      })
  });
  console.log(KeysOfOrders)
  KeysOfOrders.forEach(element => {
    var PATH = 'Orders/'+element+'/'+'OrderDetails/'+'title'
    firebase.database().ref(PATH).on("value", function(snapshot) {
      if(snapshot.val()==title){
        FinalPath = 'Orders/'+element
      }
            
  });
});


  
  let userRef = firebase.database().ref(FinalPath);
  userRef.remove()
      this.props.navigation.navigate('SPInProgress', this.props.route.params.chosenSP.Name)
    })

  }
  processPressDecline(){
    var KeysOfOrders = []
    var FinalPath = ''
    const title = this.props.route.params.OrderDetails.title


    firebase.database().ref('Orders').on("value", function(snapshot) {      
      snapshot.forEach(function(data) {
        KeysOfOrders.push(data.key)
      })
  });
  console.log(KeysOfOrders)
  KeysOfOrders.forEach(element => {
    var PATH = 'Orders/'+element+'/'+'OrderDetails/'+'title'
    firebase.database().ref(PATH).on("value", function(snapshot) {
      if(snapshot.val()==title){
        FinalPath = 'Orders/'+element
      }
            
  });
});


  
  let userRef = firebase.database().ref(FinalPath);
  userRef.remove()
  this.props.navigation.navigate('SPPending')




  }

  // .orderByChild('name').equalTo('John Doe')

  showAlert1() {  
    Alert.alert(  
        'Confirm Order',  
        'Do you want to accept this order?',  
        [  
            {  
                text: 'Cancel',  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => this.processPressAccept()},  
        ]  
    );  
}
 
showAlert2() {  
  Alert.alert(  
      'Decline Order',  
      'Are you sure you want to decline?',  
      [  
          {  
              text: 'Cancel',  
              style: 'cancel',  
          },  
          {text: 'OK', onPress: () => this.processPressDecline()},  
      ]  
  );  
}
 
  render() {
        
    return (

      <SafeAreaView>
     <View style={{ alignSelf: "center" }}>
     <View style={styles.profileImage}>
         <Image source={{uri : this.props.route.params.ProfileP}} style={styles.image} resizeMode="center"></Image>
     </View>

     <TouchableOpacity  style={styles.dm}> 
     <View>
         <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
     </View>
     </TouchableOpacity>
     <View style={styles.active}></View>
     <Text style={[styles.text, { color: "black", fontSize: 18, marginLeft: 35 }]}>{this.props.route.params.ClientName}</Text>

</View>

      <Card>

        <Text style = {{marginTop: 20 , marginLeft : 16,fontSize: 24, fontWeight : 'bold',}}>{this.props.route.params.OrderDetails.title}</Text>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8}}>{this.props.route.params.OrderDetails.description}</Text>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8, fontWeight: 'bold'}}>Budget: {this.props.route.params.OrderDetails.budget}</Text>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8, fontWeight: 'bold'}}>Location: DHA Phase 5</Text>
        <TouchableOpacity style = {styles.button} onPress = {() => this.showAlert1()}>
          <Text style = {{color: 'white', fontSize: 18,}}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button2} onPress = {() => this.showAlert2()}>
          <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Decline</Text>
        </TouchableOpacity>


      </Card>



</SafeAreaView>

      
    );
  }
}



const styles = StyleSheet.create({
  button : {

    padding: 10,
    borderColor: '#2E305F',
    backgroundColor: '#2E305F',
    margin : 20,
    marginLeft: 10,
    marginRight: 35,
    borderRadius: 10 ,
    alignItems: 'center'
  },
  button2 : {

    padding: 10,
    borderColor: '#2E305F',
    backgroundColor: 'red',
    marginLeft: 10,
    opacity: 0.8,
    marginRight: 35,
    borderRadius: 10 ,
    alignItems: 'center'
  }
  ,
  text : {

    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',

  },
  container: {
      flex: 1,
      backgroundColor: "#FFF",
      justifyContent: 'space-evenly'
      
  },
  text: {
      // fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  image: {
      flex: 1,
      height: 300,
      width: 200
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16
  },
  subText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
  },

  ProfilesubText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500",
      marginLeft:40,
      marginTop:8,

  },

  ProfilesubTextR: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500",
      marginLeft:38,
      marginTop:8,

  },
  ProfilesubTextL: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500",
      marginLeft:35,
      marginTop:8,

  },
  ProfilesubTextS: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500",
      marginLeft:45,
      marginTop:8,

  },
  ProfilesubTextB: {
      fontSize: 17,
      color: "#ffff",
      textTransform: "uppercase",
      // fontWeight: 'bold',
      marginLeft:24,
      marginTop:32,


  }
  ,
  Profiletext: {
      // fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden"
  },
  dm: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: 40,
      width: 40,
      height: 40,
      borderRadius: 20,
      
      alignItems: "center",
      justifyContent: "center"
  },
  active: {
      backgroundColor: "#34FFB9",
      position: "absolute",
      bottom: 40,
      left: 15,
      padding: 4,
      height: 20,
      width: 20,
      borderRadius: 10
  },
  title:{
  
  
backgroundColor: 'red',
height: 10,
width: 900,
width: 10,
marginLeft: 70,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  add: {
      backgroundColor: "#41444B",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 20,
      marginBottom: 10,
      alignItems: "center",
      justifyContent: "center"
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 0
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 14
  },
  statsBox: {
      alignItems: "center",
      flex: 1
  },
  mediaImageContainer: {
      width: 180,
      height: 200,
      borderRadius: 12,
      overflow: "hidden",
      marginHorizontal: 10
  },
  mediaCount: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: "50%",
      marginTop: -50,
      marginLeft: 30,
      width: 100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      shadowColor: "rgba(0, 0, 0, 0.38)",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 20,
      shadowOpacity: 1
  },
  recent: {
      marginLeft: 78,
      marginTop: 32,
      marginBottom: 6,
      fontSize: 10
  },
  recentItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16
  },
  activityIndicator: {
      backgroundColor: "#CABFAB",
      padding: 4,
      height: 12,
      width: 12,
      borderRadius: 6,
      marginTop: 3,
      marginRight: 20
  }
});

export default AutoExpandingTextInput;
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
    this.email = ""
    this.description = ""
    this.ReportedBy = ""
    this.picture = ""
    this.name = ""
    this.data_emails = []
    this.myfun()
    this.state = {
      
      PassedData: {},
    
    
    };
  }
  myfun(){

      console.log(this.email)
      this.ReportedBy = this.props.route.params.ReportedBy
      this.description = this.props.route.params.description
    //   console.log(this.description)
      firebase
      .database()
      .ref("/users")
      .on("value", snapshot => {
          const var1_ = snapshot.val()
          const var12 = Object.values(var1_) 
          this.data_emails = var12
          //  console.log(data1)
          // UpdateData(Object.values(data))
  })
        for (let i = 0; i < this.data_emails.length; i++) {
            const element = this.data_emails[i];
            if(element.email == this.props.route.params.email )
            {
                this.email = element.email
                this.picture = element.Picture
                this.name = element.Name
            }
            
        }
        // console.log(this.email)
        // console.log(this.description)
        // console.log(this.name)
        // console.log(this.picture)

  }

  processPressAccept(){
    var KeysOfOrders = []
    var data_email = this.email
    var FinalPath = ''
    firebase.database().ref('users').on("value", function(snapshot) {      
    snapshot.forEach(function(data) {
        KeysOfOrders.push(data.key)
    })
    });
    console.log(KeysOfOrders)
    KeysOfOrders.forEach(element => {
    var PATH = 'users/'+element+'/'+'email'
    firebase.database().ref(PATH).on("value", function(snapshot) {
    if(snapshot.val()==data_email){
        FinalPath = 'users/'+element
    }
            
    });

    });
    console.log(FinalPath)



    let userRef = firebase.database().ref(FinalPath);
    this.email = ""
    this.Picture = ""
    userRef.remove()
    




    KeysOfOrders = []
    FinalPath = ''
    firebase.database().ref('blacklisted_users').on("value", function(snapshot) {      
    snapshot.forEach(function(data) {
        KeysOfOrders.push(data.key)
    })
    });
    console.log(KeysOfOrders)
    KeysOfOrders.forEach(element => {
    var PATH = 'blacklisted_users/'+element+'/'+'email'
    firebase.database().ref(PATH).on("value", function(snapshot) {
    if(snapshot.val()==data_email){
        FinalPath = 'blacklisted_users/'+element
    }
            
    });

    });
    console.log(FinalPath)



    userRef = firebase.database().ref(FinalPath);
    this.email = ""
    this.Picture = ""
    userRef.remove()
    firebase
        .database()
        .ref('per_blacklist')
        .push()
        .set(
            {email:data_email}
            
        )
    if(this.props.route.params.type == "sp")
    {
        this.props.navigation.navigate('BlacklistWorkers')
    }
    else if(this.props.route.params.type == "client")
    {
        this.props.navigation.navigate('BlacklistClients')
    }
  }
  processPressDecline(){
      if(this.props.route.params.type == "sp")
      {
        this.props.navigation.navigate('BlacklistWorkers')
      }
      else if(this.props.route.params.type == "client")
      {
        this.props.navigation.navigate('BlacklistClients')
      }

  }

  // .orderByChild('name').equalTo('John Doe')

 
  render() {
        
    return (

      <SafeAreaView>
     <View style={{ alignSelf: "center" }}>
    
     <View style={styles.profileImage}>
         <Image source={{uri : this.picture}} style={styles.image} resizeMode="center"></Image>
     </View>
     <Text style={[styles.text, { color: "black", fontSize: 18, marginLeft: 35,marginTop: -30 }]}>{this.name}</Text>

</View>

      <Card>


        {/* <Text style = {{marginTop: 20 , marginLeft : 16,fontSize: 24, fontWeight : 'bold',}}>{this.props.route.params.OrderDetails.title}</Text> */}
        <View style = {{flexDirection: 'row',marginTop:10}}>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8,fontWeight: 'bold'}}>User Report: </Text>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8,flex: 1, flexWrap: 'wrap'}}>{this.description}</Text>
        </View>
        <View style = {{flexDirection: 'row',marginTop:10}}>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8,fontWeight: 'bold'}}>Email: </Text>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8}}>{this.email}</Text>
        </View>
        <View style = {{flexDirection: 'row',marginTop:10}}>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8,fontWeight: 'bold'}}>Reported By: </Text>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8}}>{this.ReportedBy}</Text>
        </View>
{/*         
        <View>
        
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8, fontWeight: 'bold'}}>Email: {this.email}</Text>
        </View>
        <View>
        
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8, fontWeight: 'bold'}}>Location: DHA Phase 5</Text>
        </View>
        <View>
        <Text style = {{marginLeft : 16,fontSize: 18, opacity: 0.7, marginTop: 8, fontWeight: 'bold'}}>Reported By: {this.ReportedBy}</Text>
        </View> */}
        {/* <Text>{this.variable1}</Text> */}
        <TouchableOpacity style = {styles.button} onPress = {() => this.processPressAccept()}>
          <Text style = {{color: 'white', fontSize: 18}}>Blacklist User</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button2} onPress = {() => this.processPressDecline()}>
          <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Ignore</Text>
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
    backgroundColor: 'red',
    margin : 20,
    marginLeft: 30,
    marginRight: 35,
    marginTop:80,
    
    borderRadius: 10 ,
    alignItems: 'center'
  },
  button2 : {

    padding: 10,
    borderColor: '#2E305F',
    backgroundColor: 'green',
    marginLeft: 30,
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
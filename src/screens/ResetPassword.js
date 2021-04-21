import React, { Component,useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';

// import Logo from '../components/Logo';


import {Actions} from 'react-native-router-flux';

export default class ResetPassword extends Component {
    // const [pickerValue, setPickerValue ] = useState('Punjab')

//   dashboard() {
//     Actions.dashboard();
// }
mainscreen() {
    Actions.mainscreen();
}


	render() {
		return(
      <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
			{/* <View style={styles.container}> */}
				{/* <Logo/> */}
				{/* <Form type="Signup"/> */}
        <View style ={{marginTop:130}}>
        <Text style={styles.textContainer0}>Reset Password</Text>
        </View>
        <View style = {styles.signuptextContainer}>


              <TextInput style={styles.inputBox}  
              placeholder="Enter new password."
              placeholderTextColor = "rgba(0,0,0,0.4)"
              ref={(input) => this.newpassword = input}
              />
              <TextInput style={styles.inputBox}  
              placeholder="Confirm new password."
              placeholderTextColor = "rgba(0,0,0,0.4)"
              ref={(input) => this.confirmnewpassword = input}
              />
              
              

            

              
              <View style = {{marginTop:30}}>
            <TouchableOpacity style={styles.button}
            onPress = {this.mainscreen}>
             <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            </View>
          </View>

			{/* </View> */}
      </ScrollView>
      </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E5E5E5',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signuptextContainer:{
    flexGrow:1,
    alignItems:'center',
    justifyContent :'center',
    marginTop:30
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(0,0,0,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#7963FF',
  	fontSize:16,
  	fontWeight:'500'
  },
  inputBox: {
    width:262,
    height:42,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    fontSize:16,
    color:'#000000',
    marginVertical: 10
  },
  inputBox2: {
    width:115,
    height:42,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    fontSize:16,
    color:'#000000',
    marginVertical: 10
  },
  inputBox3: {
    width:140,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    marginLeft: 35,
    color:'#000000',
    marginVertical: 10
  },
  inputBox4: {
    width:140,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    marginLeft: 10,
    color:'#000000',
    marginVertical: 10
  },
  inputBox5: {
    width:190,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    marginLeft:-70,
    color:'#000000',
    marginVertical: 10
  },
  inputBox6: {
    width:190,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    color:'#000000',
    marginLeft:-70,
    marginVertical: 10
  },
  button: {
    width:100,
    height:49,
    backgroundColor:'rgba(66, 70, 153, 0.7)',
     borderRadius: 8,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#000000',
    textAlign:'center'
  },textContainer0:{
    marginTop:55,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1.0)'

  },
  SignupSVG : {
    marginLeft: 50,
    marginTop: 25,

  },
  scrollView: {
    marginHorizontal: 0,
  },
  picker:
  {
    width: 150,
    height:45,
    borderColor:'blue',
    borderWidth: 1
  },
    picker1:
  {
    width: 190,
    height:45,
    borderColor:'blue',
    borderWidth: 1
  },
  picker2:
  {
    width: 190,
    height:45,
    borderColor:'blue',
    borderWidth: 1
  }
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity
} from 'react-native';

// import Logo from '../components/Logo';
// import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component {

	signup() {
		Actions.signup()
	}
  dashboard()
  {
    Actions.dashboard()
  }
  spDashboard()
  {
    Actions.service_provider_dashboard()
  }

	render() {
		return(
			<View style={styles.container}>
				{/* <Logo/> */}
				{/* <Form type="Login"/> */}
        <View>
        <Text style={styles.textContainer0}>Welcome back!</Text>
        </View>
        <View>
        <Text style={styles.textContainer1}>Sign In</Text>
        </View> 
        <View style = {styles.logintextContainer}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#000000"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#000000"
              ref={(input) => this.password = input}
              />  
            <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.spDashboard}><Text style={styles.signupButton}> Forgot Password?</Text></TouchableOpacity>
        </View> 
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Sign up</Text></TouchableOpacity>
				</View>
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
  logintextContainer:{
    flexGrow:1,
    alignItems:'center',
    justifyContent :'center',
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
  button: {
    width:178,
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
  },
  textContainer0:{
    marginTop:150,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1.0)'

  },
  textContainer1:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1.0)'

  }
});

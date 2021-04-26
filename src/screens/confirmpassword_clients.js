import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity
} from 'react-native';
import SigninSVG from '../Icons/SigninSVG'
import * as firebase from "firebase";
export default class ClientLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",


    };
  }
  actionsfun()
  {
    console.log(this.state.password)
    console.log(this.state.confirmPassword)
    // console.log(this.state.email)
    // console.log(this.state.password)
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(this.state.email, this.state.password)
    //   .then((response) => {
    //       const uid = response.user.uid
    //       const usersRef = firebase.firestore().collection('users')
    //       usersRef
    //           .doc(uid)
    //           .get()
    //           .then(firestoreDocument => {
    //               if (!firestoreDocument.exists) {
    //                   alert("User does not exist anymore.")
    //                   return;
    //               }
    //               const user = firestoreDocument.data()
    //               // navigation.navigate('Home', {user})
    //               Actions.dashboard()   
    //           })
    //           .catch(error => {
    //               alert(error)
    //           });
    //   })
    //   .catch(error => {
    //       alert(error)
    //   })
    // console.log(this.state.email);
    // console.log(this.state.password);
  }

	render() {
		return(
			<View style={styles.container}>
				{/* <Logo/> */}
				{/* <Form type="Login"/> */}

        <View style = {styles.logintextContainer}>
          <TextInput style={styles.inputBox}  
              placeholder="Enter new password"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              secureTextEntry={true}
              onChangeText={(value) => this.setState({password: value})}
              value={this.state.password}
              />
          <TextInput style={styles.inputBox} 
              placeholder="Confirm new password"
              secureTextEntry={true}
              placeholderTextColor = "rgba(0,0,0,0.4)"
              onChangeText={(value) => this.setState({confirmPassword: value})}
              value={this.state.confirmPassword}
              />  
            <TouchableOpacity style={styles.button}
            onPress = {this.actionsfun.bind(this)}>
             <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            
        </View> 
			</View>	
			);
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
    marginTop:85,
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

  },
  SigninSVG : {
    marginLeft: 0,
    marginTop: 25,

  }
});

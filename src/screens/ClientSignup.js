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
  Alert
} from 'react-native';
import SignupSVG from '../Icons/SignupSVG'
import {Picker} from '@react-native-community/picker';
import "firebase/firestore";

import firebase from "./firebase";
export default class ClientSignup extends Component {
      
constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmpassword: "",
      email: "",
      city: "",
      province: "",
      username: "",
      colony: "",
      SQ: "",
      phonenumber: "",
      securityanswer: "",


    };
  }

  processPress (){

    firebase
      .database()
      .ref('clients')
      .push()
      .set(this.state) 

}


myfun(){
    
  firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((response) => {
            this.processPress()
            this.props.navigation.navigate('ClientLogin')
          })
          .catch((error) => {
              alert(error)
      });

}

	render() {
		return(
      <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator = {false}>
			
        <View>
        <Text style={styles.textContainer0}>Register With Us!</Text>
        </View>
        <SignupSVG style = {styles.SignupSVG}/>
        <View style = {styles.signuptextContainer}>
        <TextInput style={styles.inputBox}  
              placeholder="Email Address"
              placeholderTextColor = "rgba(0,0,0,0.4)"
            onChangeText={(value) => this.setState({email: value})}
              value={this.state.email}
              
            
              />
              <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "rgba(0,0,0,0.4)"
            //   ref={(input) => this.state.password = input}
                onChangeText={(value) => this.setState({password: value})}
                value={this.state.password}

              />
              <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Confirm Password"
                secureTextEntry={true}
                placeholderTextColor = "rgba(0,0,0,0.4)"
            //   ref={(input) => this.state.password = input}
                onChangeText={(value) => this.setState({confirmpassword: value})}
                value={this.state.confirmpassword}
              />
        <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="User Name"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(value) => this.setState({username: value})}
              value={this.state.username}
            
              />
          
              {/* <Button 
                onPress = {this.dashboard}
                title = "Sign Up"

              /> */}
              <TextInput style={styles.inputBox}  
              placeholder="Phone Number"
              placeholderTextColor = "rgba(0,0,0,0.4)"
            //   ref={(input) => this.state.phonenumber = input}
            onChangeText={(value) => this.setState({phonenumber: value})}
              value={this.state.phonenumber}
              />
              
              <View style = {{flexDirection:'row'}}>
              <Text style={{fontSize: 14, color: '#000000',marginLeft: -45,marginTop: 20}}>City:</Text>
              <Text style={{fontSize: 14, color: '#000000',marginLeft: 120,marginTop: 20}}>Province:</Text>
              </View>
              <View style = {{flexDirection:'row'}}>
              <View style = {styles.inputBox3}>
              <Picker style = {styles.picker}
              selectedValue={this.state.colony}

              onValueChange={(itemValue, itemIndex) => { 
                if (!itemValue) {
                return;
              } 
                this.setState({ city: itemValue })}}>
                  <Picker.Item label="Select a city..." value="" />
                  <Picker.Item label="Lahore" value="Lahore" />
              </Picker>
              </View>
              {/* <Text style={{fontSize: 14, color: '#000000',marginLeft: -130}}>Select your province:</Text> */}
        
              <View style = {styles.inputBox4}>
              <Picker style = {styles.picker}
              selectedValue={this.state.colony}

              onValueChange={(itemValue, itemIndex) => { 
                if (!itemValue) {
                return;
              } 
                this.setState({ province: itemValue })}}
               >
                 <Picker.Item label="Select a province..." value="" />
                  <Picker.Item label="Punjab" value="Punjab" />
              </Picker>
              </View>
              </View>
              <Text style={{fontSize: 14, color: '#000000',marginLeft: -200,marginTop: 20}}>Society:</Text>
              <View style = {styles.inputBox5}>
              <Picker style = {styles.picker1}
              selectedValue={this.state.colony}

              onValueChange={(itemValue, itemIndex) => { 
                if (!itemValue) {
                return;
              } 
                this.setState({ colony: itemValue })}} >
                  <Picker.Item label="Select a society..." value="" />
                  <Picker.Item label="Defence" value="Defence" />
                  <Picker.Item label="Bahria Town" value="Bahria Town" />
                  <Picker.Item label="Wapda Town" value="Wapda Town" />
                  <Picker.Item label="Defence Colony" value="Cantt" />
              </Picker>
              </View>


              <Text style={{fontSize: 14, color: '#000000',marginLeft: -140,marginTop: 20}}>Security question:</Text>
              


              <View style = {styles.inputBox6}>
              <Picker style = {styles.picker2}
              selectedValue={this.state.colony}

              onValueChange={(itemValue, itemIndex) => { 
                if (!itemValue) {
                return;
              } 
                this.setState({ SQ: itemValue })}}>
                  <Picker.Item label="Select a Security Question..." value="" />
                  <Picker.Item label=" Your nick name?" value="Your nick name?" />
                  <Picker.Item label="Your pet's name?" value="Your pet's name?" />
              </Picker>
              </View>
              <TextInput style={styles.inputBox}  
              placeholder="Your Answer"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              onChangeText={(value) => this.setState({securityanswer: value})}
              value={this.state.securityanswer}
              />
              
              

            

              
              
            <TouchableOpacity style={styles.button}
            onPress = {this.myfun.bind(this)}>
             <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
    marginTop: 30,
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
    width:260,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    color:'#000000',
    marginLeft:-5,
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
  },textContainer0:{
    marginTop:55,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1.0)'

  },
  SignupSVG : {
    marginLeft: 85,
    marginTop: 25,

  },
  scrollView: {
    marginHorizontal: 0,
  },
  picker:
  {
    width: 150,
    height:45,
    marginLeft:10,
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
    marginLeft:90,
    width: 270,
    height:45,
    marginLeft:10,
    borderColor:'blue',
    borderWidth: 1
  }
});

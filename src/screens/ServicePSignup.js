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
import SignupSVG from '../Icons/SignupSVG'
import {Picker} from '@react-native-community/picker';

// import Logo from '../components/Logo';



export default class ServicePSignup extends Component {
    
//   goBack() {
//       Actions.pop();
//   }
//   serviceplogin() {
//     Actions.serviceplogin();
// }


	render() {
		return(
      <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
        <Text style={styles.textContainer0}>Register With Us!</Text>
        </View>
        <SignupSVG style = {styles.SignupSVG}/>
        <View style = {styles.signuptextContainer}>
        <TextInput style={styles.inputBox}  
              placeholder="Email Address"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              ref={(input) => this.emailaddress = input}
              />
        <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="User Name"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.username.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "rgba(0,0,0,0.4)"
              ref={(input) => this.password = input}
              />
              {/* <Button 
                onPress = {this.dashboard}
                title = "Sign Up"

              /> */}
              <TextInput style={styles.inputBox}  
              placeholder="Phone Number"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              ref={(input) => this.phonenumber = input}
              />
              
              <Text style={{fontSize: 14, color: '#000000',marginLeft: -160}}>Select your location:</Text>
              <View style = {{flexDirection:'row'}}>
              <View style = {styles.inputBox3}>
              <Picker style = {styles.picker}>
                  <Picker.Item label="Lahore" vlaue="Lahore" />
              </Picker>
              </View>
              {/* <Text style={{fontSize: 14, color: '#000000',marginLeft: -130}}>Select your province:</Text> */}
        
              <View style = {styles.inputBox4}>
              <Picker style = {styles.picker}>
                  <Picker.Item label="Punjab" vlaue="Punjab" />
              </Picker>
              </View>
              </View>
              <Text style={{fontSize: 14, color: '#000000',marginLeft: -165}}>Select your society:</Text>
              
              <View style = {styles.inputBox5}>
              <Picker style = {styles.picker1}>
                  <Picker.Item label="Defence" vlaue="Defence" />
                  <Picker.Item label="Bahria Town" vlaue="Bahria Town" />
                  <Picker.Item label="Wapda Town" vlaue="Wapda Town" />
                  <Picker.Item label="Defence Colony" vlaue="Cantt" />
              </Picker>
              </View>
              
              

            

              
              
            <TouchableOpacity style={styles.button}
            onPress={this.serviceplogin}>
             <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={()=> this.props.navigation.navigate('SPLogin')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
  }
});

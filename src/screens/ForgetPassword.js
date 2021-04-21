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


// import {Actions} from 'react-native-router-flux';

export default class ForgetPassword extends Component {
    // const [pickerValue, setPickerValue ] = useState('Punjab')

//   dashboard() {
//     Actions.dashboard();
// }
//   resetpassword() {
//     Actions.resetpassword();
// }


	render() {
		return(
      <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
			{/* <View style={styles.container}> */}
				{/* <Logo/> */}
				{/* <Form type="Signup"/> */}
        <View>
        <Text style={styles.textContainer0}>Forgot Password?</Text>
        </View>
        <View style = {styles.signuptextContainer}>
        
              
              


              <Text style={{fontSize: 14, color: '#000000',marginLeft: -150,marginTop: 30}}>Security question:</Text>
              


              <View style = {styles.inputBox6}>
              <Picker style = {styles.picker2}>
                  <Picker.Item label=" Your nick name?" vlaue="Your nick name?" />
                  <Picker.Item label="Your pet's name?" vlaue="Your pet's name?" />
              </Picker>
              </View>
              <TextInput style={styles.inputBox}  
              placeholder="Your Answer"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              ref={(input) => this.securityanswer = input}
              />
              
              

            

              
            <View style = {{marginTop: 20}}>
            <TouchableOpacity style={styles.button}
            onPress = {this.resetpassword}>
             <Text style={styles.buttonText}>Confirm</Text>
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
    width:262,
    height:45,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    alignItems: 'center',
    fontSize:16,
    color:'#000000',
    marginLeft:0,
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
    marginTop:150,
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

  picker2:
  {
    width: 260,
    height:45,
    borderColor:'blue',
    borderWidth: 1
  }
});

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
import {Picker} from '@react-native-picker/picker';
import firebase from './firebase';



export default class ForgetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      question : "",
      answer : "",
      test :"hello"
    
    };
    this.AllEmails = []
    this.DATA_RETREIVED = ""
    this.check_email = 0

  }
//   processPress = (object) => {

//     // const data = route.params
//     // data ['chosenSP'] = object
//     console.log(object)

//     this.props.navigation.navigate('ConfirmPassClient')

// }


  fetchData = () => {
      
            firebase
                .database()
                .ref("/service_providers")
                .on("value", snapshot => {
                    const data = snapshot.val()
                    this.DATA_RETREIVED = Object.values(data)
            })


  
  }
      
  
  myfun(){
      if(this.state.email != "" && this.state.answer != ""){
        this.fetchData()
        for (let x = 0; x < this.DATA_RETREIVED.length; x++) {
            const element = this.DATA_RETREIVED[x];
            if(element.email == this.state.email )
            {
                this.check_email = 1
                if(this.state.answer == element.securityanswer)
                {
                    // alert('Valid Credentials')
                    this.props.navigation.navigate('ConfirmPassClient')
                    return
                }
                else{
                    alert('Invalid Answer.')
                }
            }
            
        }
        if(this.check_email == 0)
        {
          alert("Email not found in database.")
        }
      }
      else{
          console.log(this.state.email)
          console.log(this.state.answer)
          console.log(this.state.question)
          alert("Make sure all the fields are filled.")

      }


}



	render() {
		return(
      <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
	
        <View>
        <Text style={styles.textContainer0}>Forgot Password?</Text>
        </View>
        <View style = {styles.signuptextContainer}>
        


            <TextInput style={styles.inputBox1}  
              placeholder="Enter your email"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              onChangeText={(value) => this.setState({email: value})}
              value={this.state.email}
              />


              <Text style={{fontSize: 14, color: '#000000',marginLeft: -150}}>Security question:</Text>
              
              


              <View style = {styles.inputBox6}>
              <Picker style = {styles.picker2}
                selectedValue={this.state.answer}

                onValueChange={(itemValue, itemIndex) => { 
                  if (!itemValue) {
                  return;
                } 
                  this.setState({ question: itemValue })}}
              >
                  <Picker.Item label="Your pet's name?" vlaue="Your pet's name?" />
              </Picker>
              </View>

              <TextInput style={styles.inputBox}  
              placeholder="Your Answer"
              placeholderTextColor = "rgba(0,0,0,0.4)"
              onChangeText={(value) => this.setState({answer: value})}
              value={this.state.answer}
              />
              
              

            

              
            <View style = {{marginTop: 20}}>
            <TouchableOpacity style={styles.button}
            onPress = {this.myfun.bind(this)}>
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
  inputBox1: {
    width:262,
    height:42,
    backgroundColor:'rgba(255, 255,255,1.0)',
    borderRadius: 8,
    paddingHorizontal:26,
    fontSize:16,
    color:'#000000',
    marginVertical: 30
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

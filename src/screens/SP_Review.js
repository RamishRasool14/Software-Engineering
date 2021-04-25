import React from "react";
import { Alert, SafeAreaView, StyleSheet, TextInput, ScrollView, View, TouchableOpacity ,Text} from "react-native";
import ReviewSvg from "../Icons/SP_Review_Icon";
import firebase from './firebase'

class AutoExpandingTextInput extends React.Component {


  constructor(props) {
    super(props);
    this.state = {text: '', height: 0, OrderDetails : {} };
  }

  showAlert1() {  
    Alert.alert(  
        'Confirm Order',  
        'Do you want to complete the order?',  
        [  
            {  
                text: 'Cancel',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => this.processPress()},  
        ]  
    );  
}
  processPress (){

    var FinalOrder = this.props.route.params
    FinalOrder ['ReviewBySP'] = this.state.OrderDetails.description

    firebase
      .database()
      .ref('CompletedOrders')
      .push()
      .set(
        FinalOrder) 
        .then(()=> {

            var KeysOfOrders = []
            var FinalPath = ''
            const title = this.props.route.params.OrderDetails.title
        
        
            firebase.database().ref('InProgressOrders').on("value", function(snapshot) {      
              snapshot.forEach(function(data) {
                KeysOfOrders.push(data.key)
              })
          });
          KeysOfOrders.forEach(element => {
            var PATH = 'InProgressOrders/'+element+'/'+'OrderDetails/'+'title'
            firebase.database().ref(PATH).on("value", function(snapshot) {
              if(snapshot.val()==title){
                FinalPath = 'InProgressOrders/'+element
              }
                    
          });
        });
        
        
          
          let userRef = firebase.database().ref(FinalPath);
          userRef.remove()
            this.props.navigation.navigate('SPCompleted', this.props.route.params.chosenSP.Name)
            })
        

}
 
  render() {
        
    return (

      <ScrollView>

<View style = {{marginTop: 20, alignItems: 'center'}}>
         <ReviewSvg/>
        
</View>
     
      <TextInput
        multiline={true}
        placeholder="Tell us about your experience"
        placeholderTextColor = '#2E305F'


        onChangeText = {
          
          (val) => this.setState(prevstate => ({
            OrderDetails : {
              ...prevstate.OrderDetails,
              description : val
            }
    
          })
          )
        
        
        }
        onContentSizeChange={(event) => {
            this.setState({ height: event.nativeEvent.contentSize.height })
        }}
        style={[styles.input, {height: Math.max(35, this.state.height)}]}
      />

      <TouchableOpacity style = {styles.button} onPress = {() => this.showAlert1()}>

        <Text style = {styles.text}>Complete</Text>

      </TouchableOpacity>

      </ScrollView>


      
    );
  }
}



const styles = StyleSheet.create({
  input1: {
    height: 40,
    margin: 12,
    marginTop: 60,
    borderWidth: 1,
    height: 40,
    borderColor: '#2E305F',
    borderRadius: 10,
    padding: 10
    
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 20,
    borderWidth: 1,
    height: 40,
    borderColor: '#2E305F',
    borderRadius: 10,
    padding: 10

    
  },

  button : {

    padding: 10,
    borderColor: '#2E305F',
    backgroundColor: '#2E305F',
    margin : 20,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 10 ,
    alignItems: 'center'
  },
  text : {

    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.9

  }
});

export default AutoExpandingTextInput;
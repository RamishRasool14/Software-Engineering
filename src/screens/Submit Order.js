import React from "react";
import { SafeAreaView, StyleSheet, TextInput, ScrollView, View, TouchableOpacity ,Text} from "react-native";
import SubmitOrderSvg from "../Icons/SubmitOrderSvg";


class AutoExpandingTextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: '', height: 0};
  }
  render() {
    return (

      <ScrollView>

<View style = {{marginTop: 20, alignItems: 'center'}}>
         <SubmitOrderSvg/>
        
</View>
      <TextInput
        // {...this.props}
        multiline={true}
        placeholder="Title"
        placeholderTextColor = '#2E305F'
        style={[styles.input1]}

      />


      <TextInput
        // {...this.props}
        multiline={true}
        placeholder="Your Budget"
        placeholderTextColor = '#2E305F'

        style={[styles.input]}
      />

      <TextInput
        // {...this.props}
        multiline={true}
        placeholder="Description"
        placeholderTextColor = '#2E305F'


        onChangeText={(text) => {
            this.setState({ text })
        }}
        onContentSizeChange={(event) => {
            this.setState({ height: event.nativeEvent.contentSize.height })
        }}
        style={[styles.input, {height: Math.max(35, this.state.height)}]}
        value={this.state.text}
      />

      <TouchableOpacity style = {styles.button}>

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
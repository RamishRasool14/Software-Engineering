import firebase from "firebase";
var postRef = firebase.database().ref('posts')

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {styleSheet, Text, View} from 'react-native';
import AppNavigator from './src/navigations/Navigator.js';


import * as Font from 'expo-font';
import {AppLoading} from 'expo';



export default class App extends React.Component{
  state = {
    isFontLoaded : false
  }
  
  async componentDidMount(){
    await Font.loadAsync({
      'Poppins' : require('./src/fonts/Poppins-Black.ttf'),
      'RobotoRegular' : require('./src/fonts/Roboto-Regular.ttf'),
      'PoppinsBold' : require('./src/fonts/Poppins-Bold.ttf'),
      'PoppinsMedium' : require('./src/fonts/Poppins-Medium.ttf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return(
      (<AppNavigator/>)
    );  
  }
};
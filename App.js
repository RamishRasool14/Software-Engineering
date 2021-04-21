import firebase from "firebase";

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {styleSheet, Text, View} from 'react-native';
import AppNavigator from './src/navigations/Navigator.js';


import * as Font from 'expo-font';
import {AppLoading} from 'expo';

var firebaseConfig = {
  apiKey: "AIzaSyD3vMo4Ain8ErPTljr1MXyoMalVXLu7OAw",
  authDomain: "se-project-81a89.firebaseapp.com",
  databaseURL: "https://se-project-81a89-default-rtdb.firebaseio.com",
  projectId: "se-project-81a89",
  storageBucket: "se-project-81a89.appspot.com",
  messagingSenderId: "17700065874",
  appId: "1:17700065874:web:e3191757efc54234b9458b"
};
// Initialize Firebase
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }
// console.log(firebase)




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
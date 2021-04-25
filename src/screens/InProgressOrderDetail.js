import React from "react";
import { Alert, SafeAreaView, StyleSheet, TextInput, Image, View, TouchableOpacity ,Text} from "react-native";
import SubmitOrderSvg from "../Icons/SubmitOrderSvg";
import firebase from './firebase'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/SPIcons/titleCard'
import { cos } from "react-native-reanimated";
export default function App({ route,  navigation })  {


    

  render() {
        
    return (

      <SafeAreaView>{console.log(this.props.route.params)}</SafeAreaView>

      
    );
  }
}



const styles = StyleSheet.create({

});


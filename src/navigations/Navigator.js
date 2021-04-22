import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';

import Home from '../screens/Home';
import Detail from '../screens/Categories';
import CompletedOrders from '../screens/Category People List';
import ViewProfile from '../screens/View Profile';
import ViewClientProfile from '../screens/ViewClientProfile';
import Reviews from '../screens/Reviews_List';
import DetailsOfServiceProvider from '../screens/DetailsSP';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import SubmitOrder from "../screens/Submit Order";
import { exp } from 'react-native-reanimated';
import  Main from '../screens/MainScreen'
import  ClientSignUp from '../screens/ClientSignup'
import  ClientLogin from '../screens/ClientLogin'
import  SPLogin from '../screens/ServicePLogin'
import  SPSignUP from '../screens/ServicePSignup'
import ForgetPassword from '../screens/ForgetPassword'
import SPHome from "../screens/Service_Provider_Dashboard";
import SPCompleted from "../screens/Completed_Orders_List";
import SPPending from "../screens/Pending_Orders_List";
import SPReviews from "../screens/Reviews_List";



const Stack = createStackNavigator()

export default function App () {

return (

    <NavigationContainer>

        <Stack.Navigator initialRouteName = "Main">

        <Stack.Screen name = "Main" component = {Main} options={{ headerShown: false }}/>
        <Stack.Screen name = "ClientSignUp" component = {ClientSignUp} options={{ headerShown: false }}/>
        <Stack.Screen name = "ClientLogin" component = {ClientLogin} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPLogin" component = {SPLogin} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPSignUP" component = {SPSignUP} options={{ headerShown: false }}/>
        <Stack.Screen name = "ForgetPassword" component = {ForgetPassword} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPHome" component = {SPHome} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPCompleted" component = {SPCompleted} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPPending" component = {SPPending} options={{ headerShown: false }}/>
        <Stack.Screen name = "SPReviews" component = {SPReviews} options={{ headerShown: false }}/>


           <Stack.Screen name = "Home" component = {Home} options={{ headerShown: false }}/> 
            <Stack.Screen name = "Detail" component = {Detail} options={{
          title: 'Categories',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
            <Stack.Screen name = "CompletedOrders" component = {CompletedOrders} options={{
          title: 'Service Providers',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
            <Stack.Screen name = "ViewProfile" component = {ViewProfile} options={{
          title: 'View Profile',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name = "ViewClientProfile" component = {ViewClientProfile} options={{
                  title: 'My Profile',
                  headerStyle: {
                    backgroundColor: '#2E305F',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }} />



            <Stack.Screen name = "DetailsOfServiceProvider" component = {DetailsOfServiceProvider} options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
            <Stack.Screen name = "Reviews" component = {Reviews} options={{
          title: 'Reviews',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
            <Stack.Screen name = "Order" component = {SubmitOrder} options={{
          title: 'Complete Order',
          headerStyle: {
            backgroundColor: '#2E305F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
 



        </Stack.Navigator>
    </NavigationContainer>
)

}
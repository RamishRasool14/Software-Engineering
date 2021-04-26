import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity
} from 'react-native';
import MainScreenCard from '../shared/MainScreenCard'
import MainClientSVG from '../Icons/MainClientSVG'
import MainServiceProv from '../Icons/MainServiceProv'

// import Logo from '../components/Logo';
// import Form from '../components/Form';


export default class MainScreen extends Component {
  
	render() {
		return(
			<View style={styles.container}>
                <Text style = {{fontSize:26, paddingLeft: 30,textShadowColor:'rgba(255, 255,255,0.5)',textAlign:'center',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : -10,letterSpacing: 0.75,color: '#000000',fontWeight:'bold' }}>E-Karigar!</Text>
                <Text style = {{fontSize:13, paddingLeft: 30,textShadowColor:'rgba(255, 255,255,0.5)',textAlign:'center',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : 0,letterSpacing: 0.75,color: '#000000' }}>Connecting Customers and Service</Text>
                <Text style = {{fontSize:13, paddingLeft: 30,textShadowColor:'rgba(255, 255,255,0.5)',textAlign:'center',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : 0,letterSpacing: 0.75,color: '#000000' }}>Providers</Text>
				<View style = {{marginLeft:-50,marginTop: 45}}>
				
                </View>
                
                <View>
                
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('ClientLogin')}>
                
                    <MainScreenCard>
                    <MainClientSVG style = {{marginLeft: 75, marginTop: 25}}/>
                    <Text style = {{fontSize:18, paddingLeft: 100,textShadowColor:'rgba(255, 255,255,0.5)',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : 10,letterSpacing: 0.75,color: '#000000',fontWeight: 'bold' }}>Client</Text>
                    </MainScreenCard>
                
                </TouchableOpacity>
                
                </View>

                  <View style = {{marginTop: 20}}>
                  
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('SPLogin')}>
                  
                    <MainScreenCard>
                    <MainServiceProv style = {{marginLeft: 85, marginTop: 30}}/>
                    <Text style = {{fontSize:18, paddingLeft: 50,textShadowColor:'rgba(255, 255,255,0.5)',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : 25,letterSpacing: 0.75,color: '#000000',fontWeight: 'bold' }}>Service Providers</Text>
                    </MainScreenCard>                    
                  
                  </TouchableOpacity>


{/* 
               <TouchableOpacity onPress = {() => this.props.navigation.navigate('AdminDashboard')}>
                  <Text style = {{fontSize:18, paddingLeft: 70,textShadowColor:'rgba(255, 255,255,0.5)',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : 25,letterSpacing: 0.75,color: '#000000',fontWeight: 'bold'}}>Admin Dashboard</Text>                     */}

                <View style = {{flexDirection:'row',marginLeft:70}}>
              
                <Text style = {{fontSize:12,textShadowColor:'rgba(255, 255,255,0.5)',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : 25,letterSpacing: 0.75,color: '#000000'}}>Sign In as admin?  </Text>                     
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('AdminLogin')}>
                <Text style = {{fontSize:12,textShadowColor:'rgba(255, 255,255,0.5)',textShadowOffset:{width: 0, height: 1},textShadowRadius: 5,marginTop : 25,letterSpacing: 0.75,color: '#000000',fontWeight: 'bold' }}>Sign In</Text>                    

                
                </TouchableOpacity>
                </View>
                  </View>
       
       
			</View>	
			);
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  }

});

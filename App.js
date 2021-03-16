import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Perfil from './pages/Perfil/Perfil'
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
   FlatList,
   } from 'react-native';

const Stack = createStackNavigator();





const App = () => {
  

  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title:'Bem vindo',
            headerStyle:{
              backgroundColor:'#121212'
            },
            headerTintColor:'#FFF'

          }}

          />
            <Stack.Screen
          name="Sobre"
          component={Sobre}
          

          
          />

          

      </Stack.Navigator>


    </NavigationContainer>
    )

  }
 



    
   
  
  

    
export default App

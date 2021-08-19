import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/ObjetivosModulo/screens/HomeScreen'
import CrearObjetive from "./src/ObjetivosModulo/screens/CrearObjetive";
import StartReloj from "./src/RelojModulo/screens/StartReloj";
import { Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({navigation}) => ({
            headerStyle: { backgroundColor: "#222f3e"},
            headerTitleStyle: { color: '#ffffff' },
            headerRight: () => (
              <TouchableOpacity
              onPress={() => navigation.navigate("CrearObjetive")}>
              <Text style={{color: '#ffffff', marginRight: 20, fontSize: 15}}>Nuevo</Text>
              </TouchableOpacity>
            ),
          })} 
        />
        <Stack.Screen 
        name="CrearObjetive" 
        component={CrearObjetive}
        options={{
          headerStyle: {
            backgroundColor: '#222f3e'
          },
          headerTitleStyle: {color: "#ffffff"},
          headerTintColor: "#ffffff"
        }}
        />
        <Stack.Screen 
        name="StartReloj" 
        component={StartReloj}
        options={{
          headerStyle: {
            backgroundColor: '#0d0d0d'
          },
          headerTitleStyle: { color: '#ffffff' },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
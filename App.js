import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import onBoard from './screen/onBoard';
import Home from './screen/Home';
import Detailed from './screen/Detailed';
import Login from './screen/Login';
import Signup from './screen/Signup';
import Welcome from './screen/Welcome';
import About from './screen/About';
import colours from './consts/colours';
import { StyleSheet, Text, View } from "react-native";



import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                headerStyled: {
                    backgroundColor: 'transparent'

                },
                headerTintColor: '#1F2937',
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
                
            }}
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Detailed" component={Detailed}/>
                <Stack.Screen name="About" component={About}/>
                <Stack.Screen name="onBoard" component={onBoard}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
                
                
            </Stack.Navigator>
        </NavigationContainer>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default App;
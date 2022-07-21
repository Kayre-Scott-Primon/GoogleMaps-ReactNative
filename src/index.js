import React from "react"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native'

// pages
import Home from "./screens/home"
import Image from './screens/image'
import Splash from "./screens/splash"
import Layers from "./screens/layers"
import BaseMap from "./screens/baseMap"
import UserLocation from "./screens/userLocation"

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Splash" 
                component={Splash} 
                options={{headerShown: false}}
                />
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerLeft: () => (<View/>),
                    headerStyle:{ backgroundColor: '#0ad'},
                    headerTintColor: '#fff'
                    }}
                />           
            <Stack.Screen 
                name="BaseMap" 
                component={BaseMap} 
                options={{
                    headerStyle:{ backgroundColor: '#0ad'},
                    headerTintColor: '#fff'
                    }}
                />
            <Stack.Screen 
                name="UserLocation" 
                component={UserLocation} 
                options={{
                    headerStyle:{ backgroundColor: '#0ad'},
                    headerTintColor: '#fff'
                    }}
                />
            <Stack.Screen 
                name="Layers" 
                component={Layers} 
                options={{
                    headerStyle:{ backgroundColor: '#0ad'},
                    headerTintColor: '#fff'
                    }}
                />
            <Stack.Screen 
                name="Image" 
                component={Image} 
                options={{
                    headerStyle:{ backgroundColor: '#0ad'},
                    headerTintColor: '#fff'
                    }}
                />
        </Stack.Navigator>
    </NavigationContainer>
)

export default App
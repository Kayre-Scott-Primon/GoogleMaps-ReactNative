import React, { useEffect } from "react";
import styles from './style'
import {
    View,
    Text,
    StatusBar,
} from 'react-native'
import { Icon } from "react-native-elements";

function Splash({navigation}){

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        },1200)
    },[])
  
    return(
        <View style={styles.container}>
        <StatusBar backgroundColor={'#0ad'} barStyle={"light-content"}/>
            <Icon name="google-earth" type="material-community-icons" size={50} color={'#fff'}/>
            <Text style={styles.text}>
                Google Maps
            </Text>
        </View>
    ) 
}

export  default Splash
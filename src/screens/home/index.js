import React, {useEffect} from "react";
import styles from './style'
import {
    View,
    Text,
    Platform,
    StatusBar,
    ScrollView,
    BackHandler,
    TouchableOpacity,
} from 'react-native'
import { request, Permission, PERMISSIONS } from 'react-native-permissions'

function Home({navigation}){

    const requestLocationPermission = async () => {
        if(Platform.OS === 'ios'){
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            console.log('IOS', response)

        }else{
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            console.log('Android', response)

        }
    }

    useEffect(() => {
        requestLocationPermission()
    },[])

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            backButtonClick()
            return true
        }) 
        return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => {});
    },[])

    function backButtonClick() {
        BackHandler.exitApp()
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={'#0ad'}/>
            <ScrollView>
                <Text style={styles.textInfo}>App for to make a tests the react native with google maps</Text>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.buttonTrack} onPress={() => {navigation.navigate('BaseMap')}}>
                        <Text style={styles.buttonTextTrack}>Show base map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTrack} onPress={() => {navigation.navigate('UserLocation')}}>
                        <Text style={styles.buttonTextTrack}>User Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTrack} onPress={() => {navigation.navigate('Layers')}}>
                        <Text style={styles.buttonTextTrack}>Layers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTrack} onPress={() => {navigation.navigate('MarkPoint')}}>
                        <Text style={styles.buttonTextTrack}>Show image</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    ) 
}

export  default Home
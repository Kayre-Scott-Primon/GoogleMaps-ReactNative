import React, {useEffect, useState} from "react";
import styles from './style'
import {
    View,
    Text,
    Alert,
    Image,
    StatusBar,
    TouchableOpacity,
} from 'react-native'
import Modal from 'react-native-modal';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Icon } from "react-native-elements";

function UserLocation({navigation}){

    var [ map, setMap ] = useState()
    const [ mapType, setMapType ] = useState('standard')
    const [ interest, setInterest ] = useState(false)
    const [ region, setRegion ] = useState()

    const currentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position))

                let region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009
                }
                setRegion(region)
            },
            error => Alert.alert(error.message),
            {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
        );
    }

    useEffect(() => {
        currentPosition()
    },[])

    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={'#0ad'}/>
            <MapView
                ref={map => map = map}
                style={styles.mapView}
                mapType={mapType}
                showsCompass={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                region={region}
            />
            <View style={styles.buttonsView}>
                <TouchableOpacity 
                    style={[styles.buttonTypeMap, interest && {backgroundColor: 'rgba(0,100,0,0.75)'}]} 
                    onPress={() => {}}>
                    <Text style={styles.labelTextType}>anybutton</Text>
                </TouchableOpacity>
            </View>
            <Modal isVisible={region == null} style={styles.modalLoad}>
                <Image source={require('../../static/images/GIFload.gif')} style={styles.gifLoad}/>
            </Modal>
        </View>
    ) 
}

export  default UserLocation
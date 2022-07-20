import React, {useEffect, useRef, useState} from "react";
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
import MapView, {    
    Marker,
    AnimatedRegion,
    Polyline,
    PROVIDER_GOOGLE
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Icon } from "react-native-elements";
import MapViewDirections from 'react-native-maps-directions';
import { apiTokenGoogleMaps } from "../../globalVariables";

function UserLocation({navigation}){

    const map = useRef()
    const [ mapType, setMapType ] = useState('standard')
    const [ interest, setInterest ] = useState(false)
    const [ region, setRegion ] = useState()
    const [ marker, setMarker ] = useState()
    var [ line, setLine ] = useState([])

    const currentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position))

                let region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }

                line = line.concat([region])
                setLine(line)
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
                ref={map}
                style={styles.mapView}
                mapType={mapType}
                showsCompass={true}
                showsUserLocation={true}
                loadingEnabled
            >
                <Polyline coordinates={line} strokeWidth={5} />
                <MapViewDirections
                    origin={'[-18.879692, 47.541719]'}
                    destination={'[-18.995720, 47.536529]'}
                    apikey={apiTokenGoogleMaps}
                    strokeWidth={3}
                    onReady={(result) => {
                        console.log(result)
                        map.current.fitToCoordinates(
                            result.coordinates,{
                                edgepadding: {
                                    top: 50,
                                    bottom: 50,
                                    left: 50,
                                    right: 50
                                }
                            }
                        )
                    }}
                />
            </MapView>
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
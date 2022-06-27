import React, {useEffect, useState} from "react";
import styles from './style'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import Modal from 'react-native-modal';
import MapView from 'react-native-maps';

function BaseMap({navigation}){

    const [ mapType, setMapType ] = useState('standard')
    const [ modalType, setModalType ] = useState(false)
    const [ traffic, setTraffic ] = useState(false)
    const [ interest, setInterest ] = useState(false)
    const [ style, setStyle ] = useState('dark')
    const [ build, setBuild ] = useState(false)

    function changeType(type) {
        setMapType(type)
        setModalType(false)
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={'#0ad'}/>
            <MapView
                style={styles.mapView}
                initialRegion={{
                    latitude: 37.233460,
                    longitude: -115.812667,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType={mapType}
                showsScale={true}
                showsCompass={true}
                showsIndoors={true}
                showsBuildings={build}
                showsTraffic={traffic}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsIndoorLevelPicker={true}
                showsPointsOfInterest={interest}
                userLocationCalloutEnabled={true}
                userInterfaceStyle={style}
            />
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.buttonTypeMap} onPress={() => setModalType(!modalType)}>
                    <Text style={styles.labelTextType}>Type</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.buttonTypeMap, traffic && {backgroundColor: 'rgba(0,100,0,0.75)'}]} 
                    onPress={() => setTraffic(!traffic)}>
                    <Text style={styles.labelTextType}>Traffic</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.buttonTypeMap, interest && {backgroundColor: 'rgba(0,100,0,0.75)'}]} 
                    onPress={() => setInterest(!interest)}>
                    <Text style={styles.labelTextType}>Interest</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.buttonTypeMap, style == 'light' && {backgroundColor: 'rgba(0,100,0,0.75)'}]} 
                    onPress={() => style == 'dark' ? setStyle('light') : setStyle('dark')}>
                    <Text style={styles.labelTextType}>{style}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={[styles.buttonTypeMap, build && {backgroundColor: 'rgba(0,100,0,0.75)'}]} 
                    onPress={() => setBuild(!build)}>
                    <Text style={styles.labelTextType}>Build</Text>
                </TouchableOpacity>
            </View>

            <Modal isVisible={modalType}>
                <View style={styles.modalViewType}>
                    <Text style={styles.modalLabelType}>Change map style</Text>
                    <TouchableOpacity style={styles.buttonType} onPress={() => changeType('standard')}>
                        <Text style={styles.labelType}>Standard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonType} onPress={() => changeType('none')}>
                        <Text style={styles.labelType}>None</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonType} onPress={() => changeType('satellite')}>
                        <Text style={styles.labelType}>Satellite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonType} onPress={() => changeType('hybrid')}>
                        <Text style={styles.labelType}>Hybrid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonType} onPress={() => changeType('terrain')}>
                        <Text style={styles.labelType}>Terrain</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    ) 
}

export  default BaseMap
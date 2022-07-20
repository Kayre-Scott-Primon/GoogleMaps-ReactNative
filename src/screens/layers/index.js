import React, { useState } from 'react'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import styles from './styles'
import MapView, {
    Marker,
    Polygon,
    Overlay,
    AnimatedRegion,
    Polyline,
    Circle,
    PROVIDER_GOOGLE,
    Heatmap
} from 'react-native-maps'

function Layers() {

    const [type, setType] = useState('')
    const coordinates = [
        { latitude: 37.8025259, longitude: -122.4351431 },
        { latitude: 37.7896386, longitude: -122.421646 },
        { latitude: 37.7665248, longitude: -122.4161628 },
        { latitude: 37.7734153, longitude: -122.4577787 },
        { latitude: 37.7948605, longitude: -122.4596065 },
        { latitude: 37.8025259, longitude: -122.4351431 }
    ]
    const points = [
        { latitude: 37.8025259, longitude: -122.4351431, name: '1' },
        { latitude: 37.7896386, longitude: -122.421646, name: '2' },
        { latitude: 37.7665248, longitude: -122.4161628, name: '3' },
        { latitude: 37.7734153, longitude: -122.4577787, name: '4' },
        { latitude: 37.7948605, longitude: -122.4596065, name: '5' },
        { latitude: 37.8025259, longitude: -122.4351431, name: '6' },
        { latitude: 37.8025259, longitude: -122.4351431, name:' 7' },
    ]
    const pointsHeat = [
        { latitude: 37.8025259, longitude: -122.4351431, weight: 1 },
        { latitude: 37.7896386, longitude: -122.421646, weight: 5 },
        { latitude: 37.7665248, longitude: -122.4161628, weight: 2 },
        { latitude: 37.7734153, longitude: -122.4577787, weight: 1 },
        { latitude: 37.7948605, longitude: -122.4596065, weight: 3 },
        { latitude: 37.8025259, longitude: -122.4351431, weight: 8 },
        { latitude: 37.8025259, longitude: -122.4351431, weight: 10 },
    ]

    function renderLayer(){
        switch(type){
            case 'points':
                var list = []
                points.forEach(e => list.push(
                    <Circle
                        center={e}
                        radius={250}
                        strokeColor={'#f00'}
                        fillColor={'#f00'}
                        strokeWidth={2}
                    />)
                )
                return list
                break;

            case 'lineString':
                return (
                    <Polyline
                        coordinates={coordinates}
                        strokeWidth={6}
                        strokeColor={'#f55'}
                    />
                )
                break;
            case 'image': 

            case 'polygon':
                return (
                    <Polygon
                        coordinates={pointsHeat}
                        fillColor={'#39d'}
                        strokeColor={'#d93'}
                        strokeWidth={5}
                    />
                )
                break;
                break;  

            case 'heatmap':
                return (
                    <Heatmap
                        points={pointsHeat}
                        radius={50}
                    />
                )
                break;

            case 'marker':
                var list = []
                points.forEach(e => list.push(
                    <Marker
                        coordinate={e}
                        radius={250}
                        strokeColor={'#f00'}
                        fillColor={'#f00'}
                        strokeWidth={2}
                    >
                        <View style={styles.marker}>
                            <Text style={styles.labelMarker}>SF</Text>
                        </View>
                    </Marker>
                    )
                )
                return list
                break;
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={'#0ad'} />
            <MapView
                style={styles.mapView}
                initialRegion={{
                    latitude: 37.8025259,
                    longitude: -122.4351431,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType={'terrain'}
            >
            {renderLayer()}
            </MapView>
            <View style={styles.containerInfo}>
                <Text style={styles.labelInfo}>
                    Layers with google maps
                </Text>
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity 
                    style={[styles.bottonPoint]} 
                    onPress={() => {setType('lineString')}}>
                    <Text style={styles.labelLayerPoints}>LineString</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.bottonPoint]} 
                    onPress={() => {setType('points')}}>
                    <Text style={styles.labelLayerPoints}>Points</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.bottonPoint]} 
                    onPress={() => {setType('polygon')}}>
                    <Text style={styles.labelLayerPoints}>Polygon</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.bottonPoint]} 
                    onPress={() => {setType('marker')}}>
                    <Text style={styles.labelLayerPoints}>Marker</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.bottonPoint]} 
                    onPress={() => {setType('heatmap')}}>
                    <Text style={styles.labelLayerPoints}>Heatmap</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

/*
layers pontos, linhas, fill, geometrias
*/

export default Layers
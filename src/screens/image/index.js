import React, { useState } from 'react'
import {
    View,
    Text,
    StatusBar,
} from 'react-native'
import styles from './styles'
import MapView, {
    Overlay,
} from 'react-native-maps'
import japanTown from '../../static/images/japanTown.png'

function Image() {

    const [type, setType] = useState('')
    const OVERLAY_TOP_LEFT_COORDINATE1 = [35.671840, 139.765319];
    const OVERLAY_BOTTOM_RIGHT_COORDINATE1 = [35.679609, 139.768066];
    const IMAGE_URL1 = 'https://maps.gsi.go.jp/xyz/std/17/116423/51613.png';
    const LatLng = [
        OVERLAY_TOP_LEFT_COORDINATE1,
        OVERLAY_BOTTOM_RIGHT_COORDINATE1,
      ]

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={'#0ad'} />
            <MapView
                style={styles.mapView}
                region={{
                    latitude: OVERLAY_BOTTOM_RIGHT_COORDINATE1[0],
                    longitude: OVERLAY_BOTTOM_RIGHT_COORDINATE1[1],
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001
                }}
                mapType={'terrain'}
            >
            <Overlay 
                image={IMAGE_URL1} // or URL string
                bounds={LatLng}
            />
            </MapView>
            <View style={styles.containerInfo}>
                <Text style={styles.labelInfo}>
                    Image with google maps
                </Text>
            </View>
        </View>
    )
}

export default Image
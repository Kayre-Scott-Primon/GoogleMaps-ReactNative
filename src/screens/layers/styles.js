import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    mapView: {
        flex: 1
    },
    labelInfo: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold'
    },
    containerInfo: {
        position: 'absolute',
        alignSelf: 'center',
        marginVertical: 10
    },
    containerButtons: {
        position: 'absolute',
        bottom: 15,
        right: 15
    },
    bottonPoint: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        marginTop: 5,
        alignItems: 'center'

    },
    labelLayerPoints: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
    },
    marker: {
        backgroundColor: "#38f", 
        padding: 8,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#5f5'
    },
    labelMarker: {
        color: '#fff',
        fontWeight: '600'
    }
})
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    mapView: {
        height: '100%',
        width: '100%'
    },
    buttonsView: {
        position: 'absolute',
        bottom: 15,
        right: 15
    },
    buttonTypeMap: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        marginTop: 5,
        alignItems: 'center'

    },
    labelTextType: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
    },
    modalViewType: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000'
    },
    modalLabelType: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000'
    },
    buttonType: {
        backgroundColor: '#0ad',
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        padding: 5,
        marginTop: 10,
    },
    labelType: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
    },
    modalLoad: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    gifLoad: {
        width: '75%'
    }
})
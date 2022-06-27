import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    textInfo: {
        fontSize: 21,
        fontWeight: '600',
        color: '#000',
        margin: 20,
        textAlign: 'center',
        marginBottom: 30
    },
    buttonTrack: {
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 8,
        borderRadius: 5,
        backgroundColor: '#0ad',
        shadowOpacity: 0.5,
        shadowOffset:{ width: 20, height: 20},
        elevation: 10,
        shadowColor: '#000',
        height: 50
    },
    buttonTextTrack:{
        fontSize: 22,
        color: '#fff',
        fontWeight: '700'
    },
    containerButtons: {
        
    }
})
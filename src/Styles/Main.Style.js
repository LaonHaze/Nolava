import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    verticalContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    header: {
        flex: 2,
        alignItems: 'center'
    },
    mainContainer: {
        flex: 8,
        alignItems: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'  
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'blue'
    }
});
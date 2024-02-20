import {StyleSheet} from 'react-native';

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    contenedorBotones: {
        flex: 2,
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    textoCaja: {
        color: '#141718',
        fontSize: 60,
        textAlign: 'right',
    },
    textoBoton: {
        color: '#141718',
        fontSize: 34
    },
    botonNum: {
        width: 80, 
        height: 80, 
        borderRadius: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ffffff',
        margin: '1%',
        marginLeft: 5,
        marginBottom: 15,
    },
    boton: {
        width: 80, 
        height: 80, 
        borderRadius: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#adacac',
        borderWidth: 1,
        borderColor: '#adacac',
        margin: '1.3%',
        marginLeft: 5,
        marginBottom: 20,
    },
    estiloCaja:{
        height:200,
        margin:5,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#f7f7f7',
    }
});
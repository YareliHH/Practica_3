import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TextInput, View }from 'react-native';
import { Calculadora } from './Componentes/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
    <Calculadora/>
    <StatusBar style="auto" />
  </View>
  );
}

export const Login=()=>{
  return(
    <View>
      <Image 
        source={require('./assets/Imagen1.png')}
        style={styles.img} 
      />
      <Text style={styles.texto}>Email o nombre de usuario</Text>
      <TextInput  style={styles.input}></TextInput>
      <Text style={styles.texto}>Contraseña</Text>
      <TextInput  style={styles.input}
        secureTextEntry={true}
      ></TextInput>
      <Boton 
        texto={'Iniciar sesión'}
        colorTexto={'#1c1a1b'}
        colorFondo={'#ffff'}
        />
        <BotonSPass 
        texto={'Iniciar sesión sin contraseña'}
        colorTexto={'#ffff'}
        colorFondo={'#1c1a1b'}
        />
        
    </View>
  )
}
export const Boton=({texto,colorTexto,colorFondo})=>{
  return(
    <Pressable style={StyleSheet.compose(styles.botonL, { 
      backgroundColor:colorFondo,
      borderColor:colorTexto,
      })}>

      <Text style={StyleSheet.compose(styles.textoBL,{ color:colorTexto,})}>{texto}</Text>
    </Pressable>
  )
} 
export const BotonSPass=({texto,colorTexto,colorFondo})=>{
  return(
    <Pressable style={StyleSheet.compose(styles.botonSPass, { 
      backgroundColor:colorFondo,
      borderColor:colorTexto,
      })}>

      <Text style={StyleSheet.compose(styles.textoSPass,{color:colorTexto})}>{texto}</Text>
    </Pressable>
  )
} 



export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
      <Text style={styles.texto}>O</Text>
      <Text style={styles.texto}>PRACTICA  REACT-NATIVE</Text>
      <Text style={styles.texto}>O</Text>
    </View>
  )
}
export const Pie=()=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.textoPie}>Inicio</Text>
        <Text style={styles.textoPie}>Herramientas</Text>
        <Text style={styles.textoPie}>Ajustes</Text>~~
        <Text style={styles.textoPie}>Cuenta</Text>
    </View>  
  )
}
export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
    <Image source={{uri: 'https://img.freepik.com/vector-premium/perfil-empresario-dibujos-animados_18591-58479.jpg'}}
       style={styles.img} />
    <Text style={styles.textoBod}>Bienvenido al sistema</Text>
    <Text style={styles.textoBod}></Text>
    <Text style={styles.textoBod}>Yareli Hernández Hernández</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    paddingTop:30,
  },
  encabezado: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2196F3', 
    paddingHorizontal: 20, 
  },
  cuerpo: {
    flex: 12,
    backgroundColor: '#ffffff', 
  },
  pie: {
    flex: 1,
    backgroundColor: '#4CAF50', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  texto: {
    fontSize: 31,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft:10,
    alignSelf: 'flex-start', 
  },
  textoBod: {
    fontSize: 25,
    color: '#070707',
    alignSelf: 'center' 
  },
  textoPie: {
    fontSize: 20,
    color: '#ffffff',
    alignSelf: 'center',
  },
  img:{
    height:20,
    width:20,
    marginLeft:15,
    marginBottom:20,
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom:20,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor:"#585857",
    borderRadius: 5,
    fontSize:20,
  },
  botonL:{
    marginLeft:110,
    marginRight:110,
    padding:10,
    marginTop:30,
    borderRadius: 70,
    borderWidth: 1, 
  },
  textoBL:{
    alignSelf:'center',
    fontSize:20,
    marginLeft:0,
    fontWeight: 'bold',
  },
  botonSPass:{
    marginLeft:95,
    marginRight:95,
    padding:5,
    marginTop:30,
    borderRadius: 70,
    borderWidth: 1, 
  },
  textoSPass:{
    alignSelf:'center',
    fontSize:15,
    marginLeft:0,
    fontWeight: 'bold',
  },
});
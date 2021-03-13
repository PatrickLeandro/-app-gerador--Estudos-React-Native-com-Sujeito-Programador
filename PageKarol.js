import React, { useState } from 'react'
import { StyleSheet, Text,  TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const [contador, setContador] = useState(1);
  const [maisAmor, setMaisAmor] = useState(true);
  const [contadorImage, setContadorImage] = useState(1);
  const image = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg']

  const [showHome, setShowHome] = useState(false);

 

  const encremento = () =>{
    setContador(contador + 1);
    setMaisAmor(false);
    if (contador > 8 && contador < 23) {
      setContadorImage(contadorImage + 1)
    } else if (contador >= 1000) {
      setContador(0);
      setContadorImage(0)
    }
  }

  return (
    <LinearGradient colors={['#9966CC','#9400D3', '#4B0082']} style={styles.linearGradient}>
      
      <Image 
      style={styles.imagem}
      source={require('./src/assets/1.jpg')} />

      <Text style={styles.texto} >Patrick Leandro</Text>

      <TouchableOpacity 
        title="Incrementar"
        onPress={encremento}
        style={styles.button}
      >
        
        <Text style={styles.textoMais}> + </Text>

      </TouchableOpacity>

      <Text style={styles.texto}>Karoline Vitoria</Text>
      { maisAmor ? <Text style={styles.txt}></Text> : <Text style={styles.txt} >{contador} x mais amor</Text>}
      
    </LinearGradient>
  )
}

export default App

const styles = StyleSheet.create({
  linearGradient: {
    display: 'flex',
    paddingTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  texto: {
    fontSize: 70,
    color: 'white',
  },
  textoMais: {
    fontSize: 100,
    color: 'white',
  },
 
  txt: {
    fontSize: 60,
    color: 'white',
    marginTop: 70
  } , 
  imagem:{
    width: 350,
    height: 300,
    borderRadius: 20,
    marginBottom: 45,
    marginTop: 40, 
    resizeMode: 'cover',   

    },
})


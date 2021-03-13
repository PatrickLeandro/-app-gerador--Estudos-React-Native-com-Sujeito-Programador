import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PageKarol from './PageKarol.js';

import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'


export default function app() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(10)

  const [twoApp, setTwoApp] = useState(true);
  const [contador, setContador] = useState(0);


  const contagem = ()=> {
    setContador(contador + 1);
    if (contador >= 9) {
      setTwoApp(false);
    }
  }



  const generatePass = () => {

    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
      
    }
    setPassword(pass);
  }

  const copyPass = () => {
    alert("Senha copiada com sucesso")   
    Clipboard.setString(password) 
  }

  return(
    <View style={styles.container}>

      { twoApp ? 
        <View style={styles.containerT}>
                <TouchableOpacity onPress={contagem}>
                  <Image 
                    style={styles.logo}
                    source={require('./src/assets/logo.png')} 
                  />

                </TouchableOpacity>
              <Text style={styles.title}>{size} Caracteres</Text>

              <View style={styles.area}>
              <Slider 
                style={{height: 50}}
                minimumValue={5}
                maximumValue={15}
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000"
                value={size}
                onValueChange={(valor) => {setSize(valor.toFixed(0))}}
              />
              </View>

              <TouchableOpacity style={styles.button} onPress={generatePass}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
              </TouchableOpacity>

              {password !== '' && (
                  <View style={styles.area} >
                    <Text style={styles.password} onLongPress={copyPass} >
                      {password}
                    </Text>
          </View>
        )}
      </View>: 
      <PageKarol />}
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3ff',
    
  },
  containerT: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo:{
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 7,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  button:{
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25



  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  }
  
})
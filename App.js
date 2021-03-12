import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PageKarol from './PageKarol.js';


export default function app() {
  return(
    <View style={styles.container}>
      
      <PageKarol />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})
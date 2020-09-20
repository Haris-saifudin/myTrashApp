import React, { Component, useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
 } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
 import Icon from 'react-native-vector-icons/MaterialIcons';



 export const Splash = () =>{
   return(
     <View style={styles.container}>
       <View style={styles.body}>
        <Image source={{uri: ""}} style={styles.logo}/>
      </View>
     </View>
   )
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    borderRadius: 200,
    backgroundColor: "#EFEFEF",
    padding: 50,
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    width: 180, 
    height: 150,
  }
 })
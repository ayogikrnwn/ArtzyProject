import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MainLogo from '../../assets/MainLogo.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation})  => {

    const gettoken = async () => {
        const getStorage =  await AsyncStorage.getItem('@token')
         console.log('getstorsplash', getStorage);
         setTimeout(() => {
            if(getStorage) {
                navigation.navigate('Home')
            } else {
                navigation.navigate('Login')
            }
    
           
        }, 500);
     }
     
     useEffect(() => {
         gettoken()
     }, [])

   

  return (
    <View style={{flex: 1, backgroundColor: '#F3F3F3', justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
        <Image source={MainLogo} style={{width: 150, height: 150}} />
        </View>
 
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})
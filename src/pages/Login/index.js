/* eslint-disable prettier/prettier */
import {ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

import axios from "axios"
import { APIUrl } from '../../context/APIUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainLogo from '../../assets/MainLogo.png'

const Login = ({navigation}) => {
  const [inputan, setInput] = useState({
    email: "",
    password: "",
    
  })
  const [loading, setLoading]= useState(false)

  console.log('inputan', inputan);

  const handleLogin = async () => {
   const prefix = "TKN"
    const uniquenumber = Math.floor(Math.random() * 1000000);
   const token = prefix + uniquenumber

  if(inputan.email == "admin@gmail.com" && inputan.password == "admin") {
      navigation.navigate('Home')
      AsyncStorage.setItem('@token', token)
      console.log('token', token);
  } else {
      alert('Email dan Password Salah!')
  }
  }
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 110,
        }}>
        <>
         
        <Image source={MainLogo} style={{width: 100, height: 100}} />
        <Text style={{color: 'green', fontWeight: 'bold', fontSize: 16, marginBottom: 30, marginTop: 10,}}>Login Page</Text>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#F0F7FF',
              borderRadius: 12,
              marginBottom: 8,
              width: '70%'
            }}
            placeholderTextColor="grey" 
            placeholder="Email"
            onChangeText={(e) => setInput({ ...inputan, email: e })}  
          />
          <TextInput
           
            style={{
             backgroundColor: '#F0F7FF',
              borderRadius: 12,
              marginBottom: 8,
              width: '70%'
            }}
            placeholderTextColor="grey" 
            placeholder="Password"
            onChangeText={(e) => setInput({ ...inputan, password: e })}  
            secureTextEntry
          />
       
       {loading ? 
       <ActivityIndicator size="large" color="black" />
       :
<TouchableOpacity style={{backgroundColor: 'green', width: '70%', height: 40,  marginBottom: 14, borderRadius: 8, marginTop: 30}} 
             onPress={handleLogin}
              >
        <Text style={{textAlign: 'center', marginTop:3, fontSize: 14, fontFamily: 'Poppins-Light', paddingVertical: 5, color: 'white', fontWeight: 'bold'}} >Login</Text>
    </TouchableOpacity>
      }
         
   

   
     

        </>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});

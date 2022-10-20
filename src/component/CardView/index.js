import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DumShirt from '../../assets/dumshirt.jpg'

const CardView = ({title, desc, price, img, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor: 'white', width: 150, height: 200, marginTop: 10, shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,}}>
      <Image source={{uri: img}} style={{width: '100%', height: 130, borderTopRightRadius: 10, borderTopLeftRadius: 10}} />
       <View style={{padding: 10}}>
       <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{fontSize: 12, color: '#d1cfc8'}}>{desc}</Text>
            <Text style={{fontSize: 12, color: 'blue'}}>{price}</Text>

        </View>
       </View>
        
    </TouchableOpacity >
  )
}

export default CardView

const styles = StyleSheet.create({})
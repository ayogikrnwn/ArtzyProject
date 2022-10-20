import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderSecondary from '../../component/Header/HeaderSecondary'
import IMGBanner from '../../assets/banner.jpg'
import CardView from '../../component/CardView';
import axios from 'axios';

const Home = ({navigation}) => {

    const [allProducts, setAllProducts] = useState([])

    const gettoken = async () => {
       const getStorage =  await AsyncStorage.getItem('@token')
        console.log('getstor', getStorage);
    }
    
    
const getProducts = async () => {
    
    try {
        await axios.get('https://fakestoreapi.com/products', {

        }).then((res) => {
            console.log('response', res.data);
            const responseprod = res.data
            const filterCloth = responseprod.filter((e) => e.category == "men's clothing")
            setAllProducts(responseprod)
        })
    } catch (error) {
        console.log('err', error);
    }
    
}
  
const handleLogout = async () => {
    await AsyncStorage.clear()
    navigation.replace('Splash')
}
useEffect(() => {
    gettoken()
    getProducts()
}, [])


  return (
    <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
     <HeaderSecondary title="Products" onPress={handleLogout} />
     <ScrollView>
     <View>

<Image source={IMGBanner}  style={{width: '100%', height: 200}} />
<View style={{padding: 16}}>
   <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
    {allProducts.map((item,index) => {
        return (
            <CardView 
            onPress={() => navigation.push('DetailProd', {
                detail: item
            })}
            img={item.image}
            title={(item.title).slice(0,13) + "..."}
            desc={item.category}
            price={"$" + item.price}
            />
            
        )
    })}
           

   </View>
</View>
</View>
     </ScrollView>
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
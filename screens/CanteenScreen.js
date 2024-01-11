import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import DishRow from '../components/DishRow';
import { StatusBar } from 'expo-status-bar';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
export default function CanteenScreen() {
  const navigation = useNavigation()
  return (
    <View>
    {/* <CartIcon /> */}
    <StatusBar style='light' />
    <ScrollView>
      <View className="relative ">
        <Image 
        source={require('../assets/restaurant.jpg')}
        style={{height: heightPercentageToDP('30%'),width: widthPercentageToDP('100%')}}/>
        <TouchableOpacity
          className="absolute top-14 left-4 bg-gray-50 rounded-full shadow p-2"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft height="20" width="20" stroke="black" strokeWidth={3} />
        </TouchableOpacity>
        <View className="-mt-10 bg-white px-5 pt-5"
        // style={{borderTopLeftRadius:'50',borderTopRightRadius:'50'}}
        >
          <View className='flex-row justify-between items-center'>
          <Text className="font-bold text-3xl"> Christ Bakery</Text>
          <Icon.Heart height='20' width='20' stroke='black' strokeWidth={3} />
          </View>
          <Text className="px-1 text-sm" > jadhgguaygduygaud</Text>
        </View>
        <View className="py-10 px-5 bg-white">
          <Text className="font-bold text-3xl">Menu</Text>
          {/* {
            item.dishes.map((dish, index) => <DishRow item={{ ...dish }} key={index} />)
          } */}
          <DishRow/>
        </View>
      </View>
    </ScrollView>
          
  </View>
  )
}
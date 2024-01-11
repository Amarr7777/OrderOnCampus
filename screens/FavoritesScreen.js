import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import CanteenRow from '../components/CanteenRow';
export default function FavoritesScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
    <StatusBar style='Dark' />
    <ScrollView>
      <View className="relative ">  
        <View className="py-10 px-5 bg-white">
          <Text className="font-bold text-3xl">Favorites</Text>
          <CanteenRow/>
          <CanteenRow/>
          <CanteenRow/>
          <CanteenRow/>
          <CanteenRow/>
        </View>
      </View>
    </ScrollView>
          
  </SafeAreaView>
  )
}
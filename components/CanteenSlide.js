import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CanteenCard from './CanteenCard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Categories from './Categories';

export default function CanteenSlide() {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View>
      <Categories/>
      <View>

        <Text className="text-xl text-left font-bold text-black-700 pb-5 pt-10 ">
          Campus Canteens
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible "
        >
          <View className="flex-row items-center justify-center">
            <CanteenCard />
            <CanteenCard />
            <CanteenCard />
            <CanteenCard />
            <CanteenCard />
            <CanteenCard />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

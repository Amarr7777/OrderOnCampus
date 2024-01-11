import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import CanteenCard from './CanteenCard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function CanteenSlide() {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View>
      <View
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible gap-10 pt-10 items-center justify-evenly flex-row"
      >
        <Text>All</Text>
        <Text>Breakfast</Text>
        <Text>Lunch</Text>
        <Text>Snacks</Text>
      </View>
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


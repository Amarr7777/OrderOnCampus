import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CanteenCard from './CanteenCard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Categories from './Categories';
import { allCanteens } from '../constants';

export default function CanteenSlide({activeCategory}) {
  const windowHeight = Dimensions.get('window').height;
  const allCategory = allCanteens.restaurants.filter(canteen => canteen.categories && canteen.categories.includes('all'));
  const breakfast = allCanteens.restaurants.filter(canteen => canteen.categories && canteen.categories.includes('breakfast'));
  const lunch = allCanteens.restaurants.filter(canteen => canteen.categories && canteen.categories.includes('lunch'));
  const snacks = allCanteens.restaurants.filter(canteen => canteen.categories && canteen.categories.includes('snacks'));
  console.log(activeCategory)
  
   let renderedCategory ;
   let Category ;
    if(activeCategory === 1){
      Category= "Campus Canteens"
      renderedCategory = [allCategory].map((canteen,index)=> {
        return(
          <CanteenCard key={index} canteen = {canteen}/>
        )
      })
    }else if(activeCategory === 2){
      Category= "Breakfast"
      renderedCategory = [breakfast].map((canteen,index)=> {
        return(
          <CanteenCard key={index} canteen = {canteen}/>
        )
      })
    }else if(activeCategory === 3){
      Category= "Lunch"
      renderedCategory = [lunch].map((canteen,index)=> {
        return(
          <CanteenCard key={index} canteen = {canteen}/>
        )
      })
    }else if(activeCategory === 4){
      Category= "Snacks"
      renderedCategory = [snacks].map((canteen,index)=> {
        return(
          <CanteenCard key={index} canteen = {canteen}/>
        )
      })
    }else{
      renderedCategory = [allCategory].map((canteen,index)=> {
        return(
          <CanteenCard key={index} canteen = {canteen}/>
        )
      })
    }
    
  return (
    <View>
      <View>
        <Text className="text-xl text-left font-bold text-black-700 pb-5 pt-10 ">
          {Category}
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible "
        >
          <View className="flex-row items-center justify-center">
            {renderedCategory}          
          </View>
        </ScrollView>
      </View>
    </View>
  )
}


import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function CanteenCard() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
     onPress={()=>navigation.navigate("Canteen")}
     >
      <View className="items-center w-fit h-fit justify-center p-10 rounded-xl mx-5" style={styles.container}>
      <Image
        source={require('../assets/restaurant.jpg')}
        style={{ width : hp('30%') , height: hp('30%') }} 
        className = "rounded-3xl p-5 mb-2"/>
      <Text className="text-white">Christ Bakery</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A4834",
    shadowColor: 'rgba(42, 52, 72, 0.9)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 5,
  }
  
})
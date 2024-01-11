import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default function CartScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: 'rgba(42, 72, 52, 1)' }}>
            < StatusBar style='light' />
            <TouchableOpacity
                onPress={() => navigation.goBack()}

                className="absolute top-8 left-4 bg-gray-50 rounded-full shadow p-2 z-50"
            >
                <Icon.ArrowLeft height="20" width="20" stroke="#2A4834" strokeWidth={3} />
            </TouchableOpacity>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: 'rgba(42, 72, 52, 1)', height: hp('100%') }}
            >
                <Text className="text-center text-white text-xl font-extrabold pt-8">Your Cart</Text>
                <Text className="text-center text-white text-white-400 font-extrabold mb-3 ">Meals</Text>

            </ScrollView>
            <View className="absolute w-full bottom-0 bg-white p-6 pb-12 px-8 rounded-t-3xl space-y-4 "
              style={{width: wp('100%'),height: wp('70%')}}
            >
                <View className="flex-row items-center justify-between">
                    <Text className="text-green-950">Subtotal</Text>
                    <Text className="text-green-950 text-left">₹80</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="text-green-950 ">Processing Charge</Text>
                    <Text className="text-green-950  text-left">₹10</Text>
                </View>
                <View className="flex-row items-center justify-between ">
                    <Text className="text-green-950 font-extrabold">Order Total</Text>
                    <Text className="text-green-950 font-extrabold">₹90</Text>
                </View>
                <TouchableOpacity
                    //   onPress={() => navigation.navigate('orderPreparing')}
                    className="w-full  rounded-full p-5 bg-slate-300"
                //   style={{backgroundColor: 'rgba(242, 156, 79, 0.7)'}}
                >
                    <Text className="text-green-950 text-center font-extrabold text-lg">Place Order</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}
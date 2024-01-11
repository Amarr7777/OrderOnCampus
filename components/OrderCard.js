import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as Icon from "react-native-feather";

export default function OrderCard() {
    return (
        <View className="flex-col shadow bg-white rounded-lg "
            style={{ width: wp('90%'),marginVertical:wp("2%") }}
        >
            <View className="flex-col p-5">
                <View className="flex-row">
                    <Image
                        className="rounded-lg"
                        source={require('../assets/restaurant.jpg')}
                        style={{ width: hp('10%'), height: hp('10%') }}
                    />
                    <View className="flex-col">
                        <Text className="font-semi text-lg px-2 ">Taco Bell</Text>
                        <Text className="font-semi text-sm px-2 ">HSR layout</Text>
                    </View>

                </View>
            </View>
            <View className="bg-slate-200">
                <View className="flex-row p-2">
                    <Icon.Box stroke='black'/>
                    <Text className="font-semi text-sm px-2 ">2X Burger</Text>
                </View>
                <View className="flex-row p-2">
                    <Icon.Box stroke='black' />
                    <Text className="font-semi text-sm px-2 ">2X Burger</Text>
                </View>
                <View className="flex-row p-2">
                    <Icon.Box stroke='black' />
                    <Text className="font-semi text-sm px-2 ">2X Burger</Text>
                </View>
            </View>
            <View className = "p-5 flex-row space-x-2 items-end justify-end" >
            <TouchableOpacity className = "flex-row space-x-2 items-center p-2 rounded bg-green-900" >
                <Icon.RotateCcw stroke='white' width={wp('4%')}/>
                <Text className="text-white" >Reorder</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import CanteenSlide from '../components/CanteenSlide'
import * as Icon from "react-native-feather";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='dark' />
            <View className="flex-row justify-between pt-2">
                <Text className="text-lg"> Hi, Welcome</Text>
                <Icon.ShoppingCart onPress={()=>navigation.navigate('Cart')} height="20" width="20" stroke="black" className="px-5" />
            </View>
            <Text className="mt-5 font-bold text-left text-4xl"> Cut The Wait.</Text>
            <Text className="font-bold text-left text-4xl"> Enjoy your plate</Text>
            {/* search bar */}
            <View className=" mt-5 flex-row items-center space-x-1  pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray -300">
                    <Icon.Search height="20" width="20" stroke="gray" />
                    <TextInput placeholder='Canteen' className="flex-1 ml-2" />
                </View>

            </View>
            <CanteenSlide />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 5,
    },
});
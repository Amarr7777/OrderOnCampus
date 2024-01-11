import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/loginImg-2.png')}
            className="flex-1 justify-center items-center"
        >
            <TouchableOpacity className="flex-1 absolute rounded-full py-5 px-20 bg-green-900"
            style={{bottom:wp('20%'),width:wp("70%")}}
            onPress={() => navigation.navigate('Tab')}
            >
            
                <Text className="text-white text-center font-extrabold text-lg">Login</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
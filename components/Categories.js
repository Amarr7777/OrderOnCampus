import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(1);
    return (
        <View
            showsHorizontalScrollIndicator={false}
            className="overflow-visible gap-10 pt-10 items-center justify-evenly flex-row  "
        >
            {
                categories.map((categories, index) => {
                    let isActive = categories.id == activeCategory;
                    let btnClasss = isActive ? 'border-b-green-900 bg-green-900 p-1 rounded' : '' ;
                    let txtClasss = isActive ? 'text-white' : '' ;
                    return (
                        <View key={index}>
                            <TouchableOpacity className={btnClasss}
                                onPress={() => setActiveCategory(categories.id)}>
                                <Text className={txtClasss}>{categories.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}
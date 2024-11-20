import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function index() {
  return (
    <View className='flex justify-center items-center h-screen bg-amber-200'>
      <Text className='text-6xl font-bold text-blue-500 text-center animate-bounce'>HOME</Text>
      <Text className='text-2xl w-80 mx-auto mt-9 border-2 border-red-500 p-8 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt dolores, praesentium ipsa sed, quidem assumenda dolor expedita ab temporibus commodi explicabo accusamus, ut maxime eos ipsum reprehenderit facere? Ullam.</Text>
    </View>
  )
}

const styles = StyleSheet.create({})